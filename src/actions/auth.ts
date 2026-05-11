'use server'

import axios from 'axios'
import type { z } from 'zod'
import { envConfig } from '~/config/env.config'
import type {
  RegisterUserResult,
  ResendOtpResult,
  ResendOtpSuccess,
  ResetPasswordResult,
  VerifyOtpResult,
  VerifyOtpSuccess,
} from '~/lib/auth-action-results'
import { messageFromApiPayload } from '~/lib/auth-api-helpers'
import { countryAlpha2ToOfficialName } from '~/lib/country-select-options'
import { RegisterSchema } from '~/schemas'
import { inDevEnvironment } from '~/utils'

function messageFromAxiosData(data: unknown, fallback: string): string {
  return messageFromApiPayload(data, fallback)
}

/** Axios errors with no `response` are usually network/DNS/timeout or bad BASE_URL. */
function messageFromAxiosNetworkOrUnknown(
  error: unknown,
  fallback: string
): string {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return messageFromAxiosData(error.response.data, fallback)
    }
    if (error.code === 'ECONNREFUSED') {
      return 'Cannot reach the API server. Is it running and is BASE_URL correct?'
    }
    if (error.code === 'ENOTFOUND' || error.code === 'EAI_AGAIN') {
      return 'API host not found. Check BASE_URL in your environment.'
    }
    if (error.code === 'ECONNABORTED') {
      return 'The request timed out. Try again.'
    }
    if (error.message?.trim()) {
      return error.message
    }
  }
  if (error instanceof Error && error.message.trim()) {
    return error.message
  }
  return 'An unexpected error occurred.'
}

function logAuthApiErrorDev(
  action: string,
  error: unknown,
  context: { url: string; safeMeta?: Record<string, unknown> }
) {
  if (!inDevEnvironment) {
    return
  }
  if (axios.isAxiosError(error)) {
    console.error(`[auth ${action}]`, {
      url: context.url,
      status: error.response?.status,
      responseData: error.response?.data,
      axiosCode: error.code,
      axiosMessage: error.message,
      ...context.safeMeta,
    })
  } else {
    console.error(`[auth ${action}] non-axios error`, error)
  }
}

const registerUser = async (
  values: z.infer<typeof RegisterSchema>
): Promise<RegisterUserResult> => {
  const validatedFields = RegisterSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      ok: false,
      error: 'registration  Failed. Please check your inputs.',
    }
  }
  const baseURL = envConfig.BASEURL?.trim()
  if (!baseURL) {
    return {
      ok: false,
      error:
        'API URL is not configured. Set BASE_URL (e.g. http://host:port/api/v1) in .env.',
    }
  }
  const { first_name, last_name, email, country, password } =
    validatedFields.data
  const full_name = [first_name, last_name].filter(Boolean).join(' ').trim()
  const countryForApi = countryAlpha2ToOfficialName(country) ?? country
  const payload = {
    email,
    full_name,
    country: countryForApi,
    password,
  }
  try {
    const response = await axios.post(`${baseURL}/auth/register`, payload)

    return {
      ok: true,
      status: response.status,
      data: response.data,
    }
  } catch (error) {
    logAuthApiErrorDev('registerUser', error, {
      url: `${baseURL}/auth/register`,
      safeMeta: {
        payload: {
          email: payload.email,
          full_name: payload.full_name,
          country: payload.country,
        },
      },
    })
    return {
      ok: false,
      error: messageFromAxiosNetworkOrUnknown(error, 'Registration failed.'),
      ...(axios.isAxiosError(error) && error.response
        ? { status: error.response.status }
        : {}),
    }
  }
}

const resendOtp = async (email: string): Promise<ResendOtpResult> => {
  const baseURL = envConfig.BASEURL?.trim()
  if (!baseURL) {
    return { error: 'API URL is not configured (BASE_URL).' }
  }
  try {
    const response = await axios.post(`${baseURL}/auth/resend-otp`, {
      email,
    })

    const success: ResendOtpSuccess = {
      status: response.status,
      message: response.data?.message,
    }
    return success
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: messageFromAxiosData(
            error.response.data,
            'Resend OTP failed.'
          ),
          status: error.response.status,
        }
      : {
          error: messageFromAxiosNetworkOrUnknown(error, 'Resend OTP failed.'),
        }
  }
}

const verifyOtp = async (
  email: string,
  otp: string
): Promise<VerifyOtpResult> => {
  const baseURL = envConfig.BASEURL?.trim()
  if (!baseURL) {
    return { error: 'API URL is not configured (BASE_URL).' }
  }
  try {
    const response = await axios.post(`${baseURL}/auth/verify-otp`, {
      email,
      otp,
    })
    const success: VerifyOtpSuccess = {
      status: response.status,
      message: response.data?.message,
    }
    return success
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: messageFromAxiosData(
            error.response.data,
            'Invalid or expired verification code.'
          ),
          status: error.response.status,
        }
      : {
          error: messageFromAxiosNetworkOrUnknown(
            error,
            'Invalid or expired verification code.'
          ),
        }
  }
}

const resetPasswordWithToken = async (input: {
  token: string
  password: string
}): Promise<ResetPasswordResult> => {
  if (typeof input.token !== 'string' || typeof input.password !== 'string') {
    return { ok: false, error: 'Invalid request payload.' }
  }

  const trimmed = input.token.trim()
  if (!trimmed) {
    return { ok: false, error: 'Reset link is invalid or expired.' }
  }
  if (input.password.trim().length === 0) {
    return { ok: false, error: 'Password is required.' }
  }

  const baseURL = envConfig.BASEURL?.trim()
  if (!baseURL) {
    return { ok: false, error: 'API URL is not configured (BASE_URL).' }
  }
  try {
    await axios.post(
      `${baseURL}/auth/password/reset`,
      {
        token: trimmed,
        password: input.password,
      },
      { timeout: 30_000 }
    )
    return { ok: true }
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      return {
        ok: false,
        error:
          'The password reset service did not respond in time. Please try again.',
      }
    }
    return axios.isAxiosError(error) && error.response
      ? {
          ok: false,
          error: messageFromAxiosData(
            error.response.data,
            'Could not reset password. Please try again.'
          ),
        }
      : { ok: false, error: 'An unexpected error occurred.' }
  }
}

export { registerUser, resendOtp, resetPasswordWithToken, verifyOtp }

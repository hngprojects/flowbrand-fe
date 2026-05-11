'use server'

import axios from 'axios'
import * as z from 'zod'
import { envConfig } from '~/config/env.config'
import type {
  RegisterUserResult,
  ResendOtpResult,
  ResendOtpSuccess,
  ResetPasswordResult,
  VerifyOtpResult,
  VerifyOtpSuccess,
} from '~/lib/auth-action-results'
import { messageFromApiOrRateLimit } from '~/lib/auth-api-helpers'
import { countryAlpha2ToOfficialName } from '~/lib/country-select-options'
import { RegisterSchema } from '~/schemas'

function messageFromAxiosNetworkOrUnknown(
  error: unknown,
  fallback: string
): string {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return messageFromApiOrRateLimit(
        error.response.status,
        error.response.data,
        fallback
      )
    }
    const code = error.code
    if (code === 'ECONNREFUSED') {
      return 'Cannot reach the API server (connection refused). Check BASE_URL and that the API is running.'
    }
    if (code === 'ENOTFOUND') {
      return 'API host not found. Check BASE_URL.'
    }
    if (code === 'ECONNABORTED') {
      return 'Request timed out. Try again.'
    }
    if (typeof error.message === 'string' && error.message.trim()) {
      return error.message.trim()
    }
  }
  return fallback
}

function messageFromAxiosData(
  status: number,
  data: unknown,
  fallback: string
): string {
  return messageFromApiOrRateLimit(status, data, fallback)
}

/** Log API errors in development environment. */
function logAuthApiErrorDev(
  action: string,
  error: unknown,
  meta: Record<string, unknown>
) {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  console.error(`[auth ${action}]`, meta)
}

const registerUser = async (
  values: z.infer<typeof RegisterSchema>
): Promise<RegisterUserResult> => {
  const baseURL = envConfig.BASEURL?.trim()
  if (!baseURL) {
    return { ok: false, error: 'API URL is not configured (BASE_URL).' }
  }

  const validatedFields = RegisterSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      ok: false,
      error: 'registration  Failed. Please check your inputs.',
    }
  }

  const { email, password, first_name, last_name, country } =
    validatedFields.data
  const full_name = [first_name, last_name].filter(Boolean).join(' ').trim()
  const countryForApi = countryAlpha2ToOfficialName(country) ?? country
  const payload = {
    email,
    full_name,
    country: countryForApi,
    password,
    terms_accepted: true,
  }

  try {
    const response = await axios.post(`${baseURL}/auth/register`, payload)
    return {
      ok: true,
      status: response.status,
      data: response.data,
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      logAuthApiErrorDev('registerUser', error, {
        url: `${baseURL}/auth/register`,
        status: error.response.status,
        responseData: error.response.data,
        axiosCode: error.code,
        axiosMessage: error.message,
        payload: {
          email: payload.email,
          full_name: payload.full_name,
          country: payload.country,
        },
      })
      return {
        ok: false,
        error: messageFromApiOrRateLimit(
          error.response.status,
          error.response.data,
          'Registration failed.'
        ),
        status: error.response.status,
      }
    }

    logAuthApiErrorDev('registerUser', error, {
      url: `${baseURL}/auth/register`,
      axiosCode: axios.isAxiosError(error) ? error.code : undefined,
      payload: {
        email: payload.email,
        full_name: payload.full_name,
        country: payload.country,
      },
    })

    return {
      ok: false,
      error: messageFromAxiosNetworkOrUnknown(
        error,
        'An unexpected error occurred.'
      ),
    }
  }
}

const sendOtp = async (email: string): Promise<ResendOtpResult> => {
  const baseURL = envConfig.BASEURL?.trim()
  if (!baseURL) {
    return { error: 'API URL is not configured (BASE_URL).' }
  }
  try {
    const response = await axios.post(`${baseURL}/auth/send-otp`, {
      email: email.trim(),
    })

    const success: ResendOtpSuccess = {
      status: response.status,
      message: response.data?.message,
    }
    return success
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      logAuthApiErrorDev('sendOtp', error, {
        url: `${baseURL}/auth/send-otp`,
        status: error.response.status,
        responseData: error.response.data,
        email,
      })
      return {
        error: messageFromApiOrRateLimit(
          error.response.status,
          error.response.data,
          'Could not send verification code.'
        ),
        status: error.response.status,
      }
    }

    logAuthApiErrorDev('sendOtp', error, {
      url: `${baseURL}/auth/send-otp`,
      axiosCode: axios.isAxiosError(error) ? error.code : undefined,
      email,
    })

    return {
      error: messageFromAxiosNetworkOrUnknown(
        error,
        'An unexpected error occurred.'
      ),
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
          error: messageFromApiOrRateLimit(
            error.response.status,
            error.response.data,
            'Resend OTP failed.'
          ),
          status: error.response.status,
        }
      : {
          error: messageFromAxiosNetworkOrUnknown(
            error,
            'An unexpected error occurred.'
          ),
        }
  }
}

const verifyOtp = async (
  email: string,
  code: string
): Promise<VerifyOtpResult> => {
  const baseURL = envConfig.BASEURL?.trim()
  if (!baseURL) {
    return { error: 'API URL is not configured (BASE_URL).' }
  }
  try {
    const response = await axios.post(`${baseURL}/auth/verify-otp`, {
      email,
      otp: code,
    })
    const success: VerifyOtpSuccess = {
      status: response.status,
      message: response.data?.message,
    }
    return success
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: messageFromApiOrRateLimit(
            error.response.status,
            error.response.data,
            'Invalid or expired verification code.'
          ),
          status: error.response.status,
        }
      : {
          error: messageFromAxiosNetworkOrUnknown(
            error,
            'An unexpected error occurred.'
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
            error.response.status,
            error.response.data,
            'Could not reset password. Please try again.'
          ),
        }
      : { ok: false, error: 'An unexpected error occurred.' }
  }
}

export { registerUser, resendOtp, resetPasswordWithToken, sendOtp, verifyOtp }

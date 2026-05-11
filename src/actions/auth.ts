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
import { LoginSchema, RegisterSchema } from '~/schemas'
import type { AuthResponse, ErrorResponse, User } from '~/types'
import { withAuth } from './fetchutil'

export interface LoginResponse {
  user: User
  access_token: string
}

type ChangePasswordInput = {
  oldPassword: string
  newPassword: string
  accessToken?: string
}

function messageFromAxiosData(data: unknown, fallback: string): string {
  if (
    data &&
    typeof data === 'object' &&
    'message' in data &&
    typeof (data as { message: unknown }).message === 'string'
  ) {
    const text = (data as { message: string }).message.trim()
    if (text.length > 0) {
      return text
    }
  }
  return fallback
}

function buildAuthUrl(baseURL: string, endpoint: string) {
  return `${baseURL.replace(/\/$/, '')}${endpoint}`
}

const credentialsAuth = async (
  values: z.infer<typeof LoginSchema>
): Promise<AuthResponse | ErrorResponse> => {
  const baseURL = envConfig.BASEURL
  if (!baseURL) {
    return {
      message: 'Authentication service is not configured.',
      status_code: 500,
      status: 'error',
    }
  }
  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      message: 'Something went wrong',
      status_code: 401,
      status: 'error',
    }
  }
  const { email, password } = validatedFields.data
  const payload = { email, password }
  try {
    const response = await axios.post(
      buildAuthUrl(baseURL, '/api/v1/auth/login'),
      payload
    )
    return {
      data: response.data.user,
      access_token: response.data.access_token,
      status: 'success',
      message: 'login success',
    }
  } catch (error) {
    return {
      message:
        axios.isAxiosError(error) && error.response
          ? messageFromAxiosData(error.response.data, 'Something went wrong')
          : 'Something went wrong',
      status: 'error',
      status_code:
        axios.isAxiosError(error) && error.response
          ? error.response.status
          : undefined,
    }
  }
}

const registerUser = async (
  values: z.infer<typeof RegisterSchema>
): Promise<RegisterUserResult> => {
  const validatedFields = RegisterSchema.safeParse(values)
  const baseURL = envConfig.BASEURL
  if (!baseURL) {
    return {
      ok: false,
      error: 'Registration service is not configured.',
    }
  }
  if (!validatedFields.success) {
    return {
      ok: false,
      error: 'registration  Failed. Please check your inputs.',
    }
  }
  try {
    const response = await axios.post(
      buildAuthUrl(baseURL, '/api/v1/auth/register'),
      validatedFields.data
    )

    return {
      ok: true,
      status: response.status,
      data: response.data,
    }
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          ok: false,
          error: messageFromAxiosData(
            error.response.data,
            'Registration failed.'
          ),
          status: error.response.status,
        }
      : {
          ok: false,
          error: 'An unexpected error occurred.',
        }
  }
}

async function postOtpRequest(
  endpoint: '/api/v1/auth/send-otp' | '/api/v1/auth/resend-otp',
  email: string,
  fallbackError: string
): Promise<ResendOtpResult> {
  const baseURL = envConfig.BASEURL
  if (!baseURL) {
    return {
      error: 'OTP service is not configured.',
    }
  }

  try {
    const response = await axios.post(buildAuthUrl(baseURL, endpoint), {
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
          error: messageFromAxiosData(error.response.data, fallbackError),
          status: error.response.status,
        }
      : {
          error: 'An unexpected error occurred.',
        }
  }
}

const sendOtp = async (email: string): Promise<ResendOtpResult> => {
  return postOtpRequest('/api/v1/auth/send-otp', email, 'OTP request failed.')
}

const resendOtp = async (email: string): Promise<ResendOtpResult> => {
  return postOtpRequest('/api/v1/auth/resend-otp', email, 'Resend OTP failed.')
}

const verifyOtp = async (
  email: string,
  otp: string
): Promise<VerifyOtpResult> => {
  const baseURL = envConfig.BASEURL
  if (!baseURL) {
    return {
      error: 'OTP service is not configured.',
    }
  }

  try {
    const response = await axios.post(
      buildAuthUrl(baseURL, '/api/v1/auth/verify-otp'),
      {
        email,
        otp,
      }
    )
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
          error: 'An unexpected error occurred.',
        }
  }
}

const changePassword = async (
  input: ChangePasswordInput
): Promise<ResetPasswordResult> => {
  const baseURL = envConfig.BASEURL
  if (!baseURL) {
    return {
      ok: false,
      error: 'Password service is not configured.',
    }
  }

  if (!input.accessToken?.trim()) {
    return {
      ok: false,
      error: 'You need to sign in again before changing your password.',
    }
  }

  try {
    await axios.post(
      buildAuthUrl(baseURL, '/api/v1/auth/change-password'),
      {
        oldPassword: input.oldPassword,
        newPassword: input.newPassword,
      },
      {
        headers: withAuth(input.accessToken),
        timeout: 30_000,
      }
    )

    return { ok: true }
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      return {
        ok: false,
        error:
          'The password update service did not respond in time. Please try again.',
      }
    }

    if (axios.isAxiosError(error) && error.response) {
      const status = error.response.status
      const fallback =
        status === 401
          ? 'Missing or invalid bearer token. Please sign in again.'
          : status === 400
            ? 'Old password is incorrect.'
            : 'Could not update password. Please try again.'

      return {
        ok: false,
        error: messageFromAxiosData(error.response.data, fallback),
      }
    }

    return {
      ok: false,
      error: 'An unexpected error occurred.',
    }
  }
}

/** @deprecated Use changePassword instead. */
const resetPasswordWithToken = changePassword

export {
  changePassword,
  credentialsAuth,
  registerUser,
  resendOtp,
  resetPasswordWithToken,
  sendOtp,
  verifyOtp,
}

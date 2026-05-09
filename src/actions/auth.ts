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
import { AuthResponse, ErrorResponse } from '~/types'

const credentialsAuth = async (
  values: z.infer<typeof LoginSchema>
): Promise<AuthResponse | ErrorResponse> => {
  const baseURL = envConfig.BASEURL
  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      message: 'Something went wrong',
      status_code: 401,
      success: false,
    }
  }
  const { email, password } = validatedFields.data
  const payload = { email, password }
  try {
    const response = await axios.post(`${baseURL}/auth/login`, payload)
    return {
      data: response.data.user,
      access_token: response.data.access_token,
      success: true,
      message: 'login success',
    }
  } catch (error) {
    return {
      success: false,
      message:
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data.message
          ? error.response.data.message
          : 'Something went wrong',
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
  if (!validatedFields.success) {
    return {
      ok: false,
      error: 'registration  Failed. Please check your inputs.',
    }
  }
  try {
    const response = await axios.post(
      `${baseURL}/auth/register`,
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
          error: error.response.data.message || 'Registration failed.',
          status: error.response.status,
        }
      : {
          ok: false,
          error: 'An unexpected error occurred.',
        }
  }
}

const resendOtp = async (email: string): Promise<ResendOtpResult> => {
  const baseURL = envConfig.BASEURL
  try {
    const response = await axios.post(`${baseURL}/auth/request/token`, {
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
          error: error.response.data?.message || 'Resend OTP failed.',
          status: error.response.status,
        }
      : {
          error: 'An unexpected error occurred.',
        }
  }
}

const verifyOtp = async (
  email: string,
  code: string
): Promise<VerifyOtpResult> => {
  const baseURL = envConfig.BASEURL
  try {
    const response = await axios.post(`${baseURL}/auth/verify/otp`, {
      email,
      code,
    })
    const success: VerifyOtpSuccess = {
      status: response.status,
      message: response.data?.message,
    }
    return success
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error:
            error.response.data?.message ||
            'Invalid or expired verification code.',
          status: error.response.status,
        }
      : {
          error: 'An unexpected error occurred.',
        }
  }
}

/**
 * Completes password reset. Backend route (placeholder): POST {BASE_URL}/auth/password/reset
 * Body: { token, password }.
 */
const resetPasswordWithToken = async (input: {
  token: string
  password: string
}): Promise<ResetPasswordResult> => {
  const trimmed = input.token.trim()
  if (!trimmed) {
    return { ok: false, error: 'Reset link is invalid or expired.' }
  }
  const baseURL = envConfig.BASEURL
  try {
    await axios.post(`${baseURL}/auth/password/reset`, {
      token: trimmed,
      password: input.password,
    })
    return { ok: true }
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          ok: false,
          error:
            error.response.data?.message ||
            'Could not reset password. Please try again.',
        }
      : { ok: false, error: 'An unexpected error occurred.' }
  }
}

export {
  credentialsAuth,
  registerUser,
  resendOtp,
  resetPasswordWithToken,
  verifyOtp,
}

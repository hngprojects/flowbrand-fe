'use server'

import * as z from 'zod'
import { cookies } from 'next/headers'
import { envConfig } from '~/config/env.config'
import {
  coerceUserWithNameParts,
  messageFromApiOrRateLimit,
  normalizeLoginResponse,
} from '~/lib/auth-api-helpers'
import { LoginSchema } from '~/schemas'
import type { AuthResponse, ErrorResponse, User } from '~/types'
import { HttpError, createFetchUtil } from './fetchutil'

const GENERIC_LOGIN_ERROR_MESSAGE = 'Unable to sign in. Please try again.'

export const nextLogin = async (
  values: z.infer<typeof LoginSchema>
): Promise<AuthResponse | ErrorResponse> => {
  const baseURL = envConfig.BASEURL?.trim()

  if (!baseURL) {
    return {
      status_code: 500,
      message: GENERIC_LOGIN_ERROR_MESSAGE,
      success: false,
    }
  }

  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      message: 'Invalid credentials',
      status_code: 400,
      success: false,
    }
  }

  const { email, password } = validatedFields.data
  const api = createFetchUtil({ baseUrl: baseURL })

  try {
    const response = await api<unknown>('/auth/login', {
      method: 'POST',
      body: { email, password },
    })

    const normalized = normalizeLoginResponse(response)
    if (!normalized) {
      return {
        success: false,
        message: GENERIC_LOGIN_ERROR_MESSAGE,
        status_code: 422,
      }
    }

    const user = coerceUserWithNameParts(normalized.user)

    return {
      data: user,
      access_token: normalized.access_token,
      success: true,
      message: 'login success',
    }
  } catch (error) {
    if (error instanceof HttpError) {
      const fallback =
        error.statusCode >= 500
          ? GENERIC_LOGIN_ERROR_MESSAGE
          : 'Invalid email or password.'
      return {
        success: false,
        message: messageFromApiOrRateLimit(
          error.statusCode,
          error.responseBody,
          fallback
        ),
        status_code: error.statusCode,
      }
    }

    return {
      success: false,
      message: GENERIC_LOGIN_ERROR_MESSAGE,
      status_code: 500,
    }
  }
}

export const googleAuth = async (idToken: string) => {
  const res = await fetch(`${envConfig.APP_URL}/api/social/google`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id_token: idToken }),
  })

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`)
  }

  const data: { data: User; access_token: string } = await res.json()
  console.log(data, 'action')

  return {
    data: data.data,
    access_token: data.access_token,
    success: true,
  }
}

export const setBackend = async (backend?: string) => {
  const cookieStore = await cookies()
  if (backend) {
    cookieStore.set('backend', backend)
  }

  return {
    sucess: true,
  }
}

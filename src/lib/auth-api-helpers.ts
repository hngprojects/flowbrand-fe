import type { User } from '~/types'

/** Parse `message` from typical Nest validation / error bodies. */
export function messageFromApiPayload(data: unknown, fallback: string): string {
  if (!data || typeof data !== 'object') {
    return fallback
  }
  const record = data as Record<string, unknown>

  const message = record.message
  if (typeof message === 'string' && message.trim()) {
    return message.trim()
  }
  if (Array.isArray(message) && message.length > 0) {
    const parts = message
      .map((item) => (typeof item === 'string' ? item.trim() : ''))
      .filter(Boolean)
    if (parts.length > 0) {
      return parts.join('. ')
    }
  }

  const error = record.error
  if (typeof error === 'string' && error.trim()) {
    return error.trim()
  }

  return fallback
}

/** Shown when API returns 429 and the body has no usable message. */
export const AUTH_RATE_LIMIT_MESSAGE =
  'Too many attempts. Please wait a few minutes and try again.'

/** Prefer API `message` / `error`, with clear copy for HTTP 429 (rate limited). */
export function messageFromApiOrRateLimit(
  status: number,
  data: unknown,
  fallback: string
): string {
  if (status === 429) {
    const fromApi = messageFromApiPayload(data, '')
    return fromApi.trim().length > 0 ? fromApi : AUTH_RATE_LIMIT_MESSAGE
  }
  return messageFromApiPayload(data, fallback)
}

export type NormalizedLogin = { user: User; access_token: string }

/** Supports nested `data`, flat user + token, and `accessToken` alias. */
export function normalizeLoginResponse(raw: unknown): NormalizedLogin | null {
  if (!raw || typeof raw !== 'object') {
    return null
  }
  const root = raw as Record<string, unknown>

  let envelope: Record<string, unknown> = root
  if ('data' in root && root.data !== null && typeof root.data === 'object') {
    envelope = { ...(root.data as Record<string, unknown>) }
    const lifted =
      typeof root.access_token === 'string'
        ? root.access_token
        : typeof root.accessToken === 'string'
          ? root.accessToken
          : undefined
    if (lifted && envelope.access_token === undefined) {
      Object.assign(envelope, { access_token: lifted })
    }
  }

  let userUnknown: unknown = envelope.user
  let tokenUnknown: unknown = envelope.access_token ?? envelope.accessToken

  if (
    userUnknown === undefined &&
    typeof envelope.email === 'string' &&
    tokenUnknown !== undefined
  ) {
    const {
      access_token: _at,
      accessToken: _at2,
      ...rest
    } = envelope as Record<string, unknown>
    userUnknown = rest
    tokenUnknown = typeof _at === 'string' ? _at : _at2
  }

  if (
    !userUnknown ||
    typeof userUnknown !== 'object' ||
    typeof tokenUnknown !== 'string' ||
    !tokenUnknown
  ) {
    return null
  }

  return { user: userUnknown as User, access_token: tokenUnknown }
}

/** Maps `full_name` / `fullname` into `first_name` / `last_name` when missing. */
export function coerceUserWithNameParts(user: User): User {
  const hasFirst = Boolean(
    user.first_name !== undefined &&
    user.first_name !== null &&
    String(user.first_name).trim() !== ''
  )
  const hasLast = Boolean(
    user.last_name !== undefined &&
    user.last_name !== null &&
    String(user.last_name).trim() !== ''
  )
  if (hasFirst && hasLast) {
    return user
  }

  const record = user as User & { full_name?: string }
  const fullSource = record.full_name ?? user.fullname ?? ''
  const full = String(fullSource).trim()
  if (!full) {
    return user
  }

  const parts = full.split(/\s+/).filter(Boolean)
  if (parts.length === 0) {
    return user
  }
  if (parts.length === 1) {
    return { ...user, first_name: parts[0], last_name: user.last_name ?? '' }
  }
  return {
    ...user,
    first_name: parts[0],
    last_name: parts.slice(1).join(' '),
  }
}

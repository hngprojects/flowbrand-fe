import type { User } from '~/types'

export function messageFromApiPayload(data: unknown, fallback: string): string {
  if (!data || typeof data !== 'object') {
    return fallback
  }
  const m = (data as { message?: unknown }).message
  if (typeof m === 'string' && m.trim()) {
    return m.trim()
  }
  if (Array.isArray(m) && m.length > 0) {
    const parts = m.filter((x): x is string => typeof x === 'string')
    const text = parts.join(' ').trim()
    if (text.length > 0) {
      return text
    }
  }
  return fallback
}

export function normalizeLoginResponse(
  raw: unknown
): { user: User; access_token: string } | null {
  if (!raw || typeof raw !== 'object') {
    return null
  }
  const r = raw as Record<string, unknown>
  const tokenFrom = (o: Record<string, unknown>): string | null => {
    const t = o.access_token ?? o.accessToken
    return typeof t === 'string' && t.length > 0 ? t : null
  }

  const data = r.data
  if (data && typeof data === 'object') {
    const d = data as Record<string, unknown>
    const nestedUser = d.user
    const tok = tokenFrom(d)
    if (nestedUser && typeof nestedUser === 'object' && tok) {
      return { user: nestedUser as User, access_token: tok }
    }
    if (tok && typeof d.email === 'string') {
      const userFlat: Record<string, unknown> = { ...d }
      delete userFlat.access_token
      delete userFlat.accessToken
      return { user: userFlat as User, access_token: tok }
    }
  }

  const user = r.user
  const flatTok = tokenFrom(r)
  if (user && typeof user === 'object' && flatTok) {
    return { user: user as User, access_token: flatTok }
  }

  return null
}

export function coerceUserWithNameParts(user: User): User {
  if (user.first_name || user.last_name) {
    return user
  }
  const rawFull = user.fullname ?? (user as { full_name?: unknown }).full_name
  if (typeof rawFull !== 'string' || !rawFull.trim()) {
    return user
  }
  const parts = rawFull.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) {
    return user
  }
  return {
    ...user,
    first_name: parts[0],
    last_name: parts.slice(1).join(' '),
  }
}

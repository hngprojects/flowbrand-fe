/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ['/']

export const authRoutes = [
  '/register',
  '/login',
  '/forgot-password',
  '/reset-password',
  '/verify-otp',
]

export const superAdminRoutes = ['dashboard/admin/']

export const apiAuthPrefix = '/api/auth'

/**
 * The default redirect after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/dashboard'

/**
 * An array of routes that are accessible to the client
 * These routes require authentication
 * @type {string[]}
 */
export const clientRoutes: string[] = [
  '/dashboard',
  '/hisory',
  '/messages',
  '/notifications',
  '/profile',
]

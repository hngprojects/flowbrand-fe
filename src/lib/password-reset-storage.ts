/** sessionStorage keys for the forgot-password recovery flow. */
export const PASSWORD_RESET_EMAIL_STORAGE_KEY = 'flowbrand_password_reset_email'

/** Email that successfully passed OTP verification in the reset flow. */
export const PASSWORD_RESET_VERIFIED_EMAIL_STORAGE_KEY =
  'flowbrand_password_reset_verified_email'

export function clearPasswordResetFlowStorage() {
  if (typeof window === 'undefined') {
    return
  }

  try {
    sessionStorage.removeItem(PASSWORD_RESET_EMAIL_STORAGE_KEY)
    sessionStorage.removeItem(PASSWORD_RESET_VERIFIED_EMAIL_STORAGE_KEY)
  } catch {
    // Ignore storage failures; the flow can still proceed without persistence.
  }
}

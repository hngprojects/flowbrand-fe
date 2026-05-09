export type ResendOtpSuccess = { status: number; message?: string }

export type ResendOtpFailure = { error: string; status?: number }

export type ResendOtpResult = ResendOtpSuccess | ResendOtpFailure

export function isResendOtpSuccess(
  result: ResendOtpResult
): result is ResendOtpSuccess {
  return !('error' in result)
}

export type VerifyOtpSuccess = { status: number; message?: string }

export type VerifyOtpFailure = { error: string; status?: number }

export type VerifyOtpResult = VerifyOtpSuccess | VerifyOtpFailure

export function isVerifyOtpSuccess(
  result: VerifyOtpResult
): result is VerifyOtpSuccess {
  return !('error' in result)
}

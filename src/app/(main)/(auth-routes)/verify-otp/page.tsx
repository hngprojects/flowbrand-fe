import dynamic from 'next/dynamic'
import { useRouter } from 'next-nprogress-bar'
import { useEffect, useState } from 'react'

import VerifyResetOtp from '~/components/auth/reset-password/VerifyResetOtp'
import { PASSWORD_RESET_EMAIL_STORAGE_KEY } from '~/lib/password-reset-storage'

const VerifyOtpPageContent = () => {
  const router = useRouter()
  const [email] = useState(() => {
    try {
      if (typeof window === 'undefined') {
        return ''
      }

      return (
        sessionStorage.getItem(PASSWORD_RESET_EMAIL_STORAGE_KEY)?.trim() ?? ''
      )
    } catch {
      return ''
    }
  })

  useEffect(() => {
    if (!email) {
      router.replace('/forgot-password')
    }
  }, [email, router])

  if (!email) {
    return null
  }

  return <VerifyResetOtp email={email} />
}

const VerifyOtpPage = dynamic(
  () => Promise.resolve({ default: VerifyOtpPageContent }),
  { ssr: false }
)

export default VerifyOtpPage

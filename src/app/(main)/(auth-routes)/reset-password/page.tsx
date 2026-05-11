'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next-nprogress-bar'
import { useEffect, useState } from 'react'

import CreateNewPassword from '~/components/auth/reset-password/CreateNewPassword'
import { PASSWORD_RESET_VERIFIED_EMAIL_STORAGE_KEY } from '~/lib/password-reset-storage'

const ResetPasswordPageContent = () => {
  const router = useRouter()
  const [email] = useState(() => {
    try {
      if (typeof window === 'undefined') {
        return ''
      }

      return (
        sessionStorage
          .getItem(PASSWORD_RESET_VERIFIED_EMAIL_STORAGE_KEY)
          ?.trim() ?? ''
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

  return <CreateNewPassword />
}

const ResetPasswordPage = dynamic(
  () => Promise.resolve({ default: ResetPasswordPageContent }),
  { ssr: false }
)

export default ResetPasswordPage

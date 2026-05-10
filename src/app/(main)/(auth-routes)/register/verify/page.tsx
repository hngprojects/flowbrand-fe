'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next-nprogress-bar'
import { useEffect, useState } from 'react'

import OTPVerification from '~/components/auth/register/OTPVerification'
import { REGISTER_VERIFY_EMAIL_STORAGE_KEY } from '~/lib/register-verify-storage'

const RegisterVerifyPageContent = () => {
  const router = useRouter()
  const [email] = useState(() => {
    try {
      if (typeof window === 'undefined') {
        return ''
      }
      return (
        sessionStorage.getItem(REGISTER_VERIFY_EMAIL_STORAGE_KEY)?.trim() ?? ''
      )
    } catch {
      return ''
    }
  })

  useEffect(() => {
    if (!email) {
      router.replace('/register')
    }
  }, [email, router])

  if (!email) {
    return null
  }

  return <OTPVerification email={email} />
}

const RegisterVerifyPage = dynamic(
  () => Promise.resolve({ default: RegisterVerifyPageContent }),
  { ssr: false }
)

export default RegisterVerifyPage

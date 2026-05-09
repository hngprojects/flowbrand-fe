'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next-nprogress-bar'
import { useEffect, useState } from 'react'

import OTPVerification from '~/components/auth/register/OTPVerification'
import { REGISTER_VERIFY_EMAIL_STORAGE_KEY } from '~/lib/register-verify-storage'

function RegisterVerifyPageContent() {
  const router = useRouter()
  const [email] = useState(
    () =>
      sessionStorage.getItem(REGISTER_VERIFY_EMAIL_STORAGE_KEY)?.trim() ?? ''
  )

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

export default dynamic(
  () => Promise.resolve({ default: RegisterVerifyPageContent }),
  { ssr: false }
)

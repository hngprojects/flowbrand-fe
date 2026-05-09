'use client'

import { useSearchParams } from 'next/navigation'

import OTPVerification from '~/components/auth/register/OTPVerification'

export default function RegisterVerifyPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') ?? ''

  return <OTPVerification email={email} />
}

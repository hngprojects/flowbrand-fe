import { Suspense } from 'react'

import RegisterPage from '~/components/auth/register/page'

export default function AuthRoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RegisterPage>
      <Suspense>{children}</Suspense>
    </RegisterPage>
  )
}

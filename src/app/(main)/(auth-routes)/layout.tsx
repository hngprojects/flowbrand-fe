import type { ReactNode } from 'react'
import { Suspense } from 'react'

import RegisterPage from '~/components/auth/register/page'

const AuthRoutesLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <RegisterPage>
      <Suspense>{children}</Suspense>
    </RegisterPage>
  )
}

export default AuthRoutesLayout

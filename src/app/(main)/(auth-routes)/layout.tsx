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
      <Suspense
        fallback={
          <div className="text-foreground/60 flex min-h-[240px] items-center justify-center text-sm">
            Loading…
          </div>
        }
      >
        {children}
      </Suspense>
    </RegisterPage>
  )
}

export default AuthRoutesLayout

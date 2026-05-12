import type { ReactNode } from 'react'
import { Suspense } from 'react'

import AuthSplitLayout from '~/components/auth/auth-split-layout'

const AuthRoutesLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <AuthSplitLayout>
      <Suspense
        fallback={
          <div className="text-foreground/60 flex min-h-[240px] items-center justify-center text-sm">
            Loading…
          </div>
        }
      >
        {children}
      </Suspense>
    </AuthSplitLayout>
  )
}

export default AuthRoutesLayout

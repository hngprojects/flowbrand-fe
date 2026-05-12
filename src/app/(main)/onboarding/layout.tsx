import type { ReactNode } from 'react'
import OnboardingNavbar from '~/components/onboarding/OnboardingNavbar'

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F7]">
      <OnboardingNavbar />
      <main className="flex-1">{children}</main>
    </div>
  )
}

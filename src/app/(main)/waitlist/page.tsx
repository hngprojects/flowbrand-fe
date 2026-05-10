'use client'

import WaitlistView from '~/views/WaitlistView'

const LandingPage = () => {
  return (
    <main className="flex min-h-screen lg:items-center lg:justify-center lg:p-4 dark:bg-black">
      <div className="w-full max-w-6xl">
        <WaitlistView />
      </div>
    </main>
  )
}

export default LandingPage

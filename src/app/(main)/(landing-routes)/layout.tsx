'use client'

import Navbar from '~/components/navigation/navbar/index'
import Footer from '~/components/navigation/footer'
import { useState } from 'react'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className="flex-1">{children}</div>
      <Footer />
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 right-0 left-0 z-40 h-screen w-screen bg-black/50 p-4 shadow-lg lg:hidden"
        ></div>
      )}
    </div>
  )
}

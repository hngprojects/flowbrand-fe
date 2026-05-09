'use client'

import Link from 'next/link'
import Image from 'next/image'
import logoBlue from '~public/images/logo-blue.png'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const WaitlistNavbar = () => {
  return (
    <nav className="border-border sticky top-0 z-50 pr-4 pl-4 lg:pr-18 lg:pl-18">
      <div className="mx-auto flex h-20 max-w-7xl items-center">
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <Image
              src={logoBlue}
              alt="FlowBrand logo"
              width={188}
              height={51}
              className="w-30 cursor-pointer"
            />
          </Link>

          <div className="flex items-center justify-between gap-4">
            <Link
              href="#"
              //   href="/community"
              className="bg-primary-foreground flex items-center justify-center gap-2 rounded-4xl px-6 py-3 font-semibold transition-opacity hover:opacity-90"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default WaitlistNavbar

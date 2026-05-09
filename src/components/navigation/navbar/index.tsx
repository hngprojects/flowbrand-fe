'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'How it works', path: '/how-it-works' },
  { label: 'About Us', path: '/about' },
  { label: 'Pricing', path: '/pricing' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-background border-border sticky top-0 z-50 border-b">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img
              src="/images/logo-blue.png"
              alt="FlowBrand logo"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="text-foreground hidden items-center gap-10 font-medium md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.path}
                  className={`hover:text-primary transition-colors ${
                    pathname === link.path ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/login"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/get-started"
              className="bg-primary text-primary-foreground rounded-lg px-5 py-2.5 font-semibold transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="z-50 md:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={23} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`bg-background absolute top-full left-0 flex w-full flex-col gap-4 overflow-hidden text-sm font-semibold transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? 'max-h-96 py-6 opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.path}
            className={`text-foreground hover:text-primary px-5 py-2 ${
              pathname === link.path ? 'text-primary' : ''
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <div className="flex flex-col gap-3 px-5 pt-2">
          <Link
            href="/login"
            className="border-primary text-primary rounded-lg border py-2.5 text-center font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Log In
          </Link>
          <Link
            href="/get-started"
            className="bg-primary text-primary-foreground rounded-lg py-2.5 text-center font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

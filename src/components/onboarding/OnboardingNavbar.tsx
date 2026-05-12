import { Bell } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function OnboardingNavbar() {
  return (
    <header className="border-border w-full border-b bg-white">
      <nav className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-5 md:px-10 xl:px-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo-blue.png"
            alt="FlowBrand"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Right — bell + profile */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Notifications"
            className="hover:text-foreground text-gray-500 transition-colors"
          >
            <Bell size={20} strokeWidth={1.8} />
          </button>

          <button
            className="text-foreground hover:text-primary flex items-center gap-2 text-[14px] font-medium transition-colors"
            aria-label="Profile"
          >
            {/* Avatar circle */}
            <span className="border-border flex h-[30px] w-[30px] items-center justify-center rounded-full border text-gray-500">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="8"
                  cy="5.5"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M2 14C2 11.2 4.7 9 8 9C11.3 9 14 11.2 14 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {/* Desktop only label */}
            <span className="hidden md:inline">Profile</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

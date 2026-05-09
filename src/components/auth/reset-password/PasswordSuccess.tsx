'use client'

import { CheckCircledIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { Button } from '~/components/ui/button'

const PasswordSuccess = () => {
  return (
    <div className="flex flex-col items-center space-y-6 py-8 text-center sm:space-y-8 sm:py-10">
      <div className="bg-primary/10 border-border flex h-12 w-12 items-center justify-center rounded-full border sm:h-14 sm:w-14">
        <CheckCircledIcon
          className="text-primary size-6 sm:size-7"
          aria-hidden
        />
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <h2 className="text-xl font-medium text-[#152D58] sm:text-3xl">
          Password reset successful
        </h2>
        <p className="text-foreground/70 mx-auto max-w-md text-sm leading-relaxed sm:text-[15px]">
          Your password has been updated. You can now log in with your new
          password.
        </p>
      </div>

      <Button
        asChild
        className="h-auto w-full rounded-lg py-2.5 text-sm font-bold sm:py-3 sm:text-base"
      >
        <Link href="/login">Continue to log in</Link>
      </Button>
    </div>
  )
}

export default PasswordSuccess

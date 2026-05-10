'use client'

import { useState } from 'react'
import Image from 'next/image'
import windowPopImg from '~public/images/waitlis-widows-pop.png'
import waitlistUsers from '~public/images/waitlist-users.png'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import WaitlistModal from '~/components/modals/waitlist'

export default function WaitlistBody() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleJoin = async () => {
    const isValid = /^\S+@\S+\.\S+$/.test(email)
    setError(!isValid)
    if (!isValid) return

    try {
      setIsModalOpen(true)
      setEmail('')
    } catch {
      setError(true)
    }
  }

  return (
    <div className="items-between flex flex-col-reverse lg:flex-row">
      <div className="flex max-w-[540px] flex-col pl-4">
        <div className="bg-primary-foreground flex w-fit items-center gap-2 rounded-xl px-3 py-1 lg:mb-8">
          <div className="bg-primary h-4 w-4 rounded-full"></div>
          <p className="text-primary text-sm font-medium">AVAILABLE SOON</p>
        </div>

        <h2 className="mb-2 w-80 text-4xl font-[500] lg:w-60 lg:text-xl lg:leading-6">
          Turn More Leads Into Paying{' '}
          <span className="text-primary">Customers</span>
        </h2>

        <p className="mb-6">
          FlowBrand helps small and growing businesses attract leads, convert
          customers, and drive repeat sales through guided, step-by-step
          marketing strategy you can execute yourself.
        </p>

        <div className="mb-5 flex flex-col gap-1.5 pr-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
            <Input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) setError(false)
              }}
              className={`border-2 bg-transparent transition-colors outline-none placeholder:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0 ${
                error
                  ? 'border-error text-error placeholder:text-error'
                  : 'border-foreground/30 text-foreground placeholder:text-foreground/60'
              }`}
            />
            <Button className="pt-5 pb-5" onClick={handleJoin}>
              Join Waitlist
            </Button>
          </div>
          {error && (
            <p className="text-error text-sm font-medium">
              Enter a valid email address
            </p>
          )}
        </div>

        <div className="flex flex-col items-center gap-2 lg:flex-row">
          <Image src={waitlistUsers} alt="waitlist users" />
          <p className="text-sm">20+ businesses already waiting</p>
        </div>
      </div>

      <div>
        <Image
          className="self-start"
          src={windowPopImg}
          alt="screen window laptop and popups"
        />
      </div>
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next-nprogress-bar'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState, useTransition } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { resendOtp } from '~/actions/auth'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { OtpFormSchema } from '~/schemas'
import { cn } from '~/utils'

const OTP_FIELDS = ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'] as const

function formatTimer(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function OTPVerification({
  email,
}: Readonly<{
  email: string
}>) {
  const router = useRouter()
  const [secondsLeft, setSecondsLeft] = useState(30)
  const [isPending, startTransition] = useTransition()
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const form = useForm<z.infer<typeof OtpFormSchema>>({
    resolver: zodResolver(OtpFormSchema),
    defaultValues: {
      d0: '',
      d1: '',
      d2: '',
      d3: '',
      d4: '',
      d5: '',
    },
    mode: 'onChange',
  })

  useEffect(() => {
    if (secondsLeft <= 0) return
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearInterval(id)
  }, [secondsLeft])

  const otpValues = useWatch({ control: form.control })
  const isOtpComplete = OtpFormSchema.safeParse(otpValues).success

  const focusDigit = useCallback((index: number) => {
    inputRefs.current[index]?.focus()
  }, [])

  const onConfirm = () => {
    form.handleSubmit(() => {
      startTransition(() => {
        toast.success('Verification complete')
        router.push('/login')
      })
    })()
  }

  const handleResend = async () => {
    if (!email) {
      toast.error('Missing email', {
        description: 'Go back to registration and try again.',
      })
      return
    }
    const result = await resendOtp(email)
    const status =
      'status' in result && typeof result.status === 'number'
        ? result.status
        : undefined
    if (status !== undefined && status >= 200 && status < 300) {
      toast.success('Code sent', {
        description: 'message' in result ? result.message : undefined,
      })
      setSecondsLeft(30)
    } else {
      toast.error('Could not resend', {
        description:
          'error' in result ? result.error : 'Please try again later.',
      })
    }
  }

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="bg-primary/10 text-primary inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium sm:px-3 sm:py-1 sm:text-xs">
        OTP has been sent
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <h2 className="text-foreground text-xl font-bold sm:text-2xl">
          Verify your email
        </h2>
        <p className="text-foreground/70 text-sm sm:text-[15px]">
          We sent a 6-digit code to{' '}
          <span className="border-border text-foreground border-b font-semibold">
            {email || 'your email'}
          </span>
        </p>
      </div>

      <Form {...form}>
        <div className="grid w-full grid-cols-6 gap-2 sm:gap-3">
          {OTP_FIELDS.map((name, i) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem className="w-full min-w-0 space-y-0">
                  <FormControl>
                    <Input
                      {...field}
                      ref={(el) => {
                        field.ref(el)
                        inputRefs.current[i] = el
                      }}
                      type="text"
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      maxLength={1}
                      disabled={isPending}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, '').slice(-1)
                        field.onChange(v)
                        if (v && i < 5) focusDigit(i + 1)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !field.value && i > 0) {
                          focusDigit(i - 1)
                        }
                      }}
                      onPaste={(e) => {
                        e.preventDefault()
                        const paste = e.clipboardData
                          .getData('text')
                          .replace(/\D/g, '')
                          .slice(0, 6)
                        if (!paste) return
                        const next = { ...form.getValues() }
                        paste.split('').forEach((ch, j) => {
                          if (i + j < 6) {
                            next[OTP_FIELDS[i + j]] = ch
                          }
                        })
                        form.reset(next)
                        focusDigit(Math.min(i + paste.length, 5))
                      }}
                      className="h-14 w-full min-w-0 rounded-md p-0 text-center text-lg font-bold sm:h-[66px] sm:rounded-lg sm:text-xl"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </div>
      </Form>

      <div className="text-foreground/60 text-right font-mono text-xs">
        {formatTimer(Math.max(0, secondsLeft))}
      </div>

      <div className="space-y-3 sm:space-y-4">
        <p className="text-foreground/70 text-center text-xs sm:text-sm">
          Didn&apos;t get a code?{' '}
          <Button
            type="button"
            variant="link"
            disabled={secondsLeft > 0}
            onClick={handleResend}
            className="text-primary hover:text-primary/90 h-auto p-0 font-bold disabled:opacity-40"
          >
            Resend
          </Button>
        </p>

        <Button
          type="button"
          disabled={!isOtpComplete || isPending}
          variant={isOtpComplete ? 'default' : 'outline'}
          onClick={onConfirm}
          className={cn(
            'h-auto w-full rounded-lg py-2.5 text-sm font-bold sm:py-3 sm:text-base',
            !isOtpComplete &&
              'border-border bg-border/50 text-foreground/45 hover:border-border hover:!bg-border/55 hover:!text-foreground/45'
          )}
        >
          Confirm
        </Button>

        <Link
          href="/login"
          className="text-foreground/70 flex w-full items-center justify-center gap-2 text-xs sm:text-sm"
        >
          <ArrowLeft size={16} />
          Back to Log In
        </Link>
      </div>
    </div>
  )
}

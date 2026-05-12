'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next-nprogress-bar'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { resendOtp, verifyOtp } from '~/actions/auth'
import {
  isResendOtpSuccess,
  isVerifyOtpSuccess,
} from '~/lib/auth-action-results'
import { PASSWORD_RESET_VERIFIED_EMAIL_STORAGE_KEY } from '~/lib/password-reset-storage'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { OtpFormSchema } from '~/schemas'
import { cn } from '~/utils'

const OTP_FIELDS = ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'] as const

const formatTimer = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remaining = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(remaining).padStart(
    2,
    '0'
  )}`
}

const otpInputClass = (isComplete: boolean) =>
  cn(
    'focus-visible:border-primary h-[54px] rounded-[4px] border-[#CFCFCF] bg-[#FCFCFC] p-0 text-center text-[24px] font-semibold tracking-[0.2em] text-[#030D1F] shadow-none focus-visible:ring-0 lg:h-[66px]',
    isComplete && 'border-[#A8A8A8]'
  )

const VerifyResetOtp = ({ email }: { email: string }) => {
  const router = useRouter()
  const [secondsLeft, setSecondsLeft] = useState(30)
  const [isVerifying, setIsVerifying] = useState(false)
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
    if (secondsLeft <= 0) {
      return
    }

    const id = setInterval(() => setSecondsLeft((value) => value - 1), 1000)
    return () => clearInterval(id)
  }, [secondsLeft])

  const otpValues = useWatch({ control: form.control })
  const isOtpComplete = OtpFormSchema.safeParse(otpValues).success

  const focusDigit = useCallback((index: number) => {
    inputRefs.current[index]?.focus()
  }, [])

  const handleConfirm = () => {
    void form.handleSubmit(async (data) => {
      const otp = OTP_FIELDS.map((field) => data[field]).join('')
      setIsVerifying(true)

      try {
        const result = await verifyOtp(email, otp)

        if (!isVerifyOtpSuccess(result)) {
          toast.error('Verification failed', {
            description: result.error,
          })
          return
        }

        if (result.status >= 200 && result.status < 300) {
          sessionStorage.setItem(
            PASSWORD_RESET_VERIFIED_EMAIL_STORAGE_KEY,
            email
          )
          router.push('/reset-password')
        }
      } catch {
        toast.error('Verification failed', {
          description: 'Network error. Please try again.',
        })
      } finally {
        setIsVerifying(false)
      }
    })()
  }

  const handleResend = async () => {
    if (!email) {
      toast.error('Missing email', {
        description: 'Please go back and enter your email again.',
      })
      return
    }

    try {
      const result = await resendOtp(email)

      if (
        isResendOtpSuccess(result) &&
        result.status >= 200 &&
        result.status < 300
      ) {
        setSecondsLeft(30)
        return
      }

      toast.error('Could not resend', {
        description: isResendOtpSuccess(result)
          ? 'Please try again later.'
          : result.error,
      })
    } catch {
      toast.error('Could not resend', {
        description: 'Network error. Please try again later.',
      })
    }
  }

  return (
    <div className="absolute inset-x-0 top-[89px] lg:top-1/2 lg:-translate-y-1/2">
      <div className="mx-auto flex w-full max-w-[344px] flex-col gap-8 lg:max-w-[511px]">
        <div className="inline-flex w-fit items-center justify-center rounded-full bg-[#EBF0FA] px-6 py-[10px] text-[12px] leading-[18px] font-normal text-[#152D58]">
          OTP has been sent
        </div>

        <div className="space-y-2.5">
          <h2 className="text-[40px] leading-[40px] font-medium text-[#152D58]">
            Verify your email
          </h2>
          <p className="text-[24px] leading-9 font-light text-[#565D69]">
            We sent a 6-digit code to{' '}
            <span className="border-b border-[#565D69] text-[#565D69]">
              {email || 'you@gmail.com'}
            </span>
          </p>
        </div>

        <Form {...form}>
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="grid w-full grid-cols-6 gap-2 lg:gap-3">
                {OTP_FIELDS.map((name, index) => (
                  <FormField
                    key={name}
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                      <FormItem className="space-y-0">
                        <FormControl>
                          <Input
                            {...field}
                            ref={(element) => {
                              field.ref(element)
                              inputRefs.current[index] = element
                            }}
                            type="password"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            maxLength={1}
                            disabled={isVerifying}
                            onChange={(event) => {
                              const value = event.target.value
                                .replace(/\D/g, '')
                                .slice(-1)
                              field.onChange(value)

                              if (value && index < OTP_FIELDS.length - 1) {
                                focusDigit(index + 1)
                              }
                            }}
                            onKeyDown={(event) => {
                              if (
                                event.key === 'Backspace' &&
                                !field.value &&
                                index > 0
                              ) {
                                focusDigit(index - 1)
                              }
                            }}
                            onPaste={(event) => {
                              event.preventDefault()
                              const pasted = event.clipboardData
                                .getData('text')
                                .replace(/\D/g, '')
                                .slice(0, OTP_FIELDS.length)

                              if (!pasted) {
                                return
                              }

                              const nextValues = { ...form.getValues() }
                              pasted.split('').forEach((digit, offset) => {
                                if (index + offset < OTP_FIELDS.length) {
                                  nextValues[OTP_FIELDS[index + offset]] = digit
                                }
                              })

                              form.reset(nextValues)
                              focusDigit(
                                Math.min(
                                  index + pasted.length,
                                  OTP_FIELDS.length - 1
                                )
                              )
                            }}
                            className={otpInputClass(!!field.value)}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <div className="text-right text-[16px] leading-6 font-medium text-[#565D69]">
                {formatTimer(Math.max(0, secondsLeft))}
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-center text-[16px] leading-6 font-medium text-[#565D69]">
                Didn&apos;t get a code?{' '}
                <Button
                  type="button"
                  variant="link"
                  disabled={secondsLeft > 0 || isVerifying}
                  onClick={handleResend}
                  className="text-primary hover:text-primary/90 h-auto p-0 font-bold disabled:opacity-40"
                >
                  Resend
                </Button>
              </p>

              <Button
                type="button"
                disabled={!isOtpComplete || isVerifying}
                onClick={handleConfirm}
                className={cn(
                  'h-[45px] w-full rounded-[8px] text-[16px] font-normal lg:h-12 lg:rounded-[10px]',
                  isOtpComplete && !isVerifying
                    ? '!bg-primary hover:!bg-primary/90 !text-white'
                    : '!bg-[#E4E4E4] !text-[#7D7D7D] hover:!bg-[#E4E4E4] hover:!text-[#7D7D7D] disabled:opacity-100'
                )}
              >
                Confirm
              </Button>

              <Link
                href="/login"
                className="flex items-center justify-center gap-2 text-[16px] leading-6 font-semibold text-[#565D69]"
              >
                <ArrowLeft className="size-5 shrink-0" strokeWidth={1.8} />
                <span className="lg:hidden">Back to log in</span>
                <span className="hidden lg:inline">Back to Log In</span>
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default VerifyResetOtp

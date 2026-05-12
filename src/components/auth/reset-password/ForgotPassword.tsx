'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next-nprogress-bar'
import Link from 'next/link'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { sendOtp } from '~/actions/auth'
import { isResendOtpSuccess } from '~/lib/auth-action-results'
import {
  clearPasswordResetFlowStorage,
  PASSWORD_RESET_EMAIL_STORAGE_KEY,
  PASSWORD_RESET_VERIFIED_EMAIL_STORAGE_KEY,
} from '~/lib/password-reset-storage'
import { Button } from '~/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { cn } from '~/utils'

const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Enter a valid email address' }),
})

type ForgotPasswordValues = z.infer<typeof ForgotPasswordSchema>

const inputClass = (hasError: boolean) =>
  cn(
    'h-11 rounded-[8px] px-4 text-[16px] leading-6 text-[#030D1F] placeholder:text-[#A2A2A2] focus-visible:ring-0',
    hasError
      ? 'border-[#D13232] focus-visible:border-[#D13232]'
      : 'border-[#326AD1] focus-visible:border-[#326AD1]'
  )

const ForgotPassword = () => {
  const router = useRouter()

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(ForgotPasswordSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      email: 'you@gmail.com',
    },
  })

  const { isSubmitting } = form.formState

  useEffect(() => {
    clearPasswordResetFlowStorage()
  }, [])

  const onSubmit = async (values: ForgotPasswordValues) => {
    const email = values.email.trim()

    try {
      const result = await sendOtp(email)

      if (isResendOtpSuccess(result)) {
        if (result.status >= 200 && result.status < 300) {
          sessionStorage.setItem(PASSWORD_RESET_EMAIL_STORAGE_KEY, email)
          sessionStorage.removeItem(PASSWORD_RESET_VERIFIED_EMAIL_STORAGE_KEY)
          router.push('/verify-otp')
          return
        }
      }

      const message = isResendOtpSuccess(result)
        ? 'Enter an existing email address'
        : result.error

      form.setError('email', {
        type: 'server',
        message,
      })
    } catch {
      form.setError('email', {
        type: 'server',
        message: 'Enter an existing email address',
      })
    }
  }

  return (
    <div className="absolute inset-x-0 top-[89px] lg:top-1/2 lg:-translate-y-1/2">
      <div className="space-y-10">
        <div className="space-y-2.5">
          <h2 className="text-[20px] leading-[26px] font-medium text-[#152D58] lg:text-[40px] lg:leading-[40px]">
            Forgot your password
          </h2>
          <p className="max-w-[336px] text-[24px] leading-9 font-light text-[#565D69] lg:max-w-[427px]">
            Enter your email and we&apos;ll send you a secure reset link.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-[16px] leading-6 font-medium text-[#152D58]">
                    Email address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@gmail.com"
                      disabled={isSubmitting}
                      autoComplete="email"
                      aria-invalid={!!form.formState.errors.email}
                      className={inputClass(!!form.formState.errors.email)}
                      {...field}
                      onChange={(event) => {
                        field.onChange(event)
                        form.clearErrors('email')
                      }}
                    />
                  </FormControl>
                  <FormMessage className="mt-3 text-[14px] leading-5 font-normal text-[#D13232]" />
                </FormItem>
              )}
            />

            <div className="space-y-5">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-[45px] w-full rounded-[8px] text-[16px] font-normal text-[#FCFDFF] lg:h-12 lg:rounded-[10px]"
              >
                Send reset link
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
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ForgotPassword

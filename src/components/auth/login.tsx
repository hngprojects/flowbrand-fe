'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next-nprogress-bar'
import {
  type ChangeEventHandler,
  type ReactNode,
  useEffect,
  useState,
  useTransition,
} from 'react'
import { useForm, type UseFormRegisterReturn } from 'react-hook-form'
import * as z from 'zod'
import { LoginSchema } from '~/schemas'
import { cn } from '~/utils'

type LoginValues = z.infer<typeof LoginSchema>

const PASSWORD_ERROR_MESSAGE = "The password you've entered is incorrect"
const LOGIN_ERROR_MESSAGE = 'Unable to sign in. Please try again.'

function isCredentialsSigninError(
  response: { error?: string; code?: string } | undefined
) {
  return (
    response?.error === 'CredentialsSignin' || response?.code === 'credentials'
  )
}

function BrandLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-blue.png"
      alt="FlowBrand"
      width={116}
      height={25}
      priority
      className={cn('h-[24.83px] w-[115.63px] object-contain', className)}
    />
  )
}

function FeatureBullet({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full items-center gap-4 px-[10px] py-[10px]">
      <CheckCircle2
        className="size-5 shrink-0 text-[#326AD1]"
        strokeWidth={2}
      />
      <p className="flex-1 text-[20px] font-normal leading-[130%] text-[#030D1F]">
        {children}
      </p>
    </div>
  )
}

function AuthField({
  id,
  label,
  placeholder,
  type,
  error,
  showToggle,
  showPassword,
  onTogglePassword,
  register,
  onChange,
}: {
  id: string
  label: string
  placeholder: string
  type: 'email' | 'password' | 'text'
  error?: string
  showToggle?: boolean
  showPassword?: boolean
  onTogglePassword?: () => void
  register: UseFormRegisterReturn
  onChange?: ChangeEventHandler<HTMLInputElement>
}) {
  const resolvedType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-[14px] font-medium leading-[150%] text-[#152D58] xl:text-[16px]"
      >
        {label}
      </label>

      <div
        className={cn(
          'flex h-[44px] items-center rounded-[8px] border border-[#CFCFCF] bg-white transition-colors focus-within:border-[#326AD1]',
          error && 'border-[#D13232] focus-within:border-[#D13232]',
          'px-[10px] xl:px-[16px]'
        )}
      >
        <input
          id={id}
          type={resolvedType}
          autoComplete={type === 'email' ? 'email' : 'current-password'}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="h-full w-full min-w-0 border-0 bg-transparent p-0 text-[14px] leading-[150%] text-[#030D1F] outline-none placeholder:text-[#A2A2A2] focus:placeholder-transparent"
          {...register}
          onChange={(event) => {
            register.onChange(event)
            onChange?.(event)
          }}
        />

        {showToggle ? (
          <button
            type="button"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onClick={onTogglePassword}
            className="ml-2 flex size-6 shrink-0 items-center justify-center text-[#CFCFCF]"
          >
            {showPassword ? (
              <Eye className="size-6" strokeWidth={1.8} />
            ) : (
              <EyeOff className="size-6" strokeWidth={1.8} />
            )}
          </button>
        ) : null}
      </div>

      {error ? (
        <p
          id={`${id}-error`}
          className="text-[14px] font-normal leading-[20px] text-[#D13232] xl:text-[12px] xl:font-medium xl:leading-[18px]"
        >
          {error}
        </p>
      ) : null}
    </div>
  )
}

function SocialDivider() {
  return (
    <div className="flex items-center gap-5">
      <span className="h-px flex-1 bg-[#CFCFCF]" />
      <span className="text-[14px] font-normal leading-[21px] text-[#565D69]">
        OR
      </span>
      <span className="h-px flex-1 bg-[#CFCFCF]" />
    </div>
  )
}

export default function Login() {
  const router = useRouter()
  const { status } = useSession()
  const [showPassword, setShowPassword] = useState(false)
  const [isPending, startTransition] = useTransition()

  const form = useForm<LoginValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  })

  const isBusy = isPending || form.formState.isSubmitting || status === 'authenticated'

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [router, status])

  const onSubmit = async (values: LoginValues) => {
    form.clearErrors('password')
    form.clearErrors('root')

    try {
      const response = await signIn('credentials', {
        email: values.email,
        password: values.password,
        rememberMe: false,
        redirect: false,
      })

      if (!response?.ok) {
        if (!isCredentialsSigninError(response)) {
          form.setError('root', {
            type: 'server',
            message: LOGIN_ERROR_MESSAGE,
          })
          return
        }

        form.setError('password', {
          type: 'server',
          message: PASSWORD_ERROR_MESSAGE,
        })
        return
      }

      startTransition(() => {
        router.push('/')
      })
    } catch (error) {
      console.error('Login failed', error)
      form.setError('root', {
        type: 'server',
        message: LOGIN_ERROR_MESSAGE,
      })
    }
  }

  const emailRegistration = form.register('email')
  const passwordRegistration = form.register('password')
  const emailError = form.formState.errors.email?.message
  const passwordError = form.formState.errors.password?.message
  const rootError = form.formState.errors.root?.message

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="relative min-h-screen w-full xl:grid xl:grid-cols-[708px_minmax(0,1fr)]">
        <section className="relative hidden min-h-screen bg-[#EBF0FA] xl:block">
          <div className="absolute left-[87px] top-[87px]">
            <BrandLogo />
          </div>

          <div className="absolute left-[87px] top-1/2 flex w-[557px] -translate-y-1/2 flex-col gap-4">
            <h1 className="max-w-[557px] text-[48px] font-semibold leading-[110%] text-[#152D58]">
              Marketing strategies, made human.
            </h1>

            <p className="max-w-[557px] text-[16px] font-medium leading-[150%] text-[#565D69]">
              A solution designed to accelerate your business growth
              efficiently, meeting your needs without the necessity of a
              marketing degree.
            </p>

            <div className="flex flex-col gap-[12px]">
              <FeatureBullet>Step-by-step simple guided setup.</FeatureBullet>
              <FeatureBullet>Tailored solutions for your business needs.</FeatureBullet>
              <FeatureBullet>Built for non-marketers.</FeatureBullet>
            </div>
          </div>
        </section>

        <div className="absolute left-4 top-8 xl:hidden">
          <BrandLogo />
        </div>

        <section className="flex min-h-screen items-start justify-center px-4 pt-[161px] xl:items-center xl:px-0 xl:pt-0">
          <div className="w-full max-w-[341px] xl:max-w-[527px]">
            <div className="flex w-full flex-col items-center gap-[20px] xl:gap-[64px]">
              <header className="flex w-full flex-col items-center gap-[4px] xl:w-[405px] xl:gap-[10px]">
                <h1 className="text-center text-[20px] font-semibold leading-[130%] text-[#152D58] xl:text-[40px] xl:font-medium xl:leading-[120%]">
                  Welcome back
                </h1>
                <p className="max-w-[277px] text-center text-[14px] font-normal leading-[150%] text-[#565D69] xl:max-w-[405px] xl:text-[24px] xl:font-light">
                  Log in to keep building your marketing strategy.
                </p>
              </header>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-[20px] xl:gap-[40px]"
              >
                <div className="flex flex-col gap-[16px]">
                  <AuthField
                    id="email-input"
                    label="Email address"
                    placeholder="you@gmail.com"
                    type="email"
                    error={emailError}
                    register={emailRegistration}
                    onChange={() => {
                      form.clearErrors('email')
                      form.clearErrors('password')
                      form.clearErrors('root')
                    }}
                  />

                  <div className="flex flex-col gap-[8px]">
                    <AuthField
                      id="password-input"
                      label="Password"
                      placeholder="Your password"
                      type="password"
                      error={passwordError}
                      showToggle
                      showPassword={showPassword}
                      onTogglePassword={() => setShowPassword((current) => !current)}
                      register={passwordRegistration}
                      onChange={() => {
                        form.clearErrors('password')
                        form.clearErrors('root')
                      }}
                    />

                    <div className="flex justify-end">
                      <Link
                        href="/forgot-password"
                        className="text-[12px] font-medium leading-[18px] text-[#2E60BE]"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                </div>

                {rootError ? (
                  <p
                    role="alert"
                    className="text-[14px] font-normal leading-[20px] text-[#D13232] xl:text-[12px] xl:font-medium xl:leading-[18px]"
                  >
                    {rootError}
                  </p>
                ) : null}

                <div className="flex flex-col gap-[15px]">
                  <button
                    type="submit"
                    disabled={isBusy}
                    className="flex h-[45px] w-full items-center justify-center rounded-[8px] bg-[#326AD1] px-[10px] text-[16px] font-medium leading-[24px] text-[#FCFDFF] transition-colors hover:bg-[#2f66ca] disabled:cursor-not-allowed disabled:opacity-70 xl:h-[48px] xl:text-white"
                    data-testid="login-button"
                  >
                    Log in
                  </button>

                  <p className="text-center text-[14px] font-normal leading-[21px] text-[#565D69]">
                    New to FlowBrand?{' '}
                    <Link
                      href="/register"
                      className="font-semibold text-[#152D58] transition-colors hover:text-[#2E60BE]"
                      data-testid="link"
                    >
                      Create an account
                    </Link>
                  </p>
                </div>

                <div className="flex flex-col gap-[15px]">
                  <SocialDivider />

                  <button
                    type="button"
                    onClick={async () => {
                      if (isBusy) {
                        return
                      }

                      await signIn('google', { redirectTo: '/' })
                    }}
                    disabled={isBusy}
                    className="flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[8px] border border-[#CFCFCF] bg-white px-[10px] text-[#030D1F] transition-colors hover:bg-[#fafafa] disabled:cursor-not-allowed disabled:opacity-70"
                    data-testid="google-button"
                  >
                    <Image
                      src="/images/google.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="h-[15px] w-[15px] shrink-0"
                    />
                    <span className="text-[16px] font-semibold leading-[24px] xl:font-bold">
                      Continue with Google
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

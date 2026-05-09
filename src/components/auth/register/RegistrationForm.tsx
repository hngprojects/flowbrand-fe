'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next-nprogress-bar'
import Link from 'next/link'
import { useEffect, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { registerUser } from '~/actions/auth'
import GoogleLogo from '~/components/icons/google-logo'
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
import { Select } from '~/components/ui/select'
import { RegistrationFormSchema, splitFullNameForRegister } from '~/schemas'
import { cn } from '~/utils'

const COUNTRIES = [
  { value: '', label: 'Select your country' },
  { value: 'NG', label: 'Nigeria' },
  { value: 'US', label: 'United States' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' },
  { value: 'GH', label: 'Ghana' },
  { value: 'KE', label: 'Kenya' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'IN', label: 'India' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
] as const

export default function RegistrationForm() {
  const router = useRouter()
  const { status } = useSession()
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegistrationFormSchema>>({
    resolver: zodResolver(RegistrationFormSchema),
    defaultValues: {
      full_name: '',
      email: '',
      country: '',
      password: '',
    },
  })

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [status, router])

  const onSubmit = async (values: z.infer<typeof RegistrationFormSchema>) => {
    const { first_name, last_name } = splitFullNameForRegister(values.full_name)
    const data = await registerUser({
      first_name,
      last_name,
      email: values.email,
      password: values.password,
    })
    const isSuccess = data.status === 201

    toast[isSuccess ? 'success' : 'error'](
      isSuccess ? 'Account created successfully' : 'An error occurred',
      {
        description: isSuccess
          ? 'Verify your email with the code we sent'
          : 'error' in data
            ? data.error
            : undefined,
      }
    )

    if (isSuccess) {
      startTransition(() => {
        router.push(
          `/register/verify?email=${encodeURIComponent(values.email)}`
        )
      })
    }
  }

  return (
    <div className="space-y-4 py-8 sm:space-y-5">
      <div className="bg-primary/10 text-primary inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium sm:px-3 sm:py-1 sm:text-xs">
        No marketing experience needed
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <h2 className="text-foreground text-xl font-bold sm:text-2xl">
          Start building your first marketing strategy
        </h2>
        <p className="text-foreground/70 text-sm sm:text-[15px]">
          Create your free FlowBrand account and launch your first campaign in
          under 10 minutes.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 sm:space-y-4"
        >
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80 text-xs font-semibold sm:text-sm">
                  Full name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    disabled={isPending}
                    {...field}
                    className={cn(
                      'rounded-lg px-2.5 py-2 text-sm sm:px-3 sm:py-2.5',
                      form.formState.errors.full_name && 'border-destructive'
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80 text-xs font-semibold sm:text-sm">
                  Email address
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@gmail.com"
                    disabled={isPending}
                    {...field}
                    className={cn(
                      'rounded-lg px-2.5 py-2 text-sm sm:px-3 sm:py-2.5',
                      form.formState.errors.email && 'border-destructive'
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80 text-xs font-semibold sm:text-sm">
                  Country
                </FormLabel>
                <FormControl>
                  <Select
                    disabled={isPending}
                    {...field}
                    className={cn(
                      'rounded-lg px-2.5 py-2 text-sm sm:px-3 sm:py-2.5',
                      form.formState.errors.country && 'border-destructive'
                    )}
                  >
                    {COUNTRIES.map((c) => (
                      <option
                        key={c.value === '' ? '_placeholder' : c.value}
                        value={c.value}
                      >
                        {c.label}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80 text-xs font-semibold sm:text-sm">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Your password"
                    disabled={isPending}
                    {...field}
                    className={cn(
                      'rounded-lg px-2.5 py-2 text-sm sm:px-3 sm:py-2.5',
                      form.formState.errors.password && 'border-destructive'
                    )}
                  />
                </FormControl>
                <p className="text-foreground/50 mt-1 text-xs">
                  Use 8+ characters with a mix of letters & numbers
                </p>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isPending}
            className="h-auto w-full rounded-lg py-2.5 text-sm font-bold sm:py-3 sm:text-base"
          >
            Create account
          </Button>
        </form>
      </Form>

      <div className="relative flex items-center justify-center py-2">
        <div className="border-border w-full border-t" />
        <span className="bg-background text-foreground/45 absolute px-2 text-xs">
          OR
        </span>
      </div>

      <Button
        type="button"
        variant="outline"
        disabled={isPending || status === 'authenticated'}
        onClick={() => signIn('google', { redirectTo: '/' })}
        className="h-auto w-full gap-2 rounded-lg py-2.5 text-sm font-semibold sm:py-3"
      >
        <GoogleLogo className="size-4" />
        Continue with Google
      </Button>

      <p className="text-foreground/70 text-center text-xs sm:text-sm">
        Already have an account?{' '}
        <Link
          href="/login"
          className="text-primary hover:text-accent font-bold hover:underline"
        >
          Log in
        </Link>
      </p>

      <p className="text-foreground/50 px-4 text-center text-[10px]">
        By signing up you agree to our{' '}
        <Link
          href="/terms-and-conditions"
          className="text-primary hover:text-accent underline"
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          href="/privacy-policy"
          className="text-primary hover:text-accent underline"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  )
}

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, CheckCircle2, Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next-nprogress-bar'
import { useState } from 'react'
import { useForm, useWatch, type ControllerRenderProps } from 'react-hook-form'
import { z } from 'zod'

import { clearPasswordResetFlowStorage } from '~/lib/password-reset-storage'
import {
  getPasswordChecks,
  PASSWORD_RULE_ROWS,
  registrationPasswordField,
} from '~/schemas'
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

const CreatePasswordSchema = z
  .object({
    newPassword: registrationPasswordField,
    confirmPassword: z
      .string()
      .min(1, { message: 'Please confirm your password' }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type CreatePasswordValues = z.infer<typeof CreatePasswordSchema>

const inputBaseClass =
  'h-11 rounded-[8px] px-4 text-[16px] leading-6 text-[#030D1F] placeholder:text-[#A2A2A2] focus-visible:ring-0'

const inputStateClass = (hasError: boolean, isPrimary: boolean) =>
  cn(
    inputBaseClass,
    hasError
      ? 'border-[#D13232] focus-visible:border-[#D13232]'
      : isPrimary
        ? 'border-[#326AD1] focus-visible:border-[#326AD1]'
        : 'border-[#CFCFCF] focus-visible:border-[#326AD1]'
  )

function PasswordField({
  id,
  label,
  placeholder,
  error,
  showPassword,
  onTogglePassword,
  field,
  disabled,
  onFocus,
  onBlur,
  isPrimary,
}: {
  id: string
  label: string
  placeholder: string
  error?: string
  showPassword: boolean
  onTogglePassword: () => void
  field: ControllerRenderProps<CreatePasswordValues>
  disabled?: boolean
  onFocus?: () => void
  onBlur?: () => void
  isPrimary?: boolean
}) {
  return (
    <FormItem className="space-y-2">
      <FormLabel className="text-[16px] leading-6 font-medium text-[#152D58]">
        {label}
      </FormLabel>
      <FormControl>
        <div className="relative">
          <Input
            id={id}
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete="new-password"
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            {...field}
            onFocus={onFocus}
            onBlur={() => {
              field.onBlur()
              onBlur?.()
            }}
            className={cn(inputStateClass(!!error, !!isPrimary), 'pr-12')}
          />
          <button
            type="button"
            disabled={disabled}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute inset-y-0 right-0 flex h-full w-12 items-center justify-center text-[#CFCFCF] disabled:opacity-50"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onTogglePassword}
          >
            {showPassword ? (
              <EyeOff className="size-6" strokeWidth={1.8} aria-hidden />
            ) : (
              <Eye className="size-6" strokeWidth={1.8} aria-hidden />
            )}
          </button>
        </div>
      </FormControl>
      <FormMessage
        className="text-[14px] leading-5 font-normal text-[#D13232]"
        id={error ? `${id}-error` : undefined}
      />
    </FormItem>
  )
}

function PasswordRulesGuide({
  visible,
  password,
}: {
  visible: boolean
  password: string
}) {
  const checks = getPasswordChecks(password)

  return (
    <div
      className={cn(
        'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
        visible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      )}
    >
      <div className="min-h-0 overflow-hidden">
        <div
          className={cn(
            'transition-opacity duration-300 ease-out motion-reduce:transition-none',
            visible ? 'opacity-100' : 'opacity-0'
          )}
          aria-hidden={!visible}
        >
          <p className="text-[14px] leading-5 font-normal text-[#769BE0] lg:hidden">
            Must contain atleast 8 characters and a symbol
          </p>

          <ul className="hidden space-y-2 lg:block">
            {PASSWORD_RULE_ROWS.map(({ key, label }) => {
              const met = checks[key]
              return (
                <li key={key} className="flex items-center gap-2">
                  <Check
                    aria-hidden
                    className={cn(
                      'size-4 shrink-0 stroke-[2.5]',
                      met ? 'text-[#769BE0]' : 'text-[#91949D]'
                    )}
                  />
                  <span
                    className={cn(
                      'text-[14px] leading-5 font-normal',
                      met ? 'text-[#769BE0]' : 'text-[#91949D]'
                    )}
                  >
                    {label}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

function PasswordResetSuccess() {
  const router = useRouter()

  const handleDone = () => {
    clearPasswordResetFlowStorage()
    router.push('/login')
  }

  return (
    <div className="absolute inset-x-0 top-[89px] lg:top-1/2 lg:-translate-y-1/2">
      <div className="mx-auto flex w-full max-w-[344px] flex-col items-center gap-8 text-center lg:max-w-[412px]">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#EBF0FA]">
          <CheckCircle2
            className="text-primary size-6"
            strokeWidth={1.8}
            aria-hidden
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-[24px] leading-[31px] font-semibold text-[#0F172A] lg:text-[32px] lg:leading-[38px]">
            Password reset successful
          </h2>
          <p className="mx-auto max-w-[344px] text-[14px] leading-5 font-medium text-[#5E6470] lg:max-w-[412px] lg:text-[16px] lg:leading-6">
            Your password has been updated. You can now log in with your new
            password.
          </p>
        </div>

        <Button
          type="button"
          onClick={handleDone}
          className="h-[45px] w-full rounded-[8px] text-[16px] font-normal text-[#FCFDFF] lg:h-[45px] lg:max-w-[412px] lg:rounded-[8px]"
        >
          Done
        </Button>
      </div>
    </div>
  )
}

const CreateNewPasswordForm = () => {
  const [resetComplete, setResetComplete] = useState(false)
  const [showNewPasswordPlain, setShowNewPasswordPlain] = useState(false)
  const [showConfirmPasswordPlain, setShowConfirmPasswordPlain] =
    useState(false)
  const [newPasswordFocused, setNewPasswordFocused] = useState(false)

  const form = useForm<CreatePasswordValues>({
    resolver: zodResolver(CreatePasswordSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      newPassword: 'Password@1',
      confirmPassword: '',
    },
  })

  const { isSubmitting } = form.formState
  const newPasswordValue =
    useWatch({
      control: form.control,
      name: 'newPassword',
    }) ?? ''

  const showPasswordGuide = newPasswordFocused || newPasswordValue.length > 0

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 250))
    setResetComplete(true)
  }

  if (resetComplete) {
    return <PasswordResetSuccess />
  }

  return (
    <div className="absolute inset-x-0 top-[89px] lg:top-1/2 lg:-translate-y-1/2">
      <div className="space-y-10">
        <div className="space-y-2.5">
          <h2 className="text-[20px] leading-[26px] font-medium text-[#152D58] lg:text-[40px] lg:leading-[48px]">
            Create a new password
          </h2>
          <p className="max-w-[336px] text-[24px] leading-9 font-light text-[#565D69] lg:max-w-[450px] lg:text-[24px] lg:leading-9">
            Enter a new password to continue
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 lg:space-y-5"
          >
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <PasswordField
                  id="new-password"
                  label="New password"
                  placeholder="Password@1"
                  error={form.formState.errors.newPassword?.message}
                  showPassword={showNewPasswordPlain}
                  onTogglePassword={() =>
                    setShowNewPasswordPlain((current) => !current)
                  }
                  field={field}
                  disabled={isSubmitting}
                  isPrimary
                  onFocus={() => setNewPasswordFocused(true)}
                  onBlur={() => setNewPasswordFocused(false)}
                />
              )}
            />

            <PasswordRulesGuide
              visible={showPasswordGuide}
              password={newPasswordValue}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <PasswordField
                  id="confirm-password"
                  label="Repeat password"
                  placeholder="Show password"
                  error={form.formState.errors.confirmPassword?.message}
                  showPassword={showConfirmPasswordPlain}
                  onTogglePassword={() =>
                    setShowConfirmPasswordPlain((current) => !current)
                  }
                  field={field}
                  disabled={isSubmitting}
                />
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-[45px] w-full rounded-[8px] text-[16px] font-normal text-[#FCFDFF] lg:h-12 lg:rounded-[8px]"
            >
              Done
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

const CreateNewPassword = () => {
  return <CreateNewPasswordForm />
}

export default CreateNewPassword

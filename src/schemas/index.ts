import * as z from 'zod'

export const LoginSchema = z.object({
  password: z.string().min(8, {
    message: 'Password is required',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({
      message: 'Invalid email address',
    }),
  rememberMe: z.boolean().default(false).optional(),
})

export const RegisterSchema = z.object({
  first_name: z.string().min(1, { message: 'First name is required.' }).min(3, {
    message: 'First name must be at least 3 characters',
  }),
  last_name: z.string().min(1, { message: 'Last name is required.' }).min(3, {
    message: 'Last name must be at least 3 characters',
  }),
  email: z.string().min(1, { message: 'Field is required' }).email({
    message: 'Invalid email address',
  }),
  password: z.string().min(8, {
    message: 'Password is required',
  }),
})

const RegisterNameSchema = RegisterSchema.pick({
  first_name: true,
  last_name: true,
})

export function splitFullNameForRegister(fullName: string): {
  first_name: string
  last_name: string
} {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) {
    return { first_name: '', last_name: '' }
  }
  if (parts.length === 1) {
    return { first_name: parts[0], last_name: parts[0] }
  }
  return { first_name: parts[0], last_name: parts.slice(1).join(' ') }
}

export const RegistrationFormSchema = z
  .object({
    full_name: z.string().min(1, { message: 'Full name is required' }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Invalid email address' }),
    country: z.string().min(1, { message: 'Please select a country' }),
    password: z
      .string()
      .min(8, {
        message: 'Use 8+ characters with a mix of letters & numbers',
      })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)/, {
        message: 'Include at least one letter and one number',
      }),
  })
  .superRefine((data, ctx) => {
    const names = splitFullNameForRegister(data.full_name)
    const nameResult = RegisterNameSchema.safeParse(names)
    if (!nameResult.success) {
      for (const issue of nameResult.error.issues) {
        ctx.addIssue({
          ...issue,
          path: ['full_name'],
        })
      }
    }
  })

export const OtpFormSchema = z.object({
  d0: z.string().length(1).regex(/^\d$/),
  d1: z.string().length(1).regex(/^\d$/),
  d2: z.string().length(1).regex(/^\d$/),
  d3: z.string().length(1).regex(/^\d$/),
  d4: z.string().length(1).regex(/^\d$/),
  d5: z.string().length(1).regex(/^\d$/),
})

export const ResetPasswordSchema = z
  .object({
    password: z.string().min(8, {
      message: 'Password is required',
    }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Confirm Password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

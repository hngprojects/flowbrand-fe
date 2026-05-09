import * as React from 'react'

import { cn } from '~/utils'

export type InputProperties = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProperties>(
  ({ className, type, ...properties }, reference) => {
    return (
      <input
        type={type}
        className={cn(
          'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-primary flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={reference}
        {...properties}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }

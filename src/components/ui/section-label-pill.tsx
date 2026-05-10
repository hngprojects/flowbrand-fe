import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '~/utils'

export type SectionLabelPillProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  children: ReactNode
}

export function SectionLabelPill({
  children,
  className,
  ...properties
}: SectionLabelPillProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-3 py-1',
        className
      )}
      {...properties}
    >
      <div className="size-2 shrink-0 rounded-full bg-orange-500" aria-hidden />
      <span className="text-xs font-semibold text-orange-800">{children}</span>
    </div>
  )
}

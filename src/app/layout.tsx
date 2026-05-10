import type { Metadata } from 'next'
import './globals.css'
import { cn } from '~/utils'
import { Providers } from './provider'

export const metadata: Metadata = {
  title: 'FlowBrand — Guided Marketing Funnel Wizard',
  description:
    'FlowBrand helps small businesses build and run a personalised marketing funnel in minutes — no marketing knowledge required.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('max-w-[1920px] antialiased')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

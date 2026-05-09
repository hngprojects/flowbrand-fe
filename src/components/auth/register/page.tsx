import type { ReactNode } from 'react'

import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function RegisterPage({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className="bg-background flex min-h-screen">
      <div className="bg-primary/10 hidden w-1/2 max-w-none flex-col justify-between p-6 pr-8 pl-10 lg:flex xl:p-8 xl:pl-14 2xl:p-10 2xl:pl-16">
        <div className="flex shrink-0 items-center">
          <Image
            src="/images/logo-blue.png"
            alt="FlowBrand"
            width={140}
            height={36}
            className="h-8 w-auto object-contain xl:h-9"
          />
        </div>

        <div className="max-w-[22rem] xl:max-w-md 2xl:max-w-lg">
          <h1 className="text-foreground mb-4 text-2xl leading-tight font-bold xl:mb-5 xl:text-3xl 2xl:mb-6 2xl:text-4xl">
            Marketing strategies, made human.
          </h1>
          <p className="text-foreground/70 mb-6 text-sm leading-relaxed xl:mb-8 xl:text-base">
            A solution designed to accelerate your business growth efficiently,
            meeting your needs without the necessity of a marketing degree.
          </p>

          <ul className="space-y-3 text-sm xl:space-y-4 xl:text-base">
            {[
              'Step-by-step simple guided setup.',
              'Tailored solutions for your business needs.',
              'Built for non-marketers.',
            ].map((text, i) => (
              <li
                key={i}
                className="text-foreground flex items-start gap-2.5 font-medium xl:gap-3"
              >
                <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0 xl:h-5 xl:w-5" />
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div />
      </div>

      <div className="flex w-full flex-1 items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:w-1/2 lg:px-8">
        <div className="w-[90%] max-w-xl md:w-full">{children}</div>
      </div>
    </div>
  )
}

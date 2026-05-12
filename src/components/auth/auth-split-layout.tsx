import type { ReactNode } from 'react'

import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Logo from '../../../public/images/logo-blue.png'

const AuthSplitLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="bg-background flex min-h-screen w-full overflow-hidden">
      <aside className="bg-primary/10 relative hidden w-[708px] shrink-0 lg:block">
        <div className="absolute top-[87px] left-[87px]">
          <Image
            src={Logo}
            alt="FlowBrand"
            width={116}
            height={25}
            className="object-contain"
            priority
          />
        </div>

        <div className="absolute top-1/2 left-[87px] w-[557px] -translate-y-1/2">
          <h1 className="text-[48px] leading-[53px] font-semibold text-[#152D58]">
            Marketing strategies, made human.
          </h1>
          <p className="mt-4 max-w-[557px] text-[16px] leading-6 font-medium text-[#565D69]">
            A solution designed to accelerate your business growth efficiently,
            meeting your needs without the necessity of a marketing degree.
          </p>

          <ul className="mt-10 space-y-6">
            {[
              'Step-by-step simple guided setup.',
              'Tailored solutions for your business needs.',
              'Built for non-marketers.',
            ].map((text) => (
              <li
                key={text}
                className="flex items-start gap-4 text-[20px] leading-[26px] text-[#030D1F]"
              >
                <CheckCircle2
                  className="text-primary mt-0.5 size-5 shrink-0"
                  strokeWidth={2.25}
                />
                <span className="font-normal">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="relative flex min-h-screen flex-1 flex-col overflow-y-auto bg-white px-4 lg:px-0">
        <div className="absolute top-8 left-0 lg:hidden">
          <Image
            src={Logo}
            alt="FlowBrand"
            width={116}
            height={25}
            className="object-contain"
            priority
          />
        </div>

        <div className="flex min-h-screen w-full flex-1 items-start justify-start lg:items-center lg:justify-center">
          <div className="relative w-full max-w-[343px] lg:max-w-[528px]">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AuthSplitLayout

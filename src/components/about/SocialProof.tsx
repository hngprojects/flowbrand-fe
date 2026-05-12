import Image from 'next/image'
import {
  Homemade_Apple,
  Inspiration,
  Inknut_Antiqua,
  Instrument_Serif,
} from 'next/font/google'
import { cn } from '~/utils'

/** Repair Service: default / “Regular” — uses site body font (Inter) */
const fontHomemadeApple = Homemade_Apple({
  weight: '400',
  subsets: ['latin'],
})
const fontInspiration = Inspiration({
  weight: '400',
  subsets: ['latin'],
})
const fontInknutAntiqua = Inknut_Antiqua({
  weight: '400',
  subsets: ['latin'],
})
const fontInstrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
})

const logos = [
  {
    label: 'Repair Service',
    icon: '/images/repair.svg',
    fontClass: undefined,
  },
  {
    label: 'Beauty Salon',
    icon: '/images/salon.svg',
    fontClass: fontHomemadeApple.className,
  },
  {
    label: 'Bakery',
    icon: '/images/bakery.svg',
    fontClass: fontInspiration.className,
  },
  {
    label: 'Small Retail',
    icon: '/images/shop.svg',
    fontClass: fontInknutAntiqua.className,
  },
  {
    label: 'Agency',
    icon: '/images/agency.svg',
    fontClass: fontInstrumentSerif.className,
  },
] as const

export default function SocialProof() {
  return (
    <section className="flex w-full flex-col items-center gap-8 bg-[#FCFDFF] pt-10 pb-8">
      <p className="text-center text-[14px] text-gray-600 md:text-[16px]">
        Used by small businesses like yours to build and grow with confidence
      </p>

      <div className="flex w-full max-w-full flex-nowrap items-center justify-between gap-x-1 gap-y-4 sm:gap-x-2 md:gap-x-4">
        {logos.map(({ label, icon, fontClass }) => (
          <div
            key={label}
            className="flex min-h-0 min-w-0 flex-1 basis-0 items-center justify-center gap-1 opacity-40 grayscale sm:gap-1.5 md:gap-2"
          >
            <Image
              src={icon}
              alt={label}
              width={57}
              height={24}
              sizes="(max-width: 640px) 12vw, 57px"
              className="h-auto max-h-[clamp(14px,4.2vw,24px)] w-auto max-w-[clamp(22px,9vw,57px)] shrink-0 object-contain"
            />
            <span
              className={cn(
                'min-w-0 text-center text-[clamp(8px,1.85vw,26px)] leading-tight font-normal text-gray-500',
                fontClass
              )}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

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
    <section className="flex w-full flex-col items-center gap-8 bg-[#FCFDFF] pt-10 pb-8 md:pt-0">
      <p className="text-center text-[14px] text-gray-600 md:text-[16px]">
        Used by small businesses like yours to build and grow with confidence
      </p>

      <div className="flex w-full flex-wrap items-center justify-between gap-y-8">
        {logos.map(({ label, icon, fontClass }) => (
          <div
            key={label}
            className="flex h-[57px] items-center gap-2 opacity-40 grayscale"
          >
            <Image src={icon} alt={label} width={57} height={24} />
            <span
              className={cn(
                'text-[26px] leading-none font-normal whitespace-nowrap text-gray-500',
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

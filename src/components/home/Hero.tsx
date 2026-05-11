import Image from 'next/image'
import Link from 'next/link'

/**
 * HomeHero component displays the main hero section of the landing page.
 * It includes a background image, a promotional badge, a primary heading,
 * a subtitle, and a call-to-action button.
 *
 * @returns {JSX.Element} The rendered hero section.
 */
const HomeHero = () => {
  return (
    <section className="w-full bg-[url('/images/cloud.png')] bg-cover bg-bottom bg-no-repeat">
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-0.5 pb-0 text-center md:px-12 lg:px-20 lg:pt-20">
        {/* Badge with border */}
        <div className="border-accent mx-auto mt-10 mb-6 flex w-fit items-center justify-center gap-2 rounded-xl border-2 px-4 py-2 lg:mt-[70px]">
          <span className="bg-accent text-accent-foreground rounded-xl px-3 py-1 text-[14px] sm:text-sm">
            Simply
          </span>
          <span className="text-xs font-medium text-[#565D69] md:text-sm">
            Made for every kind of business
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 line-clamp-3 text-center text-[32px] leading-tight font-semibold text-black md:mb-8 md:text-5xl lg:text-6xl">
          Grow your business with a smarter{' '}
          <span className="text-[#E58F17]">Marketing Strategy</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed font-normal text-gray-700 md:mb-12 md:text-lg lg:text-xl">
          Manage your entire customer journey from first contact to repeat
          sales, without stress with everything you need in one place.
        </p>

        {/* CTA Button */}
        <Link
          href="/register"
          className="bg-primary hover:bg-primary/90 text-primary-foreground mb-12 inline-block rounded-xl px-7 py-3 text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95 md:mb-16 md:px-10 md:py-4 md:text-lg"
        >
          Create a free account
        </Link>

        {/* Desktop Image */}
        <div className="flex w-full justify-center">
          <Image
            src="/images/desktop.png"
            alt="Dashboard"
            width={1200}
            height={800}
            className="h-auto w-full max-w-2xl rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default HomeHero

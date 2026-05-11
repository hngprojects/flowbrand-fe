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
        <div className="mx-auto mt-10 mb-6 flex w-fit items-center justify-center gap-2 rounded-xl border-2 border-orange-500 px-4 py-2 lg:mt-[70px]">
          <span className="rounded-xl bg-orange-500 px-3 py-1 text-[14px] text-white sm:text-sm">
            Simply
          </span>
          <span className="text-[14px] text-[#565D69] sm:text-sm">
            Made for every kind of business
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-4 text-center align-middle text-[32px] leading-none font-medium tracking-normal text-black sm:mb-6 md:text-[60px]">
          Grow your business with a{' '}
          <span className="md:block">
            smarter <span className="text-accent">Marketing Strategy</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-2xl text-center align-middle text-[15px] leading-[1.5] font-normal tracking-normal text-gray-700 sm:mb-10 md:text-[18px]">
          Manage your entire customer journey from first contact to repeat
          sales, without stress with everything you need in one place.
        </p>

        {/* CTA Button */}
        <Link
          href="/register"
          className="bg-primary hover:bg-primary/90 text-primary-foreground mb-12 inline-block rounded-lg px-6 py-3 text-[16px] font-semibold transition-colors duration-200 sm:mb-16 sm:px-8 sm:py-4 sm:text-base md:text-[18px]"
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

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
    <section className="w-full bg-[url('/images/cloud.png')] bg-cover bg-bottom bg-no-repeat md:pt-20">
      <div className="landing-layout flex flex-col items-center gap-6 pb-0 text-center sm:gap-8 md:gap-10">
        <div className="border-accent flex w-fit items-center justify-center gap-2 rounded-xl border-2 px-4 py-2">
          <span className="bg-accent text-accent-foreground rounded-xl px-3 py-1 text-[14px] sm:text-sm">
            Simply
          </span>
          <span className="text-[14px] text-[#565D69] sm:text-sm">
            Made for every kind of business
          </span>
        </div>

        <h1 className="text-center align-middle text-[32px] leading-none font-medium tracking-normal text-black md:text-[60px]">
          Grow your business with a{' '}
          <span className="md:block">
            smarter <span className="text-accent">Marketing Strategy</span>
          </span>
        </h1>

        <p className="max-w-2xl text-center align-middle text-[15px] leading-[1.5] font-normal tracking-normal text-gray-700 md:text-[18px]">
          Manage your entire customer journey from first contact to repeat
          sales, without stress with everything you need in one place.
        </p>

        <Link
          href="/register"
          className="bg-primary hover:bg-primary/90 text-primary-foreground inline-block rounded-lg px-6 py-3 text-[16px] font-semibold transition-colors duration-200 sm:px-8 sm:py-4 sm:text-base md:text-[18px]"
        >
          Create a free account
        </Link>

        <div className="flex w-full justify-center pt-2 sm:pt-4">
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

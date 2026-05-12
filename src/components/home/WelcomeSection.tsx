import Image from 'next/image'

/**
 * WelcomeSection component displays an introductory section about Flowbrand.
 * It features a split layout with a mission statement and a high-quality
 * visual representation of a business owner.
 *
 * @returns {JSX.Element} The rendered welcome section.
 */
const WelcomeSection = () => {
  return (
    <section className="w-full">
      <div className="landing-layout flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex w-full flex-col gap-6 lg:w-[60%]">
            <span className="align-middle text-[18px] leading-[1.5] font-medium tracking-normal text-[#2E60BE]">
              Welcome to Flowbrand
            </span>
            <h2 className="align-middle text-[24px] leading-[1.1] font-medium tracking-normal md:text-[48px]">
              We help you attract the right customers and convert them into
              paying buyers
            </h2>
          </div>

          <div className="w-full lg:w-[35%]">
            <p className="align-middle text-base leading-[1.75] font-normal tracking-normal text-[#565D69]">
              We built Flowbrand because we kept seeing the same thing:
              brilliant business owners with no clear path to getting customers
              consistently. Not because they were not capable, but because every
              tool out there assumed they already knew what to do.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <Image
            src="/images/dark-skin-girl-1.jpg"
            alt="A woman working on her business"
            width={1186}
            height={640}
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection

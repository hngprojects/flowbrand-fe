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
    <section className="mx-auto w-full py-8 md:py-12 lg:py-16">
      <div className="px-5 py-8 md:px-8 md:py-12 lg:px-20 lg:py-16">
        {/* Header Content */}
        <div className="mb-12 flex flex-col items-start justify-between gap-12 md:mb-16 lg:flex-row lg:items-end lg:gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-[60%]">
            <span className="mb-6 block text-lg font-semibold text-[#2E60BE] md:text-xl">
              Welcome to Flowbrand
            </span>
            <h2 className="text-2xl leading-tight font-bold md:text-4xl lg:text-5xl">
              We help you attract the right customers and convert them into
              paying buyers
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[35%]">
            <p className="text-base leading-relaxed font-normal text-[#565D69] md:text-lg">
              We built Flowbrand because we kept seeing the same thing:
              brilliant business owners with no clear path to getting customers
              consistently. Not because they were not capable, but because every
              tool out there assumed they already knew what to do.
            </p>
          </div>
        </div>

        {/* Image Section */}
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

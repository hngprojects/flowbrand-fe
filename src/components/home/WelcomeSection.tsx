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
    <section className="mx-auto w-full py-16">
      <div className="p-7 md:p-[24px] lg:p-20">
        {/* Header Content */}
        <div className="mb-12 flex flex-col items-start justify-between gap-10 md:mb-16 lg:flex-row lg:items-end">
          {/* Left Column */}
          <div className="w-full lg:w-[60%]">
            <span
              className="mb-6 block text-[#2E60BE]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'Medium',
                fontSize: '18px',
                lineHeight: '150%',
                letterSpacing: 0,
                verticalAlign: 'middle',
              }}
            >
              Welcome to Flowbrand
            </span>
            <h2
              className="text-[24px] md:text-[48px]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'Medium',
                lineHeight: '110.00000000000001%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
              }}
            >
              We help you attract the right customers and convert them into
              paying buyers
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[35%]">
            <p
              className="text-[#565D69]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '16px',
                lineHeight: '175%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
              }}
            >
              We built FlowBrand because we kept seeing the same thing:
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
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection

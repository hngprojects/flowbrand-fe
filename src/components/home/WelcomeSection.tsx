import Image from 'next/image'

const WelcomeSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16">
      <div className="p-8 shadow-lg md:p-12 lg:p-20">
        {/* Header Content */}
        <div className="mb-12 flex flex-col items-start justify-between gap-10 md:mb-16 lg:flex-row lg:items-end">
          {/* Left Column */}
          <div className="w-full lg:w-[60%]">
            <span className="mb-6 block text-sm font-bold tracking-widest text-[#326ad1] uppercase md:text-base">
              Welcome to Flowbrand
            </span>
            <h2 className="text-3xl leading-[1.1] font-bold tracking-tighter text-[#0D0D0D] md:text-5xl lg:text-6xl">
              We help you attract the right customers and convert them into
              paying buyers
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[35%]">
            <p className="text-lg leading-relaxed font-medium text-[#333333] md:text-xl">
              We built Flowbrand because we kept seeing the same thing:
              brilliant business owners with no clear path to getting customers
              consistently. Not because they&apos;re not capable, but because
              every tool out there assumed they already knew what to do.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full overflow-hidden rounded-[2rem] bg-white/20 shadow-2xl backdrop-blur-sm md:rounded-[3.5rem]">
          <Image
            src="/images/dark-skin-girl.jpg"
            alt="A woman working on her business"
            width={1400}
            height={700}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection

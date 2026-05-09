import Image from 'next/image'

const HomeHero = () => {
  return (
    <section
      className="w-full bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/cloud.png)',
      }}
    >
      {/* Content Container */}
      <div className="mx-auto w-full max-w-4xl px-4 pt-0.5 pb-0 text-center lg:px-8 lg:pt-20">
        {/* Badge with border */}
        <div className="border-accent mx-auto mt-10 mb-6 flex w-fit items-center justify-center gap-2 rounded-xl border-2 px-4 py-2 lg:mt-30">
          <span className="bg-accent rounded-xl px-3 py-1 text-[14px] text-white sm:text-sm">
            Simply
          </span>
          <span className="text-[14px] text-[#565D69] sm:text-sm">
            Made for every kind of business
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="mb-4 text-center text-[32px] font-medium text-black sm:mb-6 md:text-[60px]"
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            lineHeight: '100%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
          }}
        >
          Grow your business with a{' '}
          <span className="md:block">
            smarter <span className="text-accent">Marketing Strategy</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-8 max-w-2xl text-[15px] font-medium text-gray-700 sm:mb-10 md:text-[18px]"
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: '150%',
            letterSpacing: '0%',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
        >
          Manage your entire customer journey from first contact to repeat
          sales, without stress with everything you need in one place.
        </p>

        {/* CTA Button */}
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground mb-12 rounded-lg px-6 py-3 text-[16px] font-semibold transition-colors duration-200 sm:mb-16 sm:px-8 sm:py-4 sm:text-base md:text-[18px]">
          Create a free account
        </button>

        {/* Desktop Image */}
        <div className="flex w-full justify-center">
          <Image
            src="/images/desktop.png"
            alt="Dashboard"
            width={1200}
            height={800}
            className="h-auto w-full max-w-2xl rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeHero

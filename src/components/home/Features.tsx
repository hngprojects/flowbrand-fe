import Image from 'next/image'
import { SectionLabelPill } from '../ui/section-label-pill'

const Features = () => {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-4 py-10 lg:py-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionLabelPill>Features</SectionLabelPill>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Everything you need to grow
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex h-full min-h-80 flex-col justify-between rounded-3xl bg-black p-8 text-white">
            <div className="pb-6">
              <Image
                src="/images/feature-1.png"
                alt="Guided Setup"
                width={111}
                height={111}
              />
            </div>

            <div>
              <h3 className="pb-3 text-2xl font-bold">Guided Setup</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Build the best marketing strategy for your business with clear,
                step by step support
              </p>
            </div>
          </div>

          <div className="h-full min-h-80 overflow-hidden rounded-3xl">
            <div className="relative flex h-full items-end bg-gradient-to-br from-gray-200 to-gray-300">
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/40 to-transparent p-8">
                <h3 className="pb-2 text-2xl font-bold text-white">
                  Progress Tracking
                </h3>
                <p className="text-sm leading-relaxed text-white">
                  Track every stage of your marketing and see what improves
                  convert, without guess work
                </p>
              </div>
              <Image
                src="/images/dark-skin-girl-2.jpg"
                alt="Progress Tracking"
                className="h-full w-full object-cover"
                width={405}
                height={456}
              />
            </div>
          </div>

          <div className="relative flex h-full min-h-[429px] flex-col justify-between rounded-3xl bg-[#769BE0] p-3 text-white">
            <div className="h-[50%] rounded-xl bg-[#A1BAEA] p-3">
              <div className="mx-auto flex h-full w-full max-w-[370px]">
                <div className="flex w-[50%] flex-col">
                  <div className="">
                    <span className="text-[16.67px] font-semibold text-blue-100 opacity-75">
                      From
                    </span>
                    <p className="text-lg font-bold">Business Idea</p>
                  </div>

                  <Image
                    src="/images/dashed-arrow.svg"
                    alt="Curved dashed arrow connecting idea to outcome"
                    width={115}
                    height={77}
                    className="h-auto max-w-[119px] translate-x-[50px] lg:translate-x-[45px]"
                  />
                </div>

                <div className="flex w-[50%] -translate-y-[34px] flex-col items-center justify-end">
                  <h3 className="text-[20px] leading-tight font-bold text-white">
                    Real Marketing
                    <br />
                    Strategies
                  </h3>
                </div>
              </div>
            </div>
            <div className="mt-auto p-6">
              <h4 className="pb-2 text-[24px] font-bold">
                Smarter Conversions
              </h4>
              <p className="text-[16px] leading-relaxed text-blue-50">
                Convert leads into real customers with better inquiry and
                booking flows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

'use client'
import { Button } from '~/components/ui/button'
const steps = [
  {
    number: 'STEP 1',
    title: 'Tell us about your business.',
    description:
      'Upload your business documents or answer 3 plain questions to get started— no marketing knowledge needed.',
    image: '/images/how-it-works/step-1.png',
    imageAlt: 'Step 1 - Tell us about your business',
    imagePosition: 'right',
  },
  {
    number: 'STEP 2',
    title: 'We build your marketing strategy',
    description:
      'FlowBrand matches your answers to the right strategy plan type and personalizes every stage for your business. Done in under 3 seconds.',
    image: '/images/how-it-works/step-2.png',
    imageAlt: 'Step 2 - We build your marketing strategy',
    imagePosition: 'left',
  },
  {
    number: 'STEP 3',
    title: 'Take it one step at a time.',
    description:
      'Each week, you get one clear action to complete. Tick it off. Move to the next stage. No overwhelm, no skipped steps.',
    image: '/images/how-it-works/step-3.png',
    imageAlt: 'Step 3 - Take it one step at a time',
    imagePosition: 'right',
  },
]
export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-sky-50/60 px-4 py-20 sm:py-28 dark:bg-slate-900/20">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl dark:text-white">
            From setup to growth in three steps
          </h1>
          <p className="text-base text-gray-600 sm:text-lg dark:text-gray-400">
            FlowBrand takes you from understanding your business to running a
            fully structured marketing Strategy—step by step.
          </p>
        </div>
      </section>
      {/* Steps Section */}
      <section className="w-full py-8">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12 lg:px-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-12 py-16 md:flex-row md:gap-20 ${
                step.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className="flex flex-1 flex-col justify-center">
                {/* Step indicator pills */}
                <div className="mb-4 flex items-center gap-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all ${
                        i === index
                          ? 'w-8 bg-orange-400'
                          : 'w-4 bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-2 text-xs font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
                  {step.number}
                </p>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                  {step.title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
                  {step.description}
                </p>
              </div>
              {/* Image / Mock Browser */}
              <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-[480px] overflow-hidden rounded-2xl border-4 border-orange-400 bg-orange-50 shadow-xl dark:border-orange-500 dark:bg-orange-950/20">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 bg-orange-400/80 px-4 py-3 dark:bg-orange-500/60">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  {/* Image placeholder — swap src once assets are available */}
                  <div className="flex min-h-[260px] items-center justify-center bg-gray-100 dark:bg-gray-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        // Fallback placeholder if image not yet available
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (
                          parent &&
                          !parent.querySelector('.placeholder-text')
                        ) {
                          const p = document.createElement('p')
                          p.className =
                            'placeholder-text text-sm text-gray-400 dark:text-gray-500'
                          p.textContent = step.imageAlt
                          parent.appendChild(p)
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="px-4 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Get a step-by-step marketing strategy in minutes
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            A simple marketing plan that attracts, nurtures, and converts
            customers without stress
          </p>
          <Button className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Create a free account
          </Button>
        </div>
      </section>
    </main>
  )
}

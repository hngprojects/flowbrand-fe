'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '~/utils'
import { Button } from '~/components/ui/button'
import Link from 'next/link'

const HowItWorksView = () => {
  const steps = [
    {
      id: 1,
      title: 'Tell us about your business.',
      description:
        'Upload your business documents or answer 3 plain questions to get started— no marketing knowledge needed.',
      image: '/images/step-1.png',
    },
    {
      id: 2,
      title: 'We build your marketing strategy.',
      description:
        'FlowBrand matches your answers to the right strategy plan type and personalizes every stage for your business. Done in under 3 seconds.',
      image: '/images/step-2.png',
    },
    {
      id: 3,
      title: 'Take it one step at a time.',
      description:
        'Each week, you get one clear action to complete. Tick it off. Move to the next stage. No overwhelm, no skipped steps.',
      image: '/images/step-3.png',
    },
  ]

  return (
    <main className="overflow-hidden">
      <section className="bg-primary/20 relative mx-auto flex min-h-[400px] w-full max-w-[1440px] flex-col items-center justify-center gap-2 px-6 py-20 md:gap-5 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="text-foreground mb-3 text-center text-[24px] font-semibold md:text-[40px] lg:text-[48px]">
            From setup to growth in three steps
          </h1>
          <p className="mx-auto max-w-[650px] text-center text-[16px] text-[#565D69] md:text-[18px]">
            FlowBrand takes you from understanding your business to running a
            fully structured marketing Strategy—step by step.
          </p>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-0 hidden opacity-50 lg:block xl:opacity-100"
        >
          <Image
            src="/images/full-cloud.png"
            alt=""
            aria-hidden="true"
            width={447}
            height={445}
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 hidden opacity-50 lg:block xl:opacity-100"
        >
          <Image
            src="/images/half-cloud.png"
            alt=""
            aria-hidden="true"
            width={447}
            height={445}
          />
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] space-y-16 px-6 py-20 md:space-y-[84px] md:px-12 lg:px-16">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: step.id % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={cn(
              'flex flex-col items-center justify-between gap-12 lg:flex-row',
              step.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            )}
          >
            <div className="w-full space-y-8 lg:w-[523px] lg:space-y-[41px]">
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((point) => (
                  <div
                    key={point}
                    className={cn(
                      'h-3 w-3 rounded-full transition-all duration-300 md:h-4 md:w-4',
                      point === step.id
                        ? 'bg-secondary w-8 md:w-10'
                        : 'bg-[#FCF4E8]'
                    )}
                  ></div>
                ))}
              </div>

              <div className="space-y-2">
                <h2 className="text-[16px] text-[#565D69] md:text-[18px]">
                  Step {step.id}
                </h2>
                <h3 className="text-[20px] font-semibold text-[#030D1F] md:text-[24px]">
                  {step.title}
                </h3>
                <p className="text-[16px] text-[#565D69] md:text-[18px]">
                  {step.description}
                </p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex w-full max-w-[606px] justify-center"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={606}
                height={445}
                className="h-auto w-[606px]"
              />
            </motion.div>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto w-full max-w-[812px] space-y-8 px-6 py-12 text-center md:px-12 lg:px-16">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-[28px] leading-tight font-semibold text-[#030D1F] md:text-[48px]"
          >
            Get a step-by-step marketing strategy in minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-[16px] text-[#353D4C] md:text-[18px]"
          >
            A simple marketing plan that attracts, nurtures, and converts
            customers without stress
          </motion.p>
        </div>
        <Button
          asChild
          size="lg"
          className="rounded-full px-8 py-6 text-[16px]"
        >
          <Link href="/register">Create a free account</Link>
        </Button>
      </section>
    </main>
  )
}

export default HowItWorksView

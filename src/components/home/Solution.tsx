'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Step {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Tell us about your business.',
    description:
      'Upload your business documents or answer 3 plain questions to get started—no marketing knowledge needed.',
  },
  {
    number: 2,
    title: 'Get your custom strategy.',
    description:
      'Our AI analyzes your business and creates a personalized marketing strategy tailored to your goals.',
  },
  {
    number: 3,
    title: 'Start executing.',
    description:
      'Follow our step-by-step action plan with templates, tools, and support to grow your business.',
  },
]

export const Solution = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const totalSteps = steps.length

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps)
    }, 5000) // Switch every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSteps])

  const currentStep = steps[activeStep]

  return (
    <section className="bg-white px-5 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto w-full">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <motion.div
            className="mb-8 inline-flex items-center gap-3 rounded-full bg-orange-50 px-5 py-3 md:mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <span className="text-sm font-semibold text-orange-500 md:text-base">
              Our Solution
            </span>
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            How it works
          </h2>
          <p className="text-base font-medium text-gray-600 md:text-lg">
            We get you up and running in just 3 steps
          </p>
        </div>

        {/* Main Content */}
        <div
          className="grid items-center justify-center gap-6 lg:mx-auto lg:grid-cols-2 lg:gap-10"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Left Side - Steps Carousel */}
          <motion.div
            className="relative overflow-hidden"
            key={`step-${activeStep}`}
          >
            <motion.div className="space-y-6">
              {/* Step Indicator */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center">
                  <div className="h-2 w-12 rounded-full bg-orange-500"></div>
                </div>
                <span className="text-sm font-semibold text-orange-500">
                  STEP {currentStep.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {currentStep.title}
              </h3>

              {/* Description */}
              <motion.p
                key={`desc-${activeStep}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-base leading-relaxed text-gray-600 md:text-lg"
              >
                {currentStep.description}
              </motion.p>

              {/* Navigation Dots */}
              <div className="mt-8 flex gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === activeStep
                        ? 'w-8 bg-orange-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Desktop Image */}
          <motion.div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Image Container */}
              <div className="relative z-10 overflow-hidden rounded-3xl bg-[#E58F17] p-6">
                <div className="relative w-full">
                  <Image
                    src="/images/snippet.png"
                    alt="How it works - Desktop mockup"
                    width={523}
                    height={501}
                    className="h-auto w-full rounded-lg object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Solution

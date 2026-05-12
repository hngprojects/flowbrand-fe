'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

import { useOnboardingStore } from '~/store/onboardingStore'
import StepOne from './StepOne'
import StepThree from './StepThree'
import StepTwo from './StepTwo'

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-60%' : '60%', opacity: 0 }),
}

const transition = {
  duration: 0.32,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
}

export default function OnboardingFlow() {
  const { step, dir, goBack } = useOnboardingStore()

  return (
    <div className="flex flex-col px-4 pt-6 pb-10 md:px-0 md:pt-10">
      {/* Back button */}
      <div className="mb-4 md:mx-auto md:w-full md:max-w-[620px]">
        {step > 1 && (
          <button
            onClick={goBack}
            className="text-foreground bg-background border-border hover:bg-muted-foreground/10 flex items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        )}
      </div>

      {/* Animated card */}
      <div className="w-full overflow-hidden md:mx-auto md:max-w-[620px]">
        <AnimatePresence mode="popLayout" custom={dir}>
          <motion.div
            key={step}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
          >
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

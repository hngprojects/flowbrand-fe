'use client'

import { useOnboardingStore } from '~/store/onboardingStore'
import StepProgress from './StepProgress'

const MAX = 500

export default function StepOne() {
  const { step, totalSteps, businessDesc, setBusinessDesc, goNext } =
    useOnboardingStore()

  return (
    <div className="bg-background border-border rounded-2xl border p-6 shadow-sm md:p-8">
      <StepProgress step={step} total={totalSteps} />

      <h1 className="text-foreground mb-2 text-[22px] leading-snug font-bold md:text-[26px]">
        What does your business sell?
      </h1>
      <p className="text-muted-foreground mb-6 text-[14px] leading-relaxed">
        Describe your product or service in your own words keep it simple. There
        are no wrong answers here.
      </p>

      <textarea
        value={businessDesc}
        onChange={(e) => setBusinessDesc(e.target.value.slice(0, MAX))}
        placeholder="e.g I sell small chops and pastries for events and walk in customers..."
        rows={5}
        className="border-border text-foreground placeholder:text-muted-foreground bg-background focus:ring-primary/30 focus:border-primary w-full resize-none rounded-xl border px-4 py-3 text-[14px] transition-colors focus:ring-2 focus:outline-none"
      />
      <p className="text-muted-foreground mt-1.5 mb-6 text-right text-[12px]">
        {businessDesc.length}/{MAX}
      </p>

      <button
        onClick={goNext}
        disabled={businessDesc.trim().length === 0}
        className="text-primary-foreground enabled:bg-primary w-full rounded-xl py-3.5 text-[15px] font-semibold transition-colors enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:bg-[#C7D4EF]"
      >
        Next
      </button>
    </div>
  )
}

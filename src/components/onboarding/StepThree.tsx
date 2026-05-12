'use client'

import { useOnboardingStore } from '~/store/onboardingStore'
import StepProgress from './StepProgress'

const CHANNELS = [
  'Instagram',
  'Facebook',
  'TikTok',
  'Physical Location',
  'Others',
]

export default function StepThree() {
  const { step, totalSteps, selectedChannel, setSelectedChannel } =
    useOnboardingStore()

  return (
    <div className="bg-background border-border rounded-2xl border p-6 shadow-sm md:p-8">
      <StepProgress step={step} total={totalSteps} />

      <h1 className="text-foreground mb-2 text-[22px] leading-snug font-bold md:text-[26px]">
        How do most of your customer find you right now?
      </h1>
      <p className="text-muted-foreground mb-7 text-[14px] leading-relaxed">
        Pick the one channel that brings you the most customers right now.
      </p>

      <div className="mb-8 flex flex-col">
        {CHANNELS.map((ch, i) => {
          const isSelected = selectedChannel === ch
          const isLast = i === CHANNELS.length - 1
          return (
            <button
              key={ch}
              onClick={() => setSelectedChannel(isSelected ? null : ch)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-4 text-left text-[14px] font-medium transition-colors ${!isLast ? 'border-border border-b' : ''} ${isSelected ? 'bg-primary/5' : 'hover:bg-muted-foreground/10'}`}
            >
              <span
                className={`flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[4px] border-2 transition-colors ${isSelected ? 'bg-primary border-primary' : 'border-border bg-background'}`}
              >
                {isSelected && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span
                className={
                  isSelected ? 'text-foreground' : 'text-foreground/70'
                }
              >
                {ch}
              </span>
            </button>
          )
        })}
      </div>

      <button
        disabled={!selectedChannel}
        className="text-primary-foreground enabled:bg-primary w-full rounded-xl py-3.5 text-[15px] font-semibold transition-colors enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:bg-[#C7D4EF]"
      >
        Create my strategy
      </button>
    </div>
  )
}

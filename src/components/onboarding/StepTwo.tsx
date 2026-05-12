'use client'

import { useOnboardingStore } from '~/store/onboardingStore'
import StepProgress from './StepProgress'

const AUDIENCE = [
  'Women',
  'Men',
  'Young adults',
  'Parent',
  'Professionals',
  'Business owner',
  'Students',
  'Anyone',
]
const GOALS = [
  'Look good',
  'Save time',
  'Grow their business',
  'Eat well',
  'Feel Confident',
  'Learn something',
  'Solve a problem',
]
const LOCATIONS = [
  'My city',
  'Nigeria',
  'Africa',
  'Anywhere online',
  'My neighborhood',
]

function Chip({
  label,
  selected,
  onToggle,
}: {
  label: string
  selected: boolean
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors md:text-[14px] ${
        selected
          ? 'border-primary bg-accent-background text-primary'
          : 'border-border bg-background text-foreground hover:border-primary/40'
      }`}
    >
      {label}
    </button>
  )
}

export default function StepTwo() {
  const {
    step,
    totalSteps,
    selectedAudience,
    toggleAudience,
    selectedGoals,
    toggleGoal,
    selectedLocations,
    toggleLocation,
    audienceCustom,
    setAudienceCustom,
    goNext,
  } = useOnboardingStore()

  const canProceed =
    selectedAudience.length > 0 ||
    selectedGoals.length > 0 ||
    selectedLocations.length > 0 ||
    audienceCustom.trim().length > 0

  return (
    <div className="bg-background border-border rounded-2xl border p-6 shadow-sm md:p-8">
      <StepProgress step={step} total={totalSteps} />

      <h1 className="text-foreground mb-1.5 text-[22px] leading-snug font-bold md:text-[26px]">
        Who is your ideal customer?
      </h1>
      <p className="text-muted-foreground mb-7 text-[14px] leading-relaxed">
        Tap to build a picture of the person you most want to reach.
      </p>

      <div className="mb-6">
        <p className="text-foreground mb-3 text-[13px] font-semibold">
          They are:
        </p>
        <div className="flex flex-wrap gap-2">
          {AUDIENCE.map((a) => (
            <Chip
              key={a}
              label={a}
              selected={selectedAudience.includes(a)}
              onToggle={() => toggleAudience(a)}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-foreground mb-3 text-[13px] font-semibold">
          Who want to:
        </p>
        <div className="flex flex-wrap gap-2">
          {GOALS.map((g) => (
            <Chip
              key={g}
              label={g}
              selected={selectedGoals.includes(g)}
              onToggle={() => toggleGoal(g)}
            />
          ))}
        </div>
      </div>

      <div className="mb-7">
        <p className="text-foreground mb-3 text-[13px] font-semibold">
          Located In:
        </p>
        <div className="flex flex-wrap gap-2">
          {LOCATIONS.map((l) => (
            <Chip
              key={l}
              label={l}
              selected={selectedLocations.includes(l)}
              onToggle={() => toggleLocation(l)}
            />
          ))}
        </div>
      </div>

      <div className="mb-7">
        <p className="text-foreground mb-2 text-[13px] font-semibold">
          Or write your own
        </p>
        <textarea
          value={audienceCustom}
          onChange={(e) => setAudienceCustom(e.target.value)}
          placeholder="e.g Young women in Lagos who want affordable stylish clothing"
          rows={3}
          className="border-border text-foreground placeholder:text-muted-foreground bg-background focus:ring-primary/30 focus:border-primary w-full resize-none rounded-xl border px-4 py-3 text-[14px] transition-colors focus:ring-2 focus:outline-none"
        />
      </div>

      <button
        onClick={goNext}
        disabled={!canProceed}
        className="text-primary-foreground enabled:bg-primary w-full rounded-xl py-3.5 text-[15px] font-semibold transition-colors enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:bg-[#C7D4EF]"
      >
        Next
      </button>
    </div>
  )
}

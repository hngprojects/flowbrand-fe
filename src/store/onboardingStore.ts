import { create } from 'zustand'

const TOTAL_STEPS = 3

interface OnboardingState {
  // Navigation
  step: number
  dir: number
  totalSteps: number
  goNext: () => void
  goBack: () => void

  // Step 1
  businessDesc: string
  setBusinessDesc: (v: string) => void

  // Step 2
  selectedAudience: string[]
  selectedGoals: string[]
  selectedLocations: string[]
  audienceCustom: string
  toggleAudience: (v: string) => void
  toggleGoal: (v: string) => void
  toggleLocation: (v: string) => void
  setAudienceCustom: (v: string) => void

  // Step 3
  selectedChannel: string | null
  setSelectedChannel: (v: string | null) => void

  // Reset
  reset: () => void
}

const initialState = {
  step: 1,
  dir: 1,
  totalSteps: TOTAL_STEPS,
  businessDesc: '',
  selectedAudience: [] as string[],
  selectedGoals: [] as string[],
  selectedLocations: [] as string[],
  audienceCustom: '',
  selectedChannel: null as string | null,
}

function toggle(arr: string[], val: string) {
  return arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  ...initialState,

  // Navigation
  goNext: () =>
    set((s) => ({
      dir: 1,
      step: Math.min(s.step + 1, TOTAL_STEPS),
    })),
  goBack: () =>
    set((s) => ({
      dir: -1,
      step: Math.max(s.step - 1, 1),
    })),

  // Step 1
  setBusinessDesc: (v) => set({ businessDesc: v }),

  // Step 2
  toggleAudience: (v) =>
    set((s) => ({ selectedAudience: toggle(s.selectedAudience, v) })),
  toggleGoal: (v) =>
    set((s) => ({ selectedGoals: toggle(s.selectedGoals, v) })),
  toggleLocation: (v) =>
    set((s) => ({ selectedLocations: toggle(s.selectedLocations, v) })),
  setAudienceCustom: (v) => set({ audienceCustom: v }),

  // Step 3
  setSelectedChannel: (v) => set({ selectedChannel: v }),

  // Reset
  reset: () => set(initialState),
}))

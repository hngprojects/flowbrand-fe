import { Plus, Minus, RotateCcw } from 'lucide-react'

interface CounterActionsProps {
  decrement: () => void
  reset: () => void
  increment: () => void
}
const CounterActions = ({
  decrement,
  reset,
  increment,
}: CounterActionsProps) => {
  return (
    <div className="flex w-full items-center gap-4">
      <button
        onClick={decrement}
        className="bg-secondary/10 hover:bg-secondary/20 group flex aspect-square flex-1 items-center justify-center rounded-2xl transition-colors"
        aria-label="Decrement"
      >
        <Minus className="text-secondary h-6 w-6 transition-transform group-hover:scale-110" />
      </button>

      <button
        onClick={reset}
        className="bg-muted-foreground/10 hover:bg-muted-foreground/20 group flex aspect-square flex-1 items-center justify-center rounded-2xl transition-colors"
        aria-label="Reset"
      >
        <RotateCcw className="text-muted-foreground h-6 w-6 transition-transform duration-500 group-hover:rotate-180" />
      </button>

      <button
        onClick={increment}
        className="bg-primary hover:bg-primary/90 group flex aspect-square flex-1 items-center justify-center rounded-2xl transition-colors"
        aria-label="Increment"
      >
        <Plus className="text-primary-foreground h-6 w-6 transition-transform group-hover:scale-110" />
      </button>
    </div>
  )
}

export default CounterActions

import { useState } from 'react'

interface useCounterReturn {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export function useCounter(): useCounterReturn {
  const [count, setCount] = useState<number>(0)
  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(0)

  return {
    count,
    increment,
    decrement,
    reset,
  }
}

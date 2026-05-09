'use client'

import { useCounter } from '~/components/features/counter/hooks/useCounter'
import CounterHeader from '~/components/features/counter/components/CounterHeader'
import CounterActions from '~/components/features/counter/components/CounterActions'
import Count from '~/components/features/counter/components/Count'

export default function CounterView() {
  const { count, increment, decrement, reset } = useCounter()

  return (
    <div className="bg-background border-border mx-auto flex w-full max-w-sm flex-col items-center justify-center space-y-8 rounded-3xl border p-8 shadow-xl">
      <CounterHeader />
      <Count count={count} />
      <CounterActions
        decrement={decrement}
        reset={reset}
        increment={increment}
      />
    </div>
  )
}

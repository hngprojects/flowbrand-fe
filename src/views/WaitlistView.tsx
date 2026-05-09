'use client'

import { useCounter } from '~/components/features/counter/hooks/useCounter'
import CounterHeader from '~/components/features/counter/components/CounterHeader'
import CounterActions from '~/components/features/counter/components/CounterActions'
import Count from '~/components/features/counter/components/Count'
import WaitlistBody from '~/components/waitlist'

export default function WaitlistView() {
  const { count, increment, decrement, reset } = useCounter()

  return (
    <div>
      <WaitlistBody />
    </div>
  )
}

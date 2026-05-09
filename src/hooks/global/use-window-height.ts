'use client'

import { useSyncExternalStore } from 'react'

export default function useWindowHeight() {
  const dimensions = useSyncExternalStore(
    // 1. Subscribe function
    (callback) => {
      window.addEventListener('scroll', callback)
      window.addEventListener('resize', callback)
      return () => {
        window.removeEventListener('scroll', callback)
        window.removeEventListener('resize', callback)
      }
    },
    // 2. Client snapshot (runs in browser)
    () => ({
      scrollY: window.scrollY,
      totalHeight: document.documentElement.scrollHeight,
      winHeight: window.innerHeight,
    }),
    // 3. Server snapshot (runs during build/SSR)
    () => ({
      scrollY: 0,
      totalHeight: 0,
      winHeight: 0,
    })
  )

  return dimensions
}

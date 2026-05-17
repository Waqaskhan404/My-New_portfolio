'use client'
import { useSyncExternalStore } from 'react'

function subscribe(cb) {
  window.addEventListener('resize', cb)
  return () => window.removeEventListener('resize', cb)
}

export function useIsMobile(breakpoint = 768) {
  return useSyncExternalStore(
    subscribe,
    () => window.innerWidth < breakpoint,
    () => false
  )
}

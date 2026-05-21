'use client'
import { useRef } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function MagneticButton({ children, strength = 0.38 }) {
  const ref = useRef(null)
  const isMobile = useIsMobile()

  const onMove = (e) => {
    if (isMobile) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ display: 'inline-block', transition: 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)' }}
    >
      {children}
    </div>
  )
}

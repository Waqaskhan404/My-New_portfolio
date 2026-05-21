'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total > 0) setPct((window.scrollY / total) * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      zIndex: 9999, pointerEvents: 'none',
      height: '2px', width: `${pct}%`,
      background: 'linear-gradient(90deg, #00f5ff, #7c3aed, #ff6b6b)',
      boxShadow: '0 0 10px rgba(0,245,255,0.8), 0 0 25px rgba(0,245,255,0.35)',
      transition: 'width 0.08s linear',
    }} />
  )
}

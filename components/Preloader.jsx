'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading]   = useState(true)
  const [progress, setProgress] = useState(0)
  const [phase, setPhase]       = useState(0)

  useEffect(() => {
    let progressTimer, phaseTimer, loadTimer
    let mounted = true
    let current = 0

    progressTimer = setInterval(() => {
      if (!mounted) return
      const inc = current < 60 ? Math.random() * 12 + 4
                : current < 85 ? Math.random() * 4 + 1
                : Math.random() * 1.5
      current = Math.min(current + inc, 94)
      setProgress(current)
    }, 120)

    phaseTimer = setTimeout(() => {
      if (mounted) setPhase(1)
      setTimeout(() => { if (mounted) setPhase(2) }, 700)
    }, 600)

    const finish = () => {
      if (!mounted) return
      clearInterval(progressTimer)
      setProgress(100)
      setTimeout(() => { if (mounted) setLoading(false) }, 450)
    }

    if (document.readyState === 'complete') {
      loadTimer = setTimeout(finish, 800)
    } else {
      window.addEventListener('load', () => { loadTimer = setTimeout(finish, 300) }, { once: true })
      setTimeout(finish, 2400)
    }

    return () => {
      mounted = false
      clearInterval(progressTimer)
      clearTimeout(phaseTimer)
      clearTimeout(loadTimer)
    }
  }, [])

  const PHASES = ['> connecting...', '> loading assets...', '> ready.']

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'fixed', inset: 0,
            background: '#0a0a0f',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          {/* Dot grid */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle, rgba(0,245,255,0.055) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />

          {/* Glow blobs */}
          <div style={{
            position: 'absolute', top: '30%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 'min(320px, 80vw)', height: 'min(320px, 80vw)',
            background: 'radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)',
            borderRadius: '50%', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '25%', left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(200px, 60vw)', height: 'min(200px, 60vw)',
            background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
            borderRadius: '50%', pointerEvents: 'none',
          }} />

          {/* ── Main content ── */}
          <div style={{
            position: 'relative',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '2.2rem',
          }}>

            {/* Logo + rings in a fixed-size square so rings always center on WK */}
            <div style={{
              position: 'relative',
              width: 'min(140px, 38vw)',
              height: 'min(140px, 38vw)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {/* Inner ring (cyan) */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: '14%',          // ~20px inset on 140px = 100px diameter
                  borderRadius: '50%',
                  border: '1.5px solid transparent',
                  borderTopColor: '#00f5ff',
                  borderRightColor: 'rgba(0,245,255,0.18)',
                }}
              />
              {/* Outer ring (purple) */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: '4%',           // ~6px inset = 128px diameter
                  borderRadius: '50%',
                  border: '1px solid transparent',
                  borderTopColor: 'rgba(124,58,237,0.35)',
                  borderLeftColor: '#7c3aed',
                }}
              />

              {/* WK — centered inside the container, above rings */}
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                style={{
                  position: 'relative', zIndex: 1,
                  fontFamily: 'var(--font-orbitron, sans-serif)',
                  fontSize: 'min(2.4rem, 7vw)',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 16px rgba(0,245,255,0.4))',
                  letterSpacing: '0.06em',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                WK
              </motion.span>
            </div>

            {/* Progress bar + status — same width, both centered */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '0.7rem',
                width: 'min(200px, 55vw)',
              }}
            >
              {/* Track */}
              <div style={{
                width: '100%', height: 2,
                background: 'rgba(255,255,255,0.07)',
                borderRadius: 2, overflow: 'hidden',
              }}>
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.15 }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #00f5ff, #7c3aed)',
                    borderRadius: 2,
                    boxShadow: '0 0 8px rgba(0,245,255,0.55)',
                  }}
                />
              </div>

              {/* Status text */}
              <motion.span
                key={phase}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 0.65, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: 'var(--font-fira, monospace)',
                  fontSize: 'min(0.75rem, 3.2vw)',
                  color: '#00f5ff',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}
              >
                {PHASES[phase]}
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

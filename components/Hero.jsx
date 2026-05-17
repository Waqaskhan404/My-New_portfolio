'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const ROLES = ['React JS Apps.', 'Next JS Websites.', 'Beautiful UIs.', 'Fast Web Apps.', 'Digital Solutions.']

function useTypewriter() {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [wait, setWait] = useState(false)
  const pauseRef = useRef(null)

  useEffect(() => {
    return () => { clearTimeout(pauseRef.current) }
  }, [])

  useEffect(() => {
    if (wait) return
    const current = ROLES[idx]
    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1))
        } else {
          setWait(true)
          pauseRef.current = setTimeout(() => { setWait(false); setDeleting(true) }, 1600)
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1))
        } else {
          setDeleting(false)
          setIdx((i) => (i + 1) % ROLES.length)
        }
      }
    }, deleting ? 38 : 75)
    return () => clearTimeout(timer)
  }, [text, deleting, idx, wait])

  return text
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  const typed = useTypewriter()
  const isMobile = useIsMobile()

  const orbs = [
    { w: isMobile ? 280 : 600, h: isMobile ? 280 : 600, bg: 'radial-gradient(circle,#00f5ff,transparent)', top: '-10%', left: '-15%', delay: '0s', opacity: 0.1 },
    { w: isMobile ? 220 : 450, h: isMobile ? 220 : 450, bg: 'radial-gradient(circle,#7c3aed,transparent)', top: '35%', right: '-12%', delay: '2s', opacity: 0.12 },
    { w: isMobile ? 150 : 300, h: isMobile ? 150 : 300, bg: 'radial-gradient(circle,#ff6b6b,transparent)', bottom: '8%', left: '40%', delay: '4s', opacity: 0.1 },
  ]

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', zIndex: 1, padding: isMobile ? '5rem 1.2rem 4rem' : '0 2rem',
      overflow: 'hidden',
    }}>
      {/* Floating orbs */}
      {orbs.map((o, i) => (
        <div key={i} style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(70px)', opacity: o.opacity,
          width: o.w, height: o.h, background: o.bg,
          top: o.top, left: o.left, right: o.right, bottom: o.bottom,
          animation: `float ${7 + i * 2}s ease-in-out infinite ${o.delay}`,
          pointerEvents: 'none',
        }} />
      ))}

      <div style={{ textAlign: 'center', maxWidth: '950px', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px', borderRadius: '50px',
            border: '1px solid rgba(34,197,94,0.35)',
            background: 'rgba(34,197,94,0.08)',
            backdropFilter: 'blur(10px)',
            marginBottom: '1.5rem',
            fontSize: isMobile ? '0.72rem' : '0.82rem',
            color: '#4ade80',
            fontFamily: 'var(--font-fira, monospace)',
          }}
        >
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#22c55e', display: 'block',
            animation: 'blink-dot 1.5s ease infinite',
          }} />
          Available for new opportunities
        </motion.div>

        <motion.p {...fadeUp(0.2)} style={{
          fontFamily: 'var(--font-fira, monospace)', color: '#00f5ff',
          fontSize: isMobile ? '0.9rem' : '1.1rem', marginBottom: '0.8rem',
        }}>&lt; Hello, World! /&gt;</motion.p>

        <motion.h1 {...fadeUp(0.4)} style={{
          fontFamily: 'var(--font-orbitron, sans-serif)',
          fontSize: 'clamp(2.4rem,8vw,6.5rem)', fontWeight: 900,
          lineHeight: 1.05, marginBottom: '1rem',
        }}>
          <span className="gradient-text" style={{ display: 'block' }}>Waqas Khan</span>
        </motion.h1>

        <motion.div {...fadeUp(0.6)} style={{
          fontSize: 'clamp(0.95rem,3vw,1.7rem)', color: '#8892a4',
          marginBottom: '1.2rem', fontFamily: 'var(--font-fira, monospace)',
        }}>
          I build &nbsp;
          <span style={{ color: '#00f5ff', fontWeight: 600 }}>{typed}</span>
          <span style={{ color: '#00f5ff', opacity: 0.7, animation: 'pulseDot 1s ease infinite' }}>|</span>
        </motion.div>

        <motion.p {...fadeUp(0.8)} style={{
          fontSize: isMobile ? '0.92rem' : '1.05rem', color: '#8892a4',
          maxWidth: '580px', margin: '0 auto 2rem', lineHeight: 1.9,
        }}>
          A driven Front-End Developer with 2+ years of expertise in modern web technologies —
          crafting responsive, performant, and visually stunning digital experiences.
        </motion.p>

        <motion.div {...fadeUp(1.0)} style={{
          display: 'flex', gap: '1rem', justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="#projects" className="btn-p">View My Work</a>
          <a href="#contact" className="btn-s">Hire Me</a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: '16px', height: '16px',
            borderRight: '2px solid #00f5ff', borderBottom: '2px solid #00f5ff',
            transform: 'rotate(45deg)',
            animation: `scrollArrow 1.5s ease infinite ${i * 0.2}s`,
          }} />
        ))}
      </motion.div>
    </section>
  )
}

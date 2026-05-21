'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useScramble } from '@/hooks/useScramble'
import MagneticButton from '@/components/MagneticButton'

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

const TECH_BADGES = [
  { text: 'React.js',   color: '#61DAFB', style: { top: '22%',    left: '4%'   }, delay: '0s'   },
  { text: 'Next.js',    color: '#ffffff', style: { top: '38%',    right: '4%'  }, delay: '1s'   },
  { text: 'TypeScript', color: '#3178C6', style: { bottom: '32%', left: '3%'   }, delay: '2s'   },
  { text: 'Tailwind',   color: '#06B6D4', style: { bottom: '22%', right: '3%'  }, delay: '3s'   },
]

export default function Hero() {
  const typed      = useTypewriter()
  const isMobile   = useIsMobile()
  const heroName   = useScramble('Waqas Khan', 1100)

  const orbs = [
    { w: isMobile ? 280 : 600, h: isMobile ? 280 : 600, bg: 'radial-gradient(circle,#00f5ff,transparent)', top: '-10%', left: '-15%', delay: '0s', opacity: 0.1 },
    { w: isMobile ? 220 : 450, h: isMobile ? 220 : 450, bg: 'radial-gradient(circle,#7c3aed,transparent)', top: '35%', right: '-12%', delay: '2s', opacity: 0.12 },
    { w: isMobile ? 150 : 300, h: isMobile ? 150 : 300, bg: 'radial-gradient(circle,#ff6b6b,transparent)', bottom: '8%', left: '40%', delay: '4s', opacity: 0.1 },
  ]

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', zIndex: 1, padding: isMobile ? '3.5rem 1.2rem 2.5rem' : '0 2rem',
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

      {/* Floating tech badges — desktop only */}
      {!isMobile && TECH_BADGES.map(({ text, color, style, delay }) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: parseFloat(delay) * 0.4 + 1.2 }}
          style={{
            position: 'absolute', ...style,
            padding: '5px 13px', borderRadius: '20px',
            background: `${color}10`,
            border: `1px solid ${color}30`,
            color, fontSize: '0.7rem',
            fontFamily: 'var(--font-fira, monospace)',
            fontWeight: 600, pointerEvents: 'none',
            animation: `float ${9 + parseFloat(delay)}s ease-in-out infinite ${delay}`,
            backdropFilter: 'blur(8px)',
            boxShadow: `0 0 18px ${color}18`,
            whiteSpace: 'nowrap', zIndex: 0,
          }}
        >{text}</motion.div>
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
            marginBottom: isMobile ? '0.75rem' : '1.5rem',
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

        {/* Scramble name */}
        <motion.h1 {...fadeUp(0.4)} style={{
          fontFamily: 'var(--font-orbitron, sans-serif)',
          fontSize: 'clamp(2.4rem,8vw,6.5rem)', fontWeight: 900,
          lineHeight: 1.05, marginBottom: '1rem',
        }}>
          <span className="gradient-text" style={{ display: 'block' }}>{heroName}</span>
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

        {/* CTA buttons with magnetic effect on desktop */}
        <motion.div {...fadeUp(1.0)} style={{
          display: 'flex', gap: '1rem', justifyContent: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center',
          width: isMobile ? 'min(100%, 320px)' : 'auto',
          margin: isMobile ? '0 auto' : undefined,
        }}>
          <MagneticButton>
            <a href="#projects" className="btn-p">View My Work</a>
          </MagneticButton>
          <MagneticButton>
            <a href="#contact" className="btn-s">Hire Me</a>
          </MagneticButton>
          <MagneticButton>
            <a href="/Waqas_Khan_Resume.pdf" download="Waqas_Khan_Resume.pdf" className="btn-r">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </MagneticButton>
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

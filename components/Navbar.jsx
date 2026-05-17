'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const links = [
  { href: '#about', label: '// about' },
  { href: '#skills', label: '// skills' },
  { href: '#experience', label: '// experience' },
  { href: '#projects', label: '// projects' },
  { href: '#education', label: '// education' },
  { href: '#contact', label: '// contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const ids = ['about','skills','experience','projects','education','contact']
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 250) { setActive(ids[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      overflow: 'hidden',
      padding: scrolled ? '0.75rem 1.5rem' : '1.2rem 1.5rem',
      background: scrolled || open ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled || open ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          fontFamily: 'var(--font-orbitron, sans-serif)', fontSize: '1.5rem', fontWeight: 900,
          background: 'linear-gradient(135deg,#00f5ff,#7c3aed)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', textDecoration: 'none', flexShrink: 0,
        }}>WK</a>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
            {links.map(({ href, label }) => {
              const id = href.slice(1)
              return (
                <li key={href}>
                  <a href={href} style={{
                    fontFamily: 'var(--font-fira, monospace)', fontSize: '0.88rem',
                    color: active === id ? '#00f5ff' : '#8892a4',
                    textDecoration: 'none', transition: 'color .3s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#00f5ff')}
                    onMouseLeave={e => (e.currentTarget.style.color = active === id ? '#00f5ff' : '#8892a4')}
                  >{label}</a>
                </li>
              )
            })}
          </ul>
        )}

        {/* Hamburger — mobile only */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: '5px',
              padding: '6px',
            }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={
                  open
                    ? i === 1
                      ? { opacity: 0, scaleX: 0 }
                      : i === 0
                      ? { rotate: 45, y: 7 }
                      : { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.22 }}
                style={{
                  width: '26px', height: '2px',
                  background: '#00f5ff', display: 'block',
                  transformOrigin: 'center', borderRadius: '2px',
                }}
              />
            ))}
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid rgba(0,245,255,0.08)',
              marginTop: '0.5rem',
            }}
          >
            {links.map(({ href, label }, i) => {
              const id = href.slice(1)
              return (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.95rem 1.5rem',
                    color: active === id ? '#00f5ff' : '#8892a4',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-fira, monospace)', fontSize: '0.92rem',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    transition: 'color .2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#00f5ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = active === id ? '#00f5ff' : '#8892a4')}
                >
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: active === id ? '#00f5ff' : 'rgba(255,255,255,0.2)',
                    flexShrink: 0, transition: 'background .2s',
                  }} />
                  {label}
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

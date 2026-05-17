'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const links = [
  { href: '#about',      label: 'About',      num: '01' },
  { href: '#skills',     label: 'Skills',     num: '02' },
  { href: '#experience', label: 'Experience', num: '03' },
  { href: '#projects',   label: 'Projects',   num: '04' },
  { href: '#education',  label: 'Education',  num: '05' },
  { href: '#contact',    label: 'Contact',    num: '06' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('')
  const [open, setOpen]           = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const ids = ['about','skills','experience','projects','education','contact']
      let found = ''
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 250) { found = ids[i]; break }
      }
      setActive(found)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { if (!isMobile) setOpen(false) }, [isMobile])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const navBg = scrolled || open
    ? 'rgba(10,10,15,0.96)'
    : 'transparent'

  return (
    <>
      {/* ── Navbar bar ── */}
      <motion.nav
        style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 1000,
          backdropFilter: scrolled || open ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled || open ? 'blur(24px)' : 'none',
          background: navBg,
          borderBottom: scrolled && !open ? '1px solid rgba(0,245,255,0.1)' : 'none',
          transition: 'background 0.35s ease, border-color 0.35s ease, padding 0.35s ease',
          padding: scrolled ? '0.7rem 1.5rem' : '1.15rem 1.5rem',
        }}
      >
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>

          {/* ── Logo ── */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontFamily: 'var(--font-orbitron, sans-serif)',
              fontSize: '1.5rem', fontWeight: 900,
              background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', textDecoration: 'none', flexShrink: 0,
              filter: 'drop-shadow(0 0 10px rgba(0,245,255,0.3))',
            }}
          >
            WK
          </motion.a>

          {/* ── Desktop links ── */}
          {!isMobile && (
            <ul style={{ display: 'flex', listStyle: 'none', gap: '0.2rem', margin: 0, padding: 0 }}>
              {links.map(({ href, label, num }) => {
                const id = href.slice(1)
                const isActive = active === id
                return (
                  <li key={href} style={{ position: 'relative' }}>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        style={{
                          position: 'absolute', inset: 0,
                          background: 'rgba(0,245,255,0.08)',
                          borderRadius: '8px',
                          border: '1px solid rgba(0,245,255,0.18)',
                          boxShadow: '0 0 16px rgba(0,245,255,0.08)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <DesktopLink href={href} label={label} num={num} isActive={isActive} />
                  </li>
                )
              })}
            </ul>
          )}

          {/* ── Hamburger ── */}
          {isMobile && (
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                gap: '5px', padding: '8px', zIndex: 1100,
              }}
            >
              {[0, 1, 2].map(i => (
                <motion.span
                  key={i}
                  animate={
                    open
                      ? i === 1 ? { opacity: 0, scaleX: 0 }
                        : i === 0 ? { rotate: 45, y: 7 }
                        : { rotate: -45, y: -7 }
                      : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  style={{
                    width: '24px', height: '2px', display: 'block',
                    background: open ? '#00f5ff' : '#8892a4',
                    transformOrigin: 'center', borderRadius: '2px',
                    transition: 'background 0.25s',
                    boxShadow: open ? '0 0 8px rgba(0,245,255,0.6)' : 'none',
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </motion.nav>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 44px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(10,10,15,0.98)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', padding: '2rem 2.5rem',
              overflow: 'hidden',
            }}
          >
            {/* Ambient dot grid */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'radial-gradient(circle, rgba(0,245,255,0.045) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />

            {/* Glow blobs */}
            <div style={{
              position: 'absolute', top: '15%', right: '-5%',
              width: 280, height: 280,
              background: 'radial-gradient(circle, rgba(0,245,255,0.055) 0%, transparent 70%)',
              borderRadius: '50%', pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: '10%', left: '-5%',
              width: 220, height: 220,
              background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
              borderRadius: '50%', pointerEvents: 'none',
            }} />

            {/* Nav links */}
            <nav style={{ position: 'relative', zIndex: 1, width: '100%' }}>
              {links.map(({ href, label, num }, i) => {
                const id = href.slice(1)
                const isActive = active === id
                return (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.07, type: 'spring', stiffness: 280, damping: 24 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1.25rem',
                      padding: '0.95rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      textDecoration: 'none',
                      position: 'relative', overflow: 'hidden',
                    }}
                  >
                    {/* Active left-bar */}
                    {isActive && (
                      <motion.span
                        layoutId="mobile-bar"
                        style={{
                          position: 'absolute', left: -10, top: '50%',
                          transform: 'translateY(-50%)',
                          width: 3, height: '60%',
                          background: 'linear-gradient(180deg, #00f5ff, #7c3aed)',
                          borderRadius: '2px',
                          boxShadow: '0 0 10px rgba(0,245,255,0.6)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    <span style={{
                      fontFamily: 'var(--font-fira, monospace)',
                      fontSize: '0.7rem',
                      color: isActive ? '#00f5ff' : 'rgba(0,245,255,0.28)',
                      minWidth: '20px', transition: 'color 0.2s',
                    }}>{num}</span>

                    <span style={{
                      fontFamily: 'var(--font-orbitron, sans-serif)',
                      fontSize: 'clamp(1.7rem, 8vw, 2.4rem)',
                      fontWeight: 700,
                      color: isActive ? '#00f5ff' : '#d1d8e4',
                      letterSpacing: '0.03em',
                      transition: 'color 0.2s',
                      textShadow: isActive ? '0 0 20px rgba(0,245,255,0.3)' : 'none',
                    }}>{label}</span>

                    {isActive && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{
                          marginLeft: 'auto', flexShrink: 0,
                          width: 8, height: 8, borderRadius: '50%',
                          background: '#00f5ff',
                          boxShadow: '0 0 14px #00f5ff',
                        }}
                      />
                    )}
                  </motion.a>
                )
              })}
            </nav>

            {/* Bottom tag line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.28 }}
              transition={{ delay: 0.6 }}
              style={{
                position: 'absolute', bottom: '2rem', left: '2.5rem',
                fontFamily: 'var(--font-fira, monospace)',
                fontSize: '0.68rem', color: '#8892a4', margin: 0,
              }}
            >
              waqas-khan-dev.vercel.app
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function DesktopLink({ href, label, num, isActive }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center', gap: '0.32rem',
        padding: '0.45rem 0.9rem',
        fontFamily: 'var(--font-inter, sans-serif)',
        fontSize: '0.86rem', fontWeight: 500,
        color: isActive ? '#00f5ff' : hovered ? '#e2e8f0' : '#8892a4',
        textDecoration: 'none',
        letterSpacing: '0.01em',
        transition: 'color 0.22s',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-fira, monospace)',
        fontSize: '0.6rem',
        color: isActive ? '#00f5ff' : hovered ? 'rgba(0,245,255,0.5)' : 'rgba(0,245,255,0.25)',
        transition: 'color 0.22s',
        lineHeight: 1,
      }}>{num}</span>
      {label}
    </a>
  )
}

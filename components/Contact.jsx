'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

// ─────────────────────────────────────────────
// 1. Go to https://formspree.io and sign up free
// 2. Click "+ New Form", name it anything
// 3. Copy your form ID (looks like "xzzpqkrb")
// 4. Paste it below replacing YOUR_FORM_ID
// ─────────────────────────────────────────────
const FORMSPREE_ID = 'xeedjbdn'

const contactInfo = [
  { icon: '✉️', label: 'Email',    value: 'waqas.khan.40004@gmail.com', href: 'mailto:waqas.khan.40004@gmail.com' },
  { icon: '📞', label: 'Phone',    value: '+92 304 5454166',             href: 'tel:+923045454166' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/waqaskhan123', href: 'https://linkedin.com/in/waqaskhan123', external: true },
  { icon: '📍', label: 'Location', value: 'Islamabad, Pakistan',          href: null },
]

const inputStyle = (isMobile) => ({
  width: '100%',
  padding: isMobile ? '0.8rem 1.1rem' : '0.95rem 1.4rem',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  color: '#fff',
  fontSize: isMobile ? '0.88rem' : '0.95rem',
  outline: 'none',
  transition: 'all .3s',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
})

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const isMobile = useIsMobile()
  const resetRef = useRef(null)

  useEffect(() => {
    return () => { clearTimeout(resetRef.current) }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      alert('⚠️ Please set your Formspree ID in components/Contact.jsx')
      return
    }
    setStatus('loading')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        e.target.reset()
        resetRef.current = setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        resetRef.current = setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      resetRef.current = setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" style={{
      position: 'relative', zIndex: 1, padding: '6rem 2rem',
      background: 'linear-gradient(180deg,transparent,rgba(124,58,237,.03),transparent)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
          transition={{ duration:.7 }} style={{ textAlign:'center', marginBottom:'3rem' }}>
          <span className="section-tag">// 06. contact</span>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="section-line" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(min(300px, 100%), 1fr))`,
          gap: isMobile ? '2rem' : '4rem',
          alignItems: 'start',
        }}>
          {/* Contact info */}
          <motion.div initial={{ opacity:0,x: isMobile ? 0 : -40 }} whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }} transition={{ duration:.7 }}>
            <h3 style={{
              fontFamily: 'var(--font-orbitron,sans-serif)',
              fontSize: isMobile ? '1.3rem' : '1.7rem', marginBottom: '0.8rem',
              background: 'linear-gradient(135deg,#00f5ff,#7c3aed)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Let&apos;s Build Something Great</h3>
            <p style={{ color: '#8892a4', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: isMobile ? '0.9rem' : '1rem' }}>
              I&apos;m open to new opportunities and collaborations. Whether you have a project in mind or
              just want to say hi — my inbox is always open!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {contactInfo.map(({ icon, label, value, href, external }) => (
                <motion.div key={label} whileHover={isMobile ? {} : { x: 6 }}>
                  {href ? (
                    <a href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '1rem',
                        padding: isMobile ? '0.85rem 1.1rem' : '1rem 1.4rem',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px', textDecoration: 'none', transition: 'all .3s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#00f5ff'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,245,255,.15)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; e.currentTarget.style.boxShadow = 'none' }}
                    >
                      <div style={{
                        width: isMobile ? '38px' : '44px', height: isMobile ? '38px' : '44px',
                        borderRadius: '10px', flexShrink: 0,
                        background: 'linear-gradient(135deg,#00f5ff,#7c3aed)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                      }}>{icon}</div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '0.75rem', color: '#8892a4', marginBottom: '0.1rem' }}>{label}</div>
                        <div style={{ fontSize: isMobile ? '0.82rem' : '0.92rem', color: '#fff', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</div>
                      </div>
                    </a>
                  ) : (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      padding: isMobile ? '0.85rem 1.1rem' : '1rem 1.4rem',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px',
                    }}>
                      <div style={{
                        width: isMobile ? '38px' : '44px', height: isMobile ? '38px' : '44px',
                        borderRadius: '10px', flexShrink: 0,
                        background: 'linear-gradient(135deg,#00f5ff,#7c3aed)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
                      }}>{icon}</div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#8892a4', marginBottom: '0.1rem' }}>{label}</div>
                        <div style={{ fontSize: isMobile ? '0.82rem' : '0.92rem', color: '#fff', fontWeight: 500 }}>{value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity:0,x: isMobile ? 0 : 40 }} whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }} transition={{ duration:.7 }} className="glass-card">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              <input name="name" type="text" placeholder="Your Name" required
                style={inputStyle(isMobile)}
                onFocus={e => { e.target.style.borderColor = '#00f5ff'; e.target.style.boxShadow = '0 0 20px rgba(0,245,255,.15)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,.08)'; e.target.style.boxShadow = 'none' }}
              />

              <input name="email" type="email" placeholder="Your Email" required
                style={inputStyle(isMobile)}
                onFocus={e => { e.target.style.borderColor = '#00f5ff'; e.target.style.boxShadow = '0 0 20px rgba(0,245,255,.15)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,.08)'; e.target.style.boxShadow = 'none' }}
              />

              <input name="subject" type="text" placeholder="Subject"
                style={inputStyle(isMobile)}
                onFocus={e => { e.target.style.borderColor = '#00f5ff'; e.target.style.boxShadow = '0 0 20px rgba(0,245,255,.15)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,.08)'; e.target.style.boxShadow = 'none' }}
              />

              <textarea name="message" placeholder="Your Message" required rows={isMobile ? 4 : 5}
                style={{ ...inputStyle(isMobile), resize: 'none' }}
                onFocus={e => { e.target.style.borderColor = '#00f5ff'; e.target.style.boxShadow = '0 0 20px rgba(0,245,255,.15)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,.08)'; e.target.style.boxShadow = 'none' }}
              />

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={status === 'loading' ? {} : { scale: 1.02, y: -2 }}
                whileTap={status === 'loading' ? {} : { scale: 0.98 }}
                style={{
                  padding: '1rem 2rem',
                  background:
                    status === 'success' ? 'linear-gradient(135deg,#22c55e,#16a34a)' :
                    status === 'error'   ? 'linear-gradient(135deg,#ef4444,#b91c1c)' :
                    status === 'loading' ? 'rgba(0,245,255,0.15)' :
                    'linear-gradient(135deg,#00f5ff,#7c3aed)',
                  color: status === 'loading' ? '#00f5ff' : '#0a0a0f',
                  border: status === 'loading' ? '1px solid rgba(0,245,255,0.3)' : 'none',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: isMobile ? '0.88rem' : '0.95rem',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background .4s, color .4s',
                  boxShadow:
                    status === 'success' ? '0 10px 30px rgba(34,197,94,.3)' :
                    status === 'error'   ? '0 10px 30px rgba(239,68,68,.3)' :
                    '0 10px 30px rgba(0,245,255,.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                }}
              >
                {status === 'loading' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ animation: 'spin-slow 0.8s linear infinite', flexShrink: 0 }}>
                    <path d="M21 12a9 9 0 11-6.219-8.56"/>
                  </svg>
                )}
                {status === 'idle'    && '✉ Send Message'}
                {status === 'loading' && 'Sending…'}
                {status === 'success' && '✓ Message Sent!'}
                {status === 'error'   && '✕ Failed — Try Again'}
              </motion.button>

              {/* Helper note */}
              {status === 'success' && (
                <p style={{ textAlign: 'center', color: '#4ade80', fontSize: '0.82rem', marginTop: '-0.25rem' }}>
                  I&apos;ll reply within 24 hours. Check your spam folder too!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

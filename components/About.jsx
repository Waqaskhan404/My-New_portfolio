'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

function CountUp({ end, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let startTime = null
        const duration = 1400
        const animate = (ts) => {
          if (!startTime) startTime = ts
          const progress = Math.min((ts - startTime) / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) requestAnimationFrame(animate)
          else setCount(end)
        }
        requestAnimationFrame(animate)
        observer.disconnect()
      }
    }, { threshold: 0.6 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { end: 2, suffix: '+', label: 'Years Exp' },
  { end: 45, suffix: '+', label: 'Projects' },
  { end: 15, suffix: '+', label: 'Tech Stack' },
]

const info = [
  { icon: '📍', label: 'Islamabad, Pakistan' },
  { icon: '📧', label: 'waqas.khan.40004@gmail.com', href: 'mailto:waqas.khan.40004@gmail.com' },
  { icon: '📞', label: '+92 304 5454166', href: 'tel:+923045454166' },
  { icon: '💼', label: 'linkedin.com/in/waqaskhan123', href: 'https://linkedin.com/in/waqaskhan123', external: true },
]

export default function About() {
  const isMobile = useIsMobile()

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">// 01. about_me</span>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="section-line" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(min(300px, 100%), 1fr))`,
          gap: isMobile ? '2.5rem' : '4rem',
          alignItems: 'center',
        }}>
          {/* Avatar */}
          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Code terminal window */}
            <div style={{
              width: '100%', marginBottom: '2rem',
              background: 'rgba(13,17,23,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,245,255,0.06)',
            }}>
              {/* Terminal title bar */}
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                padding: '0.7rem 1rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
                  <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'block', flexShrink: 0 }} />
                ))}
                <span style={{
                  marginLeft: '0.6rem', color: 'rgba(255,255,255,0.22)',
                  fontSize: '0.7rem', fontFamily: 'var(--font-fira,monospace)',
                }}>waqas@portfolio:~$</span>
              </div>

              {/* Code body */}
              <div style={{
                padding: '1.2rem 1.4rem',
                fontFamily: 'var(--font-fira,monospace)',
                fontSize: isMobile ? '0.7rem' : '0.76rem',
                lineHeight: 1.9,
              }}>
                {[
                  [<><span style={{color:'#c792ea'}}>const</span> <span style={{color:'#82aaff'}}>developer</span> <span style={{color:'#89ddff'}}>=</span> <span style={{color:'#ffcb6b'}}>{'{'}</span></>],
                  [<><span style={{paddingLeft:'1.2rem',display:'block'}}><span style={{color:'#f07178'}}>name</span><span style={{color:'#89ddff'}}>:</span> <span style={{color:'#c3e88d'}}>&quot;Waqas Khan&quot;</span><span style={{color:'#89ddff'}}>,</span></span></>],
                  [<><span style={{paddingLeft:'1.2rem',display:'block'}}><span style={{color:'#f07178'}}>role</span><span style={{color:'#89ddff'}}>:</span> <span style={{color:'#c3e88d'}}>&quot;Frontend Developer&quot;</span><span style={{color:'#89ddff'}}>,</span></span></>],
                  [<><span style={{paddingLeft:'1.2rem',display:'block'}}><span style={{color:'#f07178'}}>location</span><span style={{color:'#89ddff'}}>:</span> <span style={{color:'#c3e88d'}}>&quot;Islamabad, PK&quot;</span><span style={{color:'#89ddff'}}>,</span></span></>],
                  [<><span style={{paddingLeft:'1.2rem',display:'block'}}><span style={{color:'#f07178'}}>experience</span><span style={{color:'#89ddff'}}>:</span> <span style={{color:'#f78c6c'}}>2</span><span style={{color:'#89ddff'}}>,</span></span></>],
                  [<><span style={{paddingLeft:'1.2rem',display:'block'}}><span style={{color:'#f07178'}}>skills</span><span style={{color:'#89ddff'}}>:</span> <span style={{color:'#89ddff'}}>[</span><span style={{color:'#c3e88d'}}>&quot;React&quot;</span><span style={{color:'#89ddff'}}>,</span> <span style={{color:'#c3e88d'}}>&quot;Next.js&quot;</span><span style={{color:'#89ddff'}}>,</span> <span style={{color:'#c3e88d'}}>&quot;TS&quot;</span><span style={{color:'#89ddff'}}>],</span></span></>],
                  [<><span style={{paddingLeft:'1.2rem',display:'block'}}><span style={{color:'#f07178'}}>available</span><span style={{color:'#89ddff'}}>:</span> <span style={{color:'#ff9d00'}}>true</span><span style={{color:'#89ddff'}}>,</span></span></>],
                  [<><span style={{color:'#ffcb6b'}}>{'}'}</span><span style={{color:'#89ddff'}}>;</span></>],
                ].map((line, i) => (
                  <div key={i}>{line[0]}</div>
                ))}
                <div style={{ marginTop: '0.4rem', color: '#00f5ff', animation: 'blink-dot 1s ease infinite' }}>█</div>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.7rem', width: '100%' }}>
              {stats.map(({ end, suffix, label }) => (
                <motion.div key={label} whileHover={{ scale: 1.06, y: -4 }}
                  style={{
                    textAlign: 'center', padding: isMobile ? '0.75rem 0.3rem' : '1rem 0.5rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '14px', transition: 'all .3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#00f5ff'; e.currentTarget.style.boxShadow = '0 0 25px rgba(0,245,255,.18)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{
                    fontFamily: 'var(--font-orbitron,sans-serif)',
                    fontSize: isMobile ? '1.4rem' : '1.9rem',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg,#00f5ff,#7c3aed)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    <CountUp end={end} suffix={suffix} />
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#8892a4', marginTop: '0.2rem', fontFamily: 'var(--font-fira,monospace)' }}>{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div {...fadeUp(0.3)}>
            <h3 style={{
              fontFamily: 'var(--font-orbitron,sans-serif)',
              fontSize: isMobile ? '1.1rem' : '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg,#00f5ff,#7c3aed)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Frontend Developer & UI Enthusiast</h3>

            <p style={{ color: '#8892a4', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: isMobile ? '0.9rem' : '1.02rem' }}>
              I am a driven Front-End Developer with expertise in modern web technologies and a passion for
              creating secure, innovative digital solutions. With 2+ years of experience, I specialize in
              building responsive, performant, and visually stunning web applications.
            </p>
            <p style={{ color: '#8892a4', lineHeight: 1.9, marginBottom: '1.8rem', fontSize: isMobile ? '0.9rem' : '1.02rem' }}>
              Skilled in strategic web development, I bring a proactive mindset to solving complex challenges.
              Recognized for clear communication, adaptability, and teamwork — I consistently deliver
              high-quality results.
            </p>

            {/* Info grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(min(200px, 100%), 1fr))`,
              gap: '0.65rem', marginBottom: '2rem',
            }}>
              {info.map(({ icon, label, href, external }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.6rem 0.9rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '10px', fontSize: '0.85rem', color: '#8892a4',
                  transition: 'all .3s', overflow: 'hidden',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,245,255,.3)'; e.currentTarget.style.background = 'rgba(0,245,255,.04)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)'; e.currentTarget.style.background = 'rgba(255,255,255,.03)' }}
                >
                  <span style={{ fontSize: '1rem', flexShrink: 0 }}>{icon}</span>
                  {href ? (
                    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
                      style={{
                        color: '#8892a4', textDecoration: 'none', transition: 'color .3s',
                        fontSize: '0.82rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#00f5ff')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#8892a4')}
                    >{label}</a>
                  ) : <span style={{ fontSize: '0.82rem' }}>{label}</span>}
                </div>
              ))}
            </div>

            <a href="mailto:waqas.khan.40004@gmail.com" className="btn-p">Get In Touch</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

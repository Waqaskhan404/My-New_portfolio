'use client'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const certs = [
  { name: 'HTML and CSS in Depth', issuer: 'Meta' },
  { name: 'Introduction to Front-End Development', issuer: 'Meta' },
  { name: 'Version Control', issuer: 'Meta' },
  { name: 'Digital Design RoadShow', issuer: 'Microsoft & Telenor' },
  { name: 'IOT', issuer: 'CISCO Networking Academy' },
  { name: 'AI and Top Tech', issuer: 'Comsats University Islamabad' },
]

export default function Education() {
  const isMobile = useIsMobile()

  return (
    <section id="education" style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
          transition={{ duration:.7 }} style={{ textAlign:'center', marginBottom:'3rem' }}>
          <span className="section-tag">// 05. education & certs</span>
          <h2 className="section-title">Education & <span>Certifications</span></h2>
          <div className="section-line" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(min(300px, 100%), 1fr))`,
          gap: isMobile ? '2rem' : '3rem',
        }}>
          {/* Education */}
          <motion.div initial={{ opacity:0,x:-40 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}
            transition={{ duration:.7 }}>
            <h3 style={{
              fontFamily: 'var(--font-fira,monospace)', fontSize: '0.88rem',
              marginBottom: '1.5rem', color: '#00f5ff', letterSpacing: '0.05em',
            }}>// education</h3>

            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '18px', overflow: 'hidden',
              transition: 'border-color .3s, box-shadow .3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,245,255,.25)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,.25), 0 0 25px rgba(0,245,255,.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{
                padding: '1.3rem 1.4rem',
                background: 'linear-gradient(135deg, rgba(0,245,255,0.08), rgba(124,58,237,0.08))',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', gap: '1rem',
              }}>
                <div style={{
                  width: '50px', height: '50px', borderRadius: '14px', flexShrink: 0,
                  background: 'linear-gradient(135deg,rgba(0,245,255,.18),rgba(124,58,237,.18))',
                  border: '1px solid rgba(0,245,255,.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
                }}>🎓</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-fira,monospace)', fontSize: '0.7rem', color: '#00f5ff', marginBottom: '0.2rem' }}>
                    Sep 2017 – Sep 2021
                  </div>
                  <div style={{ fontFamily: 'var(--font-orbitron,sans-serif)', fontSize: isMobile ? '0.82rem' : '0.9rem', fontWeight: 700 }}>
                    Bachelor&apos;s in Software Engineering
                  </div>
                </div>
              </div>
              <div style={{ padding: '1.1rem 1.4rem' }}>
                <div style={{ color: '#7c3aed', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Comsats University Islamabad
                </div>
                <div style={{ color: '#8892a4', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  📍 Islamabad, Pakistan
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div initial={{ opacity:0,x: isMobile ? 0 : 40 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}
            transition={{ duration:.7 }}>
            <h3 style={{
              fontFamily: 'var(--font-fira,monospace)', fontSize: '0.88rem',
              marginBottom: '1.5rem', color: '#7c3aed', letterSpacing: '0.05em',
            }}>// certifications</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {certs.map((cert, i) => (
                <motion.div key={cert.name}
                  initial={{ opacity:0, x: isMobile ? 0 : 40 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ duration:.45, delay: i * 0.07 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.85rem',
                    padding: isMobile ? '0.75rem 1rem' : '0.85rem 1.1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '12px', transition: 'all .3s', cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(124,58,237,.35)'
                    e.currentTarget.style.background = 'rgba(124,58,237,.06)'
                    e.currentTarget.style.transform = isMobile ? 'none' : 'translateX(6px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)'
                    e.currentTarget.style.background = 'rgba(255,255,255,.03)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div style={{
                    width: '26px', height: '26px', borderRadius: '7px', flexShrink: 0,
                    background: 'rgba(124,58,237,.15)', border: '1px solid rgba(124,58,237,.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-fira,monospace)', fontSize: '0.68rem',
                    fontWeight: 700, color: '#a78bfa',
                  }}>{String(i + 1).padStart(2, '0')}</div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: '#e2e8f0', fontSize: isMobile ? '0.8rem' : '0.86rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cert.name}</div>
                    <div style={{ color: '#8892a4', fontSize: '0.72rem', marginTop: '0.1rem' }}>{cert.issuer}</div>
                  </div>

                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(34,197,94,.12)', border: '1px solid rgba(34,197,94,.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.62rem', color: '#4ade80',
                  }}>✓</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

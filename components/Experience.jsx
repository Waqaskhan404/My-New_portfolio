'use client'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const jobs = [
  {
    role: 'Frontend Developer (Next JS & React JS)',
    company: 'AH Group of Companies',
    period: 'Oct 2023 – Dec 2024',
    location: 'Islamabad, Pakistan',
    desc: 'Worked on the Envio By Vista project — an enterprise logistics platform. Built and maintained operational modules for managing orders, contractors, trucks, drivers, and invoices. Designed responsive, modern UIs ensuring full cross-browser and cross-device compatibility.',
    tags: ['Next.js','React.js','Material UI','Redux','Redux Form','Chart.js'],
    color: '#00f5ff',
  },
  {
    role: 'Front End Developer (React JS)',
    company: 'Cyber Sync Technologies',
    period: 'Jul 2022 – Jul 2023',
    location: 'Peshawar, Pakistan',
    desc: 'Developed the ZKTeco Biometric Attendance System — a web-based attendance and reporting platform. Built custom React components, handled API integration with Axios, and implemented secure JWT authentication ensuring responsive and user-friendly experience.',
    tags: ['React.js','Tailwind CSS','Bootstrap','Axios','JWT'],
    color: '#7c3aed',
    purple: true,
  },
  {
    role: 'Front End Intern',
    company: 'Geeks Hub',
    period: 'Jan 2022 – Jul 2022',
    location: 'Abbottabad, Pakistan',
    desc: 'Transformed provided designs into pixel-perfect web pages with fidelity to original mock-ups. Optimized existing projects for cross-device and cross-browser compatibility, maintaining high quality standards throughout.',
    tags: ['HTML5','CSS3','JavaScript','Responsive Design'],
    color: '#ff6b6b',
  },
]

export default function Experience() {
  const isMobile = useIsMobile()

  return (
    <section id="experience" style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
          transition={{ duration:.7 }} style={{ textAlign:'center', marginBottom:'3rem' }}>
          <span className="section-tag">// 04. work_history</span>
          <h2 className="section-title">My <span>Experience</span></h2>
          <div className="section-line" />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: isMobile ? '2rem' : '3rem' }}>
          {/* Line */}
          <div style={{
            position: 'absolute', left: 0, top: 0, width: '2px', height: '100%',
            background: 'linear-gradient(180deg,#00f5ff,#7c3aed,transparent)',
          }} />

          {jobs.map(({ role, company, period, location, desc, tags, color, purple }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              style={{ position: 'relative', marginBottom: i < jobs.length - 1 ? '2.5rem' : 0 }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: isMobile ? '-2.35rem' : '-3.45rem',
                top: '0.6rem',
                width: isMobile ? '14px' : '18px',
                height: isMobile ? '14px' : '18px',
                borderRadius: '50%',
                background: color, border: '3px solid #0a0a0f',
                boxShadow: `0 0 12px ${color}`,
                animation: 'pulseDot 2s ease infinite',
              }} />

              {/* Card */}
              <motion.div whileHover={isMobile ? {} : { x: 6 }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px', padding: isMobile ? '1.2rem' : '1.8rem',
                  transition: 'border-color .4s, box-shadow .4s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${color}33`
                  e.currentTarget.style.boxShadow = `0 15px 40px rgba(0,0,0,.3), 0 0 25px ${color}20`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Header row */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-orbitron,sans-serif)',
                    fontSize: isMobile ? '0.82rem' : '1rem',
                    fontWeight: 700, flex: 1,
                  }}>{role}</span>
                  <span style={{
                    fontFamily: 'var(--font-fira,monospace)',
                    fontSize: '0.72rem', color: '#00f5ff',
                    background: 'rgba(0,245,255,.1)',
                    padding: '0.22rem 0.65rem', borderRadius: '20px',
                    border: '1px solid rgba(0,245,255,.15)', whiteSpace: 'nowrap',
                  }}>{period}</span>
                </div>
                <div style={{ color: '#7c3aed', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.15rem' }}>{company}</div>
                <div style={{ color: '#8892a4', fontSize: '0.75rem', marginBottom: '0.85rem' }}>📍 {location}</div>
                <p style={{ color: '#8892a4', lineHeight: 1.8, fontSize: isMobile ? '0.85rem' : '0.93rem', marginBottom: '1rem' }}>{desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {tags.map(t => <span key={t} className={purple ? 'tag-p' : 'tag'}>{t}</span>)}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const projects = [
  {
    icon: '🌿', accent: '#00f5ff',
    iconBg: 'rgba(0,245,255,.12)', iconBorder: 'rgba(0,245,255,.25)',
    title: 'Star Bloom Landscaping',
    sub: 'Plant Import & Export — UAE',
    desc: 'High-performance website for a UAE-based plant business using Next.js SSR for fast load times, improved SEO, and managed full deployment on Hostinger including domain configuration.',
    tags: ['Next.js','Tailwind CSS','SSR/SEO','Hostinger'],
    url: 'https://starbloomlandscaping.ae/',
  },
  {
    icon: '🍔', accent: '#f97316',
    iconBg: 'rgba(249,115,22,.12)', iconBorder: 'rgba(249,115,22,.25)',
    title: 'Batoor.Pk',
    sub: 'Food Delivery Web App',
    desc: 'Responsive food delivery app enabling users in Peshawar to browse and order from local vendors. Component-based React architecture with Bootstrap for mobile-first design.',
    tags: ['React.js','Bootstrap','State Management'],
    url: 'https://peaceful-blancmange-7940df.netlify.app/',
  },
  {
    icon: '🚚', accent: '#7c3aed',
    iconBg: 'rgba(124,58,237,.12)', iconBorder: 'rgba(124,58,237,.25)',
    title: 'Envio By Vista',
    sub: 'Logistics Management Platform',
    desc: 'Enterprise logistics platform with role-based dashboards to manage orders, trucks, and contractors. Material UI for consistent design system and Chart.js for data analytics.',
    tags: ['React.js','Material UI','Redux','Chart.js'],
    url: 'https://dev.enviovista.com/',
    purple: true,
  },
  {
    icon: '🎨', accent: '#ec4899',
    iconBg: 'rgba(236,72,153,.12)', iconBorder: 'rgba(236,72,153,.25)',
    title: 'Appem Design',
    sub: 'Design Showcase — Personal',
    desc: 'Pixel-perfect, fully responsive design across all platforms with smooth card animations implemented in pure CSS and JavaScript for enhanced visual appeal and user interaction.',
    tags: ['HTML5','CSS3','JavaScript','CSS Animations'],
    url: 'https://appem-design.vercel.app/',
  },
  {
    icon: '⛳', accent: '#22c55e',
    iconBg: 'rgba(34,197,94,.12)', iconBorder: 'rgba(34,197,94,.25)',
    title: 'SidCap Family Clone',
    sub: 'GSAP Animation Showcase',
    desc: 'Visually engaging clone featuring interactive GSAP animations, custom scrollbar, and dynamic mouse cursor effects for an immersive, premium user experience.',
    tags: ['HTML5','CSS3','JavaScript','GSAP'],
    url: 'https://sidcup-family-golf-clone-using-html.vercel.app/',
  },
  {
    icon: '📡', accent: '#ef4444',
    iconBg: 'rgba(239,68,68,.12)', iconBorder: 'rgba(239,68,68,.25)',
    title: 'Cable Co',
    sub: 'Interactive Landing Page',
    desc: 'Modern landing page with DOM-based animations and AOS library for smooth on-scroll reveal effects, delivering an engaging and interactive user experience.',
    tags: ['HTML5','Bootstrap','JavaScript','AOS'],
    url: 'https://cableco-ten.vercel.app/',
  },
]

function TiltCard({ children, isMobile }) {
  const ref = useRef(null)

  const onMove = (e) => {
    if (isMobile) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = ((y - rect.height / 2) / rect.height) * -10
    const ry = ((x - rect.width / 2) / rect.width) * 10
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: 'transform .3s ease', transformStyle: 'preserve-3d', height: '100%' }}>
      {children}
    </div>
  )
}

export default function Projects() {
  const isMobile = useIsMobile()

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
          transition={{ duration:.7 }} style={{ textAlign:'center', marginBottom:'3rem' }}>
          <span className="section-tag">// 04. projects</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="section-line" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(min(${isMobile ? '100%' : '320px'}, 100%), 1fr))`,
          gap: isMobile ? '1.2rem' : '1.8rem',
        }}>
          {projects.map(({ icon, iconBg, iconBorder, accent, title, sub, desc, tags, url, purple }, i) => (
            <motion.div key={title}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:.6, delay: isMobile ? 0 : i * 0.08, ease:'easeOut' }}
              style={{ height: '100%' }}
            >
              <TiltCard isMobile={isMobile}>
                <div style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '18px', overflow: 'hidden',
                  height: '100%', transition: 'border-color .4s, box-shadow .4s',
                  display: 'flex', flexDirection: 'column',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = accent
                    e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,.4), 0 0 30px ${accent}28`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Colored accent top bar */}
                  <div style={{
                    height: '3px',
                    background: `linear-gradient(90deg, ${accent}, ${accent}55, transparent)`,
                    flexShrink: 0,
                  }} />

                  {/* Card header */}
                  <div style={{ padding: '1.4rem 1.5rem 0.7rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      background: iconBg, border: `1px solid ${iconBorder}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                    }}>{icon}</div>
                    <a href={url} target="_blank" rel="noreferrer"
                      style={{
                        width: '34px', height: '34px', borderRadius: '8px',
                        background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#8892a4', textDecoration: 'none', fontSize: '1rem',
                        transition: 'all .3s', fontWeight: 700,
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.color = '#0a0a0f'; e.currentTarget.style.borderColor = accent }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.04)'; e.currentTarget.style.color = '#8892a4'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)' }}
                    >↗</a>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '0 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontFamily: 'var(--font-orbitron,sans-serif)', fontSize: isMobile ? '0.88rem' : '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>{title}</div>
                    <div style={{ fontFamily: 'var(--font-fira,monospace)', fontSize: '0.75rem', color: accent, marginBottom: '0.7rem' }}>{sub}</div>
                    <p style={{ color: '#8892a4', fontSize: '0.86rem', lineHeight: 1.75, marginBottom: '1rem', flex: 1 }}>{desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {tags.map(t => <span key={t} className={purple ? 'tag-p' : 'tag'}>{t}</span>)}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

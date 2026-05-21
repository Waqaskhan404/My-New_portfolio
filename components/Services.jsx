'use client'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const services = [
  {
    icon: '⚡',
    title: 'Web App Development',
    desc: 'Blazing-fast, scalable apps with React.js and Next.js — clean architecture, reusable components, and production-ready code delivered on time.',
    tags: ['React.js', 'Next.js', 'TypeScript'],
    color: '#00f5ff',
    gradient: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(0,245,255,0.02))',
    border: 'rgba(0,245,255,0.2)',
    glow: 'rgba(0,245,255,0.18)',
  },
  {
    icon: '🎨',
    title: 'Responsive UI/UX',
    desc: 'Pixel-perfect, mobile-first interfaces that delight users on every device — translating designs into polished, interactive experiences.',
    tags: ['Tailwind CSS', 'Material UI', 'CSS3'],
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(124,58,237,0.02))',
    border: 'rgba(124,58,237,0.2)',
    glow: 'rgba(124,58,237,0.18)',
  },
  {
    icon: '🚀',
    title: 'Performance & SEO',
    desc: 'Optimized Core Web Vitals, SSR/SSG, and technical SEO — your site loads fast, ranks high, and converts visitors into customers.',
    tags: ['Next.js SSR', 'Web Vitals', 'SEO'],
    color: '#ff6b6b',
    gradient: 'linear-gradient(135deg, rgba(255,107,107,0.1), rgba(255,107,107,0.02))',
    border: 'rgba(255,107,107,0.2)',
    glow: 'rgba(255,107,107,0.18)',
  },
  {
    icon: '🔗',
    title: 'API & State Management',
    desc: 'Seamless REST API integration, Redux Toolkit & TanStack Query, and secure JWT authentication — robust data flows for complex applications.',
    tags: ['REST APIs', 'Redux', 'JWT Auth'],
    color: '#f97316',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(249,115,22,0.02))',
    border: 'rgba(249,115,22,0.2)',
    glow: 'rgba(249,115,22,0.18)',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  const isMobile = useIsMobile()

  return (
    <section id="services" style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-tag">// 02. what_i_offer</span>
          <h2 className="section-title">My <span>Services</span></h2>
          <div className="section-line" />
          <p style={{
            color: '#8892a4', maxWidth: '520px', margin: '1.2rem auto 0',
            fontSize: isMobile ? '0.9rem' : '1rem', lineHeight: 1.8,
          }}>
            End-to-end frontend solutions — from idea to deployed product.
            Here&apos;s what I bring to your team or project.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(min(${isMobile ? '100%' : '260px'}, 100%), 1fr))`,
            gap: isMobile ? '1.2rem' : '1.6rem',
            marginBottom: '3.5rem',
          }}
        >
          {services.map(({ icon, title, desc, tags, color, gradient, border, glow }) => (
            <motion.div key={title} variants={item}
              whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
              style={{
                background: gradient,
                border: `1px solid ${border}`,
                borderRadius: '20px',
                padding: isMobile ? '1.5rem' : '2rem',
                position: 'relative', overflow: 'hidden',
                transition: 'box-shadow 0.35s ease, border-color 0.35s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.35), 0 0 35px ${glow}`
                e.currentTarget.style.borderColor = color
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = border
              }}
            >
              {/* Top glow line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                opacity: 0.6,
              }} />

              {/* Icon */}
              <div style={{
                width: isMobile ? '52px' : '60px',
                height: isMobile ? '52px' : '60px',
                borderRadius: '16px',
                background: `radial-gradient(circle at 30% 30%, ${color}22, ${color}08)`,
                border: `1px solid ${border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: isMobile ? '1.5rem' : '1.8rem',
                marginBottom: '1.2rem',
                boxShadow: `0 0 20px ${color}18`,
              }}>{icon}</div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-orbitron, sans-serif)',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '0.75rem',
                letterSpacing: '0.02em',
              }}>{title}</h3>

              {/* Description */}
              <p style={{
                color: '#8892a4', fontSize: isMobile ? '0.85rem' : '0.9rem',
                lineHeight: 1.8, marginBottom: '1.2rem',
              }}>{desc}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {tags.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-fira, monospace)',
                    fontSize: '0.68rem',
                    padding: '0.22rem 0.6rem',
                    borderRadius: '6px',
                    background: `${color}12`,
                    border: `1px solid ${color}30`,
                    color,
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, rgba(0,245,255,0.06), rgba(124,58,237,0.06))',
            border: '1px solid rgba(0,245,255,0.15)',
            borderRadius: '20px',
            padding: isMobile ? '1.8rem 1.4rem' : '2.2rem 3rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <div>
            <div style={{
              fontFamily: 'var(--font-orbitron, sans-serif)',
              fontSize: isMobile ? '1rem' : '1.25rem',
              fontWeight: 700, color: '#fff', marginBottom: '0.4rem',
            }}>Have a project in mind?</div>
            <div style={{ color: '#8892a4', fontSize: isMobile ? '0.85rem' : '0.95rem' }}>
              Let&apos;s turn your idea into a fast, beautiful web experience.
            </div>
          </div>
          <a href="#contact" style={{
            padding: '0.9rem 2.2rem',
            background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
            color: '#0a0a0f',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '0.9rem',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            transition: 'transform 0.25s, box-shadow 0.25s',
            display: 'inline-block',
            boxShadow: '0 0 25px rgba(0,245,255,0.2)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,245,255,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(0,245,255,0.2)' }}
          >
            Let&apos;s Work Together →
          </a>
        </motion.div>

      </div>
    </section>
  )
}

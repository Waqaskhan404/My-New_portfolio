'use client'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const categories = [
  {
    title: 'Core',
    color: '#00f5ff',
    skills: [
      { name: 'React JS',    abbr: 'Re',  color: '#61DAFB', bg: 'rgba(97,218,251,0.12)',  border: 'rgba(97,218,251,0.25)',  level: 95 },
      { name: 'Next JS',     abbr: 'N↗',  color: '#ffffff', bg: 'rgba(255,255,255,0.08)', border: 'rgba(255,255,255,0.2)',  level: 92 },
      { name: 'JavaScript',  abbr: 'JS',  color: '#F7DF1E', bg: 'rgba(247,223,30,0.12)',  border: 'rgba(247,223,30,0.25)',  level: 93 },
      { name: 'HTML5',       abbr: 'H5',  color: '#E34F26', bg: 'rgba(227,79,38,0.12)',   border: 'rgba(227,79,38,0.25)',   level: 98 },
      { name: 'CSS3',        abbr: 'C3',  color: '#1572B6', bg: 'rgba(21,114,182,0.12)',  border: 'rgba(21,114,182,0.25)',  level: 95 },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    color: '#7c3aed',
    skills: [
      { name: 'Tailwind CSS',   abbr: 'TW',  color: '#06B6D4', bg: 'rgba(6,182,212,0.12)',   border: 'rgba(6,182,212,0.25)',   level: 92 },
      { name: 'Material UI',    abbr: 'MUI', color: '#007FFF', bg: 'rgba(0,127,255,0.12)',   border: 'rgba(0,127,255,0.25)',   level: 86 },
      { name: 'Bootstrap',      abbr: 'BS',  color: '#7952B3', bg: 'rgba(121,82,179,0.12)',  border: 'rgba(121,82,179,0.25)',  level: 88 },
      { name: 'Redux Toolkit',  abbr: 'RTK', color: '#764ABC', bg: 'rgba(118,74,188,0.12)',  border: 'rgba(118,74,188,0.25)',  level: 84 },
      { name: 'TanStack Query', abbr: 'TQ',  color: '#FF4154', bg: 'rgba(255,65,84,0.12)',   border: 'rgba(255,65,84,0.25)',   level: 80 },
      { name: 'React Router',   abbr: 'RR',  color: '#CA4245', bg: 'rgba(202,66,69,0.12)',   border: 'rgba(202,66,69,0.25)',   level: 90 },
    ],
  },
  {
    title: 'Tools & Auth',
    color: '#ff6b6b',
    skills: [
      { name: 'Chart JS',   abbr: 'CJ',  color: '#FF6384', bg: 'rgba(255,99,132,0.12)',  border: 'rgba(255,99,132,0.25)',  level: 80 },
      { name: 'Redux Form', abbr: 'RF',  color: '#764ABC', bg: 'rgba(118,74,188,0.12)',  border: 'rgba(118,74,188,0.25)',  level: 78 },
      { name: 'JWT Auth',   abbr: 'JWT', color: '#00f5ff', bg: 'rgba(0,245,255,0.08)',   border: 'rgba(0,245,255,0.2)',    level: 86 },
      { name: 'Git',        abbr: 'GIT', color: '#F05032', bg: 'rgba(240,80,50,0.12)',   border: 'rgba(240,80,50,0.25)',   level: 88 },
    ],
  },
  {
    title: 'Forms & Validation',
    color: '#a78bfa',
    skills: [
      { name: 'React Hook Form', abbr: 'RHF', color: '#EC5990', bg: 'rgba(236,89,144,0.12)', border: 'rgba(236,89,144,0.25)', level: 88 },
      { name: 'Yup',             abbr: 'YUP', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.25)', level: 84 },
      { name: 'Zod',             abbr: 'ZOD', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.25)', level: 82 },
    ],
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }

export default function Skills() {
  const isMobile = useIsMobile()

  return (
    <section id="skills" style={{
      position: 'relative', zIndex: 1, padding: '6rem 2rem',
      background: 'linear-gradient(180deg,transparent,rgba(0,245,255,.02),transparent)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
          transition={{ duration:.7 }} style={{ textAlign:'center', marginBottom:'3rem' }}>
          <span className="section-tag">// 03. tech_stack</span>
          <h2 className="section-title">My <span>Skills</span></h2>
          <div className="section-line" />
        </motion.div>

        {categories.map(({ title, color, skills }) => (
          <div key={title} style={{ marginBottom: '3rem' }}>
            <motion.div
              initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:.5 }}
              style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.4rem' }}
            >
              <span style={{
                fontFamily: 'var(--font-fira,monospace)', color, fontSize: '0.8rem',
                fontWeight: 700, whiteSpace: 'nowrap',
              }}>// {title.toLowerCase().replace(/ /g,'_')}</span>
              <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${color}44, transparent)` }} />
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fill, minmax(min(${isMobile ? '100px' : '120px'}, 100%), 1fr))`,
                gap: isMobile ? '0.75rem' : '1rem',
              }}>
              {skills.map(({ name, abbr, color: sc, bg, border, level }) => {
                const sw = 3
                const sz = isMobile ? 62 : 76
                const r = sz / 2 - sw - 2
                const circ = 2 * Math.PI * r
                return (
                  <motion.div key={name} variants={item}
                    whileHover={{ y: -6, scale: 1.04 }}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '14px',
                      padding: isMobile ? '1rem 0.5rem 1rem' : '1.4rem 0.8rem 1.2rem',
                      textAlign: 'center', cursor: 'default',
                      transition: 'border-color .3s, box-shadow .3s',
                      position: 'relative', overflow: 'hidden',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = sc; e.currentTarget.style.boxShadow = `0 10px 28px ${sc}28` }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    {/* Proficiency % badge */}
                    <span style={{
                      position: 'absolute', top: '0.45rem', right: '0.5rem',
                      fontFamily: 'var(--font-fira,monospace)',
                      fontSize: '0.55rem', color: `${sc}88`, fontWeight: 700,
                    }}>{level}%</span>

                    {/* Circular SVG ring + abbr icon */}
                    <div style={{ position: 'relative', width: sz, height: sz, margin: '0 auto 0.6rem' }}>
                      <svg width={sz} height={sz} style={{ position: 'absolute', top: 0, left: 0 }}>
                        <g transform={`rotate(-90 ${sz / 2} ${sz / 2})`}>
                          <circle cx={sz / 2} cy={sz / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={sw} />
                          <motion.circle
                            cx={sz / 2} cy={sz / 2} r={r}
                            fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round"
                            strokeDasharray={circ}
                            initial={{ strokeDashoffset: circ }}
                            whileInView={{ strokeDashoffset: circ * (1 - level / 100) }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                            style={{ filter: `drop-shadow(0 0 4px ${sc}88)` }}
                          />
                        </g>
                      </svg>
                      <div style={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: isMobile ? '38px' : '46px',
                        height: isMobile ? '38px' : '46px',
                        borderRadius: '10px',
                        background: bg, border: `1px solid ${border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-fira,monospace)',
                        fontWeight: 900, color: sc,
                        fontSize: abbr.length >= 3 ? '0.58rem' : abbr.length === 2 ? '0.78rem' : '0.95rem',
                        letterSpacing: '-0.5px',
                      }}>{abbr}</div>
                    </div>

                    <span style={{
                      fontSize: isMobile ? '0.68rem' : '0.76rem',
                      fontWeight: 600, color: 'rgba(255,255,255,0.82)',
                      display: 'block', lineHeight: 1.3,
                    }}>{name}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

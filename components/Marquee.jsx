'use client'

const ITEMS = [
  '⚛  React.js', '▲  Next.js', '📘  TypeScript', '🔶  JavaScript',
  '🌊  Tailwind CSS', '🔄  Redux Toolkit', '💎  Material UI', '🔗  REST APIs',
  '📊  Chart.js', '🔐  JWT Auth', '🌿  Git', '✦  Framer Motion',
  '☁  Vercel', '📱  Responsive Design', '⚡  Web Performance', '🎯  SEO',
]

const track = [...ITEMS, ...ITEMS]

export default function Marquee() {
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(0,245,255,0.015)',
      padding: '0.9rem 0',
      position: 'relative', zIndex: 1,
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px',
        background: 'linear-gradient(90deg, #0a0a0f, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px',
        background: 'linear-gradient(-90deg, #0a0a0f, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      <div style={{
        display: 'flex', alignItems: 'center',
        gap: '0px',
        animation: 'marquee 35s linear infinite',
        width: 'max-content',
      }}>
        {track.map((item, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center',
            fontFamily: 'var(--font-fira, monospace)',
            fontSize: '0.78rem',
            color: '#8892a4',
            whiteSpace: 'nowrap',
            padding: '0 2rem',
          }}>
            {item}
            <span style={{ color: 'rgba(0,245,255,0.2)', marginLeft: '2rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

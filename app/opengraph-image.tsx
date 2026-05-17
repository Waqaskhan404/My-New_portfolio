import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Waqas Khan — Frontend Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0a0f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background glow orbs */}
        <div style={{
          position: 'absolute', top: '-60px', left: '-60px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,245,255,0.15), transparent)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', right: '-60px',
          width: '350px', height: '350px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18), transparent)',
          display: 'flex',
        }} />

        {/* Border frame */}
        <div style={{
          position: 'absolute', inset: '24px',
          border: '1px solid rgba(0,245,255,0.12)',
          borderRadius: '24px', display: 'flex',
        }} />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0px', zIndex: 1 }}>
          {/* Tag line */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '8px 22px', borderRadius: '50px',
            border: '1px solid rgba(34,197,94,0.4)',
            background: 'rgba(34,197,94,0.1)',
            marginBottom: '28px',
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#22c55e', display: 'flex',
            }} />
            <span style={{ color: '#4ade80', fontSize: '18px', fontWeight: 600 }}>
              Available for new opportunities
            </span>
          </div>

          {/* Name */}
          <div style={{
            fontSize: '88px', fontWeight: 900,
            background: 'linear-gradient(135deg, #00f5ff, #7c3aed, #ff6b6b)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1,
            marginBottom: '20px',
            display: 'flex',
          }}>
            Waqas Khan
          </div>

          {/* Role */}
          <div style={{
            fontSize: '32px', color: '#8892a4',
            marginBottom: '12px', display: 'flex',
          }}>
            Frontend Developer
          </div>

          {/* Stack badges */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            {['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS'].map((tech) => (
              <div key={tech} style={{
                padding: '8px 20px', borderRadius: '8px',
                background: 'rgba(0,245,255,0.08)',
                border: '1px solid rgba(0,245,255,0.25)',
                color: '#00f5ff', fontSize: '18px',
                display: 'flex',
              }}>
                {tech}
              </div>
            ))}
          </div>

          {/* Location */}
          <div style={{
            marginTop: '28px', color: '#8892a4', fontSize: '20px',
            display: 'flex', gap: '8px', alignItems: 'center',
          }}>
            <span>📍</span>
            <span>Islamabad, Pakistan · waqas.khan.40004@gmail.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

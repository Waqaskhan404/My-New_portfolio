'use client'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/waqaskhan123/',
    color: '#0A66C2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Waqaskhan404?tab=repositories',
    color: '#e0e0e0',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/innocentwaqas.khan',
    color: '#1877F2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=+923045454166&text=Hi',
    color: '#25D366',
    icon: (
      <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.668 4.784 1.832 6.768L2 30l7.448-1.804A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.344 19.32c-.348-.174-2.056-1.012-2.376-1.128-.32-.116-.552-.174-.784.174-.232.348-.9 1.128-1.104 1.36-.204.232-.406.26-.754.086-.348-.174-1.468-.54-2.796-1.72-1.032-.92-1.728-2.056-1.932-2.404-.204-.348-.022-.536.152-.708.156-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.088-.174-.784-1.892-1.074-2.59-.284-.68-.572-.588-.784-.598l-.668-.012a1.28 1.28 0 00-.928.436c-.32.348-1.216 1.188-1.216 2.896s1.244 3.36 1.418 3.592c.174.232 2.448 3.736 5.932 5.24.828.358 1.476.572 1.98.732.832.264 1.59.226 2.188.138.668-.1 2.056-.84 2.348-1.652.29-.812.29-1.508.204-1.652-.086-.144-.318-.232-.666-.406z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:waqas.khan.40004@gmail.com',
    color: '#00f5ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      padding: '2.5rem 1.5rem',
      textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-orbitron,sans-serif)', fontSize: '1.4rem', fontWeight: 900,
          background: 'linear-gradient(135deg,#00f5ff,#7c3aed)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', marginBottom: '1.4rem',
        }}>WAQAS KHAN</div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', marginBottom: '1.4rem', flexWrap: 'wrap' }}>
          {socials.map(({ icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              title={label}
              style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none', color: 'rgba(255,255,255,0.6)',
                transition: 'all .3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color
                e.currentTarget.style.color = color
                e.currentTarget.style.boxShadow = `0 0 20px ${color}33`
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >{icon}</a>
          ))}
        </div>

        <p style={{ color: '#8892a4', fontSize: '0.78rem' }}>
          Designed & Built with <span style={{ color: '#00f5ff' }}>♥</span> by Waqas Khan &nbsp;·&nbsp; © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

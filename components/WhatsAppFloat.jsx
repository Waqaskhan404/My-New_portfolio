'use client'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+923045454166&text=Hi"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed', bottom: '28px', right: '28px', zIndex: 9999,
        width: '56px', height: '56px', borderRadius: '50%',
        background: '#25D366', display: 'flex', alignItems: 'center',
        justifyContent: 'center', boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
        transition: 'transform .25s, box-shadow .25s',
        textDecoration: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.12)'
        e.currentTarget.style.boxShadow = '0 6px 32px rgba(37,211,102,0.65)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(37,211,102,0.45)'
      }}
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.668 4.784 1.832 6.768L2 30l7.448-1.804A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.892-1.608l-.42-.252-4.42 1.072 1.104-4.304-.276-.444A11.536 11.536 0 014.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6zm6.344-8.68c-.348-.174-2.056-1.012-2.376-1.128-.32-.116-.552-.174-.784.174-.232.348-.9 1.128-1.104 1.36-.204.232-.406.26-.754.086-.348-.174-1.468-.54-2.796-1.72-1.032-.92-1.728-2.056-1.932-2.404-.204-.348-.022-.536.152-.708.156-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.088-.174-.784-1.892-1.074-2.59-.284-.68-.572-.588-.784-.598l-.668-.012a1.28 1.28 0 00-.928.436c-.32.348-1.216 1.188-1.216 2.896s1.244 3.36 1.418 3.592c.174.232 2.448 3.736 5.932 5.24.828.358 1.476.572 1.98.732.832.264 1.59.226 2.188.138.668-.1 2.056-.84 2.348-1.652.29-.812.29-1.508.204-1.652-.086-.144-.318-.232-.666-.406z"/>
      </svg>
    </a>
  )
}

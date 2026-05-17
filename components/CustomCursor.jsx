'use client'
import { useEffect, useRef } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function CustomCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    if (isMobile) {
      // Hide on mobile
      ring.style.display = 'none'
      dot.style.display = 'none'
      return
    }

    ring.style.display = 'block'
    dot.style.display = 'block'

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let animId

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
      dot.style.opacity = '1'
    }

    const onOver = (e) => {
      const isInteractive = e.target.closest('a, button, [data-hover]')
      ring.style.width = isInteractive ? '44px' : '28px'
      ring.style.height = isInteractive ? '44px' : '28px'
      ring.style.borderColor = isInteractive ? '#7c3aed' : '#00f5ff'
      ring.style.background = isInteractive ? 'rgba(124,58,237,0.12)' : 'transparent'
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      animId = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(animId)
    }
  }, [isMobile])

  return (
    <>
      <div ref={ringRef} style={{
        position: 'fixed',
        width: '28px', height: '28px',
        border: '2px solid #00f5ff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99999,
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'width .25s, height .25s, border-color .25s, background .25s',
        display: 'none',
        willChange: 'left, top',
      }} />
      <div ref={dotRef} style={{
        position: 'fixed',
        width: '6px', height: '6px',
        background: '#00f5ff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99999,
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 10px #00f5ff, 0 0 20px rgba(0,245,255,0.4)',
        display: 'none',
        willChange: 'left, top',
      }} />
    </>
  )
}

'use client'
import { useEffect, useRef } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

const COLORS = ['#00f5ff', '#7c3aed', '#ff6b6b', '#ffffff']

export default function CursorTrail() {
  const canvasRef = useRef(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const particles = []

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    const onMove = (e) => {
      for (let i = 0; i < 4; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3 - 0.8,
          r: Math.random() * 2.5 + 0.8,
          alpha: 0.9,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          decay: Math.random() * 0.02 + 0.018,
        })
      }
    }

    let animId
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.06
        p.alpha -= p.decay
        p.r *= 0.97
        if (p.alpha <= 0 || p.r < 0.1) { particles.splice(i, 1); continue }

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.shadowColor = p.color
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
        ctx.restore()
      }
      animId = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 9998, pointerEvents: 'none' }}
    />
  )
}

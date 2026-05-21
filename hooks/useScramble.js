'use client'
import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'

export function useScramble(target, startDelay = 600) {
  const [text, setText] = useState(() =>
    target.split('').map(c => c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]).join('')
  )
  const frame = useRef(0)

  useEffect(() => {
    frame.current = 0

    // Phase 1 — keep scrambling random chars
    const scrambleInterval = setInterval(() => {
      setText(
        target.split('').map(c =>
          c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join('')
      )
    }, 70)

    // Phase 2 — resolve left-to-right after delay
    const resolveTimeout = setTimeout(() => {
      clearInterval(scrambleInterval)
      const resolveInterval = setInterval(() => {
        frame.current++
        const progress = Math.floor(frame.current * 0.7)
        if (progress >= target.length) {
          setText(target)
          clearInterval(resolveInterval)
          return
        }
        setText(
          target.split('').map((char, i) => {
            if (char === ' ') return ' '
            if (i <= progress) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          }).join('')
        )
      }, 45)
    }, startDelay)

    return () => {
      clearInterval(scrambleInterval)
      clearTimeout(resolveTimeout)
    }
  }, [target, startDelay])

  return text
}

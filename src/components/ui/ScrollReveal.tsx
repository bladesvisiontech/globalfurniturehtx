'use client'

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number          // ms
  direction?: 'up' | 'left' | 'right' | 'none'
  distance?: number       // px
  duration?: number       // ms
  threshold?: number      // 0–1
  once?: boolean
  style?: CSSProperties
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 600,
  threshold = 0.15,
  once = true,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold])

  const translateInit =
    direction === 'up' ? `translateY(${distance}px)` :
    direction === 'left' ? `translateX(-${distance}px)` :
    direction === 'right' ? `translateX(${distance}px)` :
    'none'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0,0)' : translateInit,
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

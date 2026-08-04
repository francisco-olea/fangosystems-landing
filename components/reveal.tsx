'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Delay in ms before the reveal begins once in view */
  delay?: number
  /** Use the clip-path mask reveal instead of the fade/translate */
  mask?: boolean
  /** Slower, more luxurious transition */
  slow?: boolean
}

export function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  mask = false,
  slow = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect reduced motion — reveal immediately.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const inViewport = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return rect.top < vh * 0.92 && rect.bottom > 0
    }

    // Immediate check for content already in view on load (robust against
    // layout shifts from fonts/images that can suppress the observer's first fire).
    let raf1 = 0
    let raf2 = 0
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (inViewport()) setVisible(true)
      })
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(node)

    // Safety net: reveal if a resize/scroll settles it into view.
    const onSettle = () => {
      if (inViewport()) {
        setVisible(true)
        cleanupListeners()
      }
    }
    const cleanupListeners = () => {
      window.removeEventListener('scroll', onSettle)
      window.removeEventListener('resize', onSettle)
    }
    window.addEventListener('scroll', onSettle, { passive: true })
    window.addEventListener('resize', onSettle)

    return () => {
      observer.disconnect()
      cleanupListeners()
      if (raf1) cancelAnimationFrame(raf1)
      if (raf2) cancelAnimationFrame(raf2)
    }
  }, [])

  const base = mask ? 'mask-reveal' : 'reveal'
  const slowClass = slow ? ' reveal-slow' : ''

  return (
    <Tag
      ref={ref}
      className={`${base}${slowClass}${visible ? ' is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

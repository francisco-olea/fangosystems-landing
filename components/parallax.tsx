'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type ParallaxImageProps = {
  src: string
  alt: string
  className?: string
  /** How far the image drifts over the viewport, in px. Positive = slower than scroll. */
  strength?: number
  priority?: boolean
  sizes?: string
}

/**
 * A framed image that gently drifts within its container as it passes
 * through the viewport, plus a subtle scale-on-reveal. Uses requestAnimationFrame
 * and only recomputes while the element is near the viewport.
 */
export function ParallaxImage({
  src,
  alt,
  className = '',
  strength = 60,
  priority = false,
  sizes = '100vw',
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(0)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = wrapRef.current
    if (!node) return

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setInView(true)
      return
    }

    let raf = 0
    const compute = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight
      // progress from -1 (below) to 1 (above)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2)
      setOffset(-progress * strength)
      raf = 0
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting) {
          window.addEventListener('scroll', onScroll, { passive: true })
          compute()
        } else {
          window.removeEventListener('scroll', onScroll)
        }
      },
      { rootMargin: '10% 0px 10% 0px' },
    )

    io.observe(node)
    compute()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [strength])

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        style={{
          transform: `translate3d(0, ${offset}px, 0) scale(${inView ? 1.06 : 1.12})`,
        }}
      />
    </div>
  )
}

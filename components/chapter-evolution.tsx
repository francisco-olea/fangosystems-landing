'use client'

import { useEffect, useRef, useState } from 'react'
import { translations, useLocale } from '@/lib/i18n'

export function ChapterEvolution() {
  const [active, setActive] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const stageRefs = useRef<Array<HTMLDivElement | null>>([])
  const sectionRef = useRef<HTMLElement | null>(null)
  const { locale } = useLocale()
  const copy = locale === 'es' ? translations.es.evolution : translations.en.evolution

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    stageRefs.current.forEach((node, i) => {
      if (!node) return
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i)
        },
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
      )
      io.observe(node)
      observers.push(io)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const updateStickyState = () => {
      const rect = node.getBoundingClientRect()
      const nextSection = document.getElementById('design')
      if (!nextSection) {
        setIsSticky(false)
        return
      }

      const nextRect = nextSection.getBoundingClientRect()
      setIsSticky(rect.bottom < nextRect.top)
    }

    updateStickyState()
    window.addEventListener('scroll', updateStickyState, { passive: true })
    window.addEventListener('resize', updateStickyState)

    return () => {
      window.removeEventListener('scroll', updateStickyState)
      window.removeEventListener('resize', updateStickyState)
    }
  }, [])

  return (
    <section ref={sectionRef} id="evolution" className="relative border-t border-border">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:justify-center">
              <div className={`sticky top-16 z-10 border-b border-border bg-background/95 py-6 backdrop-blur sm:top-20 lg:border-b-0 lg:bg-transparent lg:py-0 lg:backdrop-blur-none ${isSticky ? 'lg:sticky lg:top-0' : 'lg:static lg:top-auto'}`}>
                <span className="text-[11px] font-light uppercase tracking-editorial text-accent">
                  {copy.label}
                </span>
                <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted-foreground sm:mt-8">
                  {copy.intro}
                </p>

                <div className="mt-8 h-px w-full max-w-sm bg-border sm:mt-10 lg:mt-12">
                  <div
                    className="h-px bg-accent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ width: `${((active + 1) / copy.stages.length) * 100}%` }}
                  />
                </div>

                <div className="relative mt-8 h-[3.75rem] overflow-hidden sm:mt-10 sm:h-[5rem] md:h-[7rem]">
                  {copy.stages.map((stage, i) => (
                    <h2
                      key={stage.label}
                      className="absolute inset-0 font-serif text-4xl font-light leading-none tracking-tight transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-5xl md:text-7xl"
                      style={{
                        opacity: active === i ? 1 : 0,
                        transform: `translateY(${active === i ? '0' : active > i ? '-40%' : '40%'})`,
                      }}
                      aria-hidden={active !== i}
                    >
                      {stage.label}
                    </h2>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-16">
            <ol className="pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-0">
              {copy.stages.map((stage, i) => (
                <li
                  key={stage.label}
                  ref={(el) => {
                    stageRefs.current[i] = el
                  }}
                  className="flex min-h-[42svh] flex-col justify-center border-b border-border py-10 sm:min-h-[48svh] sm:py-12 md:min-h-[60svh] lg:min-h-svh lg:py-16"
                >
                  <div className="flex items-baseline gap-6">
                    <span
                      className="font-serif text-lg font-light transition-colors duration-500"
                      style={{ color: active === i ? 'var(--accent)' : 'var(--muted-foreground)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3
                        className="font-serif text-2xl font-light leading-tight transition-colors duration-500 sm:text-3xl md:text-4xl"
                        style={{ color: active === i ? 'var(--foreground)' : 'var(--muted-foreground)' }}
                      >
                        {stage.label}
                      </h3>
                      <p
                        className="mt-4 max-w-md text-sm font-light leading-relaxed transition-opacity duration-500 sm:text-base md:text-lg"
                        style={{
                          color: 'var(--muted-foreground)',
                          opacity: active === i ? 1 : 0.5,
                        }}
                      >
                        {stage.line}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

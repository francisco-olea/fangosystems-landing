'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '@/lib/site'
import { translations, useLocale } from '@/lib/i18n'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const { locale, setLocale } = useLocale()
  const copy = locale === 'es' ? translations.es.header : translations.en.header

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 sm:px-6 md:px-12 md:py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="Fango Systems home">
          <Image
            src="/fangosystemslogo-white.png"
            alt="Fango Systems"
            width={180}
            height={72}
            className={`h-7 w-auto transition-all duration-700 sm:h-8 md:h-10 ${
              scrolled ? 'opacity-100' : 'opacity-95'
            }`}
            priority
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {copy.nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-light tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
            className="rounded-full border border-border px-2.5 py-2 text-[10px] font-light uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-foreground sm:px-3 sm:text-[11px]"
            aria-label="Toggle language"
          >
            {copy.toggle}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-[11px] font-light tracking-wide text-foreground transition-all duration-500 hover:border-accent hover:bg-accent hover:text-accent-foreground sm:px-4 sm:text-[12px] md:px-5 md:text-[13px]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent transition-colors duration-500 group-hover:bg-accent-foreground" />
            {copy.cta}
          </a>
        </div>
      </div>
    </header>
  )
}

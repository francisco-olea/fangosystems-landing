'use client'

import { Reveal } from '@/components/reveal'
import { translations, useLocale } from '@/lib/i18n'

export function ChapterPrinciples() {
  const { locale } = useLocale()
  const copy = locale === 'es' ? translations.es.principles : translations.en.principles

  return (
    <section id="principles" className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-[1600px] px-4 py-24 sm:px-6 sm:py-28 md:px-12 md:py-48">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="mb-8">
              <span className="text-[11px] font-light uppercase tracking-editorial text-accent">
                {copy.label}
              </span>
            </Reveal>
            <Reveal>
              <h2 className="font-serif text-4xl font-light leading-[1.02] tracking-tight text-balance sm:text-5xl md:text-6xl">
                {copy.title}
                <br />
                <span className="italic text-accent">{copy.titleAccent}</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pl-12">
            <ol>
              {copy.items.map((p, i) => (
                <Reveal as="li" key={p} delay={(i % 2) * 100}>
                  <div className="group flex items-baseline gap-4 border-b border-border py-7 sm:gap-6 sm:py-8 md:py-10">
                    <span className="font-serif text-sm font-light text-muted-foreground transition-colors duration-500 group-hover:text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-2xl font-light leading-tight tracking-tight text-balance transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 sm:text-3xl md:text-5xl">
                      {p}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

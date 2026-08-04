'use client'

import { Reveal } from '@/components/reveal'
import { translations, useLocale } from '@/lib/i18n'

export function ChapterDesign() {
  const { locale } = useLocale()
  const copy = locale === 'es' ? translations.es.design : translations.en.design

  return (
    <section id="design" className="relative border-t border-border">
      <div className="mx-auto max-w-[1600px] px-4 py-24 sm:px-6 sm:py-28 md:px-12 md:py-48">
        <div className="max-w-3xl">
          <Reveal className="mb-8">
            <span className="text-[11px] font-light uppercase tracking-editorial text-accent">
              {copy.label}
            </span>
          </Reveal>
          <Reveal>
            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-7xl">
              {copy.title}
              <span className="italic text-muted-foreground"> {copy.titleAccent}</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:mt-16 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {copy.disciplines.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 90}>
              <article className="group relative flex h-full min-h-[14rem] flex-col justify-between bg-background p-6 transition-colors duration-500 hover:bg-card sm:min-h-[16rem] sm:p-8 md:min-h-[19rem] md:p-10">
                <span className="font-serif text-sm font-light text-accent">{d.n}</span>
                <div>
                  <h3 className="font-serif text-xl font-light leading-tight sm:text-2xl md:text-3xl">
                    {d.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                    {d.line}
                  </p>
                </div>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

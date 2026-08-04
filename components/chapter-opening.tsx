'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { translations, useLocale } from '@/lib/i18n'

export function ChapterOpening() {
  const { locale } = useLocale()
  const copy = locale === 'es' ? translations.es.opening : translations.en.opening

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden"
    >
      <Image
        src="/images/hero.png"
        alt="A single shaft of daylight falling across a quiet concrete interior"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,var(--background)_16%,transparent_16%,transparent_84%,var(--background)_84%,var(--background)_100%)] md:bg-[linear-gradient(180deg,rgba(8,28,21,0.72)_0%,rgba(8,28,21,0.18)_32%,rgba(8,28,21,0.35)_62%,rgba(8,28,21,0.96)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pb-10 sm:px-6 sm:pb-20 md:px-12 md:pb-28">
        <Reveal className="mb-6 sm:mb-8">
          <span className="text-[11px] font-light uppercase tracking-editorial text-accent md:text-xs">
            {copy.label}
          </span>
        </Reveal>

        <h1 className="max-w-[11ch] font-serif text-[13vw] font-light leading-[0.9] tracking-tight text-balance sm:max-w-4xl sm:text-[11vw] md:text-[8.5vw] lg:text-[7.5rem]">
          <Reveal as="span" mask slow className="block">
            {copy.title1}
          </Reveal>
          <Reveal as="span" mask slow delay={220} className="mt-1 block italic text-muted-foreground">
            {copy.title2}
          </Reveal>
        </h1>
      </div>

      <Reveal
        delay={900}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 md:right-12 md:flex"
      >
        <span className="text-[11px] font-light uppercase tracking-editorial text-muted-foreground">
          {locale === 'es' ? 'Desplázate' : 'Scroll'}
        </span>
        <span className="block h-10 w-px bg-gradient-to-b from-muted-foreground/60 to-transparent" />
      </Reveal>
    </section>
  )
}

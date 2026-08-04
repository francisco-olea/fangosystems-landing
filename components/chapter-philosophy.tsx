'use client'

import { Reveal } from '@/components/reveal'
import { ParallaxImage } from '@/components/parallax'
import { translations, useLocale } from '@/lib/i18n'

export function ChapterPhilosophy() {
  const { locale } = useLocale()
  const copy = locale === 'es' ? translations.es.philosophy : translations.en.philosophy

  return (
    <section id="philosophy" className="relative mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-48">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-7">
          <Reveal className="mb-10">
            <span className="text-[11px] font-light uppercase tracking-editorial text-accent">
              {copy.label}
            </span>
          </Reveal>

          <Reveal>
            <p className="font-serif text-4xl font-light leading-[1.15] text-balance sm:text-5xl md:text-6xl">
              {copy.heading}
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-12 max-w-xl">
            <p className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              {copy.body1}
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-10 max-w-xl">
            <p className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              {copy.body2}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal mask slow className="h-full">
            <ParallaxImage
              src="/stairs-image.png"
              alt="A minimalist staircase in soft architectural light"
              className="aspect-[4/5] w-full rounded-sm object-cover"
              strength={40}
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

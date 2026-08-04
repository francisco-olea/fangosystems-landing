'use client'

import { Reveal } from '@/components/reveal'
import { ParallaxImage } from '@/components/parallax'
import { translations, useLocale } from '@/lib/i18n'

const FEATURED = [
  {
    name: 'Agriculture',
    img: '/images/industry-agriculture.png',
    alt: 'Orderly rows of crops receding into soft morning mist',
    caption: 'Land, seasons, and the operations that hold them together.',
  },
  {
    name: 'Manufacturing',
    img: '/images/industry-manufacturing.png',
    alt: 'A clean industrial manufacturing space with precise machinery',
    caption: 'Floors where flow is measured in hours saved.',
  },
  {
    name: 'Logistics',
    img: '/images/industry-logistics.png',
    alt: 'A vast minimalist warehouse interior with orderly shelving',
    caption: 'Movement that only looks simple when it is designed well.',
  },
  {
    name: 'Construction',
    img: '/images/industry-architecture.png',
    alt: 'A refined minimalist construction space with natural light',
    caption: 'Projects where coordination and operational clarity make the difference.',
  },
  {
    name: 'Professional Services',
    img: '/images/professional.png',
    alt: 'A contemporary professional setting with a strategic focus',
    caption: 'Teams that need better order, speed, and clearer decisions.',
  },
]

export function ChapterIndustries() {
  const { locale } = useLocale()
  const copy = locale === 'es' ? translations.es.industries : translations.en.industries

  return (
    <section id="industries" className="relative border-t border-border">
      <div className="mx-auto max-w-[1600px] px-4 pt-24 sm:px-6 sm:pt-28 md:px-12 md:pt-48">
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
      </div>

      <div className="mt-12 flex flex-col gap-3 px-4 sm:mt-16 sm:px-6 md:mt-28 md:gap-4 md:px-12">
        {copy.featured.map((item, i) => (
          <Reveal key={item.name} mask slow>
            <figure className="group relative w-full overflow-hidden rounded-sm">
              <ParallaxImage
                src={FEATURED[i].img}
                alt={item.alt}
                className="h-[44svh] w-full sm:h-[54svh] md:h-[82svh]"
                strength={50}
                sizes="100vw"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(8,28,21,0.35) 0%, rgba(8,28,21,0) 30%, rgba(8,28,21,0.15) 60%, rgba(8,28,21,0.85) 100%)',
                }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-8 md:flex-row md:items-end md:justify-between md:p-14">
                <h3 className="font-serif text-3xl font-light leading-none tracking-tight sm:text-4xl md:text-7xl">
                  {item.name}
                </h3>
                <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground md:text-right md:text-base">
                  {item.caption}
                </p>
              </figcaption>
              <span className="absolute left-6 top-6 font-serif text-sm font-light text-accent sm:left-8 sm:top-8 md:left-14 md:top-14">
                {String(i + 1).padStart(2, '0')}
              </span>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-36">
        <Reveal>
          <p className="mb-10 text-[11px] font-light uppercase tracking-editorial text-muted-foreground">
            {copy.footer}
          </p>
        </Reveal>
        <ul className="flex flex-wrap gap-x-10 gap-y-4">
          {copy.all.map((name, i) => (
            <Reveal as="li" key={name} delay={i * 60}>
              <span className="font-serif text-xl font-light text-muted-foreground transition-colors duration-500 hover:text-foreground sm:text-2xl md:text-4xl">
                {name}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

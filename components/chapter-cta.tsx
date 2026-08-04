'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { WHATSAPP_URL } from '@/lib/site'
import { translations, useLocale } from '@/lib/i18n'

export function ChapterCta() {
  const { locale } = useLocale()
  const copy = locale === 'es' ? translations.es.cta : translations.en.cta

  return (
    <section
      id="contact"
      className="relative flex min-h-[90svh] w-full flex-col items-center justify-center overflow-hidden border-t border-border text-center sm:min-h-[95svh] md:min-h-svh"
    >
      <Image
        src="/images/closing.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        className="object-cover opacity-30"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 45%, rgba(8,28,21,0.55) 0%, rgba(8,28,21,0.9) 60%, rgba(8,28,21,1) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 sm:px-6">
        <Reveal className="mb-8 sm:mb-10">
          <span className="text-[11px] font-light uppercase tracking-editorial text-accent">
            {copy.label}
          </span>
        </Reveal>

        <Reveal mask slow>
          <h2 className="font-serif text-5xl font-light leading-[0.98] tracking-tight text-balance sm:text-6xl md:text-8xl">
            {copy.heading}
            {copy.headingAccent ? (
              <>
                <br />
                <span className="italic">{copy.headingAccent}</span>
              </>
            ) : null}
          </h2>
        </Reveal>

        <Reveal delay={200} className="mt-10 sm:mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-sm font-medium text-accent-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:gap-4 hover:bg-[#6fce9f] sm:px-8 sm:py-5 sm:text-base md:px-9"
          >
            <WhatsappIcon className="h-5 w-5" />
            {copy.button}
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-8 text-sm font-light text-muted-foreground sm:text-base">
            {copy.caption}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
    </svg>
  )
}

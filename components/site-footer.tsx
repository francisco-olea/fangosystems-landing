'use client'

import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/site'
import { translations, useLocale } from '@/lib/i18n'

export function SiteFooter() {
  const { locale } = useLocale()
  const copy = locale === 'es' ? translations.es.footer : translations.en.footer

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Image
              src="/fangosystemslogo-white.png"
              alt="Fango Systems"
              width={180}
              height={72}
              className="h-10 w-auto"
            />
            <p className="mt-6 max-w-xs font-serif text-xl font-light italic text-muted-foreground">
              {copy.description}
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-2xl font-light transition-colors duration-300 hover:text-accent md:text-3xl"
            >
              WhatsApp →
            </a>
            <p className="text-sm font-light text-muted-foreground">
              {copy.location}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs font-light text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Fango Systems. {copy.rights}</span>
            <Link href="/aviso-de-privacidad" className="transition-colors duration-300 hover:text-accent">
              {copy.legalLinks.privacy}
            </Link>
            <Link href="/terminos-y-condiciones" className="transition-colors duration-300 hover:text-accent">
              {copy.legalLinks.terms}
            </Link>
          </div>
          <span className="tracking-editorial uppercase">{copy.tagline}</span>
        </div>
      </div>
    </footer>
  )
}

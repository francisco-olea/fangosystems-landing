import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LocaleProvider } from '@/lib/i18n'

export const metadata = {
  title: 'Página no encontrada | Fango Systems',
  description: 'La página que buscas no está disponible en este momento.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <LocaleProvider>
      <main className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-24 md:px-12 md:py-32">
          <div className="space-y-4">
            <p className="text-[11px] font-light uppercase tracking-editorial text-accent">Error 404</p>
            <h1 className="font-serif text-4xl font-light leading-tight md:text-5xl">
              No encontramos la página que buscas.
            </h1>
            <p className="max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              La URL solicitada no existe o fue movida. Puedes volver al inicio o contactar con nosotros para recibir ayuda.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:bg-accent/10"
            >
              Volver al inicio
            </Link>
            <Link
              href="/aviso-de-privacidad"
              className="rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:bg-accent/10"
            >
              Aviso de privacidad
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </LocaleProvider>
  )
}

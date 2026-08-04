import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LocaleProvider } from '@/lib/i18n'

export const metadata = {
  title: 'Aviso de privacidad | Fango Systems',
  description: 'Información sobre el tratamiento de datos personales de Fango Systems.',
  alternates: {
    canonical: '/aviso-de-privacidad',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <LocaleProvider>
      <main className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-24 md:px-12 md:py-32">
        <div className="space-y-4">
          <p className="text-[11px] font-light uppercase tracking-editorial text-accent">Aviso de privacidad</p>
          <h1 className="font-serif text-4xl font-light leading-tight md:text-5xl">
            Protección de datos y transparencia.
          </h1>
          <p className="max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            En Fango Systems tratamos tus datos personales con responsabilidad, finalidad específica y confidencialidad.
          </p>
        </div>

        <div className="space-y-6 text-sm font-light leading-7 text-muted-foreground md:text-base">
          <p>
            Cuando compartes información a través de nuestro sitio, usamos tus datos únicamente para responder tus mensajes,
            gestionar solicitudes de contacto y mejorar la calidad de nuestros servicios.
          </p>
          <p>
            No vendemos ni compartimos tus datos con terceros para fines comerciales, salvo cuando la ley lo requiera o sea
            necesario para prestar los servicios que has solicitado.
          </p>
          <p>
            Puedes contactarnos en cualquier momento para conocer, actualizar o eliminar la información que tenemos sobre ti.
          </p>
        </div>
        </section>
        <SiteFooter />
      </main>
    </LocaleProvider>
  )
}

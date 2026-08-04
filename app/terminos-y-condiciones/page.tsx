import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LocaleProvider } from '@/lib/i18n'

export const metadata = {
  title: 'Términos y condiciones | Fango Systems',
  description: 'Términos y condiciones de uso del sitio web de Fango Systems.',
}

export default function TermsPage() {
  return (
    <LocaleProvider>
      <main className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-24 md:px-12 md:py-32">
        <div className="space-y-4">
          <p className="text-[11px] font-light uppercase tracking-editorial text-accent">Términos y condiciones</p>
          <h1 className="font-serif text-4xl font-light leading-tight md:text-5xl">
            Uso del sitio y acuerdos básicos.
          </h1>
          <p className="max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Al utilizar este sitio aceptas las condiciones descritas a continuación.
          </p>
        </div>

        <div className="space-y-6 text-sm font-light leading-7 text-muted-foreground md:text-base">
          <p>
            El contenido de este sitio tiene fines informativos y de presentación de nuestros servicios. Fango Systems puede
            modificar o actualizar el contenido sin previo aviso.
          </p>
          <p>
            El uso de este sitio debe ser responsable y respetuoso. Queda prohibido utilizarlo para actividades ilegales,
            engañosas o que afecten la seguridad o integridad del sitio.
          </p>
          <p>
            Cualquier interacción a través de formularios, correo o WhatsApp se regirá por las políticas aplicables y por la
            buena fe entre las partes.
          </p>
        </div>
        </section>
        <SiteFooter />
      </main>
    </LocaleProvider>
  )
}

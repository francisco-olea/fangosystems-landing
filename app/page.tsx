import { SiteHeader } from '@/components/site-header'
import { ChapterOpening } from '@/components/chapter-opening'
import { ChapterPhilosophy } from '@/components/chapter-philosophy'
import { ChapterEvolution } from '@/components/chapter-evolution'
import { ChapterDesign } from '@/components/chapter-design'
import { ChapterIndustries } from '@/components/chapter-industries'
import { ChapterPrinciples } from '@/components/chapter-principles'
import { ChapterCta } from '@/components/chapter-cta'
import { SiteFooter } from '@/components/site-footer'
import { LocaleProvider } from '@/lib/i18n'

export const metadata = {
  title: 'Fango Systems — Diseñadores de operaciones de negocio',
  description:
    'Fango Systems es una consultora mexicana de evolución digital. Diseñamos claridad operativa para negocios en crecimiento.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Page() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <main className="page-enter">
        <ChapterOpening />
        <ChapterPhilosophy />
        <ChapterEvolution />
        <ChapterDesign />
        <ChapterIndustries />
        <ChapterPrinciples />
        <ChapterCta />
      </main>
      <SiteFooter />
    </LocaleProvider>
  )
}

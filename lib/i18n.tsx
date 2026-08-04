'use client'

import { createContext, useContext, useMemo, useState, type Dispatch, type SetStateAction, type ReactNode } from 'react'

export type Locale = 'es' | 'en'

type LocaleContextValue = {
  locale: Locale
  setLocale: Dispatch<SetStateAction<Locale>>
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export const translations = {
  es: {
    header: {
      nav: [
        ['Filosofía', '#philosophy'],
        ['Evolución', '#evolution'],
        ['Qué diseñamos', '#design'],
        ['Industrias', '#industries'],
      ] as Array<[string, string]>,
      cta: 'Hablemos',
      toggle: 'EN',
    },
    opening: {
      label: 'Evolución digital',
      title1: 'Todo funciona.',
      title2: 'Pero nada fluye.',
    },
    philosophy: {
      label: 'Capítulo 01 — Filosofía',
      heading: 'Cada negocio en crecimiento llega a un punto en que sus operaciones importan más que su esfuerzo.',
      body1:
        'Los negocios no evolucionan porque adopten más tecnología. Evolucionan cuando sus operaciones se vuelven más simples, más claras y más intencionales. La tecnología es solo el material que usamos para dar forma a esa claridad.',
      body2:
        'Fango Systems es el aliado que diseña ese flujo operativo: con calma, intención y visión de largo plazo.',
    },
    evolution: {
      label: 'Capítulo 02 — Evolución digital',
      intro: 'La evolución no es un producto. Es un paso: del esfuerzo individual hacia un flujo colectivo.',
      stages: [
        {
          label: 'Personas',
          line: 'Todo empieza en las personas que sostienen el negocio cada día y en el conocimiento que cargan.',
        },
        {
          label: 'Procesos',
          line: 'Seguimos cómo realmente se mueve el trabajo: los caminos reales, no los dibujados.',
        },
        {
          label: 'Sistemas',
          line: 'Diseñamos sistemas que sostienen esos procesos con estructura y calma.',
        },
        {
          label: 'Automatización',
          line: 'Lo repetitivo desaparece de fondo para que la atención vuelva a lo que importa.',
        },
        {
          label: 'Agentes IA',
          line: 'Agentes inteligentes amplían el equipo y trabajan dentro de la operación, no alrededor de ella.',
        },
        {
          label: 'Flujo de negocio',
          line: 'Todo se mueve como uno solo. El negocio ya no corre por el esfuerzo: fluye.',
        },
      ],
    },
    design: {
      label: 'Capítulo 03 — Lo que diseñamos',
      title: 'Tres disciplinas,',
      titleAccent: 'una filosofía.',
      disciplines: [
        {
          n: '01',
          title: 'Diseño operativo',
          line: 'Damos forma a cómo funciona realmente un negocio antes de escribir una sola línea de código.',
        },
        {
          n: '02',
          title: 'Integración de sistemas',
          line: 'Conectamos herramientas dispersas para que trabajen como una sola corriente coherente.',
        },
        {
          n: '03',
          title: 'Agentes IA',
          line: 'Una inteligencia silenciosa que opera dentro del negocio, junto al equipo.',
        },
      ],
    },
    industries: {
      label: 'Capítulo 04 — Industrias',
      title: 'Negocios reales,',
      titleAccent: 'entornos reales.',
      featured: [
        {
          name: 'Agricultura',
          alt: 'Filas ordenadas de cultivos bajo una neblina matutina',
          caption: 'Tierra, estaciones y las operaciones que las sostienen.',
        },
        {
          name: 'Manufactura',
          alt: 'Un espacio industrial limpio y preciso con maquinaria',
          caption: 'Pisos donde el flujo se mide en horas ahorradas.',
        },
        {
          name: 'Logística',
          alt: 'Un almacén minimalista y ordenado con estanterías',
          caption: 'Movimiento que solo parece simple cuando está bien diseñado.',
        },
        {
          name: 'Construcción',
          alt: 'Un espacio de construcción elegante y funcional con luz natural',
          caption: 'Obras donde la coordinación y la claridad operativa marcan la diferencia.',
        },
        {
          name: 'Servicios profesionales',
          alt: 'Un entorno profesional contemporáneo con enfoque estratégico',
          caption: 'Equipos que necesitan orden, rapidez y decisiones más claras.',
        },
      ],
      all: ['Construcción', 'Espacios industriales', 'Agricultura', 'Logística', 'Manufactura', 'Servicios profesionales', 'Seguros'],
      footer: 'Y las operaciones detrás de',
    },
    principles: {
      label: 'Capítulo 05 — Principios',
      title: 'Menos software.',
      titleAccent: 'Más flujo.',
      items: [
        'Comprensión profunda de las operaciones',
        'Implementación ágil y deliberada',
        'Tecnología que se adapta a las personas',
        'Soluciones elegantes y silenciosas',
        'Claridad operativa',
      ],
    },
    cta: {
      label: 'Capítulo 06 — Invitación',
      heading: '¿Listo para que tu negocio',
      headingAccent: 'fluya?',
      button: 'Inicia la conversación por WhatsApp',
      caption: 'Sin formularios. Sin ruido. Solo una conversación.',
    },
    footer: {
      description: 'Diseñadores de operaciones empresariales.',
      location: 'Evolución digital, diseñada en México.',
      rights: 'Todos los derechos reservados.',
      tagline: 'Menos software. Más flujo.',
      legalLinks: {
        privacy: 'Aviso de privacidad',
        terms: 'Términos y condiciones',
      },
    },
  },
  en: {
    header: {
      nav: [
        ['Philosophy', '#philosophy'],
        ['Evolution', '#evolution'],
        ['What we design', '#design'],
        ['Industries', '#industries'],
      ] as Array<[string, string]>,
      cta: 'Let\'s talk',
      toggle: 'ES',
    },
    opening: {
      label: 'Digital evolution',
      title1: 'Everything works.',
      title2: 'But nothing flows.',
    },
    philosophy: {
      label: 'Chapter 01 — Philosophy',
      heading: 'Every growing business reaches a point where its operations matter more than its effort.',
      body1:
        'Businesses do not evolve because they adopt more technology. They evolve when their operations become simpler, clearer, and more intentional. Technology is merely the material we use to shape that clarity.',
      body2:
        'Fango Systems is the partner that designs that operational flow — quietly, deliberately, and for the long term.',
    },
    evolution: {
      label: 'Chapter 02 — Digital Evolution',
      intro: 'Evolution is not a product. It is a passage — from individual effort toward collective flow.',
      stages: [
        {
          label: 'People',
          line: 'It begins with the people who carry the business every day, and the knowledge they hold.',
        },
        {
          label: 'Processes',
          line: 'We trace how work actually moves — the real paths, not the drawn ones.',
        },
        {
          label: 'Systems',
          line: 'We design systems that hold those processes with structure and calm.',
        },
        {
          label: 'Automation',
          line: 'The repetitive quietly disappears, so attention returns to what matters.',
        },
        {
          label: 'AI Agents',
          line: 'Intelligent agents extend the team, working within the operation, not around it.',
        },
        {
          label: 'Business Flow',
          line: 'Everything moves as one. The business no longer runs on effort — it flows.',
        },
      ],
    },
    design: {
      label: 'Chapter 03 — What we design',
      title: 'Three disciplines,',
      titleAccent: 'one philosophy.',
      disciplines: [
        {
          n: '01',
          title: 'Operational Design',
          line: 'We shape how a business truly works before a single line of code exists.',
        },
        {
          n: '02',
          title: 'System Integrations',
          line: 'Scattered tools brought into a single, coherent movement.',
        },
        {
          n: '03',
          title: 'AI Agents',
          line: 'Quiet intelligence that works inside the operation, alongside the team.',
        },
      ],
    },
    industries: {
      label: 'Chapter 04 — Industries',
      title: 'Real businesses,',
      titleAccent: 'real environments.',
      featured: [
        {
          name: 'Agriculture',
          alt: 'Orderly rows of crops receding into soft morning mist',
          caption: 'Land, seasons, and the operations that hold them together.',
        },
        {
          name: 'Manufacturing',
          alt: 'A clean industrial manufacturing space with precise machinery',
          caption: 'Floors where flow is measured in hours saved.',
        },
        {
          name: 'Logistics',
          alt: 'A vast minimalist warehouse interior with orderly shelving',
          caption: 'Movement that only looks simple when it is designed well.',
        },
        {
          name: 'Construction',
          alt: 'A refined, functional construction space with natural light',
          caption: 'Projects where coordination and operational clarity make the difference.',
        },
        {
          name: 'Professional Services',
          alt: 'A contemporary professional setting with a strategic focus',
          caption: 'Teams that need better order, speed, and clearer decisions.',
        },
      ],
      all: ['Construction', 'Industrial Spaces', 'Agriculture', 'Logistics', 'Manufacturing', 'Professional Services', 'Insurance'],
      footer: 'And the operations behind',
    },
    principles: {
      label: 'Chapter 05 — Principles',
      title: 'Less software.',
      titleAccent: 'More flow.',
      items: ['Deep understanding of operations', 'Rapid, deliberate implementation', 'Technology that adapts to people', 'Elegant, quiet solutions', 'Operational clarity'],
    },
    cta: {
      label: 'Chapter 06 — An invitation',
      heading: 'Ready for your business to',
      headingAccent: 'flow?',
      button: 'Start the conversation on WhatsApp',
      caption: 'No forms. No noise. Just a conversation.',
    },
    footer: {
      description: 'Designers of business operations.',
      location: 'Digital evolution, designed in México.',
      rights: 'All rights reserved.',
      tagline: 'Less software. More flow.',
      legalLinks: {
        privacy: 'Privacy policy',
        terms: 'Terms and conditions',
      },
    },
  },
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es')
  const value = useMemo(() => ({ locale, setLocale }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }

  return context
}

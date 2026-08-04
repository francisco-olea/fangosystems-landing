import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fango Systems — Diseñadores de operaciones de negocio',
  description:
    'Fango Systems es una consultora mexicana de evolución digital. Diseñamos claridad operativa para negocios en crecimiento. Menos software. Más flujo.',
  generator: 'v0.app',
  icons: {
    icon: '/iconofango.ico',
  },
  openGraph: {
    title: 'Fango Systems — Diseñadores de operaciones de negocio',
    description:
      'Diseñamos claridad operativa para negocios en crecimiento. Menos software. Más flujo.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#081c15',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${manrope.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

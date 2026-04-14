import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Viasentra | Plataforma de Gestión Operativa y Seguridad',
  description: 'Centraliza operación, seguridad y cumplimiento en una sola plataforma para transporte en faena. Controla servicios, checklists, alertas y aprobaciones.',
  icons: {
    icon: '/viasentra-favicon.png',
    shortcut: '/viasentra-favicon.png',
    apple: '/viasentra-favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

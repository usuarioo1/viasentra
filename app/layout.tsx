import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://viasentra.cl"
const siteName = "Viasentra"
const siteDescription =
  "Plataforma web para gestión operativa, seguridad, checklists, alertas y trazabilidad en servicios de transporte y operaciones en faena."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Viasentra | Gestión operativa y seguridad en faena",
    template: "%s | Viasentra",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "gestión operativa",
    "seguridad operacional",
    "transporte en faena",
    "checklists digitales",
    "trazabilidad operacional",
    "reportes de peligro",
    "tarjetas stop",
    "dashboards de seguridad",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName,
    title: "Viasentra | Gestión operativa y seguridad en faena",
    description: siteDescription,
    images: [
      {
        url: "/viasentra-favicon.png",
        width: 1200,
        height: 630,
        alt: "Viasentra, plataforma de gestión operativa y seguridad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viasentra | Gestión operativa y seguridad en faena",
    description: siteDescription,
    images: ["/viasentra-favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/viasentra-favicon.png",
    shortcut: "/viasentra-favicon.png",
    apple: "/viasentra-favicon.png",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/viasentra-favicon.png`,
      email: "contacto@viasentra.cl",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "es-CL",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: siteName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description: siteDescription,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "CLP",
        availability: "https://schema.org/InStock",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}

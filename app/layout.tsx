import type { Metadata, Viewport } from "next"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/jetbrains-mono/400.css"
import "@fontsource/space-grotesk/400.css"
import "@fontsource/space-grotesk/500.css"
import "@fontsource/space-grotesk/600.css"
import "@fontsource/space-grotesk/700.css"
import { MotionProvider } from "components/providers"
import { JsonLd } from "components/shared"
import { SITE_CONFIG } from "lib/constants"
import "styles/tailwind.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "AI agent infrastructure",
    "LLMOps",
    "AI orchestration",
    "stateful AI memory",
    "agent workflow automation",
    "AI deployment platform",
    "production AI infrastructure",
    "scalable inference",
    "AI observability",
    "agentic systems",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description:
      "Frontend generation gives you momentum. AutoRail gives you the infrastructure to sustain it. Launching in one week.",
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_CONFIG.twitterHandle,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description:
      "Frontend generation gives you momentum. AutoRail gives you the infrastructure to sustain it.",
    images: [`${SITE_CONFIG.url}/twitter-card.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd type="organization" />
        <JsonLd type="software" />
        <JsonLd type="webpage" />
      </head>
      <body className="min-h-screen bg-void-black font-[family-name:var(--font-inter)] text-cloud-white antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}

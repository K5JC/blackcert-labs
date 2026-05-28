import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AuthLokr — Behavioral Identity Risk Detection | Catch Risky Users Microsoft Misses',
  description:
    'AuthLokr detects insider threats and risky users Microsoft Entra ID P2 misses — through AI-powered behavioral baselines and real-time anomaly detection. $15–20K/month flat rate.',
  keywords: [
    'behavioral identity security',
    'insider threat detection',
    'Microsoft Entra ID',
    'identity risk detection',
    'privileged identity management',
    'UEBA alternative',
    'zero trust security',
  ],
  openGraph: {
    title: 'AuthLokr — Catch the Risky Users Microsoft Misses',
    description:
      'AI-powered behavioral baselines detect insider threats and compromised accounts P2 misses. Flat-rate SaaS for Microsoft Entra ID environments.',
    url: 'https://authlokr.com',
    siteName: 'AuthLokr',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AuthLokr — Behavioral Identity Risk Detection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuthLokr — Behavioral Identity Risk Detection',
    description: 'Entra ID P2 flags risky sign-ins. AuthLokr builds behavioral baselines P2 doesn\'t provide.',
  },
  metadataBase: new URL('https://authlokr.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}

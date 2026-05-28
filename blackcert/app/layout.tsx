import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'BlackCert | AI Security & Governance',
  description: 'Strategic security consulting for Microsoft 365 environments.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async defer src="https://px.ads.linkedin.com/collect/?pid=YOUR_LINKEDIN_ID&fmt=js" />
      </head>
      <body className="bg-slate-900 text-white">{children}</body>
    </html>
  )
}
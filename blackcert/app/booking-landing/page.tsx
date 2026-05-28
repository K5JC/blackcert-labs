'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function BookingLanding() {
  useEffect(() => {
    // Fire LinkedIn Insight Tag pixel on this page
if ((window as any).lintrk) {
  (window as any).lintrk('track', { conversion_id: 'booking-landing' })
}
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-blue-400">20-Minute Strategic Briefing</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-2">
            Understand what your Microsoft 365 environment is exposing
          </p>
          
          <p className="text-3xl font-bold text-blue-400 my-6">
            $2,500 – $5,000
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
            <p className="text-slate-300 mb-4 font-semibold">What you'll get:</p>
            <ul className="text-left text-slate-400 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                <span>Strategic conversation about your security posture</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                <span>Clarity on Copilot and AI exposure</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                <span>Clear recommendation on next steps</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-400 mb-8">
            After you book, we'll send you a detailed overview of what to expect and which engagement level matches your needs.
          </p>
        </div>

        <a 
          href="https://bookings.cloud.microsoft.com/book/BlackCert1@blackcert.com/?ismsaljsauthenabled=true"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition transform hover:scale-105 mb-4 text-center text-white"
        >
          Continue to Book
        </a>

        <div className="text-center text-slate-500 text-sm">
          <p>or call us directly: <a href="tel:+17203148820" className="text-blue-400 hover:text-blue-300">+1 720-314-8820</a></p>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <Link href="/" className="text-slate-400 hover:text-slate-300 transition text-sm">
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

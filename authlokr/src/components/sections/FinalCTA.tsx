'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="demo" className="section border-t border-border-dim">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,102,255,0.18) 0%, rgba(0,212,255,0.08) 50%, rgba(0,0,0,0) 100%)',
            }}
          />
          <div
            className="absolute inset-0 border rounded-3xl"
            style={{ borderColor: 'rgba(0,212,255,0.2)' }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30"
            style={{
              background: 'radial-gradient(ellipse at center, #0066FF 0%, transparent 70%)',
            }}
          />

          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            <p className="section-label justify-center flex">See for yourself</p>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight">
              See what your tenant is hiding.
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Most customers are surprised by what AuthLokr surfaces in the first 48 hours
              of connecting their tenant. Book a 20-minute call — we&rsquo;ll discuss your
              current identity risk posture and show exactly how AuthLokr addresses what
              your stack is missing.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="work@company.com"
                  required
                  className="flex-1 px-4 py-4 rounded-xl bg-black/60 border border-border-dim text-white placeholder-gray-600 focus:outline-none focus:border-cyber-cyan transition-colors text-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-7 py-4 rounded-xl font-semibold text-sm text-black whitespace-nowrap transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg, #00D4FF 0%, #0066FF 100%)' }}
                >
                  {loading ? 'Sending…' : 'Book a Demo'}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-risk-low font-semibold text-lg mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#00CC6615"/>
                  <path d="M7 12l4 4 6-6" stroke="#00CC66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                You&rsquo;re on the list. Expect a reply within one business day.
              </div>
            )}

            <p className="text-sm text-gray-600">
              Or{' '}
              <a
                href="mailto:info@authlokr.com"
                className="text-cyber-cyan hover:underline"
              >
                email us directly
              </a>{' '}
              &mdash; info@authlokr.com
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-10 border-t border-white/5">
              {[
                { value: 'No agents', label: 'Agentless setup' },
                { value: '30 days', label: 'To first baseline' },
                { value: '60–80%', label: 'Fewer false positives' },
                { value: '$15–20K', label: 'Flat monthly rate' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-2xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

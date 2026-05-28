import { FadeIn } from '@/components/ui/FadeIn'
import Link from 'next/link'

const features = [
  'SanctumOS behavioral baseline learning (30-day)',
  'Real-time anomaly detection across 6 dimensions',
  'Context-aware risk scoring with explainable AI',
  'Privileged Identity Management (PIM) workflows',
  'Account lifecycle monitoring (privilege escalation, MFA tampering)',
  'One-click response: disable account, revoke sessions, remove access',
  'Complete audit trail for every action taken',
  'Email, webhook, and Microsoft Teams alerts',
  'Dedicated onboarding and customer success',
  'Up to 10,000 users — flat rate, no per-user pricing',
]

const comparisons = [
  { label: 'AuthLokr', price: '$15–20K', suffix: '/month', note: 'Flat rate · Up to 10K users · 60–70% cheaper than P2 alone', highlight: true },
  { label: 'Entra ID P2', price: '$50K', suffix: '/month', note: '5,000 users @ $10/user (eff. July 2026) · No behavioral baselines', highlight: false },
  { label: 'Microsoft Full Stack', price: '$110K+', suffix: '/month', note: 'P2 ($50K) + Defender for Identity ($30K) + Sentinel ($30K+)', highlight: false },
  { label: 'Traditional UEBA', price: '$25–50K', suffix: '/month', note: 'Per-user + 90-day deployment + dedicated analysts', highlight: false },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section border-t border-border-dim">
      <div className="section-inner">
        <FadeIn>
          <p className="section-label">Pricing</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 max-w-2xl">
            Flat-rate pricing.{' '}
            <span className="text-gradient">No per-user tax.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mb-16">
            Predictable, transparent pricing at every stage of growth.
            The more users you have, the better the economics get.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main pricing card */}
          <FadeIn delay={0.05} className="lg:col-span-2">
            <div
              className="rounded-2xl p-8 lg:p-10 border"
              style={{
                background: 'linear-gradient(135deg, rgba(0,102,255,0.1) 0%, rgba(0,212,255,0.05) 100%)',
                borderColor: 'rgba(0,212,255,0.3)',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 mb-2">
                <span
                  className="text-5xl md:text-6xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #00D4FF 0%, #0066FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  $15–20K
                </span>
                <span className="text-gray-400 text-xl pb-1">/ month</span>
              </div>
              <p className="text-gray-500 text-sm mb-8">
                Flat rate for up to 10,000 users. No seat counting. No surprise invoices.
              </p>

              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-risk-low mt-0.5 shrink-0">✓</span>
                    <span className="text-sm text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#waitlist"
                  className="flex-1 text-center py-3.5 rounded-xl font-semibold text-sm text-black transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #00D4FF 0%, #0066FF 100%)' }}
                >
                  Book a 30-Day Pilot
                </Link>
                <Link
                  href="#demo"
                  className="flex-1 text-center py-3.5 rounded-xl font-semibold text-sm text-cyber-cyan border border-cyber-cyan/30 hover:bg-cyber-cyan/5 transition-colors"
                >
                  Schedule a Demo
                </Link>
              </div>

              <p className="text-xs text-gray-600 text-center mt-4">
                30-day proof-of-concept available for qualified organizations.
                No credit card required to start.
              </p>
            </div>
          </FadeIn>

          {/* Comparison column */}
          <FadeIn delay={0.15}>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-5">
                vs. Alternatives (5K users)
              </p>
              {comparisons.map((c) => (
                <div
                  key={c.label}
                  className={`rounded-xl p-5 border ${
                    c.highlight
                      ? 'border-cyber-cyan/30 bg-cyber-cyan/5'
                      : 'border-border-dim bg-surface'
                  }`}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <span
                      className={`text-sm font-semibold ${
                        c.highlight ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {c.label}
                    </span>
                    <span
                      className={`font-bold ${
                        c.highlight ? 'text-cyber-cyan' : 'text-gray-600 line-through decoration-risk-high/40'
                      }`}
                    >
                      {c.price}
                      <span className="text-xs font-normal">{c.suffix}</span>
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{c.note}</p>
                </div>
              ))}

              <div className="bg-surface-2 rounded-xl p-5 border border-border-dim mt-6">
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="text-white font-semibold">ROI calculation:</span>{' '}
                  AuthLokr is <span className="text-cyber-cyan">60–70% cheaper</span> than P2 alone at 5,000 users — and the full Microsoft security stack runs{' '}
                  <span className="text-risk-high">$110K+/month</span> vs. our flat rate. One insider incident averages{' '}
                  <span className="text-risk-high">$500K+</span> in damages. AuthLokr pays for itself the first time it catches one.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

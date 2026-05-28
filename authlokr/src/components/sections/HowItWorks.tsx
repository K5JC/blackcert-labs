import { FadeIn } from '@/components/ui/FadeIn'

const steps = [
  {
    number: '01',
    title: 'Connect your tenant',
    subtitle: 'Guided setup',
    description:
      'Point AuthLokr at your Microsoft Entra ID tenant with read-only Graph API access. No agents. No endpoint installs. No infrastructure changes. Your IT team will appreciate this.',
    detail: '✓ Read-only access — we never modify your tenant · ✓ Standard OAuth 2.0 flow — revocable anytime',
  },
  {
    number: '02',
    title: 'SanctumOS learns your users',
    subtitle: 'Starts immediately',
    description:
      'Detection begins from day one — SanctumOS analyzes recent activity and starts identifying behavioral patterns right away. Over 30 days the baseline deepens into a precise individual profile: when they sign in, from where, on which devices, accessing which resources, and at what volume. Not an org average. That person.',
    detail: 'No raw log data retained · Analyzed in-stream only · Baseline matures over 30 days',
  },
  {
    number: '03',
    title: 'Detect, score, and contain',
    subtitle: 'Continuous',
    description:
      'Every user action is scored against their personal baseline in real time. Anomalies surface as prioritized alerts with plain-English reasoning. One click to investigate, disable, or revoke — from a single dashboard.',
    detail: 'Real-time scoring · Explainable AI · One-click response',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section border-t border-border-dim">
      <div className="section-inner">
        <FadeIn>
          <p className="section-label">How AuthLokr Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 max-w-2xl">
            Simple to connect.
            <span className="text-gradient"> Watching within hours. </span>
            Learning for life.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mb-16">
            No rip-and-replace. Works alongside your existing Entra ID deployment.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-[2.25rem] left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-border-dim via-cyber-cyan/30 to-border-dim" />

          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="relative flex flex-col gap-4">
                {/* Step number bubble */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm border border-border-dim bg-black text-cyber-cyan z-10">
                  {step.number}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <span className="text-xs font-semibold text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded-full border border-cyber-cyan/20">
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p className="text-xs text-gray-600 font-mono border-l-2 border-border-dim pl-3">
                    {step.detail}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

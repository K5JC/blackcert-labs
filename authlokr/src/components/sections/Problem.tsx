import { FadeIn } from '@/components/ui/FadeIn'

const scenarios = [
  {
    title: 'Sign-in from Russia 4 hours after Denver login',
    detail:
      'Device was compliant. Conditional access passed. Standard tools logged a "risky sign-in" but took no action — the device score was clean.',
    authLokr: 'Impossible travel detected. Probability: 0.003% for this user\'s pattern. Risk score: 0.94 HIGH.',
  },
  {
    title: 'Contractor requests 6 new admin permissions over 30 days',
    detail:
      'Each individual request was approved through normal channels. Other products saw only approved, authorized access — no anomaly flagged.',
    authLokr: 'Privilege creep detected. Access pattern deviation +340% above 30-day baseline. Risk score: 0.81 HIGH.',
  },
  {
    title: 'Employee downloads 10× normal file volume before resignation',
    detail:
      'Files were in scope for their role. Existing tools saw permitted access. No DLP trigger. The exfiltration was invisible to every existing control.',
    authLokr: 'Volume anomaly detected. 10.4× above established baseline. Behavioral risk score: 0.88 HIGH.',
  },
  {
    title: 'MFA-approved session from a compromised device',
    detail:
      'Authentication was valid. MFA passed. Device appeared compliant. Existing tools saw no anomaly — the attacker already had a foothold.',
    authLokr: 'Device never seen before + impossible travel + access pattern deviation. Risk score: 0.91 HIGH.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section border-t border-border-dim">
      <div className="section-inner">
        <FadeIn>
          <p className="section-label">The Identity Blind Spot</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl">
            Your security stack monitors known threats.
            <span className="text-gradient"> AuthLokr monitors individual behavior.</span>
          </h2>
        </FadeIn>

        {/* The 60% stat */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 my-12 p-8 rounded-2xl border border-border-dim bg-surface/40">
            <div
              className="text-7xl md:text-8xl font-bold leading-none shrink-0"
              style={{
                background: 'linear-gradient(135deg, #00D4FF 0%, #0066FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              60%
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
                of breaches involve authorized users behaving abnormally.
              </p>
              <p className="text-gray-500 mt-2 text-sm">
                Insider threats. Compromised accounts. Social engineering victims. These are threats traditional identity tools were never designed to catch.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Scenario cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {scenarios.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-surface border border-border-dim rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="p-6 flex-1">
                  <p className="text-sm font-semibold text-white leading-snug mb-3">
                    {s.title}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.detail}</p>

                  {/* P2 verdict */}
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#111] mb-3">
                    <span className="text-risk-high mt-0.5 text-sm shrink-0">✗</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        Other Products
                      </p>
                      <p className="text-xs text-gray-600">No alert generated.</p>
                    </div>
                  </div>

                  {/* AuthLokr verdict */}
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-risk-low/5 border border-risk-low/20">
                    <span className="text-risk-low mt-0.5 text-sm shrink-0">✓</span>
                    <div>
                      <p className="text-xs font-semibold text-cyber-cyan uppercase tracking-wider mb-1">
                        AuthLokr
                      </p>
                      <p className="text-xs text-gray-400 font-mono leading-relaxed">{s.authLokr}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

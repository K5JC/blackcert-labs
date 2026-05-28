import { FadeIn } from '@/components/ui/FadeIn'

const dimensions = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h4M18 12h4M12 2v4M12 18v4"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Location Intelligence',
    p2: 'Is this country in the allowed list?',
    authlokr: 'Is this location normal for this specific user — their home, their office, their travel history?',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Temporal Patterns',
    p2: 'Is this outside business hours?',
    authlokr: 'Does this match when THIS person normally authenticates — their actual schedule, time zone, and weekly rhythm?',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Device Fingerprinting',
    p2: 'Is this device compliant with MDM policy?',
    authlokr: "Does this user normally use this device, OS, and browser? Or is this the first time we've ever seen this combination?",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Access Patterns',
    p2: 'Does this user have permission to access this resource?',
    authlokr: 'Does this user typically access this resource? Or is this a new access pattern that deviates from their 30-day baseline?',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Volume Analysis',
    p2: 'Is this activity within permitted thresholds?',
    authlokr: 'Is this volume of activity normal for this specific user? 10× their baseline is a signal — even if it\'s technically allowed.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M12 8v4M12 16h.01"/>
      </svg>
    ),
    title: 'Account State Monitoring',
    p2: 'Logs administrative actions in audit trail',
    authlokr: 'Detects privilege escalation patterns, MFA tampering, and unusual role changes correlated with behavioral anomalies',
  },
]

export default function Features() {
  return (
    <section id="features" className="section border-t border-border-dim">
      <div className="section-inner">
        <FadeIn>
          <p className="section-label">Detection Dimensions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 max-w-3xl">
            Six ways we see{' '}
            <span className="text-gradient">what others miss.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mb-16">
            Every dimension asks the same question traditional tools never ask:{' '}
            <em className="text-gray-400">Is this normal for THIS specific person?</em>
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dimensions.map((d, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-surface border border-border-dim rounded-2xl p-6 h-full flex flex-col gap-4 hover:border-cyber-cyan/30 transition-colors duration-300">
                <div className="text-cyber-cyan">{d.icon}</div>
                <h3 className="text-base font-bold text-white">{d.title}</h3>

                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-mono text-risk-high mt-0.5 shrink-0">P2</span>
                    <p className="text-xs text-gray-600 leading-relaxed">{d.p2}</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-mono text-cyber-cyan mt-0.5 shrink-0">AL</span>
                    <p className="text-xs text-gray-300 leading-relaxed">{d.authlokr}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Seventh card — SanctumOS call-out (full width) */}
          <FadeIn delay={0.5} className="lg:col-span-3">
            <div
              className="rounded-2xl p-6 flex flex-col lg:flex-row lg:items-center gap-6"
              style={{
                background: 'linear-gradient(135deg, rgba(0,102,255,0.15) 0%, rgba(0,212,255,0.08) 100%)',
                border: '1px solid rgba(0,212,255,0.25)',
              }}
            >
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-widest text-cyber-cyan uppercase mb-3">
                  Powered by SanctumOS
                </p>
                <h3 className="text-base font-bold text-white mb-3">
                  AI that explains its reasoning — every time.
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Every alert includes a plain-English explanation of why the score was assigned —
                  not just a number. Your team understands the threat before they act on it.
                </p>
              </div>
              <div className="lg:w-72 shrink-0 space-y-3 border-t lg:border-t-0 lg:border-l border-cyber-cyan/20 pt-5 lg:pt-0 lg:pl-6">
                <p className="text-xs text-gray-600 font-mono">
                  60–80% fewer false positives than rule-based systems
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="text-cyber-cyan/80 font-semibold">Air-gap compatible</span> — SanctumOS supports GCC High and CMMC environments without cloud connectivity. Available in Phase 3 (Enterprise tier).
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

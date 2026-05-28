import { FadeIn } from '@/components/ui/FadeIn'

type CellStatus = 'yes' | 'no' | 'partial' | 'cost'

interface Row {
  feature: string
  authlokr: { status: CellStatus; label: string }
  p2: { status: CellStatus; label: string }
}

const rows: Row[] = [
  {
    feature: 'Behavioral baseline per user',
    authlokr: { status: 'yes', label: '30-day AI learning, 5 dimensions' },
    p2: { status: 'no', label: 'No baselines — generic rules only' },
  },
  {
    feature: 'Insider threat detection',
    authlokr: { status: 'yes', label: 'Native — purpose-built for this' },
    p2: { status: 'no', label: 'Not designed for this use case' },
  },
  {
    feature: 'Real-time risk scoring',
    authlokr: { status: 'yes', label: 'Continuous, context-aware, per user' },
    p2: { status: 'no', label: 'Binary flags, post-incident reporting' },
  },
  {
    feature: 'False positive reduction',
    authlokr: { status: 'yes', label: '60–80% lower vs. static rules' },
    p2: { status: 'no', label: 'High alert fatigue from generic rules' },
  },
  {
    feature: 'Account lifecycle monitoring',
    authlokr: { status: 'yes', label: 'Privilege escalation, MFA tampering, backdoor auth' },
    p2: { status: 'partial', label: 'Partial — basic audit logs only' },
  },
  {
    feature: 'PIM workflows',
    authlokr: { status: 'yes', label: 'Automated, time-bound, auto-expiring' },
    p2: { status: 'partial', label: 'Manual, legacy interface' },
  },
  {
    feature: 'Explainable AI reasoning',
    authlokr: { status: 'yes', label: 'Plain-English explanation on every alert' },
    p2: { status: 'no', label: 'Generic risk code — no explanation' },
  },
  {
    feature: 'Air-gap / offline deployment',
    authlokr: { status: 'yes', label: 'Phase 3 — Docker, GCC High, CMMC' },
    p2: { status: 'no', label: 'Cloud-only — no offline option' },
  },
  {
    feature: 'Monthly cost (5,000 users)',
    authlokr: { status: 'cost', label: '$15–20K flat rate' },
    p2: { status: 'cost', label: '$50K/month ($10/user)' },
  },
]

const statusColors: Record<CellStatus, string> = {
  yes: '#00CC66',
  no: '#FF3366',
  partial: '#FF9933',
  cost: '#00D4FF',
}

const statusIcons: Record<CellStatus, string> = {
  yes: '✓',
  no: '✗',
  partial: '⚠',
  cost: '$',
}

export default function Comparison() {
  return (
    <section id="comparison" className="section border-t border-border-dim">
      <div className="section-inner">
        <FadeIn>
          <p className="section-label">The Honest Comparison</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 max-w-3xl">
            We integrate with your entire stack.
            <span className="text-gradient"> We go deeper where others stop.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mb-12">
            Entra ID P2 flags risky sign-ins based on point-in-time analysis. AuthLokr builds the behavioral baselines P2 doesn&rsquo;t provide — and works alongside it to enhance risk signals, or standalone for organizations without P2.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-border-dim">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-dim">
                  <th className="text-left text-gray-500 font-medium px-6 py-4 w-[40%]">
                    Capability
                  </th>
                  <th className="text-left px-6 py-4 w-[30%]">
                    <span
                      className="text-sm font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      AuthLokr
                    </span>
                  </th>
                  <th className="text-left px-6 py-4 w-[30%]">
                    <span className="text-sm font-bold text-gray-500">Standard Identity Tools</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-border-dim last:border-0 ${
                      row.feature.includes('cost') || row.feature.includes('Monthly')
                        ? 'bg-surface/60'
                        : 'hover:bg-surface/40'
                    } transition-colors`}
                  >
                    <td className="px-6 py-4 text-gray-300 font-medium">{row.feature}</td>

                    <td className="px-6 py-4">
                      <div className="flex items-start gap-2">
                        <span
                          className="text-sm font-bold shrink-0 mt-0.5"
                          style={{ color: statusColors[row.authlokr.status] }}
                        >
                          {statusIcons[row.authlokr.status]}
                        </span>
                        <span
                          className={`text-xs leading-relaxed ${
                            row.authlokr.status === 'cost'
                              ? 'text-cyber-cyan font-bold text-sm'
                              : 'text-gray-400'
                          }`}
                        >
                          {row.authlokr.label}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-start gap-2">
                        <span
                          className="text-sm font-bold shrink-0 mt-0.5"
                          style={{ color: statusColors[row.p2.status] }}
                        >
                          {statusIcons[row.p2.status]}
                        </span>
                        <span
                          className={`text-xs leading-relaxed ${
                            row.p2.status === 'cost'
                              ? 'text-gray-400 font-bold text-sm line-through decoration-risk-high/50'
                              : 'text-gray-600'
                          }`}
                        >
                          {row.p2.label}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-600 mt-4 text-center">
            AuthLokr integrates alongside your existing Entra ID deployment or as a standalone behavioral detection layer.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

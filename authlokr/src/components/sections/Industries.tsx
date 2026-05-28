import { FadeIn } from '@/components/ui/FadeIn'

const industries = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    label: 'Healthcare',
    headline: 'Catch insider access to patient records before HIPAA audits find it.',
    description:
      'Healthcare organizations face relentless insider threat exposure. Employees with broad patient record access, manual PIM workflows, and limited behavioral monitoring create gaps that every HIPAA auditor looks for. AuthLokr builds behavioral baselines for every clinician, admin, and contractor — and surfaces anomalous PHI access before it becomes a breach.',
    tags: ['HIPAA-aligned', '5K–50K employees', 'P1 to enterprise'],
    highlight: 'Healthcare is our initial proving ground — more to come',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'Defense & CMMC',
    headline: 'Meet CMMC Level 2/3 access monitoring requirements without a six-month deployment.',
    description:
      'CMMC contractors handling CUI must demonstrate continuous monitoring of privileged access and user behavior. AuthLokr\'s Microsoft-native integration gives you the audit trails, behavioral detection, and PIM governance CMMC assessors look for — without rip-and-replace infrastructure. Air-gap and GCC High deployment available in Phase 3 for classified environments.',
    tags: ['CMMC Level 2/3', 'GCC High (Phase 3)', 'Air-gap capable'],
    highlight: 'Now opening to CMMC contractors',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    label: 'Financial Services',
    headline: 'Detect insider trading and privilege abuse before SOX auditors and regulators do.',
    description:
      'Financial institutions face the highest cost of insider breaches of any sector. Employees with access to material non-public information, trading systems, and customer financial data require behavioral monitoring that goes beyond permission-based controls. AuthLokr establishes individual baselines and flags anomalous patterns that precede fraud, data theft, and regulatory violations.',
    tags: ['SOX-aligned', 'PCI-DSS', 'Fraud prevention'],
    highlight: 'Mean insider threat cost in financial services: $21.4M',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="section border-t border-border-dim">
      <div className="section-inner">
        <FadeIn>
          <p className="section-label">Who It&rsquo;s Built For</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 max-w-3xl">
            Built for environments{' '}
            <span className="text-gradient">that can&rsquo;t afford to be wrong.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mb-16">
            Regulated industries where the cost of an undetected insider threat isn&rsquo;t just
            financial — it&rsquo;s reputational, regulatory, and in healthcare, human.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-surface border border-border-dim rounded-2xl p-7 h-full flex flex-col gap-5 hover:border-cyber-cyan/30 transition-colors duration-300">
                <div className="text-cyber-cyan">{ind.icon}</div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-2">
                    {ind.label}
                  </p>
                  <h3 className="text-base font-bold text-white leading-snug mb-3">
                    {ind.headline}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{ind.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border-dim">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-surface-2 px-2.5 py-1 rounded-full border border-border-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-cyber-cyan/70 font-mono">{ind.highlight}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

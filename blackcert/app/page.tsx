import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/">
  <div className="text-2xl font-bold tracking-tight cursor-pointer">
    <img src="/Logo.png" alt="BlackCert" className="h-9 invert brightness-125" />
  </div>
</Link>
          <div className="flex gap-8 text-sm">
  <a href="/resources" className="text-slate-400 hover:text-white transition">Resources</a>
  <a href="#services" className="text-slate-400 hover:text-white transition">Services</a>
  <a href="#about" className="text-slate-400 hover:text-white transition">About</a>
  <a href="#contact" className="text-slate-400 hover:text-white transition">Contact</a>
</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Your environment is not insecure.
            <span className="block text-blue-400">It is unclear.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Across identity, data, and AI — the signals are there. They just aren't being read together. What is exposed right now, and what controls it?
          </p>

          <Link 
            href="/booking-landing"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Book a Strategic Briefing
          </Link>
        </div>
      </section>

      {/* Three Signals Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs uppercase letter-spacing-2 text-slate-500 mb-3">The Problem</p>
            <h2 className="text-4xl font-bold mb-4">Three Signals. No Connection.</h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Identity has a signal. Endpoint has a signal. Cloud has a signal. In most Microsoft environments, no one is reading them together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Entra ID</h3>
              <p className="text-slate-400">Logging who authenticated, from where, and under what conditions.</p>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Defender</h3>
              <p className="text-slate-400">Generating alerts on endpoint behavior and configuration drift.</p>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Purview</h3>
              <p className="text-slate-400">Classifying where sensitive data lives and how it is accessed.</p>
            </div>
          </div>

          <div className="bg-orange-950/20 border-l-4 border-orange-500 px-6 py-6 mb-8">
            <p className="text-slate-300">
              <strong>All three are producing information.</strong> None of it is being correlated into a coherent picture of risk.
            </p>
          </div>

          <div className="bg-blue-950/20 border border-blue-900/50 rounded-lg p-8">
            <p className="text-slate-300">
              That gap is <strong>not a tool failure.</strong> It is a prioritization failure, a process failure, and in some cases, a staffing failure.
            </p>
            <p className="text-slate-300 mt-4">
              <strong>That is what BlackCert is built to solve.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs uppercase letter-spacing-2 text-slate-500 mb-3">Our Services</p>
            <h2 className="text-4xl font-bold">Strategic Clarity to Action</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition">
              <h3 className="text-2xl font-bold mb-2">AI Risk Briefing</h3>
              <p className="text-blue-400 font-semibold mb-4">$2,500 – $5,000</p>
              <p className="text-slate-400 mb-6">
                Strategic assessment of your Copilot and AI exposure. Get clarity on what's at risk in one focused conversation.
              </p>
              <ul className="text-sm text-slate-400 space-y-2 mb-6">
                <li>→ 60-minute strategic call</li>
                <li>→ Assess Copilot exposure</li>
                <li>→ Clarify next steps</li>
              </ul>
              <Link 
                href="/booking-landing"
                className="text-blue-400 hover:text-blue-300 font-semibold transition"
              >
                Learn more →
              </Link>
            </div>

            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition">
              <h3 className="text-2xl font-bold mb-2">Full Governance Assessment</h3>
              <p className="text-blue-400 font-semibold mb-4">$15,000 – $20,000</p>
              <p className="text-slate-400 mb-6">
                Deep analysis across your Entra ID, Defender, and Purview. Get the complete picture of what's exposed.
              </p>
              <ul className="text-sm text-slate-400 space-y-2 mb-6">
                <li>→ 5-10 day engagement</li>
                <li>→ Identity, endpoint, data analysis</li>
                <li>→ Comprehensive findings report</li>
              </ul>
              <Link 
                href="/booking-landing"
                className="text-blue-400 hover:text-blue-300 font-semibold transition"
              >
                Learn more →
              </Link>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-blue-950/30 to-slate-900 border border-blue-900/50 rounded-lg p-8 hover:border-blue-900 transition">
              <h3 className="text-2xl font-bold mb-2">Governance Blueprint</h3>
              <p className="text-blue-400 font-semibold mb-4">$25,000 – $60,000</p>
              <p className="text-slate-400 mb-6">
                Strategic remediation roadmap designed with your leadership team. We facilitate strategy sessions to define how to fix what was found.
              </p>
              <p className="text-slate-400 mb-6 italic">
                This is where you move from clarity to action. We run 4 collaborative workshops with your CISO and IT leadership to design controls that actually fit your environment.
              </p>
              <ul className="text-sm text-slate-400 space-y-2 mb-6">
                <li>→ Strategy & scope workshop</li>
                <li>→ Risk prioritization workshop</li>
                <li>→ Control design session</li>
                <li>→ Leadership sign-off</li>
              </ul>
              <Link 
                href="/booking-landing"
                className="text-blue-400 hover:text-blue-300 font-semibold transition"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Find */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs uppercase letter-spacing-2 text-slate-500 mb-3">Common Findings</p>
            <h2 className="text-4xl font-bold mb-6">What We Keep Seeing</h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Across every Microsoft environment we assess, the same patterns appear — signals that were always there, never connected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Global Admin exceptions that were never revisited',
              'Service principals granted broad permissions, never scoped down',
              'Ghost guest accounts with permissions equivalent to internal staff',
              'Unowned Defender alerts with no response workflow',
              'Sensitive data classified but shared externally with no access control',
              'Licensing paid for but minimally configured'
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/20 border border-slate-700 rounded p-4 text-slate-300">
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-12 mb-12">
            <p className="text-xs uppercase letter-spacing-2 text-slate-500 mb-3">Our Focus</p>
            <h2 className="text-4xl font-bold mb-8">Built for Mid-Market Microsoft Environments</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3">The Right Size</h3>
                <p className="text-slate-400">Organizations with 200–2,500 users on Microsoft 365. Big enough to have real complexity. Small enough that we can go deep.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">The Right Problem</h3>
                <p className="text-slate-400">Security leaders who know something's wrong but can't see the full picture. Teams ready to move on findings, not just collect reports.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">The Right Approach</h3>
                <p className="text-slate-400">We go deeper on Microsoft than any generalist firm. One stack. Done thoroughly. No competing priorities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase letter-spacing-2 text-slate-500 mb-6">About BlackCert</p>
          <h2 className="text-4xl font-bold mb-8">Founded on Foundational Security Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Serving enterprise environments since 2015, BlackCert has focused on identity and data exposure across Microsoft security stacks.
              </p>
              <p className="text-slate-300 mb-4 leading-relaxed">
                With roots in cryptographic security and enterprise threat modeling, we bring foundational understanding of how exposure is created and controlled.
              </p>
              <p className="text-slate-300 leading-relaxed">
                That foundation now extends into AI-driven analysis and control, reflecting both the direction of the industry and the trajectory we're actively building toward.
              </p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8">
              <h3 className="font-bold text-lg mb-4">What We Do</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Read Microsoft security signals together (Entra, Defender, Purview)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Help you understand what's actually exposed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Design remediation strategies with your leadership team</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Guide implementation and governance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to understand what your environment is exposing?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            A 20-minute strategic briefing is all it takes to start getting answers.
          </p>
          <Link 
            href="/booking-landing"
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition transform hover:scale-105"
          >
            Book a Strategic Briefing
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-800 py-12 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-sm uppercase text-slate-500 mb-2">Location</p>
              <p className="text-slate-300">United States</p>
              <p className="text-slate-400 text-sm">Remote security advisory</p>
            </div>
            <div>
              <p className="text-sm uppercase text-slate-500 mb-2">Email</p>
              <a href="mailto:info@blackcert.com" className="text-blue-400 hover:text-blue-300">
                info@blackcert.com
              </a>
            </div>
            <div>
              <p className="text-sm uppercase text-slate-500 mb-2">Phone</p>
              <a href="tel:+17203148820" className="text-blue-400 hover:text-blue-300">
                +1 720-314-8820
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
           <p>BlackCert © {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import Link from 'next/link'

export default function Resources() {
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
            <Link href="/#services" className="text-slate-400 hover:text-white transition">Services</Link>
            <Link href="/#about" className="text-slate-400 hover:text-white transition">About</Link>
            <Link href="/#contact" className="text-slate-400 hover:text-white transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase letter-spacing-2 text-slate-500 mb-4">Security Workshops</p>
              <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight">
                Your Data is More Exposed Than You Think
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Your Microsoft environment has the tools. Defender is running. Purview is licensed. Entra is managing identities. But having the tools isn't the same as having visibility.
              </p>
              <Link 
                href="/booking-landing"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition transform hover:scale-105"
              >
                Book an Assessment
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="/building-graphic.png" 
                alt="Data Security" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden order-2 md:order-1">
              <img 
                src="/dashboard-graphic.png" 
                alt="Dashboard Analytics" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">The Reality</h2>
              <p className="text-lg text-slate-400 mb-4 leading-relaxed">
                Most organizations don't have a clear picture of who can access what, where sensitive data actually lives, or how easily it can move. The stack is in place — the gaps are hiding inside it.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                <strong>That visibility gap is what we close.</strong> Through structured assessment and strategic workshops, we help you read your signals together and design controls that actually fit your environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Signals */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6">What We Look At</h2>
            <p className="text-lg text-slate-400 max-w-3xl">
              Your Microsoft environment produces three critical signals. Our assessments read them together to build a coherent picture of risk and opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Entra ID</h3>
              <p className="text-slate-400">Who authenticated, from where, under what conditions. Identity is your perimeter.</p>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Defender</h3>
              <p className="text-slate-400">Endpoint behavior and configuration drift. Where threats surface and how you respond.</p>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-600 transition">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Purview</h3>
              <p className="text-slate-400">Where sensitive data lives and how it's accessed. Data is your crown jewel.</p>
            </div>
          </div>

          <div className="bg-blue-950/20 border border-blue-900/50 rounded-lg p-8">
            <p className="text-slate-300 text-lg">
              <strong>Most organizations run all three in isolation.</strong> We help you correlate them into a single, actionable picture of your real risk.
            </p>
          </div>
        </div>
      </section>

      {/* Core Engagements */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs uppercase letter-spacing-2 text-slate-500 mb-3">Our Engagements</p>
            <h2 className="text-4xl font-bold mb-4">Strategic Clarity to Action</h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Choose the engagement that matches your readiness and scope.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* AI Risk Briefing */}
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

            {/* Full Governance Assessment */}
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

            {/* Governance Blueprint */}
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

      {/* Additional Engagements */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Additional Engagements</h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Beyond our core offerings, we design custom engagements for specific security domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/20 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition">
              <h3 className="font-bold text-lg mb-3 text-blue-400">Enterprise M365 Security Posture Review</h3>
              <p className="text-slate-400">
                For organizations with 2,500+ users. Comprehensive review of your entire Microsoft security stack with executive recommendations.
              </p>
            </div>

            <div className="bg-slate-800/20 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition">
              <h3 className="font-bold text-lg mb-3 text-blue-400">Purview Data Classification Deep Dive</h3>
              <p className="text-slate-400">
                Organizations struggling with data discovery. We design your classification schema and implement labeling strategy across your environment.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-slate-800/30 border border-slate-700 rounded-lg p-8 text-center">
            <p className="text-slate-400 mb-4">
              Don't see what you need? We design custom engagements tailored to your specific security challenges.
            </p>
            <Link 
              href="/booking-landing"
              className="inline-block text-blue-400 hover:text-blue-300 font-semibold transition"
            >
              Contact us to discuss →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get clarity on your exposure?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Start with a 60-minute strategic briefing. We'll walk through your signals and show you exactly what's at risk.
          </p>
          <Link 
            href="/booking-landing"
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition transform hover:scale-105"
          >
            Book Your Assessment
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-slate-500 text-sm">
            <p>BlackCert © {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
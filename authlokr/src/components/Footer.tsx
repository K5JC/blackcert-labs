import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-border-dim">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <Image
              src="/authlokr-logo.png"
              alt="AuthLokr"
              width={1024}
              height={1024}
              className="h-20 w-20 object-contain mb-3"
            />
            <p className="text-xs font-semibold tracking-widest text-cyber-cyan uppercase mb-3">
              Behavioral Identity Security
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI-powered behavioral identity risk detection for Microsoft Entra ID environments.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-semibold text-white mb-3">Product</p>
              <ul className="space-y-2">
                {['Features', 'How It Works', 'Pricing', 'Security'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-3">Solutions</p>
              <ul className="space-y-2">
                {['Healthcare', 'Defense & CMMC', 'Financial Services', 'Government'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-3">Company</p>
              <ul className="space-y-2">
                {['About', 'Blog', 'Contact', 'Careers'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-dim flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2026 BlackCert Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

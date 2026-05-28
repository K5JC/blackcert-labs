'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-border-dim'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-36 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center select-none">
          <img
            src="/authlokr-logo.png"
            alt="AuthLokr"
            className="h-28 w-28 md:h-32 md:w-32 object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Features', href: '#features' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Pricing', href: '#pricing' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="#demo"
            className="hidden sm:inline-flex text-sm text-gray-400 hover:text-white transition-colors duration-150"
          >
            Sign in
          </Link>
          <Link
            href="#waitlist"
            className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-black transition-opacity duration-150 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #00D4FF 0%, #0066FF 100%)' }}
          >
            Book a Demo
          </Link>
        </div>
      </nav>
    </header>
  )
}

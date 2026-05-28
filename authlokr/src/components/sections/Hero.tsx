'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

const anomalies = [
  {
    title: 'Impossible travel detected',
    detail: 'Moscow, Russia → 5,309 mi from baseline (Denver, CO)',
  },
  {
    title: 'New device: macOS Safari',
    detail: 'User always authenticates on Windows 11 Chrome',
  },
  {
    title: 'Time: 02:34 AM local',
    detail: 'Outside normal pattern (08:12–18:47)',
  },
]

const scoreBreakdown = [
  { label: 'Location', score: 0.94 },
  { label: 'Temporal', score: 0.81 },
  { label: 'Device',   score: 0.88 },
  { label: 'Access',   score: 0.63 },
  { label: 'Volume',   score: 0.21 },
]

function RiskBar({ score, delay = 0, cycle }: { score: number; delay?: number; cycle: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const progress = useMotionValue(0)
  const width = useTransform(progress, (v) => `${v * 100}%`)
  const background = useTransform(
    progress,
    [0, 0.48, 0.5, 0.78, 0.8, 1],
    ['#00CC66', '#00CC66', '#FF9933', '#FF9933', '#FF3366', '#FF3366']
  )

  useEffect(() => {
    if (!inView) return
    progress.set(0)
    const controls = animate(progress, score, {
      duration: 1.5,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    })
    return () => controls.stop()
  }, [inView, cycle])

  return (
    <div ref={ref} className="h-1 bg-[#2A2A2A] rounded-full overflow-hidden">
      <motion.div className="h-full rounded-full" style={{ width, background }} />
    </div>
  )
}

function AnimatedScoreLabel({ score, delay = 0, cycle }: { score: number; delay?: number; cycle: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0.00')
  const finalColor = score >= 0.8 ? '#FF3366' : score >= 0.5 ? '#FF9933' : '#00CC66'

  useEffect(() => {
    if (!inView) return
    setDisplay('0.00')
    const controls = animate(0, score, {
      duration: 1.5,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setDisplay(v.toFixed(2)),
    })
    return () => controls.stop()
  }, [inView, cycle])

  return (
    <span ref={ref} className="text-xs font-mono text-right" style={{ color: finalColor }}>
      {display}
    </span>
  )
}

function AnimatedRiskScore({ cycle, onFlashAlert }: { cycle: number; onFlashAlert: () => void }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0.00')
  const [color, setColor] = useState('#00CC66')
  const [glowing, setGlowing] = useState(false)

  useEffect(() => {
    if (!inView) return
    setDisplay('0.00')
    setColor('#00CC66')
    setGlowing(false)
    const controls = animate(0, 0.87, {
      duration: 2.2,
      delay: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => {
        setDisplay(v.toFixed(2))
        setColor(v >= 0.8 ? '#FF3366' : v >= 0.5 ? '#FF9933' : '#00CC66')
      },
      onComplete: () => {
        setGlowing(true)
        // Fire header flash after glow settles (~800ms)
        setTimeout(onFlashAlert, 800)
      },
    })
    return () => controls.stop()
  }, [inView, cycle])

  return (
    <motion.span
      ref={ref}
      className="text-lg font-bold font-mono"
      style={{ color }}
      animate={
        glowing
          ? { filter: ['drop-shadow(0 0 0px #FF3366)', 'drop-shadow(0 0 10px #FF3366)', 'drop-shadow(0 0 0px #FF3366)'] }
          : {}
      }
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {display}
    </motion.span>
  )
}

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [animCycle, setAnimCycle] = useState(0)
  const [alertFlash, setAlertFlash] = useState(false)

  // Replay every 16 seconds — ~3.5s animate + 0.8s glow + 2.4s flash + ~9s pause
  useEffect(() => {
    const timer = setInterval(() => setAnimCycle((c) => c + 1), 16000)
    return () => clearInterval(timer)
  }, [])

  function handleFlashAlert() {
    setAlertFlash(true)
    setTimeout(() => setAlertFlash(false), 2400)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="hero"
      className="relative pt-44 pb-20 md:pt-52 md:pb-28 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, #0066FF 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              Behavioral Identity Security
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mt-2 mb-6"
            >
              Your identity security{' '}
              <span className="text-gradient">has a blind spot.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl"
            >
              Your existing identity security tools flag known risks and enforce access policies. AuthLokr goes deeper — contextualizing account state, device history, access patterns, and behavioral signals to catch credential compromise and account abuse before damage is done.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-surface border border-border-dim text-white placeholder-gray-600 focus:outline-none focus:border-cyber-cyan transition-colors text-sm"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 rounded-lg font-semibold text-sm text-black whitespace-nowrap transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg, #00D4FF 0%, #0066FF 100%)' }}
                  >
                    {loading ? 'Joining…' : 'Join Early Access'}
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 text-risk-low font-semibold">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#00CC6620"/>
                    <path d="M6 10l3 3 5-5" stroke="#00CC66" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  You&rsquo;re on the list. We&rsquo;ll be in touch shortly.
                </div>
              )}

              <p className="mt-4 text-sm text-gray-600">
                or{' '}
                <a href="#demo" className="text-cyber-cyan hover:underline">
                  book a 20-minute call →
                </a>
              </p>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mt-10"
            >
              {['HIPAA-aligned', 'CMMC-ready', 'Microsoft Entra ID native', 'SOC 2 in progress'].map((label) => (
                <span key={label} className="flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="w-1 h-1 rounded-full bg-cyber-cyan" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Mock alert card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="bg-surface border border-border-dim rounded-2xl overflow-hidden shadow-2xl">
              {/* Card header — flashes after risk score peaks */}
              <motion.div
                className="flex items-center gap-2.5 px-5 py-4 border-b border-border-dim"
                animate={
                  alertFlash
                    ? { backgroundColor: [
                        'rgba(255,51,102,0)',
                        'rgba(255,51,102,0.18)',
                        'rgba(255,51,102,0)',
                        'rgba(255,51,102,0.18)',
                        'rgba(255,51,102,0)',
                        'rgba(255,51,102,0.18)',
                        'rgba(255,51,102,0)',
                      ] }
                    : { backgroundColor: 'rgba(255,51,102,0)' }
                }
                transition={{ duration: 2.2, ease: 'easeInOut' }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-risk-high opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-risk-high" />
                </span>
                <motion.span
                  className="text-xs font-semibold uppercase tracking-widest"
                  animate={
                    alertFlash
                      ? { color: ['#FF3366', '#FFAABC', '#FF3366', '#FFAABC', '#FF3366', '#FFAABC', '#FF3366'] }
                      : { color: '#FF3366' }
                  }
                  transition={{ duration: 2.2, ease: 'easeInOut' }}
                >
                  High Risk Alert
                </motion.span>
                <span className="ml-auto text-xs text-gray-600 font-mono">2m ago</span>
              </motion.div>

              <div className="p-5 space-y-5">
                {/* User */}
                <div>
                  <p className="text-sm font-semibold text-white">alice.anderson@company.com</p>
                  <p className="text-xs text-gray-500 mt-0.5 font-mono">Finance · Global Admin · Baseline: 94 days</p>
                </div>

                {/* Anomalies */}
                <div className="space-y-3">
                  {anomalies.map((a, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-risk-high text-xs">●</span>
                      <div>
                        <p className="text-xs font-semibold text-gray-200">{a.title}</p>
                        <p className="text-xs text-gray-600 font-mono mt-0.5">{a.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Score breakdown */}
                <div className="bg-[#111] rounded-xl p-4 space-y-2.5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Risk Score</span>
                    <AnimatedRiskScore cycle={animCycle} onFlashAlert={handleFlashAlert} />
                  </div>
                  {scoreBreakdown.map((d, idx) => (
                    <div key={d.label} className="grid grid-cols-[64px_1fr_36px] items-center gap-2">
                      <span className="text-xs text-gray-600 font-mono">{d.label}</span>
                      <RiskBar score={d.score} delay={0.9 + idx * 0.25} cycle={animCycle} />
                      <AnimatedScoreLabel score={d.score} delay={0.9 + idx * 0.25} cycle={animCycle} />
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2.5">
                  <button className="flex-1 py-2.5 rounded-lg text-xs font-semibold bg-surface-2 text-white hover:bg-border-dim transition-colors">
                    Investigate
                  </button>
                  <button className="flex-1 py-2.5 rounded-lg text-xs font-semibold border border-risk-high/30 text-risk-high bg-risk-high/5 hover:bg-risk-high/10 transition-colors">
                    Block Account
                  </button>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-gray-700 mt-3">
              Live risk scoring — not a screenshot
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00D4FF',
        'tech-blue': '#0066FF',
        'risk-high':   '#FF3366',
        'risk-medium': '#FF9933',
        'risk-low':    '#00CC66',
        'surface':     '#1A1A1A',
        'surface-2':   '#2A2A2A',
        'border-dim':  '#3A3A3A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #00D4FF 0%, #0066FF 100%)',
        'gradient-brand-h': 'linear-gradient(90deg, #00D4FF 0%, #0066FF 100%)',
      },
      animation: {
        'pulse-badge': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

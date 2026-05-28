import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import Comparison from '@/components/sections/Comparison'
import Industries from '@/components/sections/Industries'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Comparison />
        <Industries />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

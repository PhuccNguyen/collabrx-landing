import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import FounderTeam from '@/components/FounderTeam/FounderTeam'
import ValuePropositions from '@/components/ValuePropositions/ValuePropositions'
import Solutions from '@/components/Solutions/Solutions'
import Process from '@/components/Process/Process'
import Security from '@/components/Security/Security'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <Hero />
      <FounderTeam />
      <ValuePropositions />
      <Solutions />
      <Process />
      <Security />
      <Footer />
    </main>
  )
}

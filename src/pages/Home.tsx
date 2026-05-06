import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { WhyMe } from '../components/sections/WhyMe'
import { Portfolio } from '../components/sections/Portfolio'
import { FAQ } from '../components/sections/FAQ'
import { Contact } from '../components/sections/Contact'

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyMe />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
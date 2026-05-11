import Create from '~/components/home/Create'
import Features from '~/components/home/Features'
import Solution from '~/components/home/Solution'
import HomeHero from '~/components/home/Hero'
import Testimonials from '~/components/home/Testimonials'
import WelcomeSection from '~/components/home/WelcomeSection'
import FAQSection from '~/components/home/faq-section'

export default function Home() {
  return (
    <>
      <HomeHero />
      <WelcomeSection />
      <Testimonials />
      <Features />
      <Solution />
      <Testimonials />
      <Create />
      <FAQSection />
    </>
  )
}

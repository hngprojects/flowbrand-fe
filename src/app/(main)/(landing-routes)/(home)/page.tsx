import Create from '~/components/home/Create'
import Features from '~/components/home/Features'
import HomeHero from '~/components/home/Hero'
import Testimonials from '~/components/home/Testimonials'
import WelcomeSection from '~/components/home/WelcomeSection'
import FaqSection from '~/components/home/FaqSection'

export default function Home() {
  return (
    <>
      <HomeHero />
      <WelcomeSection />
      <Testimonials />
      <Features />
      <Create />
      <FaqSection />
    </>
  )
}

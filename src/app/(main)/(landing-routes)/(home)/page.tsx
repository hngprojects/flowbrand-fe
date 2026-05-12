import Create from '~/components/home/Create'
import Features from '~/components/home/Features'
import HomeHero from '~/components/home/Hero'
import Testimonials from '~/components/home/Testimonials'
import WelcomeSection from '~/components/home/WelcomeSection'
import FaqSection from '~/components/home/FaqSection'
import Custom404 from '~/app/not-found'

export default function Home() {
  return (
    <>
      <HomeHero />
      <WelcomeSection />
      <Features />
      <Testimonials />
      <Create />
      <FaqSection />
    </>
  )
}

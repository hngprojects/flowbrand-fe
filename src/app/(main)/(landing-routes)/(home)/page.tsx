import Features from '~/components/home/Features'
import Solution from '~/components/home/Solution'
import HomeHero from '~/components/home/Hero'
import Testimonials from '~/components/home/Testimonials'
import WelcomeSection from '~/components/home/WelcomeSection'
import FaqSection from '~/components/home/FaqSection'
import SocialProof from '~/components/about/SocialProof'

export default function Home() {
  return (
    <>
      <HomeHero />
      <SocialProof />
      <WelcomeSection />
      <Features />
      <Solution />
      <Testimonials />
      <FaqSection />
    </>
  )
}

import Features from '~/components/home/Features'
import HomeHero from '~/components/home/Hero'
import SocialProof from '~/components/about/SocialProof'
import Testimonials from '~/components/home/Testimonials'
import WelcomeSection from '~/components/home/WelcomeSection'
import FaqSection from '~/components/home/FaqSection'
import Solution from '~/components/home/Solution'

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

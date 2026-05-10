import Create from '~/components/home/Create'
import Features from '~/components/home/Features'
import HomeHero from '~/components/home/Hero'
import Create from '~/components/home/Create'
import Features from '~/components/home/Features'
import WelcomeSection from '~/components/home/WelcomeSection'

export default function Home() {
  return (
    <>
      <HomeHero />
      <WelcomeSection />
      <Features />
      <Create />
    </>
  )
}

import Create from '~/components/home/Create'
import Features from '~/components/home/Features'
import HomeHero from '~/components/home/Hero'
import WelcomeSection from '~/components/home/WelcomeSection'
import FAQSection from '~/components/home/faq-section'

export default function Home() {
  return (
    <>
      <HomeHero />
      <WelcomeSection />
      <Features />
      <Create />
      <FAQSection />
    </>
  )
}

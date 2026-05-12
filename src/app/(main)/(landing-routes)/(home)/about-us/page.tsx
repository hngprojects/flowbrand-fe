import Hero from '~/components/about/Hero'
import SocialProof from '~/components/about/SocialProof'
import WhyWeStarted from '~/components/about/WhyWeStarted'
import SimpleIdea from '~/components/about/SimpleIdea'
// import WhoBuiltThis from '~/components/about/WhoBuiltThis'
import Mission from '~/components/about/Mission'
import Create from '~/components/home/Create'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFF]">
      <Hero />
      <SocialProof />
      <WhyWeStarted />
      <SimpleIdea />
      {/* <WhoBuiltThis /> */}
      <Mission />
      <Create />
    </main>
  )
}

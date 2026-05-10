import Image from 'next/image'
import WaitlistNavbar from '~/components/waitlist/nav'
import VectorBlue from '~public/images/vector-blue.png'
import VectorMobile from '~public/images/vector-mobile.png'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className="flex min-h-screen w-full flex-col bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/images/pattern-bg.png'), linear-gradient(to right, #F4F8FF, #E5EEFF, #DFEAFF)`,
      }}
    >
      <WaitlistNavbar />
      <div className="flex-1">{children}</div>

      <div className="mt-[-110px] lg:hidden">
        <Image src={VectorMobile} alt="vector stroke mobile" />
      </div>
      <div className="hidden lg:block">
        <Image src={VectorBlue} alt="vector stroke desktop" />
      </div>
    </div>
  )
}

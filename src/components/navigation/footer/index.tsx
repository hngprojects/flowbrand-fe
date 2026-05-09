'use client'
import Image from 'next/image'

const LOGO_LIGHT_SRC = '/images/logo(small).svg'
const FOOTER_STRIP_SRC = '/images/hero-line.svg'

const Footer = () => {
  return (
    <div className="text-primary-foreground flex flex-col gap-8 bg-[#1C3A73] pt-16 pb-8 lg:p-14">
      <div className="flex flex-col justify-between gap-20 p-4 lg:flex-row lg:gap-12 lg:pr-20">
        <div className="lg:max-w-[440px]">
          <Image
            className="mb-2"
            src={LOGO_LIGHT_SRC}
            alt="FlowBrand"
            width={160}
            height={40}
          />
          <p className="text-muted-foreground/80 leading-[150%]">
            Build smarter marketing strategy without the guesswork and helping
            small and growing business turn attention into real customers.
          </p>
        </div>

        <div className="flex gap-14">
          <div>
            <h2 className="mb-2 font-bold">Product</h2>
            <ul className="text-muted-foreground/80">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="">How it works</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-bold">Legal</h2>
            <ul className="text-muted-foreground/80">
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="m-[-20px] mt-2 mb-4 hidden border-gray-600 lg:block" />
      <div className="lg:pl-4">
        <Image
          className="w-full"
          src={FOOTER_STRIP_SRC}
          alt=""
          width={1200}
          height={80}
        />
      </div>
    </div>
  )
}

export default Footer

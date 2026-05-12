'use client'
import Image from 'next/image'
import Link from 'next/link'
import logoLight from '~public/images/logo-light.png'
import footerImg from '~public/images/footer-icon.png'

const Footer = () => {
  return (
    <footer className="text-primary-foreground font-inter bg-[#1C3A73]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-18">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="max-w-[440px]">
            <Image className="mb-4" src={logoLight} alt="logo light" />

            <p className="text-muted-foreground/80 text-[14px] leading-[150%] font-normal tracking-normal sm:text-[16px] lg:text-[18px]">
              Build smarter marketing strategy without the guesswork and helping
              small and growing business turn attention into real customers.
            </p>
          </div>

          <div className="flex flex-wrap gap-14 sm:gap-20">
            <div>
              <h2 className="mb-4 text-lg leading-[150%] font-semibold sm:text-xl lg:text-2xl">
                Product
              </h2>
              <ul className="text-muted-foreground/80 flex flex-col gap-2 text-[14px] leading-[130%] tracking-normal sm:text-[16px] lg:text-[20px]">
                <li>
                  <Link href="/home" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-white">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                {/* <li>
                  <a href="/features" className="hover:text-white">
                    Features
                  </a>
                </li> */}
                <li>
                  <Link href="/contact-us" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-lg leading-[150%] font-semibold sm:text-xl lg:text-2xl">
                {' '}
                Legal
              </h2>

              <ul className="text-muted-foreground/80 flex flex-col gap-2 text-[14px] leading-[130%] tracking-normal sm:text-[16px] lg:text-[20px]">
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-12 border-gray-600 opacity-30" />

        <div className="w-full">
          <Image className="h-auto w-full" src={footerImg} alt="footer logo" />
        </div>
      </div>
    </footer>
  )
}

export default Footer

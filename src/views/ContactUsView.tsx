import { Button } from '~/components/ui/button'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import Image from 'next/image'

export default function ContactUsView() {
  return (
    <main className="my-10">
      {/* Hero Section */}
      <section className="bg-primary/20 relative mx-auto flex h-[409px] w-full flex-col items-center justify-center gap-2 px-6 py-20 md:gap-5 md:px-12 lg:px-20">
        <h1 className="text-foreground mb-3 text-center text-[24px] font-semibold md:text-[40px]">
          We would love to work with you
        </h1>
        <p className="mx-auto max-w-[650px] text-center text-[14px] text-[#565D69] md:text-[18px]">
          Have a question, need support, or just want to learn more about
          FlowBrand? Reach out, we&apos;d love to hear from you.
        </p>

        <Image
          src="/images/full-cloud.png"
          alt=""
          aria-hidden="true"
          width={447}
          height={445}
          className="absolute top-0 left-0 bg-red-300"
        />

        <Image
          src="/images/half-cloud.png"
          alt=""
          aria-hidden="true"
          width={447}
          height={445}
          className="absolute top-0 right-0"
        />
      </section>

      {/* Content Section */}
      <section className="mx-auto mt-10 w-full max-w-[1440px] px-6 md:px-12 lg:px-20">
        {/* Email Card */}
        <div className="flex flex-col items-start gap-5 space-y-16">
          <div className="flex items-center gap-2">
            <div className="bg-accent/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Email us at</p>
              <p className="text-sm text-[#1C3A73]">flowbrand@email.com</p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full">
            <h2 className="mb-1 text-[24px] font-semibold text-[#030D1F]">
              Send us a message
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              Fill this in and we&apos;ll get back to you within one business
              day
            </p>

            <form className="mt-10 space-y-5">
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="fullName"
                  className="text-[16px] font-semibold text-[#152D58]"
                >
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  className="focus:ring-primary/30 focus:border-primary w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="email"
                  className="text-[16px] font-semibold text-[#152D58]"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@gmail.com"
                  className="focus:ring-primary/30 focus:border-primary w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="businessName"
                  className="text-[16px] font-semibold text-[#152D58]"
                >
                  Business Name
                </Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="rands & will"
                  className="focus:ring-primary/30 focus:border-primary w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="message"
                  className="text-[16px] font-semibold text-[#152D58]"
                >
                  How did your week go?
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how your week went....."
                  className="focus:ring-primary/30 focus:border-primary w-full resize-none rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  disabled
                  type="submit"
                  className="bg-primary hover:bg-primary/90 w-full rounded-md px-6 py-2 text-sm font-medium text-white transition-colors disabled:opacity-60 md:w-[344px]"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="flex w-full flex-col items-center bg-[#FCFDFF] px-5 py-20 text-center md:px-10 md:py-28">
      <h2 className="mb-4 max-w-[720px] text-[28px] leading-[1.2] font-bold tracking-tight text-[#0D1117] md:text-[40px] lg:text-[44px]">
        Get a step-by-step marketing strategy in minutes
      </h2>

      <p className="mb-9 max-w-[720px] text-[16px] leading-relaxed text-gray-400 md:text-[18px]">
        A simple marketing plan that attracts, nurtures, and converts customers
        without stress
      </p>

      <Link
        href="/signup"
        className="inline-block w-full max-w-[260px] rounded-lg bg-[#326AD1] px-8 py-3.5 text-center text-[14px] font-semibold text-white transition-colors hover:bg-[#2558b8] md:text-[15px]"
      >
        Create a free account
      </Link>
    </section>
  )
}

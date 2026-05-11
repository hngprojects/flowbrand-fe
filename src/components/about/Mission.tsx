export default function Mission() {
  return (
    <section className="flex w-full flex-col items-center bg-[#FCF4E8] px-5 py-20 text-center md:px-10 md:py-24">
      <span className="mb-5 text-[11px] font-semibold tracking-[1.6px] text-[#E58F17] uppercase">
        Our Mission
      </span>

      {/* Figma: regular weight italic, not bold — matches the elegant feel */}
      <h2 className="mx-auto w-full max-w-[1440px] px-6 text-[22px] leading-[1.4] font-normal tracking-[-0.2px] text-[#1C3A73] italic md:px-12 md:text-[32px] lg:px-20 lg:text-[36px]">
        Our mission is to give every business owner a clear path to getting
        consistent customers.
      </h2>
    </section>
  )
}

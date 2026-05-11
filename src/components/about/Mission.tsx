export default function Mission() {
  return (
    <section className="flex w-full flex-col items-center bg-[#FCF4E8] py-20 text-center md:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 md:px-12 lg:px-20">
        <span className="mb-5 text-[11px] font-semibold tracking-[1.6px] text-[#E58F17] uppercase">
          Our Mission
        </span>

        {/* Figma: regular weight italic, not bold — matches the elegant feel */}
        <h2 className="max-w-[720px] text-[22px] leading-[1.4] font-normal tracking-[-0.2px] text-[#1C3A73] italic md:text-[32px] lg:text-[36px]">
          Our mission is to give every business owner a clear path to getting
          consistent customers.
        </h2>
      </div>
    </section>
  )
}

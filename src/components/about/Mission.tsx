export default function Mission() {
  return (
    <section className="w-full bg-[#FCF4E8]">
      <div className="landing-layout flex flex-col items-center py-30 text-center">
        <span className="mb-5 text-[11px] font-semibold tracking-[1.6px] text-[#E58F17] uppercase">
          Our Mission
        </span>

        {/* Figma: regular weight italic, not bold — matches the elegant feel */}
        <h2 className="text-[22px] leading-[1.4] font-normal tracking-[-0.2px] text-[#1C3A73] italic md:text-[32px]">
          Our mission is to give every business owner a clear path to getting
          consistent customers.
        </h2>
      </div>
    </section>
  )
}

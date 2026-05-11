export default function WhoBuiltThis() {
  return (
    <section className="flex w-full flex-col items-center bg-[#FCFDFF] py-16 text-center md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 md:px-12 lg:px-20">
        {/* Single bordered pill container */}
        <div className="mb-7 flex items-center gap-0 rounded-md border border-[#E58F17] p-2">
          <span className="rounded-md bg-[#E58F17] px-5 py-2 text-[13px] leading-none font-semibold text-white">
            Simply
          </span>
          <span className="px-5 py-2 text-[13px] leading-none font-medium text-gray-500">
            Our Team
          </span>
        </div>

        <h2 className="mb-5 text-[28px] font-bold tracking-tight text-[#0D1117] md:text-[36px]">
          Who built this?
        </h2>

        <p className="max-w-[600px] text-[14px] leading-[1.8] text-gray-500 italic md:text-[15px]">
          FlowBrand was built as part of the HNG Internship programme, by a team
          of designers, engineers, and product thinkers who wanted to build
          something that actually matters.
        </p>
      </div>
    </section>
  )
}

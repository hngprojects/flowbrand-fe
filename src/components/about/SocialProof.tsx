const logos = [
  { label: 'Repair Service', icon: <RepairIcon /> },
  { label: 'Beauty Salon', icon: <BeautyIcon />, serif: true },
  { label: 'Bakery', icon: <BakeryIcon />, serif: true },
  { label: 'Small Retail', icon: <RetailIcon /> },
  { label: 'Agency', icon: <AgencyIcon /> },
]

export default function SocialProof() {
  return (
    <section className="flex w-full flex-col items-center gap-8 bg-[#FCFDFF] pt-10 pb-8 md:pt-0">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20">
        <p className="text-center text-[14px] text-gray-600 md:text-[16px]">
          Used by small businesses like yours to build and grow with confidence
        </p>

        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {logos.map(({ label, icon, serif }) => (
            <div
              key={label}
              className="flex items-center gap-2 opacity-40 grayscale"
            >
              {icon}
              <span
                className={`text-[14px] font-semibold whitespace-nowrap text-gray-500 ${serif ? 'font-serif italic' : ''}`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RepairIcon() {
  return (
    <svg
      width="30"
      height="24"
      className="md:h-[34px] md:w-[42px]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="6" cy="7" r="2.5" stroke="#9CA3AF" strokeWidth="1.4" />
      <circle cx="6" cy="17" r="2.5" stroke="#9CA3AF" strokeWidth="1.4" />
      <line
        x1="8"
        y1="8.5"
        x2="20"
        y2="16"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="15.5"
        x2="20"
        y2="8"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BeautyIcon() {
  return (
    <svg
      width="28"
      height="24"
      className="md:h-[34px] md:w-[38px]"
      viewBox="0 0 22 24"
      fill="none"
    >
      <rect
        x="1"
        y="4"
        width="3"
        height="16"
        rx="1.5"
        stroke="#9CA3AF"
        strokeWidth="1.4"
      />
      <line
        x1="5"
        y1="6"
        x2="21"
        y2="6"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="9"
        x2="21"
        y2="9"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="12"
        x2="21"
        y2="12"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="15"
        x2="21"
        y2="15"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="18"
        x2="21"
        y2="18"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BakeryIcon() {
  return (
    <svg
      width="32"
      height="22"
      className="md:h-[32px] md:w-[44px]"
      viewBox="0 0 26 22"
      fill="none"
    >
      <path
        d="M13 18 C13 18 2 14 2 8 A11 11 0 0 1 24 8 C24 14 13 18 13 18Z"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        fill="none"
      />
      <line
        x1="13"
        y1="18"
        x2="13"
        y2="7"
        stroke="#9CA3AF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="13"
        y1="18"
        x2="5"
        y2="10"
        stroke="#9CA3AF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="13"
        y1="18"
        x2="21"
        y2="10"
        stroke="#9CA3AF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="13"
        y1="18"
        x2="8"
        y2="8"
        stroke="#9CA3AF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="13"
        y1="18"
        x2="18"
        y2="8"
        stroke="#9CA3AF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="19"
        x2="21"
        y2="19"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function RetailIcon() {
  return (
    <svg
      width="30"
      height="22"
      className="md:h-[32px] md:w-[42px]"
      viewBox="0 0 24 22"
      fill="none"
    >
      <rect
        x="2"
        y="9"
        width="20"
        height="12"
        rx="1"
        stroke="#9CA3AF"
        strokeWidth="1.4"
      />
      <path
        d="M2 9 L5 2 H19 L22 9"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <rect
        x="9"
        y="13"
        width="6"
        height="8"
        rx="1"
        stroke="#9CA3AF"
        strokeWidth="1.4"
      />
      <line
        x1="12"
        y1="2"
        x2="12"
        y2="9"
        stroke="#9CA3AF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function AgencyIcon() {
  return (
    <svg
      width="34"
      height="20"
      className="md:h-[28px] md:w-[48px]"
      viewBox="0 0 28 20"
      fill="none"
    >
      <circle cx="8" cy="5" r="3" stroke="#9CA3AF" strokeWidth="1.4" />
      <circle cx="14" cy="4" r="3.5" stroke="#9CA3AF" strokeWidth="1.4" />
      <circle cx="20" cy="5" r="3" stroke="#9CA3AF" strokeWidth="1.4" />
      <path
        d="M1 19 C1 14.5 4 12 8 12 C9.5 12 11 12.5 12 13"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M27 19 C27 14.5 24 12 20 12 C18.5 12 17 12.5 16 13"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 19 C8 14 10.5 12 14 12 C17.5 12 20 14 20 19"
        stroke="#9CA3AF"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

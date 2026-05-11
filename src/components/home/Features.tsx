'use client'

import Image from 'next/image'
import { SectionLabelPill } from '../ui/section-label-pill'

const Features = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-4 md:px-12 lg:px-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <SectionLabelPill>Features</SectionLabelPill>
        <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Everything you need to grow
        </h2>
      </div>

      {/* Features Grid */}
      <div className="mx-auto grid w-full grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
        {/* Card 1: Guided Setup */}
        <div className="flex h-full min-h-96 flex-col justify-between rounded-3xl bg-black p-8 text-white md:p-10">
          {/* Icon */}
          <div className="mb-8">
            <Image
              src="/images/feature-1.png"
              alt="Guided Setup"
              width={111}
              height={111}
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Guided Setup
            </h3>
            <p className="text-xs leading-relaxed text-gray-300 md:text-sm">
              Build the best marketing strategy for your business with clear,
              step by step support
            </p>
          </div>
        </div>

        {/* Card 2: Progress Tracking */}
        <div className="h-[456px] overflow-hidden rounded-3xl">
          <div className="relative flex h-full items-end bg-gradient-to-br from-gray-200 to-gray-300">
            {/* Placeholder for image */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/40 to-transparent p-8">
              <h3 className="mb-2 text-2xl font-bold text-white">
                Progress Tracking
              </h3>
              <p className="text-sm leading-relaxed text-white">
                Track every stage of your marketing and see what improves
                convert, without guess work
              </p>
            </div>
            {/* Image area - using placeholder styling */}
            <Image
              src="/images/dark-skin-girl-2.jpg"
              alt="Progress Tracking"
              className="h-full w-full object-cover"
              width={400}
              height={456}
            />
          </div>
        </div>

        {/* Card 3: Smarter Conversions */}
        <div className="relative flex h-full min-h-96 flex-col rounded-3xl bg-[#769BE0] p-6 text-white md:p-8">
          {/* Top Section - Reconstructed Box matching the original visual screenshot layout */}
          <div className="relative mb-auto flex h-[180px] flex-col justify-between overflow-hidden rounded-2xl border-4 border-[#B8D0F0] bg-[#9ab4f0] p-6">
            {/* Top Section - From Business Idea Box */}
            <div className="flex-shrink-0 self-start text-left">
              <span className="mb-0 block text-[14px] leading-tight font-medium text-white opacity-90">
                From
              </span>
              <p className="text-[14px] leading-tight font-medium text-white opacity-90">
                Business idea
              </p>
            </div>

            {/* Center - Dashed Arrow Vector Overlay (Shifted left via negative translation) */}
            <svg
              className="pointer-events-none absolute inset-0 z-10 h-full w-full -translate-x-6"
              viewBox="0 0 320 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Starting Node Circle */}
              <circle cx="68" cy="72" r="4.5" fill="white" />

              {/* Curved Dotted Path */}
              <path
                d="M 68 76 C 80 125, 115 130, 142 118"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5 4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Arrowhead Geometry */}
              <path
                d="M 134 125 L 144 117 L 138 109"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>

            {/* Bottom Right Section - Real Marketing Strategies Text */}
            <div className="z-20 mr-2 mb-2 w-[60%] self-end text-left">
              <p className="text-[20px] leading-tight font-bold text-white">
                Real Marketing Strategies
              </p>
            </div>
          </div>

          {/* Bottom Content Section */}
          <div className="flex flex-col justify-end pt-6 md:pt-8">
            <h4 className="mb-2 text-xl font-bold md:text-2xl">
              Smarter Conversions
            </h4>
            <p className="text-xs leading-relaxed text-blue-100 md:text-sm">
              Convert leads into real customers with better inquiry and booking
              flows
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

'use client'

import { motion } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import { Card } from '../ui/card'
import chef from '~public/images/chef.png'
import david from '~public/images/david.png'
import bright from '~public/images/bright.png'
import ellipse1 from '~public/images/ellipse-1.png'
import ellipse2 from '~public/images/ellipse-2.png'
import ellipse3 from '~public/images/ellipse-3.png'
import { SectionLabelPill } from '../ui/section-label-pill'

interface Testimonial {
  id: number
  name: string
  quote: string
  initials: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Nhaji',
    quote:
      '“I used to just post on Instagram and hope for the best. FlowBrand actually tells me what to do on Monday morning. It gave our team of 3 a real system”.',
    initials: '/images/white-girl.png',
    color: 'bg-gray-400',
  },
  {
    id: 2,
    name: 'David Brown',
    quote:
      '“Before using this, I was just posting and hoping for results. Now I actually have a clear system and i’m getting consistent customer inquiries every week”.',
    initials: '/images/black-guy.jpg',
    color: 'bg-gray-500',
  },
  {
    id: 3,
    name: 'Bright Dawin',
    quote:
      '“I didn’t realize how much i was doing wrong until i started. The step-by-step guidance made everything so easy to follow, and i finally understand how to attract the right customers”.',
    initials: '/images/suit-guy.jpg',
    color: 'bg-gray-600',
  },
  {
    id: 1,
    name: 'Glory Nkene',
    quote:
      '“I used to overthink my marketing a lot. Now i just follow the steps, and everything feels more organized and effective”.',
    initials: '/images/glory.jpg',
    color: 'bg-gray-400',
  },
  {
    id: 2,
    name: 'Ameerah Raji',
    quote:
      '“Before using this, I was just posting and hoping for results. Now I actually have a clear system and I’m getting consistent customer inquiries every week”.',
    initials: '/images/red-girl.jpg',
    color: 'bg-gray-500',
  },
  {
    id: 3,
    name: 'Dawin Muri',
    quote:
      '“I finally understand my customer journey. From attracting them to get them to buy. It all makes sense now”.',
    initials: '/images/white-man.jpg',
    color: 'bg-gray-600',
  },
]

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const totalItems = testimonials.length
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems)
    }, 4000) // Switch every 2 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay, totalItems])

  // Get visible testimonials for first row (handles wrapping)
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(testimonials[(currentIndex + i) % totalItems])
    }
    return visible
  }

  // Get visible testimonials for second row (offset by itemsPerView)
  const getVisibleTestimonialsRow2 = () => {
    const visible = []
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(testimonials[(currentIndex + itemsPerView + i) % totalItems])
    }
    return visible
  }

  const visibleTestimonials = getVisibleTestimonials()
  const visibleTestimonialsRow2 = getVisibleTestimonialsRow2()

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-12 lg:px-20">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="bg-badge-bg mb-2 flex items-center gap-2 rounded-xl px-4 py-2">
          <div className="bg-badge-fg h-4 w-4 rounded-full"></div>
          <SectionLabelPill>Testimonials</SectionLabelPill>
        </div>
        <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          Trusted by growing businesses
        </h2>
        </div>

        {/* Testimonials Two Rows */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Row 1 - Moving Left to Right */}
          <motion.div className="mb-8 flex gap-6" key={`row1-${currentIndex}`}>
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="w-[400px] flex-shrink-0 md:w-[500px]"
              >
                <div className="flex h-full min-h-56 flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:p-8">
                  {/* Quote - Two Row Layout */}
                  <p className="mb-6 line-clamp-3 text-base leading-relaxed text-gray-800 md:text-lg">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Author - Horizontal Layout */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.initials}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 md:text-base">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 - Moving Right to Left (opposite direction) */}
          <motion.div className="mb-8 flex gap-8" key={`row2-${currentIndex}`}>
            {visibleTestimonialsRow2.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="w-[400px] flex-shrink-0 md:w-[500px]"
              >
                <div className="flex h-full min-h-56 flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:p-8">
                  {/* Quote - Two Row Layout */}
                  <p className="mb-6 line-clamp-3 text-base leading-relaxed text-gray-800 md:text-lg">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Author - Horizontal Layout */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.initials}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 md:text-base">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-blue-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="mt-4 flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-1 w-1 rounded-full bg-blue-500"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

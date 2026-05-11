'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useSyncExternalStore } from 'react'

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
    id: 4,
    name: 'Glory Nkene',
    quote:
      '“I used to overthink my marketing a lot. Now i just follow the steps, and everything feels more organized and effective”.',
    initials: '/images/glory.jpg',
    color: 'bg-gray-400',
  },
  {
    id: 5,
    name: 'Ameerah Raji',
    quote:
      '“Before using this, I was just posting and hoping for results. Now I actually have a clear system and I’m getting consistent customer inquiries every week”.',
    initials: '/images/red-girl.jpg',
    color: 'bg-gray-500',
  },
  {
    id: 6,
    name: 'Dawin Muri',
    quote:
      '“I finally understand my customer journey. From attracting them to get them to buy. It all makes sense now”.',
    initials: '/images/white-man.jpg',
    color: 'bg-gray-600',
  },
]

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const totalItems = testimonials.length
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Card width + gap (matches the design)
  const cardWidth = 524 // 500px + 24px gap

  useEffect(() => {
    if (!isAutoPlay || !isClient) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (totalItems - 2))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, totalItems, isClient])

  const renderCard = (testimonial: Testimonial, index: number) => (
    <div
      key={`${testimonial.id}-${index}`}
      className="w-[400px] flex-shrink-0 md:w-[500px]"
    >
      <div className="flex h-full min-h-56 flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg md:p-8">
        <p className="mb-6 line-clamp-3 text-base leading-relaxed text-gray-800 md:text-lg">
          &quot;{testimonial.quote}&quot;
        </p>

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
    </div>
  )

  const maxIndex = totalItems - 2

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-12 lg:px-20">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-orange-50 px-5 py-3 md:mb-10">
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <span className="text-sm font-semibold text-orange-500 md:text-base">
            Testimonials
          </span>
        </div>
        <h2 className="mb-8 text-4xl font-medium tracking-tight text-[#0F172A] md:text-5xl">
          Trusted by growing businesses
        </h2>
      </div>

      <div
        className="overflow-hidden py-4"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Row 1 - Sliding Left */}
        {isClient ? (
          <motion.div
            className="mb-8 flex gap-6"
            initial={false}
            animate={{ x: -currentIndex * cardWidth }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            {testimonials.map((t, i) => renderCard(t, i))}
          </motion.div>
        ) : (
          <div className="mb-8 flex gap-6">
            {testimonials.map((t, i) => renderCard(t, i))}
          </div>
        )}

        {/* Row 2 - Sliding Right (Opposite Direction) */}
        {isClient ? (
          <motion.div
            className="mb-8 flex gap-6"
            initial={false}
            animate={{ x: (currentIndex - maxIndex) * cardWidth }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            {[...testimonials].reverse().map((t, i) => renderCard(t, i))}
          </motion.div>
        ) : (
          <div
            className="mb-8 flex gap-6"
            style={{ transform: `translateX(${-maxIndex * cardWidth}px)` }}
          >
            {[...testimonials].reverse().map((t, i) => renderCard(t, i))}
          </div>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
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
    </section>
  )
}

export default Testimonials

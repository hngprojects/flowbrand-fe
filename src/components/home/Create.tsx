'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/**
 * Create component displays a call-to-action section encouraging users
 * to get a marketing strategy by creating an account.
 *
 * @returns {JSX.Element} The rendered CTA section.
 */
const Create = () => {
  return (
    <section className="mx-auto w-full py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-4xl"
        >
          {/* Main Heading */}
          <h2 className="mb-6 text-[32px] leading-tight font-medium tracking-tight text-[#030D1F] md:text-[56px]">
            Get a step-by-step marketing strategy in minutes
          </h2>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-2xl text-[16px] leading-relaxed text-[#565D69] md:text-[18px]">
            A simple marketing plan that attracts, nurtures, and converts
            customers without stress
          </p>

          {/* CTA Button */}
          <Link
            href="/register"
            className="bg-primary hover:bg-primary/90 inline-block rounded-xl px-8 py-4 text-[16px] font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 md:text-[18px]"
          >
            Create a free account
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Create

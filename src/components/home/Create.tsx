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
    <section className="mx-auto w-full py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-4xl"
        >
          {/* Main Heading */}
          <h2 className="mb-8 text-3xl leading-tight font-bold text-[#030D1F] md:mb-10 md:text-4xl lg:text-5xl">
            Get a step-by-step{' '}
            <span className="text-[#E58F17]">marketing strategy</span> in
            minutes
          </h2>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed font-normal text-[#565D69] md:mb-12 md:text-lg lg:text-xl">
            A simple marketing plan that attracts, nurtures, and converts
            customers without stress
          </p>

          {/* CTA Button */}
          <Link
            href="/register"
            className="bg-primary hover:bg-primary/90 inline-block rounded-xl px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 md:px-10 md:py-5 md:text-lg"
          >
            Create a free account
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Create

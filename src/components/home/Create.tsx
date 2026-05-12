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
    <section className="w-full">
      <div className="landing-layout flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex w-full max-w-4xl flex-col items-center gap-6 md:gap-8"
        >
          <h2 className="text-[32px] leading-tight font-medium tracking-tight text-[#030D1F] md:text-[56px]">
            Get a step-by-step marketing strategy in minutes
          </h2>

          <p className="max-w-2xl text-[16px] leading-relaxed text-[#565D69] md:text-[18px]">
            A simple marketing plan that attracts, nurtures, and converts
            customers without stress
          </p>

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

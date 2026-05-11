'use client'

import Link from 'next/link'
import { Plus } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import { motion } from 'framer-motion'
import { useSyncExternalStore } from 'react'
import { faq_items } from '~/constants/landing-faq'

export default function FaqSection() {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  return (
    <section className="bg-background w-full py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 md:px-12 lg:px-20">
        {isClient ? (
          <motion.div
            className="mb-8 inline-flex items-center gap-3 rounded-full bg-orange-50 px-5 py-3 md:mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <span className="text-sm font-semibold text-orange-500 md:text-base">
              FAQs
            </span>
          </motion.div>
        ) : (
          <div className="mb-8 inline-flex -translate-y-5 items-center gap-3 rounded-full bg-orange-50 px-5 py-3 opacity-0 md:mb-10">
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <span className="text-sm font-semibold text-orange-500 md:text-base">
              FAQs
            </span>
          </div>
        )}

        <h2 className="mb-16 text-4xl font-medium tracking-tight text-[#0F172A] md:text-5xl">
          Still wondering? We thought you might be.
        </h2>

        <Accordion
          type="single"
          collapsible
          className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2"
        >
          {faq_items.map((item, index) => (
            <AccordionItem
              key={index}
              value={item.question}
              className="group overflow-hidden rounded-xl border border-[#EDEDED] bg-white px-0 data-[state=open]:border-blue-100 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="items-start px-6 py-6 text-left hover:no-underline [&>svg:last-child]:hidden">
                <span className="text-foreground pr-4 text-lg leading-tight font-medium">
                  {item.question}
                </span>
                <div className="ml-auto flex shrink-0 pt-0.5">
                  <Plus className="h-6 w-6 text-[#1E3A8A] transition-transform duration-200 group-data-[state=open]:rotate-45" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pt-0 pb-6">
                <div className="space-y-4 border-t border-gray-100 pt-4 text-sm leading-relaxed text-gray-600 md:text-[15px]">
                  {item.answerParagraphs.map(
                    (paragraph: string, paragraphIndex: number) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    )
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-24 mb-12 flex w-full max-w-2xl flex-col items-center space-y-6 text-center">
          <h2 className="max-w-2xl text-4xl font-medium tracking-tight text-[#0F172A] md:text-5xl">
            Get a step-by-step{' '}
            <span className="text-accent">marketing strategy</span> in minutes
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-500 md:text-base">
            A simple marketing plan that attracts, nurtures, and converts
            customers without stress.
          </p>
          <Link
            href="/register"
            className="bg-primary hover:bg-primary/70 mt-4 rounded-lg px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all active:scale-95"
          >
            Create a free account
          </Link>
        </div>
      </div>
    </section>
  )
}

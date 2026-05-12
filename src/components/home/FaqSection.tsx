'use client'

import { Plus } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import { SectionLabelPill } from '~/components/ui/section-label-pill'
import { faq_items } from '~/constants/landing-faq'

export default function FaqSection() {
  return (
    <section className="w-full">
      <div className="landing-layout flex w-full flex-col items-center">
        <div className="flex w-full flex-col items-center gap-6">
          <SectionLabelPill>FAQs</SectionLabelPill>

          <h2 className="text-foreground text-center text-3xl font-bold md:text-4xl">
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
        </div>
      </div>
    </section>
  )
}

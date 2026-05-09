'use client'

import { useState } from 'react'
import { Button } from '~/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import { Check, X } from 'lucide-react'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(
    'monthly'
  )

  const features = [
    {
      name: 'Guided Funnel Setup',
      free: true,
      pro: true,
    },
    {
      name: 'Active Funnel',
      free: '1',
      pro: 'Unlimited',
    },
    {
      name: 'Funnel Recommendation',
      free: 'Basic',
      pro: 'Advanced',
    },
    {
      name: 'Lead Capture guidance',
      free: true,
      pro: true,
    },
    {
      name: 'Progress tracking',
      free: true,
      pro: true,
    },
    {
      name: 'Follow up template & Prompts',
      free: 'Limited',
      pro: 'Full Access',
    },
    {
      name: 'Performance Insight',
      free: false,
      pro: true,
    },
    {
      name: 'Priority support',
      free: false,
      pro: true,
    },
    {
      name: 'Active funnel',
      free: 'Limited',
      pro: 'Full ase...',
    },
  ]

  const faqs = [
    {
      question: 'Can I start for free without registering my ID card?',
      answer:
        'Yes, you can start with our free plan without any registration requirements. Simply sign up with your email to get started.',
    },
    {
      question: 'What happens if I cancel pro?',
      answer:
        'If you cancel your pro subscription, your account will revert to the free plan. You will retain your data but lose access to premium features.',
    },
    {
      question: 'What type of payment do you accept?',
      answer:
        'We accept various payment methods including credit cards, debit cards, and other digital payment options.',
    },
    {
      question: 'Do you have any cancellation fee?',
      answer:
        'No, there are no cancellation fees. You can cancel your subscription at any time without penalty.',
    },
    {
      question: 'Do I need marketing experience to use it?',
      answer:
        'No, our platform is designed for everyone. We provide guided setup and templates to help you succeed without prior experience.',
    },
    {
      question: 'Can I upgrade later?',
      answer:
        'Yes, you can upgrade from the free plan to the pro plan at any time. The upgrade will be effective immediately.',
    },
  ]

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      if (value) {
        return <Check className="mx-auto h-5 w-5 text-orange-500" />
      } else {
        return <X className="mx-auto h-5 w-5 text-gray-300" />
      }
    }
    return <span className="text-center text-sm">{value}</span>
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Header Section */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-2 text-4xl font-bold sm:text-5xl">
            Affordable Pricing for your{' '}
            <span className="text-orange-500">Business</span>
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Whether you&apos;re just figuring things out or ready to scale,
            FlowBrand gives you exactly what you need at every stage.
          </p>

          {/* Billing Toggle */}
          <div className="mb-12 flex items-center justify-center gap-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'rounded-md bg-orange-500 text-white'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Monthly Pricing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'rounded-md bg-orange-500 text-white'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Annual Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Free Plan */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold">Free Plan</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Perfect for one-person shops or small businesses
                </p>
              </div>
              <div className="mb-8">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Free
                </p>
              </div>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Start For Free
              </Button>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">Initiate Wizard</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">Personalized Templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">Built-In Checklist</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">Save & Track your progress</span>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="rounded-lg border-2 border-orange-500 bg-white p-8 dark:bg-gray-950">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="mb-2 inline-block rounded bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 dark:bg-orange-900 dark:text-orange-200">
                    RECOMMENDED
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Pro Plan</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    For businesses ready to grow further and scale
                  </p>
                </div>
              </div>
              <div className="mb-8">
                <p className="text-4xl font-bold">₦10,000</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  /monthly
                </p>
              </div>
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
                Get Full Access
              </Button>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">Everything in free</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">Multiple marketing plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">Advanced stages</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">Follow up templates & Prompts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">Team Collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">Performance Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Compare Plans
          </h2>
          <p className="mb-8 text-center text-gray-600 dark:text-gray-400">
            Find the right plan for where your business is now—and where
            you&apos;re going.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
            <table className="w-full">
              <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Free</th>
                  <th className="px-6 py-4 text-center font-semibold">Pro</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 last:border-b-0 dark:border-gray-800"
                  >
                    <td className="px-6 py-4 text-sm">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {renderFeatureValue(feature.free)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {renderFeatureValue(feature.pro)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 dark:bg-orange-900 dark:text-orange-200">
              FAQ
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              Still wondering? We thought you might be .
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Get answers to common questions about our plans and features.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm font-medium hover:text-orange-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  )
}

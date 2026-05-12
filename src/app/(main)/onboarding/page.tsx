'use client'
import { useState } from 'react'
import { ArrowLeft, Check } from 'lucide-react'
import { Button } from '~/components/ui/button'
import Link from 'next/link'
const CHANNELS = [
  { id: 'instagram', label: 'Instagram' },
  { id: 'facebook', label: 'Facebook' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'physical', label: 'Physical Location' },
  { id: 'others', label: 'Others' },
]
export default function FirstTimeUserPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const handleSelect = (id: string) => {
    setSelected((prev) => (prev === id ? null : id))
  }
  const handleSubmit = () => {
    if (!selected) return
    // TODO: router.push('/dashboard') or call your strategy creation API
    console.log('Selected channel:', selected)
  }
  return (
    <main className="min-h-screen bg-[#F7F8FA] dark:bg-gray-950">
      <div className="mx-auto flex w-full max-w-[600px] flex-col px-4 py-10 md:py-14">
        {/* Back button */}
        <div className="mb-6">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <ArrowLeft size={15} strokeWidth={2} />
            Back
          </Link>
        </div>
        {/* Card */}
        <div className="rounded-2xl border border-gray-100 bg-white px-6 py-8 shadow-sm md:px-8 md:py-10 dark:border-gray-800 dark:bg-gray-900">
          {/* Step progress */}
          <div className="mb-7">
            <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-green-500">3</span> of 3 steps
              completed
            </p>
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-[6px] w-10 rounded-full bg-green-500"
                />
              ))}
            </div>
          </div>
          {/* Heading */}
          <h1 className="mb-2 text-2xl leading-tight font-bold text-gray-900 md:text-[28px] dark:text-white">
            How do most of your customer find you right now?
          </h1>
          <p className="mb-7 text-sm text-gray-500 dark:text-gray-400">
            Pick the one channel that brings you the most customers right now.
          </p>
          {/* Channel options */}
          <div className="mb-8 flex flex-col gap-2">
            {CHANNELS.map((channel) => {
              const isSelected = selected === channel.id
              return (
                <button
                  key={channel.id}
                  onClick={() => handleSelect(channel.id)}
                  className={[
                    'flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-150',
                    isSelected
                      ? 'border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/40'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600 dark:hover:bg-gray-800',
                  ].join(' ')}
                >
                  {/* Custom checkbox */}
                  <span
                    className={[
                      'flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-2 transition-all',
                      isSelected
                        ? 'border-blue-600 bg-blue-600 dark:border-blue-500 dark:bg-blue-500'
                        : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800',
                    ].join(' ')}
                  >
                    {isSelected && (
                      <Check size={11} strokeWidth={3} className="text-white" />
                    )}
                  </span>
                  <span
                    className={[
                      'text-[15px] font-medium',
                      isSelected
                        ? 'text-blue-700 dark:text-blue-300'
                        : 'text-gray-800 dark:text-gray-200',
                    ].join(' ')}
                  >
                    {channel.label}
                  </span>
                </button>
              )
            })}
          </div>
          {/* CTA */}
          <Button
            onClick={handleSubmit}
            disabled={!selected}
            className="w-full bg-[#2D4EAB] py-6 text-base font-semibold text-white hover:bg-[#1E3A8A] disabled:opacity-60 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Create my strategy
          </Button>
        </div>
      </div>
    </main>
  )
}

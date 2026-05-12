'use client'

import { Button } from '~/components/ui/button'
import { motion } from 'framer-motion'
import { ChevronRight, UploadIcon } from 'lucide-react'

const DocumentUploadView = () => {
  return (
    <main className="mx-auto flex w-full max-w-[750px] flex-col items-center gap-4 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full space-y-6 sm:space-y-8"
      >
        <div className="flex flex-col gap-2 text-center text-[#565D69]">
          <h2 className="text-2xl sm:text-[32px]">
            Start creating your marketing strategy
          </h2>
          <p className="text-sm sm:text-base">
            Create marketing strategy tailored to your business needs.
          </p>
        </div>

        <div className="space-y-6 rounded-[35px] border border-[#E4E4E4] bg-[#FFFFFF] p-5 shadow shadow-[#1E1E1E0D] sm:p-8">
          <div className="flex flex-col items-center gap-5">
            <div className="flex w-full flex-col items-center gap-4 rounded-[20px] border border-dashed border-[#BFD1F1] bg-[#FCFDFF] px-4 py-8 sm:px-12 sm:py-10">
              <div className="shrink-0 rounded-[25px] border border-[#769BE0] bg-linear-to-r from-[#326AD1] to-[#1A366B] p-4">
                <UploadIcon color="#FFFFFF" />
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-[#030D1F] sm:text-2xl">
                  Upload your business document
                </p>
                <p className="mt-1 text-xs text-[#565D69] sm:text-sm">
                  Supports Doc, Docx, PDF, PPT, PPTX · Max 5.0 MB
                </p>
              </div>
            </div>

            <Button disabled className="w-full">
              Create my funnel
            </Button>
          </div>

          <p className="flex items-center justify-center gap-1 text-center text-sm text-[#565D69] sm:text-base">
            Don&apos;t know what to do? Click here
            <ChevronRight size={16} />
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-4 flex w-full cursor-pointer flex-col items-start gap-4 rounded-[32px] border border-[#E4E4E4] bg-[#FFFFFF] p-6 shadow shadow-[#326AD11A] sm:flex-row sm:items-center sm:gap-3 sm:p-8"
      >
        <div className="shrink-0 rounded-[25px] border border-[#E4E4E4] p-4">
          <UploadIcon color="black" />
        </div>
        <div className="flex-1 space-y-1">
          <h2 className="text-sm font-medium text-[#030D1F] sm:text-base">
            Don&apos;t have a document to upload? Create your funnel another
            way.
          </h2>
          <p className="text-xs text-[#565D69] sm:text-sm">
            Create your marketing strategy without the need to upload a
            document.
          </p>
        </div>
        <ChevronRight
          size={28}
          className="hidden shrink-0 text-[#565D69] sm:block"
        />
      </motion.div>
    </main>
  )
}

export default DocumentUploadView

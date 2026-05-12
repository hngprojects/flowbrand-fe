import Image from 'next/image'
import {
  Bell,
  ChevronRight,
  CircleUserRound,
  FileUp,
  Menu,
} from 'lucide-react'

import logoBlue from '~public/images/logo-blue.png'

const DocumentUploadView = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FCFCFC] text-[#030D1F]">
      <header className="relative z-20 w-full border-b-[0.5px] border-[#E4E4E4] bg-white">
        <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between gap-3 px-5 py-3 lg:h-[92px] lg:px-[50px] lg:py-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Open navigation menu"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[0.5px] border-[#E4E4E4] bg-white text-[#030D1F] lg:hidden"
            >
              <Menu className="h-6 w-6" strokeWidth={2.25} />
            </button>

            <Image
              src={logoBlue}
              alt="FlowBrand"
              width={164}
              height={30}
              priority
              className="h-auto w-[93.14px] shrink-0 lg:w-[115.63px]"
            />
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <button
              type="button"
              aria-label="Notifications"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[0.5px] border-[#E4E4E4] bg-white text-[#030D1F]"
            >
              <Bell className="h-6 w-6" strokeWidth={2.1} />
            </button>

            <button
              type="button"
              aria-label="Profile"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[41px] border-[0.5px] border-[#E4E4E4] bg-white text-[#030D1F] lg:w-[103px] lg:justify-start lg:px-3 lg:gap-1.5"
            >
              <CircleUserRound className="h-6 w-6 shrink-0" strokeWidth={2.1} />
              <span className="hidden text-[16px] font-medium leading-6 lg:block">
                Profile
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative min-h-[calc(100vh-68px)] px-4 pb-16 pt-6 sm:px-6 lg:min-h-[calc(100vh-92px)] lg:px-[50px] lg:pt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#FCFCFC] bg-[url('/images/pattern-bg.png')] bg-no-repeat bg-left-top bg-[length:1440px_1024px]"
        />

        <section className="relative z-10 mx-auto flex w-full max-w-[1436px] flex-col items-center gap-8 lg:gap-10">
          <div className="flex w-full flex-col items-center gap-6 lg:gap-8">
            <div className="flex h-[78px] w-full max-w-[1340px] flex-col items-center justify-center gap-1 text-center text-[#565D69] lg:h-[72px] lg:gap-2">
              <h1 className="max-w-[361px] text-[20px] font-normal leading-[26px] lg:max-w-none lg:text-[32px] lg:leading-[40px]">
                Start creating your marketing strategy
              </h1>
              <p className="max-w-[307px] text-[16px] font-normal leading-6 lg:max-w-none">
                Create marketing strategy tailored to your business needs.
              </p>
            </div>

            <article className="h-[410px] w-full max-w-[380px] rounded-[24px] border-[0.5px] border-[#E4E4E4] bg-white p-4 shadow-[0_0_19.1px_rgba(30,30,30,0.05)] lg:h-[455px] lg:max-w-[638px] lg:rounded-[35px] lg:p-8">
              <div className="flex h-full flex-col items-center gap-6 lg:gap-[30px]">
                <div className="flex h-[234px] w-full flex-col items-center justify-center gap-6 rounded-[20px] border-[1.5px] border-dashed border-[#BFD1F1] bg-[#FCFDFF] px-[50px] py-8 lg:h-[229px]">
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[17.5px] border-[0.5px] border-[#769BE0] bg-[linear-gradient(141.39deg,#326AD1_11.46%,#1A366B_90.56%)] text-white lg:h-20 lg:w-20 lg:rounded-[28px]">
                    <FileUp className="h-[25px] w-[25px] lg:h-10 lg:w-10" strokeWidth={2.2} />
                  </div>

                  <div className="flex w-full max-w-[244px] flex-col items-center gap-1.5 text-center lg:max-w-[474px]">
                    <h2 className="text-[16px] font-normal leading-6 text-[#030D1F] lg:text-[24px] lg:leading-[31px]">
                      Upload your business documents
                    </h2>
                    <p className="text-[14px] font-normal leading-[21px] text-[#565D69] lg:text-[16px] lg:leading-6">
                      Supports Doc, Docx, PDF, PPT, PPTX . Max 5.0MB
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-[#BFD1F1] px-6 py-3 text-[16px] font-medium leading-6 text-[#769BE0]"
                >
                  Create my funnel
                </button>

                <div
                  className="h-0 w-full border-t-[0.5px] border-[#E4E4E4]"
                  aria-hidden="true"
                />

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 text-[16px] font-normal leading-6 text-[#030D1F]"
                >
                  <span>Don&apos;t know what to do? Click here</span>
                  <ChevronRight className="h-6 w-6 shrink-0" strokeWidth={2} />
                </button>
              </div>
            </article>
          </div>

          <div
            aria-hidden="true"
            className="hidden h-0 w-full border-t border-dashed border-[#E4E4E4] lg:block"
          />

          <article className="flex h-[189px] w-full max-w-[380px] items-center gap-6 rounded-[24px] border-[0.5px] border-[#E4E4E4] bg-white p-6 shadow-[0_5px_21.9px_rgba(50,106,209,0.1)] lg:h-[170px] lg:max-w-[638px] lg:rounded-[32px] lg:p-8">
            <div className="flex h-[141px] min-w-0 flex-1 items-center gap-6 lg:h-[106px]">
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[17.5px] border-[0.5px] border-[#E4E4E4] bg-white text-[#030D1F] lg:h-20 lg:w-20 lg:rounded-[28px]">
                <FileUp className="h-[25px] w-[25px] lg:h-10 lg:w-10" strokeWidth={2.2} />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <h2 className="max-w-[218px] text-[16px] font-normal leading-6 text-[#030D1F] lg:max-w-[430px] lg:text-[20px] lg:leading-[26px]">
                  Don&apos;t have a document to upload? Create your funnel another way.
                </h2>
                <p className="max-w-[218px] text-[14px] font-normal leading-[21px] text-[#565D69] lg:max-w-[430px] lg:text-[16px] lg:leading-6">
                  Create your marketing strategy without the need to upload a
                  document.
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-label="Learn more"
              className="inline-flex shrink-0 items-center justify-center text-[#030D1F]"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={2} />
            </button>
          </article>
        </section>
      </main>
    </div>
  )
}

export default DocumentUploadView

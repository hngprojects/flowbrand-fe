'use client'

import Image from 'next/image'
import { Card } from '../ui/card'
import Chef from '~public/images/chef.png'
import david from '~public/images/david.png'
import bright from '~public/images/bright.png'
import ellipse1 from '~public/images/Ellipse 46.png'
import ellipse2 from '~public/images/Ellipse 46 (1).png'
import ellipse3 from '~public/images/Ellipse 46 (2).png'

export default function Testimonials() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-2 flex items-center gap-2 rounded-xl bg-[#fcf4e8] pt-2 pr-4 pb-2 pl-4">
          <div className="h-4 w-4 rounded-full bg-[#e58f17]"></div>
          <p className="text-[#e58f17]">Testimonials</p>
        </div>
        <h2 className="mb-8 text-4xl">Trusted by growing businesses</h2>
        <div className="w-full space-y-8">
          {/* Row 1 */}
          <div
            className="w-full overflow-x-auto scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex min-w-max gap-6 px-2">
              <Card className="flex h-[220px] w-[386px] flex-shrink-0 snap-start flex-col justify-evenly gap-10 p-4">
                <p>
                  “I used to just post on Instagram and hope for the best.
                  FlowBrand actually tells me what to do on Monday morning. It
                  gave our team of 3 a real system”.
                </p>

                <div className="flex items-center justify-center gap-2">
                  <Image src={Chef} alt="chef testimonial" />
                  <span>Sarah Nnaji</span>
                </div>
              </Card>

              <Card className="flex h-[220px] w-[386px] flex-shrink-0 snap-start flex-col justify-evenly gap-10 p-4">
                <p>
                  “Before using this, I was just posting and hoping for results.
                  Now I actually have a clear system and I am getting consistent
                  customer inquiries every week”.
                </p>

                <div className="flex items-center justify-center gap-2">
                  <Image src={david} alt="David testimonial" />
                  <span>David Brown</span>
                </div>
              </Card>

              <Card className="flex h-[220px] w-[386px] flex-shrink-0 snap-start flex-col justify-evenly gap-10 p-4">
                <p>
                  “I did not realize how much i was doing wrong until i started.
                  The step-by-step guidance made everything so easy to follow,
                  and i finally understand how to attract the right customers”.
                </p>

                <div className="flex items-center justify-center gap-2">
                  <Image src={bright} alt="Bright testimonial" />
                  <span>Bright Dawin</span>
                </div>
              </Card>
            </div>
          </div>

          {/* Row 2 */}
          <div
            className="w-full overflow-x-auto scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex min-w-max gap-6 px-2">
              <Card className="flex h-[220px] w-[386px] flex-shrink-0 snap-start flex-col justify-evenly gap-10 p-4">
                <p>
                  “I used to overthink my marketing a lot. Now i just follow the
                  steps, and everything feels more organized and effective”.
                </p>

                <div className="flex items-center justify-center gap-2">
                  <Image src={ellipse1} alt="Glory testimonial" />
                  <span>Glory Nkene</span>
                </div>
              </Card>

              <Card className="flex h-[220px] w-[386px] flex-shrink-0 snap-start flex-col justify-evenly gap-10 p-4">
                <p>
                  “This helped stop wasting time on things that weren’t working.
                  Now i focus on what actually brings in customers”.
                </p>

                <div className="flex items-center justify-center gap-2">
                  <Image src={ellipse2} alt="Ameerah testimonial" />
                  <span>Ameerah Raji</span>
                </div>
              </Card>

              <Card className="flex h-[220px] w-[386px] flex-shrink-0 snap-start flex-col justify-evenly gap-10 p-4">
                <p>
                  “I finally understand my customer journey. From attracting
                  them to get them to buy. It all makes sense now”.
                </p>

                <div className="flex items-center justify-center gap-2">
                  <Image src={ellipse3} alt="Darwin testimonial" />
                  <span>Darwin Muri</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

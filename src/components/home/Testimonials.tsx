import Image, { type StaticImageData } from 'next/image'
import { Card } from '../ui/card'
import chef from '~public/images/chef.png'
import david from '~public/images/david.png'
import bright from '~public/images/bright.png'
import ellipse1 from '~public/images/ellipse-1.png'
import ellipse2 from '~public/images/ellipse-2.png'
import ellipse3 from '~public/images/ellipse-3.png'
import { SectionLabelPill } from '../ui/section-label-pill'

type Testimonial = {
  quote: string
  name: string
  image: StaticImageData
  alt: string
}

const row1: Testimonial[] = [
  {
    quote:
      'I used to just post on Instagram and hope for the best. FlowBrand actually tells me what to do on Monday morning. It gave our team of 3 a real system.',
    name: 'Sarah Nnaji',
    image: chef,
    alt: 'Sarah Nnaji testimonial',
  },
  {
    quote:
      'Before using this, I was just posting and hoping for results. Now I actually have a clear system and I am getting consistent customer inquiries every week.',
    name: 'David Brown',
    image: david,
    alt: 'David Brown testimonial',
  },
  {
    quote:
      'I did not realize how much I was doing wrong until I started. The step-by-step guidance made everything so easy to follow, and I finally understand how to attract the right customers.',
    name: 'Bright Dawin',
    image: bright,
    alt: 'Bright Dawin testimonial',
  },
]

const row2: Testimonial[] = [
  {
    quote:
      'I used to overthink my marketing a lot. Now I just follow the steps, and everything feels more organized and effective.',
    name: 'Glory Nkene',
    image: ellipse1,
    alt: 'Glory Nkene testimonial',
  },
  {
    quote: `This helped stop wasting time on things that weren't working. Now i focus on what actually brings in customers.`,
    name: 'Ameerah Raji',
    image: ellipse2,
    alt: 'Ameerah Raji testimonial',
  },
  {
    quote:
      'I finally understand my customer journey, from attracting them to getting them to buy. It all makes sense now.',
    name: 'Darwin Muri',
    image: ellipse3,
    alt: 'Darwin Muri testimonial',
  },
]

function TestimonialRow({ items }: { items: Testimonial[] }) {
  return (
    <div
      className="w-full overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="flex min-w-max gap-6 px-2">
        {items.map((t, index) => (
          <Card
            key={index}
            className="flex min-h-[168px] w-[492px] flex-col justify-evenly gap-6 rounded-2xl px-6 py-6 text-left sm:min-h-[247px] sm:px-8 sm:py-8 lg:w-[506px]"
          >
            <p className="w-full text-[20px] leading-[130%]">“{t.quote}”</p>
            <div className="flex items-center justify-center gap-2">
              <Image
                src={t.image}
                alt={t.alt}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>{t.name}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

// max-w-[1440px] lg:px-20 px-6 md:px-12

export default function Testimonials() {
  return (
    <section className="mx-auto w-full py-16">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="bg-badge-bg mb-2 flex items-center gap-2 rounded-xl px-4 py-2">
          <div className="bg-badge-fg h-4 w-4 rounded-full"></div>
          <SectionLabelPill>Testimonials</SectionLabelPill>
        </div>
        <h2 className="mb-8 text-4xl">Trusted by growing businesses</h2>
        <div className="w-full space-y-8">
          <TestimonialRow items={row1} />
          <TestimonialRow items={row2} />
        </div>
      </div>
    </section>
  )
}

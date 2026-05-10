import Image, { type StaticImageData } from 'next/image'
import { Card } from '../ui/card'
import Chef from '~public/images/chef.png'
import david from '~public/images/david.png'
import bright from '~public/images/bright.png'
import ellipse1 from '~public/images/Ellipse 46.png'
import ellipse2 from '~public/images/Ellipse 46 (1).png'
import ellipse3 from '~public/images/Ellipse 46 (2).png'

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
    image: Chef,
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
    quote:
      'This helped me stop wasting time on things that were not working. Now I focus on what actually brings in customers.',
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
        {items.map((t) => (
          <Card
            key={t.name}
            className="flex h-[247px] w-[506px] flex-shrink-0 flex-col justify-evenly gap-10 px-8 py-[23.5px] text-left"
          >
            <p className="w-[442px] text-[20px] leading-[130%] font-normal">
              “{t.quote}”
            </p>
            <div className="flex items-center justify-center gap-2">
              <Image src={t.image} alt={t.alt} />
              <span>{t.name}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="min-h-screen py-16">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-2 flex items-center gap-2 rounded-xl bg-[#fcf4e8] px-4 py-2">
          <div className="h-4 w-4 rounded-full bg-[#e58f17]"></div>
          <p className="text-[#e58f17]">Testimonials</p>
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

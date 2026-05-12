import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function NotFound() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[url('/Images/error404-bg.png')] bg-cover bg-center px-8 text-center">
        <Image
          src="/images/error404.png"
          alt="404"
          width={200}
          height={0}
          aria-hidden="true"
        />

        <h3 className="text-#030D1F mt-16 text-[40px] font-medium max-[481px]:text-[32px]">
          Well, this is Awkward!
        </h3>
        <p className="text-#565D69 mt-2 mb-8 text-[20px] max-[481px]:text-[16px]">
          This page seems to have wondered off. Here is where you can go instead
        </p>

        <Button
          asChild
          size="lg"
          className="rounded-[10px] px-14 py-6 text-[16px]"
        >
          <Link href="/">Go to home</Link>
        </Button>
      </div>
    </main>
  )
}

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="container grid lg:grid-cols-2 gap-8 py-16 md:py-24">
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Navigating the digital landscape for success
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl">
          Our digital marketing agency helps businesses grow and succeed online through SEO, social media marketing and
          content creation.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button size="lg" className="bg-[#9EFF00] text-black hover:bg-[#8EEF00]">
            Book a consultation
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ceapture.PNG-7fivC31SO8t56zxrKIwJIYfTcv0Jdk.png"
          alt="Hero illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </section>
  )
}


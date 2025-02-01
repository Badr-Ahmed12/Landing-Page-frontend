import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative bg-[#F3F3F3] px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">Let's make things happen</h1>
          <p className="text-gray-600 text-lg max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <Button className="rounded-full bg-black text-white hover:bg-black/90">Get your free proposal</Button>
        </div>
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ceapture.PNG-7fivC31SO8t56zxrKIwJIYfTcv0Jdk.png"
            alt="Hero illustration"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}


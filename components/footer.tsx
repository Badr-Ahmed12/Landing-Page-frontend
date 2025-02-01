"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <section className="container py-16 grid lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-500">Get in touch with us. We are here to help.</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Message" />
          <Button className="w-full bg-black text-white hover:bg-gray-900">
            Send Message
          </Button>
        </form>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-[#9EFF00]/10 rounded-lg" />
        </div>
      </div>
    </section>
  )
}


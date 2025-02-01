import { Card } from "@/components/ui/card"
import Image from "next/image"

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cafpture.PNG-ZsKHKbVES8shfpZiPoi8gsdhvcM9i7.png",
  },
]

export function Team() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="inline-block bg-[#B9FF23] px-4 py-1 text-lg font-medium">Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="p-6 rounded-3xl border-2 border-black">
              <div className="flex items-start gap-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


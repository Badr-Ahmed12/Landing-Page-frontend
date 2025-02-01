import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Search engine optimization",
    isHighlighted: false,
  },
  {
    title: "Pay-per-click advertising",
    isHighlighted: true,
  },
  {
    title: "Social Media Marketing",
    isHighlighted: false,
  },
  {
    title: "Email Marketing",
    isHighlighted: false,
  },
  {
    title: "Content Creation",
    isHighlighted: true,
  },
  {
    title: "Analytics and Tracking",
    isHighlighted: false,
  },
]

export default function Services() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="inline-block bg-[#B9FF23] px-4 py-1 text-lg font-medium">Services</h2>
          <p className="text-gray-600">
            We help ambitious businesses like yours generate more profits by building awareness, driving web traffic,
            connecting with customers and growing overall sales.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-6 rounded-3xl border-2 ${
                service.isHighlighted ? "bg-[#B9FF23] border-transparent" : "border-black"
              }`}
            >
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <Button variant="link" className="p-0 h-auto text-black hover:text-black/80">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


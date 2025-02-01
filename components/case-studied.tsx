import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function CaseStudies() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="inline-block bg-[#B9FF23] px-4 py-1 text-black text-lg font-medium">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-black text-white border border-white/20 p-6 rounded-3xl">
              <div className="space-y-4">
                <p className="text-[#B9FF23]">For a local restaurant</p>
                <p className="text-sm text-gray-400">+200% organic traffic increase through local SEO optimization</p>
                <Button variant="link" className="p-0 h-auto text-[#B9FF23] hover:text-[#B9FF23]/80">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


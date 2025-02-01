import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const steps = [
  {
    title: "Consultation",
    content: "During this initial meeting, we discuss your goals and objectives...",
  },
  {
    title: "Research and Strategy Development",
    content: "We conduct thorough research and develop a customized strategy...",
  },
  {
    title: "Implementation",
    content: "We execute the planned strategies across chosen channels...",
  },
  {
    title: "Monitoring and Optimization",
    content: "Continuous monitoring and optimization of campaigns...",
  },
  {
    title: "Reporting and Communication",
    content: "Regular reporting and updates on campaign performance...",
  },
  {
    title: "Continual Improvement",
    content: "Ongoing refinement and improvement of strategies...",
  },
]

export function ProcessSection() {
  return (
    <section className="container py-16 space-y-8">
      <h2 className="text-3xl font-bold">Our Working Process</h2>
      <Accordion type="single" collapsible className="w-full">
        {steps.map((step, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              <span className="flex items-center gap-4">
                <span className="text-sm text-gray-500">0{index + 1}</span>
                {step.title}
              </span>
            </AccordionTrigger>
            <AccordionContent>{step.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}


"use client"

import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import  Services from "@/components/servies-grid"
import { CaseStudies } from "@/components/case-studied"
import { ProcessSection } from "@/components/process-section"
import { ContactForm } from "@/components/contect-form"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <Services />
        <CaseStudies />
        <ProcessSection />
        <ContactForm />
      </main>
    </div>
  )
}


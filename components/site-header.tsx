import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Positivus</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <Link href="/about" className="text-sm font-medium">
            About us
          </Link>
          <Link href="/services" className="text-sm font-medium">
            Services
          </Link>
          <Link href="/use-cases" className="text-sm font-medium">
            Use Cases
          </Link>
          <Link href="/pricing" className="text-sm font-medium">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm font-medium">
            Blog
          </Link>
          <Button variant="outline">Request a quote</Button>
        </nav>
      </div>
    </header>
  )
}


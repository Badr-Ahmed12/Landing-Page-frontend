import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="py-4 px-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          ◆ Positivus
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm">
            About us
          </Link>
          <Link href="/services" className="text-sm">
            Services
          </Link>
          <Link href="/use-cases" className="text-sm">
            Use Cases
          </Link>
          <Link href="/pricing" className="text-sm">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm">
            Blog
          </Link>
        </nav>
        <Button variant="outline" className="rounded-full border-black">
          Request a quote
        </Button>
      </div>
    </header>
  )
}


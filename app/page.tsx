import Link from 'next/link'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'

export default function Home() {
  return (
    <main>
      <div className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="max-w-6xl mx-auto px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Mannsverk Consulting home">
          <span className="font-mono text-primary text-sm select-none">{'>'}</span>
          <span className="font-mono font-semibold text-foreground tracking-tight text-sm uppercase">
            Mannsverk
          </span>
          <span className="font-mono text-muted-foreground text-sm hidden sm:inline">
            Consulting
          </span>
          <span className="font-mono text-primary cursor-blink text-sm">_</span>
        </Link>
        </div>
      </div>
      <Hero />
      <Products />
    </main>
  )
}

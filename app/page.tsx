import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
    </main>
  )
}

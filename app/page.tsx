import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Sermons } from "@/components/sections/sermons"
import { Events } from "@/components/sections/events"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Sermons />
      <Events />
      <Contact />
      <Footer />
    </main>
  )
}

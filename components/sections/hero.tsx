import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Clock } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/34328505/pexels-photo-34328505.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Worship service with hands raised in praise"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Welcome to True Word One ZA
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where God's Word
            <br />
            <span className="text-primary">Transforms Lives</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            A Christ-centred community in South Africa, devoted to worship,
            prayer, and the truth of the Gospel. Come as you are — leave
            renewed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact">
              <Button size="xl">
                Plan Your Visit
                <ChevronRight size={20} />
              </Button>
            </a>
            <a href="#sermons">
              <Button size="xl" variant="outline">Watch Sermons</Button>
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Johannesburg, South Africa</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-foreground/20" />
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span>Sunday Services 09:00 &amp; 11:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}

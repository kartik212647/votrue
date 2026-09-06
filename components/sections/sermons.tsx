import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Clock, Calendar } from "lucide-react"

const sermons = [
  {
    title: "The Power of the Cross",
    speaker: "Pastor David Mokoena",
    date: "Aug 31, 2026",
    duration: "42 min",
    series: "Foundations",
    image:
      "https://images.pexels.com/photos/23021405/pexels-photo-23021405.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Walking by Faith, Not by Sight",
    speaker: "Pastor Grace Nkosi",
    date: "Aug 24, 2026",
    duration: "38 min",
    series: "Foundations",
    image:
      "https://images.pexels.com/photos/23021415/pexels-photo-23021415.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "A Heart of Worship",
    speaker: "Pastor David Mokoena",
    date: "Aug 17, 2026",
    duration: "45 min",
    series: "Worship Matters",
    image:
      "https://images.pexels.com/photos/23021417/pexels-photo-23021417.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

export function Sermons() {
  return (
    <section id="sermons" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Sermons
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Recent Messages
          </h2>
          <p className="text-foreground/60 text-lg">
            Listen to teachings from our Sunday services. Stream online or
            download to listen on the go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((sermon, idx) => (
            <Card
              key={sermon.title}
              className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary">{sermon.series}</Badge>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 text-white text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {sermon.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {sermon.duration}
                  </span>
                </div>
                <button
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  aria-label={`Play ${sermon.title}`}
                >
                  <Play size={22} className="ml-1" fill="currentColor" />
                </button>
              </div>
              <CardContent className="p-5">
                <h3
                  className="font-bold text-lg mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {sermon.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {sermon.speaker}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Play size={14} /> Watch Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline">
            View All Sermons
          </Button>
        </div>
      </div>
    </section>
  )
}

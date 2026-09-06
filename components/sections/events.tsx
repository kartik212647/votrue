import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

const events = [
  {
    day: "07",
    month: "Sep",
    title: "Sunday Worship Service",
    time: "09:00 AM",
    location: "Main Auditorium, Johannesburg",
    description:
      "Join us for powerful worship and a life-changing message from God's Word.",
    tag: "Weekly",
    color: "bg-primary",
  },
  {
    day: "13",
    month: "Sep",
    title: "Youth Night — Unashamed",
    time: "06:00 PM",
    location: "Youth Hall, Johannesburg",
    description:
      "A night of worship, games, and real talk for young people aged 13-25.",
    tag: "Youth",
    color: "bg-secondary",
  },
  {
    day: "20",
    month: "Sep",
    title: "Community Outreach Day",
    time: "10:00 AM",
    location: "Soweto Community Centre",
    description:
      "Serving our city — food distribution, prayer, and sharing the Gospel.",
    tag: "Outreach",
    color: "bg-accent text-accent-foreground",
  },
  {
    day: "27",
    month: "Sep",
    title: "Prayer &amp; Fasting Night",
    time: "07:00 PM",
    location: "Main Auditorium, Johannesburg",
    description:
      "An evening of corporate prayer, seeking God's face for our nation.",
    tag: "Prayer",
    color: "bg-primary",
  },
]

export function Events() {
  return (
    <section id="events" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            What's On
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Upcoming Events
          </h2>
          <p className="text-foreground/60 text-lg">
            There's something for everyone. Come and be part of what God is
            doing in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card
              key={event.title}
              className="group flex flex-row overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`flex flex-col items-center justify-center w-20 shrink-0 ${event.color} text-white p-4`}
              >
                <span className="text-3xl font-bold leading-none">
                  {event.day}
                </span>
                <span className="text-sm uppercase tracking-wide mt-1">
                  {event.month}
                </span>
              </div>
              <CardContent className="flex-1 p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="font-bold text-lg"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {event.title}
                  </h3>
                  <Badge variant="accent">{event.tag}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/60">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    {event.location}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline">
            <Users size={18} /> View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  )
}

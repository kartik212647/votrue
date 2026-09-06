import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, HandHeart } from "lucide-react"

const values = [
  {
    icon: BookOpen,
    title: "Biblical Truth",
    description:
      "We teach the unchanging Word of God with clarity, conviction, and love.",
  },
  {
    icon: Heart,
    title: "Authentic Worship",
    description:
      "We pursue God's presence with passion, reverencing Him in spirit and truth.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We walk together as family, bearing one another's burdens in love.",
  },
  {
    icon: HandHeart,
    title: "Outreach",
    description:
      "We serve our city and nation, sharing the hope of Christ in word and deed.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/10823589/pexels-photo-10823589.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Diverse community gathered together"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl max-w-[200px]">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm text-primary-foreground/80 mt-1">
                  Years serving our community
                </p>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 hidden md:block">
              <div className="bg-accent text-accent-foreground rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold">800+</p>
                <p className="text-sm mt-1">Members &amp; growing</p>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Who We Are
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Family United by Faith
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              True Word One is more than a church — it's a family. Born in the
              heart of Johannesburg, we exist to see lives transformed by the
              power of the Gospel. Every person who walks through our doors is
              welcomed, valued, and loved.
            </p>
            <p className="text-foreground/60 leading-relaxed mb-8">
              We believe in the authority of Scripture, the power of prayer, and
              the transforming grace of Jesus Christ. Whether you're exploring
              faith for the first time or looking for a church home, there's a
              place for you here.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <value.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-1">
                          {value.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Share2, Video, Mail, MessageCircle } from "lucide-react"

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
]

const serviceTimes = [
  { day: "Sunday", time: "09:00 & 11:00" },
  { day: "Wednesday", time: "18:30 (Bible Study)" },
  { day: "Friday", time: "19:00 (Prayer)" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                T
              </div>
              <span
                className="font-bold text-lg"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                True Word One
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              A Christ-centred community in South Africa, devoted to the truth
              of God's Word and the transformation of lives.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Share2, MessageCircle, Video, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 hover:bg-primary transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-background/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-background/80">
              Service Times
            </h4>
            <ul className="space-y-3">
              {serviceTimes.map((s) => (
                <li
                  key={s.day}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-background/60">{s.day}</span>
                  <span className="text-background/80 font-medium">
                    {s.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            &copy; 2026 True Word One ZA. All rights reserved.
          </p>
          <p className="text-background/40 text-sm">
            &ldquo;Sanctify them by the truth; your word is truth.&rdquo; —
            John 17:17
          </p>
        </div>
      </div>
    </footer>
  )
}

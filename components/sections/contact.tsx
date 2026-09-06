"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Faith Street, Johannesburg, Gauteng 2000, South Africa",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 11 234 5678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@truewordone.co.za",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri, 08:00–17:00",
  },
]

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus("loading")
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name,
        email: form.email,
        message: form.message,
      })
      if (error) throw error
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            We'd Love to Hear From You
          </h2>
          <p className="text-foreground/60 text-lg">
            Whether you have a question, a prayer request, or just want to say
            hello — reach out. We're here for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <Card
                key={info.label}
                className="border-border/50 hover:shadow-md transition-shadow"
              >
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">{info.label}</p>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-3">
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we pray for you or help you?"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      required
                      className="min-h-[140px]"
                    />
                  </div>

                  {status === "success" && (
                    <div className="flex items-center gap-2 text-primary text-sm font-medium animate-fade-in">
                      <CheckCircle2 size={18} />
                      Thank you! Your message has been sent. We'll be in touch
                      soon.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-destructive text-sm font-medium animate-fade-in">
                      Something went wrong. Please try again or call us
                      directly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "loading" || status === "success"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle2 size={18} />
                        Message Sent
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

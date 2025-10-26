"use client"

import { useState } from "react"
import { Lock, Bot, Trash2, Shield } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Recordings deleted within minutes",
    description: "Audio deleted after transcription—just like closed captioning doesn't store your shows.",
  },
  {
    icon: Bot,
    title: "Automated processing",
    description: "No human review—completely automated and private.",
  },
  {
    icon: Trash2,
    title: "No archives or storage",
    description: "Recordings and transcripts deleted after processing. Only final notes are delivered.",
  },
  {
    icon: Shield,
    title: "Encrypted delivery",
    description: "All processing on encrypted servers. Secure email delivery.",
  },
]

export function PrivacySection() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  return (
    <section id="privacy" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">Privacy First</h2>
          <p className="text-pretty text-xl text-foreground/70 md:text-2xl">
            Audio converts to text, generates notes, then disappears—just like closed captioning
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              onMouseEnter={() => setHoveredFeature(feature.title)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="glass-card group relative overflow-hidden p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>

                <h3 className="mb-3 text-balance text-lg font-semibold">{feature.title}</h3>

                <p className="text-pretty text-sm text-foreground/70">{feature.description}</p>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 ${hoveredFeature === feature.title ? "opacity-100" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

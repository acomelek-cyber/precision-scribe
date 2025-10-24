"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Sparkles, Check } from "lucide-react"
import Link from "next/link"

export function NoteFormatsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="sample-notes" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">Two Note Formats</h2>
          <p className="text-pretty text-xl text-foreground/70 md:text-2xl">
            Choose the format that works best for each student
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {/* Generic Notes Card */}
          <div
            onMouseEnter={() => setHoveredCard("generic")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`glass-card group relative overflow-hidden p-8 transition-all duration-500 ${
              hoveredCard === "generic" ? "scale-105 shadow-2xl shadow-secondary/30" : ""
            }`}
          >
            <div className="relative z-10">
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 p-4">
                  <FileText className="h-10 w-10 text-secondary" />
                </div>
              </div>

              <h3 className="mb-3 text-3xl font-bold">Generic Notes</h3>
              <p className="mb-8 text-lg text-foreground/70">Professional format for all students</p>

              <ul className="mb-8 space-y-4">
                {["Professional format", "Comprehensive content", "Perfect for all students"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary/20">
                      <Check className="h-3 w-3 text-secondary" />
                    </div>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/samples/generic-notes">
                <Button
                  variant="outline"
                  className="w-full border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300"
                >
                  View Sample
                </Button>
              </Link>
            </div>

            {/* Hover gradient effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity duration-500 ${hoveredCard === "generic" ? "opacity-100" : ""}`}
            />
          </div>

          {/* ND-Enhanced Notes Card */}
          <div
            onMouseEnter={() => setHoveredCard("nd")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`glass-card group relative overflow-hidden border-2 border-accent/30 p-8 transition-all duration-500 ${
              hoveredCard === "nd" ? "scale-105 shadow-2xl shadow-accent/30" : ""
            }`}
          >
            <div className="relative z-10">
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-4">
                  <Sparkles className="h-10 w-10 text-accent" />
                </div>
                <Badge className="bg-gradient-to-r from-accent to-primary text-white border-0 shadow-lg">Unique</Badge>
              </div>

              <h3 className="mb-3 text-3xl font-bold">ND-Enhanced Notes</h3>
              <p className="mb-8 text-lg text-foreground/70">Optimized for neurodivergent learners</p>

              <ul className="mb-8 space-y-4">
                {[
                  "Optimized for ADHD, autism, dyslexia",
                  "Visual hierarchy with emojis",
                  "Executive function support",
                  "Self-compassion reminders",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/samples/nd-notes">
                <Button className="w-full bg-gradient-to-r from-accent to-primary text-white hover:shadow-xl hover:shadow-accent/50 transition-all duration-300">
                  View Sample
                </Button>
              </Link>
            </div>

            {/* Hover gradient effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-500 ${hoveredCard === "nd" ? "opacity-100" : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

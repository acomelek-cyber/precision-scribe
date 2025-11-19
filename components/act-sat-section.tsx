"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Sparkles, BookOpen, Check } from "lucide-react"
import Link from "next/link"

export function ActSatSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="act-sat" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
            ACT & SAT: Notes That Help Students Actually Remember
          </h2>
          <p className="text-pretty text-xl text-foreground/70 md:text-2xl">
            Three formats designed for how students learn
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Standard Notes Card */}
          <div
            onMouseEnter={() => setHoveredCard("standard")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`glass-card group relative overflow-hidden p-8 transition-all duration-500 ${hoveredCard === "standard" ? "scale-105 shadow-2xl shadow-secondary/30" : ""
              }`}
          >
            <div className="relative z-10">
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 p-4">
                  <FileText className="h-10 w-10 text-secondary" />
                </div>
              </div>

              <h3 className="mb-3 text-3xl font-bold">Standard Notes</h3>
              <p className="mb-8 text-lg text-foreground/70">
                Professional, comprehensive format perfect for typical learners
              </p>

              <ul className="mb-8 space-y-4">
                {[
                  "Session summaries",
                  "Key formulas and concepts",
                  "Step-by-step explanations",
                  "Homework assignments",
                  "Progress tracking",
                ].map((item) => (
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
                  View Standard Sample
                </Button>
              </Link>
            </div>

            <div
              className={`absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity duration-500 ${hoveredCard === "standard" ? "opacity-100" : ""}`}
            />
          </div>

          {/* ND-Enhanced Notes Card */}
          <div
            onMouseEnter={() => setHoveredCard("nd")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`glass-card group relative overflow-hidden border-2 border-accent/30 p-8 transition-all duration-500 ${hoveredCard === "nd" ? "scale-105 shadow-2xl shadow-accent/30" : ""
              }`}
          >
            <div className="relative z-10">
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-4">
                  <Sparkles className="h-10 w-10 text-accent" />
                </div>
                <Badge className="bg-gradient-to-r from-accent to-primary text-white border-0 shadow-lg">
                  For ADHD & autism
                </Badge>
              </div>

              <h3 className="mb-3 text-3xl font-bold">ND-Enhanced Notes</h3>
              <p className="mb-8 text-lg text-foreground/70">
                Optimized for ADHD, autism, and executive function challenges
              </p>

              <ul className="mb-8 space-y-4">
                {[
                  "Everything in Standard, PLUS:",
                  "Visual hierarchy with emojis",
                  "Executive function support",
                  "Checklists with time estimates",
                  "First-person perspective",
                  "Self-compassion reminders",
                  "Numbered steps (not paragraphs)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className={`text-foreground/90 ${item.includes("PLUS") ? "font-semibold" : ""}`}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/samples/nd-notes">
                <Button className="w-full bg-gradient-to-r from-accent to-primary text-white hover:shadow-xl hover:shadow-accent/50 transition-all duration-300">
                  View ND-Enhanced Sample
                </Button>
              </Link>
            </div>

            <div
              className={`absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-500 ${hoveredCard === "nd" ? "opacity-100" : ""}`}
            />
          </div>

          {/* Dyslexia-Optimized Notes Card */}
          <div
            onMouseEnter={() => setHoveredCard("dyslexia")}
            onMouseLeave={() => setHoveredCard(null)}
            className={`glass-card group relative overflow-hidden border-2 border-emerald-500/30 p-8 transition-all duration-500 ${hoveredCard === "dyslexia" ? "scale-105 shadow-2xl shadow-emerald-500/30" : ""
              }`}
          >
            <div className="relative z-10">
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-4">
                  <BookOpen className="h-10 w-10 text-emerald-500" />
                </div>
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-lg">
                  Easy-to-read format
                </Badge>
              </div>

              <h3 className="mb-3 text-3xl font-bold">Dyslexia-Optimized</h3>
              <p className="mb-8 text-lg text-foreground/70">
                Specially formatted for dyslexic learners with reading challenges
              </p>

              <ul className="mb-8 space-y-4">
                {[
                  "Everything you need, SIMPLIFIED:",
                  "Dyslexia-friendly fonts",
                  "Short sentences (max 15 words)",
                  "Extra-large text (16pt)",
                  "Generous line spacing",
                  "Cream background (easier on eyes)",
                  "Phonetic word breaks",
                  "One concept per line",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check className="h-3 w-3 text-emerald-500" />
                    </div>
                    <span className={`text-foreground/90 ${item.includes("SIMPLIFIED") ? "font-semibold" : ""}`}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/samples/dyslexia-notes">
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300">
                  View Dyslexia-Optimized Sample
                </Button>
              </Link>
            </div>

            <div
              className={`absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 transition-opacity duration-500 ${hoveredCard === "dyslexia" ? "opacity-100" : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

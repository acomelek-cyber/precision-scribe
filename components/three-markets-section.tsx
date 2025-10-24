"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Scale, Stethoscope } from "lucide-react"

const markets = [
  {
    icon: GraduationCap,
    title: "ACT & SAT",
    subtitle: "High School Test Prep",
    description: "Two formats: Standard notes and ND-enhanced for neurodivergent learners",
    pricing: "Starting at $30/month",
    link: "#act-sat",
    gradient: "from-accent to-primary",
  },
  {
    icon: Scale,
    title: "LSAT",
    subtitle: "Law School Test Prep",
    description: "Professional notes for logical reasoning, case analysis, and logic games",
    pricing: "$125/month",
    link: "#lsat",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Stethoscope,
    title: "MCAT",
    subtitle: "Medical School Test Prep",
    description: "Integrated science notes across biology, chemistry, physics, and psychology",
    pricing: "$175/month",
    link: "#mcat",
    gradient: "from-primary to-secondary",
  },
]

export function ThreeMarketsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markets.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Study Notes That Actually Help—For Any Exam
          </h2>
          <p className="text-pretty text-xl text-foreground/70 md:text-2xl">
            Whether you tutor high school students or professional exam takers, Precision Scribe generates the notes
            your students need
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {markets.map((market, index) => (
            <div
              key={market.title}
              className={`glass-card group relative overflow-hidden p-8 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div
                    className={`rounded-2xl bg-gradient-to-br ${market.gradient} p-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <market.icon className="h-12 w-12 text-white" />
                  </div>
                </div>

                <h3 className="mb-2 text-center text-3xl font-bold">{market.title}</h3>
                <p className="mb-4 text-center text-sm font-medium text-accent uppercase tracking-wide">
                  {market.subtitle}
                </p>
                <p className="mb-6 text-center text-foreground/70 leading-relaxed">{market.description}</p>

                {/* Pricing callout */}
                <div className="mb-6 rounded-lg bg-accent/10 p-4 text-center">
                  <p className="text-lg font-semibold text-accent">{market.pricing}</p>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent/30 bg-accent/10 text-accent hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
                >
                  <a href={market.link}>Learn More</a>
                </Button>
              </div>

              {/* Hover gradient effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${market.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

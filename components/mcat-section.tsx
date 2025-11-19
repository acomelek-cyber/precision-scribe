"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function McatSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="mcat" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
            MCAT: Professional Notes for Pre-Med Students
          </h2>
          <p className="text-pretty text-xl text-foreground/70 md:text-2xl">
            Capture the complex integrations across all sciences
          </p>
        </div>

        <div
          className={`mx-auto grid max-w-6xl gap-12 md:grid-cols-5 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column (40%) */}
          <div className="md:col-span-2">
            <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
              <p className="text-xl font-semibold text-foreground leading-relaxed">
                Never lose a biochemistry pathway or cross-subject integration again
              </p>
            </div>
          </div>

          {/* Right Column (60%) */}
          <div className="md:col-span-3 space-y-8">
            <ul className="space-y-4">
              {[
                "Cross-subject integrations preserved",
                "Biochemistry and physiology pathways",
                "Critical analysis frameworks captured",
                "Scientific reasoning structures documented",
                "Medical terminology in context",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
            >
              <a href="#contact">View MCAT Sample Notes</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

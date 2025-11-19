"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function LsatSection() {
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
    <section ref={sectionRef} id="lsat" className="relative py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
            LSAT: Professional Notes for Pre-Law Students
          </h2>
          <p className="text-pretty text-xl text-foreground/70 md:text-2xl">
            Preserve every logical framework, case analysis, and strategy
          </p>
        </div>

        <div
          className={`mx-auto grid max-w-6xl gap-12 md:grid-cols-5 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column (60%) */}
          <div className="md:col-span-3 space-y-8">
            <ul className="space-y-4">
              {[
                "Logical reasoning frameworks preserved",
                "Reading comp strategies documented",
                "Logic games approaches captured step-by-step",
                "Case analysis breakdowns",
                "Timing strategies and test-taking techniques",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-lg text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-secondary to-accent text-white hover:shadow-xl hover:shadow-secondary/50 transition-all duration-300"
            >
              <a href="#contact">View LSAT Sample Notes</a>
            </Button>
          </div>

          {/* Right Column (40%) */}
          <div className="md:col-span-2">
            <div className="glass-card p-8 bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/30">
              <p className="text-xl font-semibold text-foreground leading-relaxed">
                Pre-law students invest thousands in LSAT prep. Comprehensive notes help them retain everything they
                learn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

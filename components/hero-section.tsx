"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />

      <div
        className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-secondary/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div
          className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="mb-8 text-balance text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            <span className="gradient-text">Turn Any Session</span> Into Study Notes
          </h1>

          <p
            className={`mb-12 text-pretty text-xl text-foreground/80 md:text-2xl lg:text-3xl transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Turn tutoring sessions, classroom lectures, or study groups into comprehensive, professionally formatted
            notes within 20 minutes—optimized for ACT, SAT, LSAT, and MCAT prep.
          </p>

          <div
            className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-accent to-primary text-white hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 text-lg px-6 py-6 h-auto w-full sm:w-auto"
            >
              <a href="#act-sat">
                <span className="relative z-10">ACT/SAT Notes</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-secondary to-accent text-white hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-300 text-lg px-6 py-6 h-auto w-full sm:w-auto"
            >
              <a href="#lsat">
                <span className="relative z-10">LSAT Notes</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 text-lg px-6 py-6 h-auto w-full sm:w-auto"
            >
              <a href="#mcat">
                <span className="relative z-10">MCAT Notes</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/50" />
      </div>
    </section>
  )
}

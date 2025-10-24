"use client"

import { useEffect, useRef, useState } from "react"
import { Video, Cpu, Mail, Lock } from "lucide-react"

const steps = [
  {
    icon: Video,
    title: "Tutor Clicks Record",
    description:
      "Your tutor starts a Google Meet session and clicks record. They teach normally—whether it's ACT math, LSAT logic games, or MCAT biochemistry. No extra work required.",
    step: 1,
  },
  {
    icon: Cpu,
    title: "AI Processes & Customizes",
    description:
      "Session is transcribed and transformed into notes specifically optimized for the test being studied. ACT notes emphasize formulas and strategies. LSAT notes preserve logical frameworks. MCAT notes capture integrated science concepts.",
    step: 2,
  },
  {
    icon: Mail,
    title: "Student Receives Tailored Notes",
    description:
      "Professional study materials formatted for their specific exam—delivered via email within 20 minutes. Notes are customized in length, depth, and focus based on the test prep needs.",
    step: 3,
  },
]

export function HowItWorksSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((step, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, step.step])
              }, index * 200)
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
    <section ref={sectionRef} id="how-it-works" className="relative py-32 md:py-40">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
            One Platform, Three Specialized Formats
          </h2>
          <p className="text-pretty text-xl text-foreground/70 md:text-2xl">
            Same seamless process—notes tailored to each exam's unique demands
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Connection lines */}
          <div className="absolute top-24 left-0 right-0 hidden md:block">
            <div className="mx-auto flex max-w-4xl justify-between px-12">
              <div className="h-0.5 w-full bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(step.step) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <div className="glass-card group relative p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  {/* Step number badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-lg font-bold text-white shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center pt-4">
                    <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-6 transition-transform duration-300 group-hover:scale-110">
                      <step.icon className="h-12 w-12 text-accent" />
                    </div>
                  </div>

                  <h3 className="mb-4 text-balance text-2xl font-semibold">{step.title}</h3>
                  <p className="text-pretty text-foreground/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="glass-card inline-flex items-center gap-3 px-6 py-3 shadow-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
              <Lock className="h-4 w-4 text-green-400" />
            </div>
            <span className="text-sm font-medium text-foreground/90">
              Recording deleted immediately after processing
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

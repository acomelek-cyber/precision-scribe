"use client"

import { useState } from "react"
import { DollarSign, TrendingUp } from "lucide-react"

export function PricingSection() {
  const [students, setStudents] = useState(10)
  const profit = students * 10

  return (
    <section id="pricing" className="py-32 md:py-40">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Simple, Profitable Pricing
          </h2>
          <p className="text-pretty text-xl text-foreground/70 md:text-2xl">
            Transparent pricing that works for everyone
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {/* Student Pricing Card */}
          <div className="glass-card group relative overflow-hidden p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20">
            <div className="relative z-10">
              <div className="mb-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 p-4 w-fit">
                <DollarSign className="h-10 w-10 text-secondary" />
              </div>

              <h3 className="mb-3 text-3xl font-bold">Student Pricing</h3>
              <p className="mb-8 text-lg text-foreground/70">What you charge your students</p>

              <div className="mb-8 space-y-6">
                <div className="rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 p-6">
                  <div className="mb-2 text-5xl font-bold gradient-text">First session free</div>
                  <p className="text-sm text-foreground/70">Let students try before they commit</p>
                </div>

                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex items-baseline justify-between">
                    <span className="text-foreground/70">2+ sessions/month</span>
                    <span className="text-4xl font-bold">$25</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-foreground/70">1 session/month</span>
                    <span className="text-4xl font-bold">$0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Your Cost Card */}
          <div className="glass-card group relative overflow-hidden border-2 border-primary/30 p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
            <div className="relative z-10">
              <div className="mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 w-fit">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>

              <h3 className="mb-3 text-3xl font-bold">Your Cost</h3>
              <p className="mb-8 text-lg text-foreground/70">What you pay us</p>

              <div className="mb-8 space-y-6">
                <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <div className="mb-2 text-5xl font-bold gradient-text">$15</div>
                  <p className="text-sm text-foreground/70">Per active student, per month</p>
                </div>

                <div className="space-y-4 border-t border-white/10 pt-6">
                  <p className="text-sm text-foreground/70">Only charged for students with 2+ sessions</p>

                  <div className="rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 p-6 shadow-lg">
                    <div className="mb-2 text-sm font-medium text-accent">Your Monthly Profit</div>
                    <div className="mb-4 text-5xl font-bold gradient-text">${profit}</div>
                    <div className="text-xs text-foreground/60">Based on {students} active students</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

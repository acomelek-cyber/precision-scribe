"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, TrendingUp, Calculator, ArrowRight, CheckCircle2 } from "lucide-react"

export default function PricingPage() {
  const [students, setStudents] = useState(10)
  const [sessionsPerStudent, setSessionsPerStudent] = useState(3)

  // Calculate ROI
  const activeStudents = students
  const yourCost = activeStudents * 15
  const studentRevenue = activeStudents * 25
  const monthlyProfit = studentRevenue - yourCost
  const yearlyProfit = monthlyProfit * 12

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 gradient-mesh opacity-20" />

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-7xl gradient-text">
                Simple, Transparent Pricing
              </h1>
              <p className="text-pretty text-xl text-foreground/70 md:text-2xl">
                Profitable for you, affordable for students
              </p>
            </div>
          </div>
        </section>

        {/* Economics Breakdown */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">How It Works</h2>
              <p className="text-lg text-foreground/70">Clear economics that benefit everyone</p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
              {/* Your Cost Card */}
              <div className="glass-card group relative overflow-hidden border-2 border-primary/30 p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <div className="relative z-10">
                  <div className="mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 w-fit">
                    <TrendingUp className="h-10 w-10 text-primary" />
                  </div>

                  <h3 className="mb-3 text-3xl font-bold">What You Pay</h3>
                  <p className="mb-8 text-lg text-foreground/70">Only pay for active students</p>

                  <div className="mb-8 space-y-6">
                    <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                      <div className="mb-2 text-5xl font-bold gradient-text">$15</div>
                      <p className="text-sm text-foreground/70">Per active student, per month</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Only charged for students with 2+ sessions",
                      "No setup fees or hidden costs",
                      "Cancel anytime, no contracts",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Student Pricing Card */}
              <div className="glass-card group relative overflow-hidden p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20">
                <div className="relative z-10">
                  <div className="mb-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 p-4 w-fit">
                    <DollarSign className="h-10 w-10 text-secondary" />
                  </div>

                  <h3 className="mb-3 text-3xl font-bold">What Students Pay (Example)</h3>
                  <p className="mb-8 text-lg text-foreground/70">Simple, fair pricing for students</p>

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

                  <ul className="space-y-3">
                    {[
                      "AI-powered notes after every session",
                      "Both generic and ND-enhanced formats",
                      "Unlimited access to all notes",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="glass-card p-10 md:p-12">
                <div className="mb-8 flex items-center gap-4">
                  <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-4">
                    <Calculator className="h-10 w-10 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold md:text-4xl">ROI Calculator</h2>
                    <p className="text-foreground/70">See your potential profit</p>
                  </div>
                </div>

                <div className="mb-8 space-y-6">
                  <div>
                    <Label htmlFor="students" className="mb-2 block text-lg">
                      Number of Active Students
                    </Label>
                    <Input
                      id="students"
                      type="number"
                      min="1"
                      value={students}
                      onChange={(e) => setStudents(Number(e.target.value))}
                      className="text-lg h-14 bg-background/50 border-white/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sessions" className="mb-2 block text-lg">
                      Average Sessions Per Student
                    </Label>
                    <Input
                      id="sessions"
                      type="number"
                      min="2"
                      value={sessionsPerStudent}
                      onChange={(e) => setSessionsPerStudent(Number(e.target.value))}
                      className="text-lg h-14 bg-background/50 border-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-lg text-foreground/70">Student Revenue</span>
                    <span className="text-2xl font-bold">${studentRevenue.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-lg text-foreground/70">Your Cost</span>
                    <span className="text-2xl font-bold">-${yourCost.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-semibold">Monthly Profit</span>
                    <span className="text-4xl font-bold gradient-text">${monthlyProfit.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="text-xl font-semibold">Yearly Profit</span>
                    <span className="text-4xl font-bold gradient-text">${yearlyProfit.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offer */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="glass-card relative overflow-hidden border-2 border-accent/30 p-10 md:p-16 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10" />

                <div className="relative z-10">
                  <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-accent to-primary px-6 py-2 text-sm font-semibold text-white">
                    Limited Time Offer
                  </div>

                  <h2 className="mb-6 text-4xl font-bold md:text-5xl gradient-text">First Month Free</h2>

                  <p className="mb-8 text-xl text-foreground/70 md:text-2xl">
                    Try Precision Scribe with 10-15 students for an entire month at no cost. See the impact on retention
                    and satisfaction before you commit.
                  </p>

                  <ul className="mb-10 inline-block text-left space-y-3">
                    {[
                      "Zero cost, zero risk",
                      "Full access to all features",
                      "Support for both note formats",
                      "No credit card required",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                      size="lg"
                      asChild
                      className="group bg-gradient-to-r from-accent to-primary text-white hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 text-lg px-10 py-7 h-auto w-full sm:w-auto"
                    >
                      <a href="/#contact">
                        <span className="flex items-center">
                          Start Free Pilot
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="border-2 border-primary/30 bg-transparent hover:bg-primary/10 transition-all duration-300 text-lg px-10 py-7 h-auto w-full sm:w-auto"
                    >
                      <a href="/#contact">Request Demo</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

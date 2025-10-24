import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      {/* Floating orbs */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float" />
      <div
        className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="mb-8 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Start Your Free Pilot
          </h2>

          <p className="mb-12 text-pretty text-xl opacity-90 md:text-2xl">
            First month free for 10-15 students. Zero cost, zero risk. See the impact on student retention and
            satisfaction.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="group bg-white text-primary hover:bg-white/90 hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6 h-auto w-full sm:w-auto"
            >
              <a href="#contact">
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
              className="border-2 border-white bg-transparent text-white hover:bg-white/10 transition-all duration-300 text-lg px-8 py-6 h-auto w-full sm:w-auto"
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

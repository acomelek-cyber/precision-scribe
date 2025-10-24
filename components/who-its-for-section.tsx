import { GraduationCap, BookOpen, Award, Briefcase } from "lucide-react"

const audiences = [
  {
    icon: GraduationCap,
    title: "ACT/SAT Test Prep",
    description: "Help students retain test strategies and content review",
  },
  {
    icon: BookOpen,
    title: "AP Exam Tutoring",
    description: "Comprehensive notes for complex AP coursework",
  },
  {
    icon: Award,
    title: "College Admissions Coaching",
    description: "Document essay feedback and application strategies",
  },
  {
    icon: Briefcase,
    title: "Premium Tutoring Services",
    description: "Add value with professional documentation",
  },
]

export function WhoItsForSection() {
  return (
    <section id="who-its-for" className="py-32 md:py-40">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">Who It's For</h2>
          <p className="text-pretty text-xl text-foreground/70 md:text-2xl">Perfect for premium tutoring companies</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="glass-card group p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20"
            >
              <div className="flex items-start gap-6">
                <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-4 transition-transform duration-300 group-hover:scale-110">
                  <audience.icon className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="mb-3 text-balance text-2xl font-semibold">{audience.title}</h3>
                  <p className="text-pretty text-foreground/70">{audience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

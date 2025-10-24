import Link from "next/link"

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Back Navigation */}
      <div className="border-b border-slate-800/50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Story Content */}
      <article className="container mx-auto px-4 md:px-6 max-w-4xl py-16 md:py-24">
        {/* Header */}
        <header className="mb-16 space-y-6">
          <div className="text-sm font-medium text-purple-600 tracking-wide uppercase">Our Story</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Why I Built Precision Scribe
          </h1>
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-6 text-lg leading-relaxed text-slate-300">
            <p className="text-xl text-white font-medium">The problem was obvious, but no one was solving it.</p>

            <p>
              My daughter Avery was working with an excellent ACT tutor—learning a lot during sessions—but forgetting
              most of it by the following week. Not because she wasn't trying but because retaining an hour of new
              information without comprehensive notes after a long day at school is nearly impossible.
            </p>

            <p>
              As someone who works with AI, I built a solution: automatically record the session, transcribe it,
              generate professional study notes, and deliver them within minutes after the session. When I tested it
              with Avery's tutoring, her retention improved dramatically and her scores followed.
            </p>

            <p>
              I realized this problem wasn't unique to high school students. College grads preparing for the LSAT face
              the same challenge. So do pre-med students tackling the MCAT. Anyone investing hundreds of dollars per
              hour in specialized tutoring deserves comprehensive notes that help them retain what they're learning.
            </p>

            <p className="text-xl text-white font-medium">
              That's why Precision Scribe now serves all three markets—because every student deserves to remember what
              they learn.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-12 mt-12 border-t border-slate-800">
            <p className="text-xl text-slate-300">— Ali Comelekoglu</p>
            <p className="text-lg text-slate-400 mt-1">Founder, Precision Scribe</p>
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 pt-16 border-t border-slate-800">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to help your learners succeed?</h3>
            <p className="text-lg text-slate-400">
              Start a free pilot and see the difference comprehensive notes make.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Free Pilot
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

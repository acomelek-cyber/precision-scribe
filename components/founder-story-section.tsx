"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FounderStorySection() {
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
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(236, 72, 153, 0.08) 100%), rgba(30, 20, 50, 0.4)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div
          className={`grid md:grid-cols-5 gap-12 md:gap-16 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column - Story Content (60%) */}
          <div className="md:col-span-3 space-y-6">
            <div className="text-sm font-medium text-purple-600 tracking-wide uppercase">Our Story</div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Why I Built Precision Scribe
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>
                I built this because my daughter Avery was struggling to retain everything from her ACT tutoring
                sessions. Great tutor, lots of learning—but by the next week, she'd forgotten half of it.
              </p>

              <p>
                As someone who dabbles in AI, I thought: what if AI could automatically generate comprehensive study
                notes after each session? So I built a system that does exactly that.
              </p>

              <p>
                I tested it with Avery's tutoring sessions. It worked. She started reviewing the notes, retaining
                concepts better, and her confidence (and scores) improved dramatically.
              </p>

              <p>
                Then I realized: every student deserves this advantage. Not just high school students preparing for the
                ACT, but also college grads tackling the LSAT and pre-med students mastering the MCAT. That's why
                Precision Scribe now serves all three.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-lg italic text-slate-400">— Ali Comelekoglu, Founder & Parent</p>
            </div>

            <div className="pt-2">
              <Link
                href="/story"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors group"
              >
                Read Full Story
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column - Illustration (40%) */}
          <div className="md:col-span-2 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/40 blur-3xl" />
              </div>

              {/* Icon illustration */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="space-y-8">
                  {/* Brain icon */}
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                      <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Plus sign */}
                  <div className="flex justify-center">
                    <div className="w-8 h-8 text-purple-400 font-bold text-2xl">+</div>
                  </div>

                  {/* Notes icon */}
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

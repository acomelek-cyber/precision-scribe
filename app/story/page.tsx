import Link from "next/link"
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"

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
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Story Content */}
      <article className="container mx-auto px-4 md:px-6 max-w-4xl py-16 md:py-24">
        {/* Header */}
        <header className="mb-16 space-y-6">
          <div className="text-sm font-medium text-purple-600 tracking-wide uppercase">Our Story</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Why I Built This</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Look, I'm not going to pretend this was some grand vision to transform education. It wasn't. It started
            because I was frustrated watching my daughter waste money.
          </p>
        </header>

        {/* Story Sections */}
        <div className="prose prose-lg prose-invert max-w-none">
          {/* Section 1: The Problem */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The Problem</h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>
                Fall 2024. My daughter Avery was doing ACT prep. We found a good tutor—$75/hour, knew her stuff, patient
                with her. Sessions went well.
              </p>
              <p>But here's what kept happening:</p>
              <p>
                I'd ask her a week later, "Hey, what did you guys cover in tutoring?" She'd remember the general topic.
                Maybe one formula. But the details? The step-by-step process for solving that type of problem? Gone.
              </p>
              <p>
                <strong className="text-white">
                  So we're paying $75/hour for her to forget half of it by the following week.
                </strong>
              </p>
              <p>That's not a good use of anyone's money.</p>
              <p>
                The tutor was doing his job. Avery was paying attention. But expecting a high school student after a
                long day at school to simultaneously learn new ACT math concepts AND take perfect notes? That's
                unrealistic.
              </p>
              <p>Most students can barely do one of those things well, let alone both at the same time.</p>
            </div>
          </section>

          {/* Section 2: The Idea */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The Idea</h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>
                I dabble in AI. I've been following what's happening with transcription services and language models.
              </p>
              <p>
                One night after another frustrating homework session where Avery couldn't remember something they'd
                literally covered three days earlier, I had a thought:
              </p>
              <p className="text-xl font-medium text-white italic">
                What if I just recorded the tutoring session and had AI generate the notes?
              </p>
              <p>
                The technology exists. Speech-to-text is good now. AI can understand educational content and format it
                properly. This should be doable.
              </p>
            </div>
          </section>

          {/* Section 3: Testing It */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Testing It</h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>I asked Avery's tutor if I could record their next Google Meet session. She said sure.</p>
              <p>After the session, I:</p>
              <ol className="space-y-2 text-slate-300 list-decimal pl-6">
                <li>Downloaded the recording</li>
                <li>Ran it through a transcription service</li>
                <li>Fed the transcript to AI with a custom prompt asking for study notes</li>
                <li>Got back comprehensive notes in about 90 seconds</li>
              </ol>
              <p>The notes were... actually really good.</p>
              <p>
                Better than anything Avery would've written by hand. More organized. More complete. Formatted properly
                with sections for formulas, examples, homework, etc.
              </p>
              <p>I showed them to Avery. She said, "Wait, these are actually useful."</p>
            </div>
          </section>

          {/* Section 4: Making It Automatic */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Making It Automatic</h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>Over the next few weeks, I set up a system to do this automatically after each session:</p>
              <ol className="space-y-2 text-slate-300 list-decimal pl-6">
                <li>Tutor clicks "Record" in Google Meet</li>
                <li>Recording saves to Google Drive</li>
                <li>My system detects it and generates notes</li>
                <li>Notes get emailed to Avery</li>
                <li>Recording gets deleted (privacy)</li>
              </ol>
              <p>Takes about 15-20 minutes from when the session ends to when notes hit her inbox.</p>
              <p>
                Avery started actually using them. Before each session, she'd review the previous week's notes. She
                could reference specific problem-solving strategies when she got stuck on homework. Her practice test
                scores started improving.
              </p>
              <p>It was working.</p>
            </div>
          </section>

          {/* Section 5: The Realization */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">The Realization</h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>
                At some point I thought: If it's helping Avery this much, why wouldn't every tutoring company offer
                this?
              </p>
              <p>Think about it:</p>
              <ul className="space-y-2 text-slate-300 list-disc pl-6">
                <li>They already use Google Meet (or easily could)</li>
                <li>Company improves their service</li>
                <li>Zero extra work for tutors (just click Record)</li>
              </ul>
              <p>It's a straightforward opportunity.</p>
              <p>
                But more than that—and I know this sounds like I'm going to get cheesy here, but it's true—watching
                Avery's confidence grow as she stopped forgetting things was kind of incredible. She went from "I don't
                remember how to do these" to "Oh yeah, we covered this, let me check my notes."
              </p>
              <p>
                That's valuable. Not in a save-the-world way. Just in a practical "this makes tutoring actually work
                better" way.
              </p>
            </div>
          </section>

          {/* Section 6: Building Precision Scribe */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Building Precision Scribe</h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>So I spent a few months building a proper version:</p>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-white mb-4">What I added:</h3>
                <ul className="space-y-2 text-slate-300 list-disc pl-6">
                  <li>Works with any Google Meet recording automatically</li>
                  <li>
                    Two note formats: standard and one optimized for ADHD/dyslexia students (lots of visual hierarchy,
                    checklists, executive function support)
                  </li>
                  <li>Privacy-first: recordings deleted immediately after processing</li>
                  <li>Integrates with Airtable for tutoring companies to track everything</li>
                  <li>Fair pricing that's profitable for companies</li>
                </ul>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-white mb-4">What I tested:</h3>
                <ul className="space-y-2 text-slate-300 list-disc pl-6">
                  <li>Used it for Avery's remaining sessions</li>
                  <li>Refined the prompts until the notes were consistently good</li>
                  <li>Made sure it handled different subjects and tutoring styles</li>
                  <li>Verified the privacy/deletion stuff actually worked</li>
                </ul>
              </div>
              <p>By early 2025, I had something that worked reliably.</p>
            </div>
          </section>

          {/* Section 7: What Happened With Avery */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Happened With Avery</h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>Avery took the ACT. She did well. Not perfect, but well above her target score.</p>
              <p>
                Was it 100% because of the AI notes? Of course not. She had a good tutor, she studied hard, she's smart.
              </p>
              <p>
                But did the notes help her retain more from tutoring and avoid wasting time re-learning things? Yeah,
                definitely.
              </p>
              <p>
                And here's the thing: we paid for 12 tutoring sessions at $75/hour. That's $900. If she forgot half of
                each session, we effectively paid $900 for $450 worth of retained learning.
              </p>
              <p className="text-xl font-medium text-white">
                There is a cost to generate notes but they doubled the effectiveness of the tutoring.
              </p>
              <p>That's a pretty good ROI.</p>
            </div>
          </section>

          {/* Section 8: Why I'm Offering This */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why I'm Offering This to Tutoring Companies</h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>I could've just kept this for personal use and moved on. But that felt like a waste.</p>
              <p>
                The system works. It's not complicated to run. The economics make sense for tutoring companies. Students
                would benefit.
              </p>
              <p>So I'm reaching out to premium tutoring companies and offering to set this up for them:</p>
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-white mb-4">The offer:</h3>
                <ul className="space-y-2 text-slate-300 list-disc pl-6">
                  <li>Free pilot with 10-15 students for a month</li>
                  <li>I handle all the technical setup</li>
                  <li>I coordinate with tutors directly</li>
                  <li>They just watch it work</li>
                  <li>If they like it, we continue at $15/month per active student</li>
                  <li>If they don't, we stop, no hard feelings</li>
                </ul>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-white mb-4">Why companies should care:</h3>
                <ul className="space-y-2 text-slate-300 list-disc pl-6">
                  <li>New revenue stream ($200-400/month with 20-30 students)</li>
                  <li>Better student outcomes (retention, confidence, scores)</li>
                  <li>Zero extra work for tutors</li>
                  <li>Parents see tangible value from tutoring</li>
                  <li>Differentiates them from competitors</li>
                </ul>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-white mb-4">Why I'm doing this:</h3>
                <ul className="space-y-2 text-slate-300 list-disc pl-6">
                  <li>It's a good business (profitable for everyone)</li>
                  <li>It solves a real problem I personally experienced</li>
                  <li>The technology is ready and works well</li>
                  <li>Someone should be doing this, might as well be me</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9: What This Isn't */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What This Isn't</h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>Let me be clear about what I'm NOT claiming:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">This won't replace tutors</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">This won't magically make bad students good</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">This isn't going to "revolutionize education"</p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">I'm not trying to build a unicorn startup</p>
                </div>
              </div>
              <p className="text-lg font-medium text-white mt-6">
                This is a practical tool that makes tutoring more effective by solving one specific problem: students
                forgetting what they learned.
              </p>
              <p>That's it.</p>
            </div>
          </section>

          {/* Section 10: What This Is */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What This Is</h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">A system that generates comprehensive study notes automatically</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">Helps students retain more from tutoring sessions</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">Removes the burden of note-taking while learning</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">Particularly helpful for ADHD/dyslexic students</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">Privacy-first (recordings deleted immediately)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">Works with existing tools (Google Meet)</p>
                </div>
              </div>
              <div className="mt-8 space-y-3 text-slate-300">
                <p>If you run a tutoring company and this sounds useful, let's talk.</p>
                <p>If you're a parent whose kid is in tutoring and forgetting everything, send this to their tutor.</p>
                <p>If you're a student who wishes you had better notes, ask your tutor about it.</p>
              </div>
            </div>
          </section>

          {/* Section 11: Next Steps */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Next Steps</h2>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>
                I'm looking to work with 5-10 tutoring companies in the next few months. Not trying to scale to 100
                companies. Just want to work with a handful of good ones, make sure this works well for them, refine the
                system based on real usage.
              </p>
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-white mb-4">If you're interested:</h3>
                <p className="text-slate-300 mb-4">
                  Email me:{" "}
                  <a href="mailto:hello@precision-scribe.com" className="text-purple-400 hover:text-purple-300">
                    hello@precision-scribe.com
                  </a>
                </p>
                <p className="text-slate-300 mb-2">I'll send you:</p>
                <ul className="space-y-2 text-slate-300 list-disc pl-6">
                  <li>Sample notes (so you can see what students get)</li>
                  <li>Exact pricing breakdown</li>
                  <li>Technical requirements (basically just Google Meet)</li>
                  <li>Timeline for getting started (about a week)</li>
                </ul>
                <p className="text-slate-300 mt-4">
                  Or if you just have questions, email anyway. I'm happy to explain how it works.
                </p>
              </div>
            </div>
          </section>

          {/* Signature */}
          <div className="pt-8 border-t border-slate-800">
            <p className="text-xl text-slate-300">— Ali Comelekoglu</p>
            <p className="text-lg text-slate-400 mt-1">Founder, Precision Scribe</p>
            <p className="text-lg text-slate-400">Father of a former ACT-stressed teenager</p>
            <p className="text-lg text-purple-400 mt-2">
              <a href="mailto:hello@precision-scribe.com" className="hover:text-purple-300">
                hello@precision-scribe.com
              </a>
            </p>
            <p className="text-lg text-slate-400">precision-scribe.com</p>
          </div>
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 pt-16 border-t border-slate-800">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to help your students succeed?</h3>
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

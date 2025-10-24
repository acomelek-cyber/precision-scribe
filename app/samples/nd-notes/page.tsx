import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Sparkles, Brain, Target, Heart, Star, AlertCircle, CheckCircle, Lightbulb } from "lucide-react"

export default function NDNotesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Badge className="bg-gradient-to-r from-accent to-primary text-white border-0">
            <Sparkles className="mr-1 h-3 w-3" />
            ND-Enhanced Format
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Brain className="h-4 w-4" />
            Sample ND-Friendly Study Guide
          </div>
          <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">🧠 ND-Friendly Study Guide</h1>
          <p className="text-lg text-foreground/70">
            ACT Math Tutoring Session - Optimized for neurodivergent learners
          </p>
        </div>

        {/* Quick Summary Section */}
        <div className="glass-card mb-8 border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5 p-8">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold">⚡ QUICK SUMMARY (Read This First!)</h2>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-accent">What we covered:</h3>
              <ul className="ml-6 list-disc space-y-1 text-foreground/80">
                <li>Factoring quadratics (the hard ones with coefficients)</li>
                <li>Pythagorean theorem</li>
                <li>Circle formulas (area & circumference)</li>
                <li>Probability (AND vs OR rules)</li>
                <li>Counting principle problems</li>
                <li>Test timing strategy</li>
              </ul>
            </div>

            <div className="rounded-lg bg-green-500/10 p-4 border border-green-500/20">
              <p className="font-semibold text-green-400">
                💚 My biggest win: I can do probability now! I understand when to multiply (AND) vs add (OR)
              </p>
            </div>

            <div className="rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/20">
              <p className="font-semibold text-yellow-400">
                ⚠️ What to practice: First 20 questions carefully - that's where most of my points come from
              </p>
            </div>

            <div className="rounded-lg bg-blue-500/10 p-4 border border-blue-500/20">
              <p className="font-semibold text-blue-400">
                📝 Homework: Take the NEW FORMAT full practice test (math section) + do 10 warm-up questions Saturday
                morning
              </p>
            </div>
          </div>
        </div>

        {/* Must Memorize Section */}
        <div className="glass-card mb-8 border-2 border-red-500/30 bg-gradient-to-br from-red-500/5 to-orange-500/5 p-8">
          <div className="mb-4 flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-red-400" />
            <h2 className="text-2xl font-bold">🔴 MUST MEMORIZE (Flash Card These!)</h2>
          </div>

          <div className="space-y-3">
            {[
              { num: 1, text: "Slope formula: (y₂ - y₁)/(x₂ - x₁)" },
              { num: 2, text: "Pythagorean theorem: a² + b² = c² (c is ALWAYS the hypotenuse!)" },
              { num: 3, text: "Circle area: πr² (radius only!)" },
              { num: 4, text: "Circle circumference: 2πr (radius only!)" },
              { num: 5, text: "Probability AND = multiply, OR = add" },
              { num: 6, text: "Counting principle: multiply all the options" },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-3 rounded-lg bg-background/50 p-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-sm font-bold text-red-400">
                  {item.num}
                </div>
                <p className="text-foreground/90">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-purple-500/10 p-4 border border-purple-500/20">
            <div className="mb-2 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-purple-400" />
              <h3 className="font-semibold text-purple-400">🧠 Memory hack:</h3>
            </div>
            <ul className="ml-6 list-disc space-y-1 text-foreground/80">
              <li>Diameter ÷ 2 = radius (always convert!)</li>
              <li>"AND" = harder = multiply (fractions get smaller)</li>
              <li>"OR" = easier = add (more ways to win)</li>
            </ul>
          </div>
        </div>

        {/* What We Actually Did Section */}
        <div className="mb-8">
          <h2 className="mb-6 text-3xl font-bold">📝 WHAT WE ACTUALLY DID</h2>

          <div className="space-y-6">
            {/* Problem Type 1 */}
            <div className="glass-card p-6">
              <h3 className="mb-4 text-xl font-bold text-secondary">
                Problem Type 1: Factoring Quadratics (When First Number ≠ 1)
              </h3>

              <div className="space-y-3">
                <div>
                  <p className="mb-1 font-semibold text-blue-400">What happened:</p>
                  <p className="text-foreground/80">We tried factoring 9x² - 32x - 56 and it was HARD</p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-yellow-400">Where I got stuck:</p>
                  <p className="text-foreground/80">I had the right numbers (7 and 8) but put them in wrong spots</p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-green-400">What clicked:</p>
                  <p className="text-foreground/80">
                    These take trial and error! It's not about being "smart enough" - you literally have to test
                    different arrangements
                  </p>
                </div>

                <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                  <p className="mb-2 font-semibold text-accent">Pattern to remember:</p>
                  <ul className="ml-6 list-disc space-y-1 text-foreground/80">
                    <li>Find what multiplies to make the LAST number</li>
                    <li>Find what ADDS to make the MIDDLE number</li>
                    <li>Try different positions until FOIL gives you the original</li>
                    <li>IT'S OKAY TO GUESS AND CHECK</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Problem Type 2 */}
            <div className="glass-card p-6">
              <h3 className="mb-4 text-xl font-bold text-secondary">Problem Type 2: Pythagorean Theorem</h3>

              <div className="space-y-3">
                <div>
                  <p className="mb-1 font-semibold text-blue-400">What happened:</p>
                  <p className="text-foreground/80">Problem gave me one leg (40) and hypotenuse (50)</p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-yellow-400">Where I got stuck:</p>
                  <p className="text-foreground/80">Almost added 50 + 40 instead of using the formula</p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-green-400">What clicked:</p>
                  <p className="text-foreground/80">Read carefully! C is ALWAYS the hypotenuse (longest side)</p>
                </div>

                <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                  <p className="mb-2 font-semibold text-accent">Pattern to remember:</p>
                  <ul className="ml-6 list-disc space-y-1 text-foreground/80">
                    <li>If they give you hypotenuse + one leg: c² - a² = b²</li>
                    <li>Rearrange the formula based on what you're missing</li>
                    <li>Always check: is this the hypotenuse or a leg?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Problem Type 3 */}
            <div className="glass-card p-6">
              <h3 className="mb-4 text-xl font-bold text-secondary">Problem Type 3: Circle Problems</h3>

              <div className="space-y-3">
                <div>
                  <p className="mb-1 font-semibold text-blue-400">What happened:</p>
                  <p className="text-foreground/80">
                    Found circumference of two circles (r=5 and r=6), then found difference
                  </p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-green-400">What clicked:</p>
                  <p className="text-foreground/80">
                    Don't let fancy words scare me! "Concentric" just means circles inside circles
                  </p>
                </div>

                <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                  <p className="mb-2 font-semibold text-accent">Pattern to remember:</p>
                  <ul className="ml-6 list-disc space-y-1 text-foreground/80">
                    <li>ALWAYS use radius (not diameter!)</li>
                    <li>Check answer choices BEFORE calculating - might leave π in the answer</li>
                    <li>Diameter ÷ 2 = radius</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Problem Type 4 */}
            <div className="glass-card p-6 border-2 border-green-500/30">
              <h3 className="mb-4 text-xl font-bold text-green-400">Problem Type 4: Probability - The AND/OR Rule</h3>

              <div className="space-y-3">
                <div>
                  <p className="mb-1 font-semibold text-blue-400">What happened:</p>
                  <p className="text-foreground/80">Learned when to multiply vs add probabilities</p>
                </div>

                <div className="rounded-lg bg-green-500/10 p-4 border border-green-500/20">
                  <p className="mb-2 font-semibold text-green-400">💡 The breakthrough moment:</p>
                  <ul className="ml-6 list-disc space-y-1 text-foreground/80">
                    <li>OR = ADD (picking red OR yellow = 3/10 + 4/10 = 7/10)</li>
                    <li>AND = MULTIPLY (picking red AND THEN yellow = 3/10 × 4/10)</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                  <p className="mb-2 font-semibold text-accent">Pattern to remember:</p>
                  <ul className="ml-6 list-disc space-y-1 text-foreground/80">
                    <li>OR = more ways to be happy = ADD</li>
                    <li>AND = harder to do multiple things = MULTIPLY (gets smaller!)</li>
                    <li>"Without replacement" = subtract from numerator AND denominator</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Problem Type 5 */}
            <div className="glass-card p-6">
              <h3 className="mb-4 text-xl font-bold text-secondary">Problem Type 5: Counting Principle</h3>

              <div className="space-y-3">
                <div>
                  <p className="mb-1 font-semibold text-blue-400">What happened:</p>
                  <p className="text-foreground/80">How many combinations with 4 noses, 3 lips, 2 wigs?</p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-green-400">What clicked:</p>
                  <p className="text-foreground/80">
                    Draw blanks for each choice, write the number of options, then MULTIPLY
                  </p>
                </div>

                <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                  <p className="mb-2 font-semibold text-accent">Pattern to remember:</p>
                  <div className="my-3 rounded bg-background/50 p-4 font-mono text-center">
                    ___ × ___ × ___ = total combinations
                    <br />
                    &nbsp;4 &nbsp;&nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp; = 24
                  </div>
                  <p className="text-foreground/80">
                    <span className="font-semibold text-yellow-400">Watch out:</span> If a digit can't repeat (like
                    phone numbers), it's 1 for used digits!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My System Section */}
        <div className="mb-8">
          <h2 className="mb-6 text-3xl font-bold">🛠️ MY SYSTEM (Because Guessing Sucks)</h2>

          <div className="space-y-6">
            {/* Factoring System */}
            <div className="glass-card p-6">
              <h3 className="mb-4 text-xl font-bold text-secondary">For Factoring (when first number ≠ 1):</h3>

              <div className="space-y-2">
                {[
                  "Step 1: Find what multiplies to LAST number",
                  "Step 2: Find what ADDS to MIDDLE number",
                  "Step 3: Try different arrangements and FOIL to check",
                  "Step 4: If stuck after 2 tries, skip and come back",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-sm font-bold text-secondary">
                      {i + 1}
                    </div>
                    <p className="text-foreground/90">{step.replace(/Step \d: /, "")}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg bg-purple-500/10 p-4 border border-purple-500/20">
                <div className="flex items-start gap-2">
                  <Brain className="h-5 w-5 shrink-0 text-purple-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-400">🧠 Brain Hack:</p>
                    <p className="text-foreground/80">
                      These are TIME TRAPS on the ACT. If it doesn't have a 1 in front, it might take forever. Skip if
                      you're stuck after 1 minute.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Probability System */}
            <div className="glass-card p-6">
              <h3 className="mb-4 text-xl font-bold text-secondary">For Probability:</h3>

              <div className="space-y-2">
                {[
                  "Write down what I'm finding (use the word AND or OR)",
                  "If I see AND = multiply, if I see OR = add",
                  "Check: with or without replacement?",
                  "Simplify using calculator (MATH → FRAC button)",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-sm font-bold text-secondary">
                      {i + 1}
                    </div>
                    <p className="text-foreground/90">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg bg-purple-500/10 p-4 border border-purple-500/20">
                <div className="flex items-start gap-2">
                  <Brain className="h-5 w-5 shrink-0 text-purple-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-400">🧠 Brain Hack:</p>
                    <p className="text-foreground/80">
                      Draw it out! Make a fraction for each event, then decide multiply or add.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Circle System */}
            <div className="glass-card p-6">
              <h3 className="mb-4 text-xl font-bold text-secondary">For Circle Problems:</h3>

              <div className="space-y-2">
                {[
                  "Find the radius (divide diameter by 2 if needed)",
                  "Check answer choices - do they have π?",
                  "Use formula (πr² for area, 2πr for circumference)",
                  "Leave π in answer if choices have π",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-sm font-bold text-secondary">
                      {i + 1}
                    </div>
                    <p className="text-foreground/90">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg bg-purple-500/10 p-4 border border-purple-500/20">
                <div className="flex items-start gap-2">
                  <Brain className="h-5 w-5 shrink-0 text-purple-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-400">🧠 Brain Hack:</p>
                    <p className="text-foreground/80">
                      Write "r = ?" at the top of scratch work. Don't use diameter by accident!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Homework Section */}
        <div className="glass-card mb-8 border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-8">
          <div className="mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-400" />
            <h2 className="text-2xl font-bold">🏠 MY HOMEWORK (Executive Function Support)</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-semibold text-blue-400">📋 BEFORE I start:</h3>
              <div className="space-y-2">
                {[
                  "Find quiet space (or headphones)",
                  "Get TI-84 calculator (know where π button is: 2nd + ^)",
                  "Get scratch paper (LOTS - I write everything down)",
                  "Put phone on Do Not Disturb",
                  "Get water/snack",
                  "Set timer if doing timed practice",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-background/50 p-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-blue-400/50" />
                    <p className="text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-green-400">✅ THE ACTUAL WORK:</h3>

              <div className="space-y-4">
                <div>
                  <p className="mb-2 font-semibold text-foreground">By Friday:</p>
                  <div className="space-y-2">
                    {[
                      'Review "Math Formula Sheet" document (~15 min)',
                      'Review "Types of Math Questions" document for weak areas (~20 min)',
                      "Practice 10 probability problems from any old test (~15 min)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-lg bg-background/50 p-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-green-400/50" />
                        <p className="text-foreground/90">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-foreground">Saturday Morning (TEST DAY):</p>
                  <div className="space-y-2">
                    {[
                      "Wake up early enough to do warm-up",
                      "Do 1 English passage (untimed, just to wake up brain) (~5 min)",
                      "Do 10 random math questions (don't grade, just practice) (~10 min)",
                      "Eat breakfast!",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-lg bg-background/50 p-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-green-400/50" />
                        <p className="text-foreground/90">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-foreground">This Week (if time):</p>
                  <div className="space-y-2">
                    {[
                      "Take NEW FORMAT practice test - math section only (~50 min)",
                      "Time myself on first 20 questions - try to finish in 20 minutes",
                      "Check scoring guide to see where I'm at",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-lg bg-background/50 p-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-green-400/50" />
                        <p className="text-foreground/90">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timing Strategy */}
        <div className="glass-card mb-8 p-8">
          <div className="mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold">⏱️ MY TIMING STRATEGY</h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
              <p className="text-lg font-semibold text-accent">Goal: Hit question 20 in 20 minutes</p>
              <p className="text-foreground/80">This gives me 30-35 minutes for the harder second half.</p>
            </div>

            <div>
              <p className="mb-3 font-semibold">After Question 20, work in ROUNDS:</p>
              <div className="space-y-3">
                <div className="rounded-lg bg-background/50 p-4">
                  <p className="font-semibold text-secondary">
                    Round 1: Skim and do ALL the ones I definitely know (~10-15 min)
                  </p>
                </div>
                <div className="rounded-lg bg-background/50 p-4">
                  <p className="font-semibold text-secondary">
                    Round 2: Go back and do ones where I can try something (~10 min)
                  </p>
                </div>
                <div className="rounded-lg bg-background/50 p-4">
                  <p className="font-semibold text-secondary">
                    Round 3: Struggle through or guess on the rest (~5 min)
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-green-500/10 p-4 border border-green-500/20">
              <p className="font-semibold text-green-400">Why this works:</p>
              <p className="text-foreground/80">
                I might be able to do question 45 even if I can't do question 30! I need to SEE all of them.
              </p>
            </div>
          </div>
        </div>

        {/* Test Day Rules */}
        <div className="glass-card mb-8 border-2 border-accent/30 p-8">
          <div className="mb-4 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold">🎯 MY TEST DAY RULES</h2>
          </div>

          <div className="space-y-3">
            {[
              "Read questions SLOWLY (once carefully beats 10 times panicked)",
              "Write everything down (even on digital test - use scratch paper)",
              "Before I bubble an answer: Re-read the question ONE more time",
              "Check: Am I answering what they actually asked? Right units?",
              "First 20 questions = my money questions - be EXTRA careful here",
              "Don't panic on hard factoring - these are time traps, skip if stuck",
            ].map((rule, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-background/50 p-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                  {i + 1}
                </div>
                <p className="text-foreground/90">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths Section */}
        <div className="glass-card mb-8 border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-emerald-500/5 p-8">
          <div className="mb-4 flex items-center gap-2">
            <Star className="h-6 w-6 text-green-400" />
            <h2 className="text-2xl font-bold">🌟 MY STRENGTHS (Yes, Really)</h2>
          </div>

          <div className="space-y-3">
            {[
              "I write everything down (this prevents silly mistakes!)",
              "I caught my own mistakes today (40+50 almost became 90 instead of using Pythagorean theorem)",
              "I understand probability now - the AND/OR rule makes sense",
              "I know when to use my calculator's fraction button",
              'I\'m not afraid to ask "wait, how do I do this?" when confused',
            ].map((strength, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-background/50 p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-400 mt-0.5" />
                <p className="text-foreground/90">{strength}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Compassion Section */}
        <div className="glass-card mb-8 border-2 border-pink-500/30 bg-gradient-to-br from-pink-500/5 to-purple-500/5 p-8">
          <div className="mb-4 flex items-center gap-2">
            <Heart className="h-6 w-6 text-pink-400" />
            <h2 className="text-2xl font-bold">💚 SELF-COMPASSION REMINDER</h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-2 font-semibold text-yellow-400">
                When I said: "How am I supposed to do that in the [test]?!"
              </p>
              <div className="rounded-lg bg-background/50 p-4">
                <p className="text-foreground/90">
                  <span className="font-semibold text-green-400">Translation:</span> That was a HARD problem. The tutor
                  said those specific factoring problems (where the first number isn't 1) probably WON'T show up on the
                  ACT. And if they do, they'll give me a greatest common factor to pull out first. I'm not behind -
                  those are genuinely difficult and take lots of trial and error. I'm doing great. ✨
                </p>
              </div>
            </div>

            <div>
              <p className="mb-2 font-semibold text-yellow-400">
                When I said: "I forget it. Like, I get it, but also I can't get it."
              </p>
              <div className="rounded-lg bg-background/50 p-4">
                <p className="text-foreground/90">
                  <span className="font-semibold text-green-400">Translation:</span> My brain needs more practice with
                  this concept, and that's totally normal. I chose to practice other things instead because I can learn
                  this more easily on my own. That was a smart strategic choice about my time. 🎯
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Encouragement */}
        <div className="glass-card border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-primary/10 p-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">🎉 YOU'VE GOT THIS!</h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p>
              Remember: The tutor said "I don't want to see you again" in the NICEST way - meaning she believes this is
              your LAST ACT!
            </p>
            <p className="font-semibold text-accent">
              Your goal: Be careful on the first 20. That's where your points are. Don't rush. Trust yourself. 💪
            </p>
            <p className="text-sm">Test is: 50 minutes, 45 questions, NEW FORMAT</p>
            <p className="text-2xl font-bold text-accent">You are ready. 🌟</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-primary text-white hover:shadow-xl hover:shadow-accent/50"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

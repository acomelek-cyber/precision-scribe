import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle2, AlertCircle, Calendar, Clock, User, Sun } from "lucide-react"

export default function GenericNotesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-sm">
              Sample Document
            </Badge>
            <Link href="/samples/generic-notes-light">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Sun className="h-4 w-4" />
                Light Version
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Document Content */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        {/* Document Header */}
        <div className="mb-12 rounded-2xl border border-border/40 bg-gradient-to-br from-secondary/10 to-accent/5 p-8">
          <div className="mb-6 flex items-center gap-3">
            <Badge className="bg-secondary text-white">Generic Notes</Badge>
            <Badge variant="outline">ACT Tutoring</Badge>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">ACT Tutoring Session Notes</h1>

          <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>March 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>90 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Student: Avery</span>
            </div>
          </div>
        </div>

        {/* Session Overview */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Session Overview</h2>

          <div className="glass-card mb-6 p-6">
            <h3 className="mb-4 text-xl font-semibold text-secondary">Main Topics Covered</h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">•</span>
                <span>Factoring quadratic expressions (trinomials with leading coefficients ≠ 1)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">•</span>
                <span>Right triangle geometry (Pythagorean Theorem)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">•</span>
                <span>Circle formulas (area and circumference)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">•</span>
                <span>Probability (single events, compound events, with/without replacement)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">•</span>
                <span>Counting principle problems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-secondary">•</span>
                <span>Test-taking strategies and timing for new ACT format</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="mb-4 text-xl font-semibold text-accent">Key Concepts Taught</h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">•</span>
                <span>Trial and error approach to factoring complex trinomials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">•</span>
                <span>Identifying factorable vs. non-factorable expressions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">•</span>
                <span>Proper placement of values in Pythagorean Theorem</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">•</span>
                <span>Probability operations: "OR" means add, "AND" means multiply</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-accent">•</span>
                <span>Strategic test-taking and time management</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Detailed Content</h2>

          {/* Topic 1: Factoring */}
          <div className="glass-card mb-8 p-6">
            <h3 className="mb-4 text-2xl font-bold text-secondary">1. Factoring Quadratic Expressions</h3>

            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold">Key Challenge</h4>
              <p className="text-foreground/80">Factoring trinomials when the leading coefficient is not 1</p>
            </div>

            <div className="mb-6 rounded-lg bg-background/50 p-4">
              <p className="mb-2 font-semibold text-accent">Example Problem:</p>
              <p className="font-mono text-lg">Factor 9x² - x - 56</p>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold">Step-by-Step Process:</h4>
              <ol className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">1.</span>
                  <span>Identify what the first terms must multiply to (9 in this case)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">2.</span>
                  <span>Identify what the last terms must multiply to (-56)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">3.</span>
                  <span>Use trial and error to find the correct combination</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">4.</span>
                  <span>Check work by expanding (FOIL method)</span>
                </li>
              </ol>
            </div>

            <div className="mb-6 rounded-lg border border-accent/30 bg-accent/5 p-4">
              <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <AlertCircle className="h-5 w-5 text-accent" />
                Important Notes
              </h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• Requires significant trial and error</li>
                <li>• Need to consider both positive and negative combinations</li>
                <li>• Position of numbers matters significantly</li>
                <li>• Always verify by expanding back out</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold">Successful Example:</h4>
              <div className="space-y-2 rounded-lg bg-background/50 p-4 font-mono">
                <p>Problem: 7x² - 32x - 60</p>
                <p className="text-secondary">Solution: (7x + 10)(x - 6)</p>
                <p className="text-sm text-foreground/70">
                  Strategy: Find two numbers that multiply to -60 and work with the coefficient 7
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-secondary/30 bg-secondary/5 p-4">
              <h4 className="mb-3 text-lg font-semibold">Greatest Common Factor (GCF) Strategy:</h4>
              <div className="space-y-2 font-mono text-sm">
                <p>Problem: 4x² + 8x - 12</p>
                <p>First step: Factor out GCF of 4</p>
                <p>Result: 4(x² + 2x - 3)</p>
                <p className="text-secondary">Then factor: 4(x + 3)(x - 1)</p>
              </div>
            </div>
          </div>

          {/* Topic 2: Pythagorean Theorem */}
          <div className="glass-card mb-8 p-6">
            <h3 className="mb-4 text-2xl font-bold text-secondary">2. Pythagorean Theorem</h3>

            <div className="mb-6 rounded-lg bg-gradient-to-r from-secondary/10 to-accent/10 p-4">
              <p className="mb-2 text-lg font-semibold">Formula:</p>
              <p className="font-mono text-2xl font-bold">a² + b² = c²</p>
              <ul className="mt-3 space-y-1 text-sm text-foreground/80">
                <li>• a and b = legs of right triangle</li>
                <li>• c = hypotenuse (longest side)</li>
              </ul>
            </div>

            <div className="mb-6 rounded-lg border border-accent/30 bg-accent/5 p-4">
              <h4 className="mb-2 flex items-center gap-2 font-semibold text-accent">
                <AlertCircle className="h-5 w-5" />
                Critical Rule
              </h4>
              <p className="text-foreground/80">
                Always identify which value is the hypotenuse before plugging in numbers
              </p>
            </div>

            <div className="mb-4">
              <h4 className="mb-3 text-lg font-semibold">Example Problem:</h4>
              <div className="space-y-2 rounded-lg bg-background/50 p-4">
                <p className="text-foreground/80">Given: One leg = 40, hypotenuse = 50</p>
                <p className="font-mono">Setup: 40² + b² = 50²</p>
                <p className="font-mono">Calculation: 1,600 + b² = 2,500</p>
                <p className="font-mono text-secondary">Solution: b² = 900, so b = 30</p>
              </div>
            </div>

            <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
              <p className="font-semibold text-red-400">Common Mistake to Avoid:</p>
              <p className="text-foreground/80">Placing values in wrong positions (confusing legs with hypotenuse)</p>
            </div>
          </div>

          {/* Topic 3: Circle Formulas */}
          <div className="glass-card mb-8 p-6">
            <h3 className="mb-4 text-2xl font-bold text-secondary">3. Circle Formulas</h3>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 p-4">
                <p className="mb-2 font-semibold">Area Formula:</p>
                <p className="font-mono text-xl font-bold">A = πr²</p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-accent/10 to-secondary/10 p-4">
                <p className="mb-2 font-semibold">Circumference Formula:</p>
                <p className="font-mono text-xl font-bold">C = 2πr</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold">Key Points:</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• Always use radius (r), not diameter</li>
                <li>• Diameter = 2 × radius</li>
                <li>• Check answer choices before calculating to see if π should remain in answer</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg bg-background/50 p-4">
                <p className="mb-2 font-semibold text-accent">Example Problem (Question 26):</p>
                <div className="space-y-1 text-sm text-foreground/80">
                  <p>Given: Diameter = 6</p>
                  <p>Radius = 3</p>
                  <p>Circumference = 2π(3) = 6π (not 18.84...)</p>
                  <p className="text-secondary">Strategy: Leave π in answer when answer choices show π</p>
                </div>
              </div>

              <div className="rounded-lg bg-background/50 p-4">
                <p className="mb-2 font-semibold text-accent">Concentric Circles Problem (Question 29):</p>
                <div className="space-y-1 text-sm text-foreground/80">
                  <p>Concentric = circles with same center</p>
                  <p>Find difference in circumferences</p>
                  <p>Circle 1: C = 2π(5) = 10π</p>
                  <p>Circle 2: C = 2π(6) = 12π</p>
                  <p className="text-secondary">Difference: 12π - 10π = 2π</p>
                </div>
              </div>

              <div className="rounded-lg bg-background/50 p-4">
                <p className="mb-2 font-semibold text-accent">Area of Shaded Region (Question 42):</p>
                <div className="space-y-1 text-sm text-foreground/80">
                  <p>Strategy: Find area of outer circle minus area of inner circle</p>
                  <p>Outer circle (r=10): A = 100π</p>
                  <p>Inner circle (r=6): A = 36π</p>
                  <p className="text-secondary">Shaded region: 100π - 36π = 64π</p>
                </div>
              </div>
            </div>
          </div>

          {/* Topic 4: Probability */}
          <div className="glass-card mb-8 p-6">
            <h3 className="mb-4 text-2xl font-bold text-secondary">4. Probability</h3>

            <div className="mb-6 rounded-lg bg-gradient-to-r from-secondary/10 to-accent/10 p-4">
              <h4 className="mb-2 text-lg font-semibold">Fundamental Rule:</h4>
              <ul className="space-y-1 text-foreground/80">
                <li>• Bottom number = total possibilities</li>
                <li>• Top number = favorable outcomes</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold">Basic Example:</h4>
              <div className="rounded-lg bg-background/50 p-4">
                <p className="text-foreground/80">16 bills total, 5 are $20 bills</p>
                <p className="font-mono text-secondary">P(selecting $20 bill) = 5/16</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="mb-4 text-xl font-semibold">"OR" vs "AND" Operations</h4>

              <div className="mb-4 rounded-lg border border-green-500/30 bg-green-500/5 p-4">
                <p className="mb-2 font-semibold text-green-400">OR = ADD (easier to achieve)</p>
                <p className="mb-2 text-sm text-foreground/80">Example: 3 red, 4 yellow, 3 green marbles (10 total)</p>
                <p className="font-mono text-secondary">P(red OR yellow) = 3/10 + 4/10 = 7/10</p>
              </div>

              <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
                <p className="mb-2 font-semibold text-orange-400">AND = MULTIPLY (harder to achieve)</p>
                <p className="mb-2 text-sm text-foreground/80">P(red AND then yellow) = 3/10 × 4/10 = 12/100</p>
                <p className="text-xs text-foreground/70">
                  Logic: Multiple requirements make success harder, so probability gets smaller
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="mb-4 text-xl font-semibold">With vs. Without Replacement</h4>

              <div className="space-y-4">
                <div className="rounded-lg bg-background/50 p-4">
                  <p className="mb-2 font-semibold text-accent">With Replacement:</p>
                  <p className="font-mono text-sm">P(red) AND P(yellow) = 3/10 × 4/10</p>
                  <p className="text-xs text-foreground/70">Denominator stays same</p>
                </div>

                <div className="rounded-lg bg-background/50 p-4">
                  <p className="mb-2 font-semibold text-accent">Without Replacement:</p>
                  <p className="font-mono text-sm">P(red) AND P(yellow) = 3/10 × 4/9</p>
                  <p className="text-xs text-foreground/70">Reduce both numerator and denominator</p>
                  <p className="text-xs text-foreground/70">Assume previous event succeeded</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-background/50 p-4">
              <p className="mb-2 font-semibold text-accent">Example: Two greens in a row (without replacement)</p>
              <div className="space-y-1 text-sm text-foreground/80">
                <p>First green: 3/10</p>
                <p>Second green: 2/9 (one green removed, total reduced)</p>
                <p className="font-mono text-secondary">Combined: 3/10 × 2/9 = 6/90 = 1/15</p>
              </div>
            </div>
          </div>

          {/* Topic 5: Counting Principle */}
          <div className="glass-card mb-8 p-6">
            <h3 className="mb-4 text-2xl font-bold text-secondary">5. Counting Principle</h3>

            <div className="mb-6 rounded-lg border border-accent/30 bg-accent/5 p-4">
              <h4 className="mb-2 font-semibold text-accent">Strategy:</h4>
              <p className="text-foreground/80">
                Draw blanks for each choice, fill in number of options, then multiply
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg bg-background/50 p-4">
                <p className="mb-2 font-semibold text-accent">Example Problem (Question 3):</p>
                <div className="space-y-1 text-sm text-foreground/80">
                  <p>Noses: 4 options</p>
                  <p>Lips: 3 options</p>
                  <p>Wigs: 2 options</p>
                  <p className="font-mono text-secondary">Total combinations: 4 × 3 × 2 = 24</p>
                </div>
              </div>

              <div className="rounded-lg bg-background/50 p-4">
                <p className="mb-2 font-semibold text-accent">Example Problem (Question 44):</p>
                <div className="space-y-1 text-sm text-foreground/80">
                  <p>Letters (3 positions): 26 × 26 × 26</p>
                  <p>Digits (3 positions): 10 × 10 × 10</p>
                  <p className="font-mono text-secondary">Total: 26³ × 10³</p>
                </div>
              </div>

              <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                <p className="mb-2 font-semibold text-red-400">Common Mistake (Question 51):</p>
                <div className="space-y-1 text-sm text-foreground/80">
                  <p>Don't assume 5 × 5 × 5 for all positions</p>
                  <p>Some positions may have only 1 option</p>
                  <p className="font-mono text-secondary">Correct: 1 × 1 × 1 × 10 × 10 × 10 × 10</p>
                </div>
              </div>
            </div>
          </div>

          {/* Topic 6: Test-Taking Strategies */}
          <div className="glass-card mb-8 p-6">
            <h3 className="mb-4 text-2xl font-bold text-secondary">6. Test-Taking Strategies</h3>

            <div className="mb-6 rounded-lg bg-gradient-to-r from-secondary/10 to-accent/10 p-4">
              <h4 className="mb-3 text-lg font-semibold">Timing Strategy for New ACT Format:</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• Total: 50 minutes for 45 questions</li>
                <li>• Goal: Reach question 20 in 15-20 minutes</li>
                <li>• Remaining time: 30-35 minutes for questions 21-45 (slightly over 1 min/question)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold">"Rounds" Strategy for Questions 21-45:</h4>
              <ol className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">1.</span>
                  <span>Round 1: Skim and complete all questions you definitely know how to do</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">2.</span>
                  <span>Round 2: Tackle questions where you're uncertain but can attempt something</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-secondary">3.</span>
                  <span>Round 3: Guess or struggle through remaining difficult questions</span>
                </li>
              </ol>
              <p className="mt-3 text-sm text-accent">
                Rationale: Ensures you see all questions and maximize points on accessible problems
              </p>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold">General Test-Taking Tips:</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Write everything down - even on digital test, use scratch paper extensively</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Read slowly and carefully - better to read 1-2 times slowly than panic-read 10 times</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Annotate as you go - circle important numbers and values</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Check answer choices early - see if π should stay in answer, check units, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Verify before bubbling - reread question one last time before selecting answer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>
                    Watch for eye movement - on digital test, eyes moving between screen and paper can cause errors
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Break down complex questions - don't expect one-step solutions</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 rounded-lg bg-background/50 p-4">
              <h4 className="mb-3 text-lg font-semibold">Calculator Tips:</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Use fraction simplification feature (MATH → FRAC on TI-84, or automatic on Casio)</li>
                <li>• Find π button (2nd + key on TI-84)</li>
                <li>• Use parentheses when entering fractions to avoid order of operations errors</li>
              </ul>
            </div>

            <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
              <h4 className="mb-3 text-lg font-semibold text-accent">Morning of Test:</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• Complete 1 English passage and ~10 math questions as warm-up</li>
                <li>• Don't grade them - just get mentally engaged</li>
                <li>• Prevents silly mistakes from not being warmed up</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Homework & Action Items */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Homework & Action Items</h2>

          <div className="glass-card mb-6 p-6">
            <h3 className="mb-4 text-xl font-semibold text-secondary">Specific Assignments</h3>
            <ul className="space-y-3">
              {[
                "Complete full-length practice test in new ACT format (focus on math section)",
                "Time yourself on at least the first 20 questions to practice pacing",
                "Review math formula sheet provided",
                "Practice additional problems from 'types of math questions' document as needed",
                "Work with math teacher for additional support during the week",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card mb-6 p-6">
            <h3 className="mb-4 text-xl font-semibold text-accent">Practice Problems to Complete</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• Additional factoring problems (with focus on GCF first)</li>
              <li>• Probability problems with "and" vs "or" scenarios</li>
              <li>• Counting principle problems</li>
              <li>• Circle area and circumference problems</li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="mb-4 text-xl font-semibold text-secondary">Topics to Review Before Test</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• Slope formula and writing equations from graphs (student confirmed comfortable)</li>
              <li>• Triangle angle relationships (student confirmed comfortable)</li>
              <li>• Factoring strategies (especially identifying when to use GCF)</li>
              <li>• Probability operations (OR = add, AND = multiply)</li>
              <li>• Pythagorean Theorem (careful placement of values)</li>
            </ul>
          </div>
        </section>

        {/* Student Progress */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Student Progress</h2>

          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div className="glass-card p-6">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-green-500">
                <CheckCircle2 className="h-6 w-6" />
                Areas of Strength
              </h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Slope formula and graphing equations</li>
                <li>• Basic triangle concepts and angle relationships</li>
                <li>• Circle formulas (area and circumference)</li>
                <li>• Pythagorean Theorem execution</li>
                <li>• Basic probability concepts</li>
                <li>• Counting principle problems</li>
                <li>• Good habit of writing work down</li>
                <li>• Calculator proficiency</li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-orange-500">
                <AlertCircle className="h-6 w-6" />
                Topics Needing More Practice
              </h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• Factoring complex trinomials (may skip on test if time-consuming)</li>
                <li>• Reading comprehension of word problems - tendency to rush</li>
                <li>• Careful value placement in formulas</li>
                <li>• Checking what question actually asks for</li>
                <li>• SOH-CAH-TOA (trigonometry) - needs independent practice</li>
                <li>• Managing test anxiety</li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="mb-4 text-xl font-semibold text-accent">Student Confidence Level</h3>
            <div className="space-y-3 text-foreground/80">
              <p>• Current score range: 19-22 on math section</p>
              <p>• Goal: Maximize score by focusing on first 20 questions with high accuracy</p>
              <p>• This is intended to be student's final ACT attempt</p>
              <p>• Student is taking test digitally (has taken it twice before in digital format)</p>
            </div>
          </div>

          <div className="glass-card mt-6 p-6">
            <h3 className="mb-4 text-xl font-semibold text-secondary">Tutor Observations</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>• Student benefits from being reminded to slow down and read carefully</li>
              <li>• Strong foundational understanding but sometimes rushes through problems</li>
              <li>• Good self-awareness about which topics need more work</li>
              <li>• Realistic about time management and willing to strategically skip difficult problems</li>
            </ul>
          </div>
        </section>

        {/* Session Details */}
        <section className="mb-12">
          <div className="glass-card p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="mb-1 text-sm text-foreground/60">Next Session</p>
                <p className="font-semibold">Final session before test</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-foreground/60">Test Date</p>
                <p className="font-semibold">This weekend (Saturday)</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-foreground/60">Additional Resources</p>
                <p className="text-sm text-foreground/80">Formula sheet, practice test, reference docs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-secondary/10 p-8 text-center">
          <p className="text-lg italic text-foreground/80">
            Student should focus on building confidence, practicing careful reading, and maximizing performance on
            accessible questions rather than attempting every problem on the test.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-secondary to-accent text-white hover:shadow-xl hover:shadow-secondary/50"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

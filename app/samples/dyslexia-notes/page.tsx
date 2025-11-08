'use client';

import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

export default function DyslexiaSamplePage() {
    return (
        <div className="min-h-screen" style={{ background: '#edd1b0', fontFamily: 'OpenDyslexic, Comic Sans MS, Arial, Verdana, sans-serif' }}>
            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-gray-200" style={{ background: '#fef5e7' }}>
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <Link
                        href="/#act-sat"
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to ACT/SAT Formats
                    </Link>
                </div>
            </div>

            {/* Sample Notes Content */}
            <div className="max-w-3xl mx-auto px-4 py-12">
                {/* Title Banner */}
                <div className="p-8 rounded-2xl mb-12 text-center" style={{ background: '#f4a460', color: '#1a1a1a' }}>
                    <h1 className="text-3xl font-bold mb-2">Dyslexia-Optimized Notes Sample</h1>
                    <p className="text-xl">ACT Math Session - Easy-to-Read Format</p>
                </div>

                {/* Notes Content with Dyslexia-Friendly Styling */}
                <div
                    className="rounded-2xl shadow-lg p-10 text-left"
                    style={{
                        background: '#fef5e7',
                        fontFamily: 'OpenDyslexic, Comic Sans MS, Arial, Verdana, sans-serif',
                        fontSize: '18pt',
                        lineHeight: '2.5',
                        color: '#1a1a1a',
                        letterSpacing: '1px',
                        wordSpacing: '3px'
                    }}
                >
                    {/* Main Title */}
                    <div
                        className="mb-8 p-4 rounded-lg text-left"
                        style={{ background: '#f8fd98' }}
                    >
                        <h2 className="text-2xl font-bold">
                            📚 My ACT Math Notes
                        </h2>
                        <p className="text-lg mt-2">Easy-to-Read Format</p>
                    </div>

                    <hr className="my-8" style={{ borderColor: '#d4a574' }} />

                    {/* Quick Summary */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#eddd63' }}
                    >
                        <h3 className="text-xl font-bold mb-6">📌 QUICK SUMMARY (Read This First)</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-bold mb-3">What we covered today:</p>
                                <p className="ml-6">• Factoring quadratic expressions</p>
                                <p className="ml-6">• Pythagorean theorem</p>
                                <p className="ml-6">• Circle formulas</p>
                                <p className="ml-6">• Probability problems</p>
                                <p className="ml-6">• Counting principle</p>
                                <p className="ml-6">• Test timing strategy</p>
                            </div>

                            <div>
                                <p className="font-bold mb-3">Big win today:</p>
                                <p className="ml-6">I understand probability now!</p>
                                <p className="ml-6">I know when to multiply (AND) vs add (OR)</p>
                            </div>

                            <div>
                                <p className="font-bold mb-3">What to practice:</p>
                                <p className="ml-6">Focus on first 20 questions carefully.</p>
                                <p className="ml-6">That's where most of my points come from.</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8" style={{ borderColor: '#d4a574' }} />

                    {/* Must Memorize Formulas */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#edd1b0' }}
                    >
                        <h3 className="text-xl font-bold mb-6">📗 MUST MEMORIZE (Make Flash Cards!)</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-bold mb-2">1. Slope formula:</p>
                                <p className="ml-6">(y₂ - y₁) / (x₂ - x₁)</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">2. Pythagorean theorem:</p>
                                <p className="ml-6">a² + b² = c²</p>
                                <p className="ml-6">c is ALWAYS the hypotenuse!</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">3. Circle area:</p>
                                <p className="ml-6">πr²</p>
                                <p className="ml-6">(radius only!)</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">4. Circle circumference:</p>
                                <p className="ml-6">2πr</p>
                                <p className="ml-6">(radius only!)</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">5. Probability:</p>
                                <p className="ml-6">AND = multiply</p>
                                <p className="ml-6">OR = add</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">6. Counting principle:</p>
                                <p className="ml-6">Multiply all the options</p>
                            </div>

                            <div
                                className="mt-6 p-4 rounded"
                                style={{ background: '#f8fd98' }}
                            >
                                <p className="font-bold mb-3">Memory hack:</p>
                                <p className="ml-6">• Diameter ÷ 2 = radius (always convert!)</p>
                                <p className="ml-6">• "AND" = harder = multiply</p>
                                <p className="ml-6">• "OR" = easier = add</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8" style={{ borderColor: '#d4a574' }} />

                    {/* What We Did - Problem Type 1 */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#ffd7a8' }}
                    >
                        <h3 className="text-xl font-bold mb-6">📘 Problem 1: Factoring Quadratics</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-bold mb-2">What happened:</p>
                                <p className="ml-6">We tried factoring 9x² - 32x - 56</p>
                                <p className="ml-6">It was HARD</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">Where I got stuck:</p>
                                <p className="ml-6">I had the right numbers (7 and 8)</p>
                                <p className="ml-6">But put them in wrong spots</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">What clicked:</p>
                                <p className="ml-6">These take trial and error!</p>
                                <p className="ml-6">It's not about being "smart enough"</p>
                                <p className="ml-6">You literally have to test different arrangements</p>
                            </div>

                            <div
                                className="p-4 rounded"
                                style={{ background: '#ffe4c4' }}
                            >
                                <p className="font-bold mb-3">Steps to remember:</p>
                                <p className="ml-6">• Find what multiplies to make LAST number</p>
                                <p className="ml-6">• Find what ADDS to make MIDDLE number</p>
                                <p className="ml-6">• Try different positions until FOIL works</p>
                                <p className="ml-6">• IT'S OKAY TO GUESS AND CHECK</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8" style={{ borderColor: '#d4a574' }} />

                    {/* Problem Type 2 */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#eddd63' }}
                    >
                        <h3 className="text-xl font-bold mb-6">📘 Problem 2: Pythagorean Theorem</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-bold mb-2">What happened:</p>
                                <p className="ml-6">Problem gave me one leg (40) and hypotenuse (50)</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">Where I got stuck:</p>
                                <p className="ml-6">Almost added 50 + 40</p>
                                <p className="ml-6">Instead of using the formula</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">What clicked:</p>
                                <p className="ml-6">Read carefully!</p>
                                <p className="ml-6">C is ALWAYS the hypotenuse (longest side)</p>
                            </div>

                            <div
                                className="p-4 rounded"
                                style={{ background: '#f8fd98' }}
                            >
                                <p className="font-bold mb-3">Steps to remember:</p>
                                <p className="ml-6">• If they give you hypotenuse + one leg:</p>
                                <p className="ml-6">&nbsp;&nbsp;Use c² - a² = b²</p>
                                <p className="ml-6">• Rearrange formula based on what's missing</p>
                                <p className="ml-6">• Always check: is this hypotenuse or leg?</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8" style={{ borderColor: '#d4a574' }} />

                    {/* Problem Type 3 */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#edd1b0' }}
                    >
                        <h3 className="text-xl font-bold mb-6">📘 Problem 3: Circle Problems</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-bold mb-2">What happened:</p>
                                <p className="ml-6">Found circumference of two circles</p>
                                <p className="ml-6">r=5 and r=6</p>
                                <p className="ml-6">Then found difference</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">What clicked:</p>
                                <p className="ml-6">Don't let fancy words scare me!</p>
                                <p className="ml-6">"Concentric" just means circles inside circles</p>
                            </div>

                            <div
                                className="p-4 rounded"
                                style={{ background: '#ffd7a8' }}
                            >
                                <p className="font-bold mb-3">Steps to remember:</p>
                                <p className="ml-6">• ALWAYS use radius (not diameter!)</p>
                                <p className="ml-6">• Check answer choices BEFORE calculating</p>
                                <p className="ml-6">• Might leave π in the answer</p>
                                <p className="ml-6">• Diameter ÷ 2 = radius</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8" style={{ borderColor: '#d4a574' }} />

                    {/* Problem Type 4 */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#ffdab9' }}
                    >
                        <h3 className="text-xl font-bold mb-6">📘 Problem 4: Probability - AND/OR Rule</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-bold mb-2">What happened:</p>
                                <p className="ml-6">Learned when to multiply vs add probabilities</p>
                            </div>

                            <div
                                className="p-4 rounded"
                                style={{ background: '#f8fd98' }}
                            >
                                <p className="font-bold mb-3">The breakthrough moment:</p>
                                <p className="ml-6">• OR = ADD</p>
                                <p className="ml-6">&nbsp;&nbsp;(picking red OR yellow = 3/10 + 4/10 = 7/10)</p>
                                <p className="ml-6">• AND = MULTIPLY</p>
                                <p className="ml-6">&nbsp;&nbsp;(picking red AND yellow = 3/10 × 4/10)</p>
                            </div>

                            <div
                                className="p-4 rounded"
                                style={{ background: '#eddd63' }}
                            >
                                <p className="font-bold mb-3">Steps to remember:</p>
                                <p className="ml-6">• OR = more ways to be happy = ADD</p>
                                <p className="ml-6">• AND = harder to do = MULTIPLY (gets smaller!)</p>
                                <p className="ml-6">• "Without replacement" =</p>
                                <p className="ml-6">&nbsp;&nbsp;subtract from top AND bottom</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8" style={{ borderColor: '#d4a574' }} />

                    {/* Problem Type 5 */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#ffe4c4' }}
                    >
                        <h3 className="text-xl font-bold mb-6">📘 Problem 5: Counting Principle</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-bold mb-2">What happened:</p>
                                <p className="ml-6">How many combinations with</p>
                                <p className="ml-6">4 noses, 3 lips, 2 wigs?</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">What clicked:</p>
                                <p className="ml-6">Draw blanks for each choice</p>
                                <p className="ml-6">Write the number of options</p>
                                <p className="ml-6">Then MULTIPLY</p>
                            </div>

                            <div
                                className="p-4 rounded"
                                style={{ background: '#ffd7a8' }}
                            >
                                <p className="font-bold mb-3">Pattern:</p>
                                <div className="flex justify-center my-4">
                                    <div className="flex items-end gap-2">
                                        <div className="flex flex-col items-center">
                                            <span className="w-12 h-6 border-b-2" style={{ borderColor: '#f4a460' }}></span>
                                            <span className="font-bold mt-1">4</span>
                                        </div>
                                        <span className="mb-1">×</span>
                                        <div className="flex flex-col items-center">
                                            <span className="w-12 h-6 border-b-2" style={{ borderColor: '#f4a460' }}></span>
                                            <span className="font-bold mt-1">3</span>
                                        </div>
                                        <span className="mb-1">×</span>
                                        <div className="flex flex-col items-center">
                                            <span className="w-12 h-6 border-b-2" style={{ borderColor: '#f4a460' }}></span>
                                            <span className="font-bold mt-1">2</span>
                                        </div>
                                        <span className="mb-1">=</span>
                                        <span className="font-bold mb-1">24</span>
                                    </div>
                                </div>
                                <p className="font-bold mt-4">Watch out:</p>
                                <p className="ml-6">If a digit can't repeat (like phone numbers),</p>
                                <p className="ml-6">it's minus 1 for used digits!</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8" style={{ borderColor: '#d4a574' }} />

                    {/* Homework */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#f8fd98' }}
                    >
                        <h3 className="text-xl font-bold mb-6">✏️ MY HOMEWORK</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-bold mb-3">By Friday:</p>
                                <p className="ml-6">• Review "Math Formula Sheet" (~15 min)</p>
                                <p className="ml-6">• Review "Types of Math Questions" (~20 min)</p>
                                <p className="ml-6">• Practice 10 probability problems (~15 min)</p>
                            </div>

                            <div>
                                <p className="font-bold mb-3">Saturday Morning (TEST DAY):</p>
                                <p className="ml-6">• Wake up early for warm-up</p>
                                <p className="ml-6">• Do 1 English passage (untimed, ~5 min)</p>
                                <p className="ml-6">• Do 10 random math questions (~10 min)</p>
                                <p className="ml-6">• Eat breakfast!</p>
                            </div>

                            <div>
                                <p className="font-bold mb-3">This Week (if time):</p>
                                <p className="ml-6">• Take NEW FORMAT practice test (~50 min)</p>
                                <p className="ml-6">• Time first 20 questions (finish in 20 min)</p>
                                <p className="ml-6">• Check scoring guide</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8" style={{ borderColor: '#d4a574' }} />

                    {/* Timing Strategy */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#eddd63' }}
                    >
                        <h3 className="text-xl font-bold mb-6">⏱️ MY TIMING STRATEGY</h3>

                        <div className="space-y-6">
                            <div
                                className="p-4 rounded"
                                style={{ background: '#ffd7a8' }}
                            >
                                <p className="font-bold mb-2">Goal: Hit question 20 in 20 minutes</p>
                                <p className="ml-6">This gives me 30-35 minutes for harder second half</p>
                            </div>

                            <div>
                                <p className="font-bold mb-3">After Question 20, work in ROUNDS:</p>
                                <p className="ml-6">Round 1: Skim and do ALL the ones I definitely know</p>
                                <p className="ml-6">Round 2: Go back and do ones where I can try something</p>
                                <p className="ml-6">Round 3: Struggle through or guess on the rest</p>
                            </div>

                            <div
                                className="p-4 rounded"
                                style={{ background: '#f8fd98' }}
                            >
                                <p className="font-bold mb-2">Why this works:</p>
                                <p className="ml-6">I might be able to do question 45</p>
                                <p className="ml-6">even if I can't do question 30!</p>
                                <p className="ml-6">I need to SEE all of them.</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8" style={{ borderColor: '#d4a574' }} />

                    {/* Test Day Rules */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#edd1b0' }}
                    >
                        <h3 className="text-xl font-bold mb-6">🎯 MY TEST DAY RULES</h3>

                        <div className="space-y-4">
                            <p className="ml-6">1. Read questions SLOWLY</p>
                            <p className="ml-6">(once carefully beats 10 times panicked)</p>

                            <p className="ml-6">2. Write everything down</p>
                            <p className="ml-6">(even on digital test - use scratch paper)</p>

                            <p className="ml-6">3. Before I bubble an answer:</p>
                            <p className="ml-6">&nbsp;&nbsp;Re-read the question ONE more time</p>

                            <p className="ml-6">4. Check: Am I answering what they asked?</p>
                            <p className="ml-6">&nbsp;&nbsp;Right units?</p>

                            <p className="ml-6">5. First 20 questions = my money questions</p>
                            <p className="ml-6">&nbsp;&nbsp;Be EXTRA careful here</p>

                            <p className="ml-6">6. Don't panic on hard factoring</p>
                            <p className="ml-6">&nbsp;&nbsp;These are time traps, skip if stuck</p>
                        </div>
                    </div>

                    <hr className="my-8" style={{ borderColor: '#d4a574' }} />

                    {/* What I Did Well */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#ffdab9' }}
                    >
                        <h3 className="text-xl font-bold mb-6">✅ MY STRENGTHS (Yes, Really)</h3>

                        <div className="space-y-4">
                            <p className="ml-6">✓ I write everything down</p>
                            <p className="ml-6">&nbsp;&nbsp;(this prevents silly mistakes!)</p>

                            <p className="ml-6">✓ I caught my own mistakes today</p>
                            <p className="ml-6">&nbsp;&nbsp;(40+50 almost became 90 instead of using formula)</p>

                            <p className="ml-6">✓ I understand probability now</p>
                            <p className="ml-6">&nbsp;&nbsp;(the AND/OR rule makes sense)</p>

                            <p className="ml-6">✓ I know when to use calculator's fraction button</p>

                            <p className="ml-6">✓ I'm not afraid to ask "wait, how do I do this?"</p>
                            <p className="ml-6">&nbsp;&nbsp;when confused</p>
                        </div>
                    </div>

                    {/* Info Box */}
                    <div
                        className="mt-12 p-6 rounded-lg border-2"
                        style={{ background: '#ffe4c4', borderColor: '#d4a574' }}
                    >
                        <p className="font-bold mb-4">📖 Dyslexia-Friendly Features in Your Notes</p>
                        <ul className="space-y-3 text-base">
                            <li>✓ OpenDyslexic font (specially designed for dyslexia)</li>
                            <li>✓ Large text size (18pt for easy reading)</li>
                            <li>✓ Extra spacing between letters and words</li>
                            <li>✓ Warm peach background (research-backed)</li>
                            <li>✓ High line spacing (2.5x) to reduce crowding</li>
                            <li>✓ Left-aligned text (no center or justify)</li>
                            <li>✓ Short sentences and paragraphs</li>
                            <li>✓ Bold for emphasis (no italics or underlines)</li>
                            <li>✓ Warm color-coded sections (yellow, peach, orange)</li>
                            <li>✓ Bullet points and numbered lists</li>
                            <li>✓ Chunked information for easy processing</li>
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <Link
                        href="/upload"
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg hover:shadow-xl transition-all"
                        style={{ background: '#f4a460', color: '#1a1a1a' }}
                    >
                        Try It Free - Upload Your Recording
                    </Link>
                    <p className="mt-4" style={{ color: '#4a4a4a' }}>No payment required for beta testing</p>
                </div>
            </div>
        </div>
    );
}
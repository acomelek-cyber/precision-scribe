'use client';

import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

export default function DyslexiaSamplePage() {
    return (
        <div className="min-h-screen" style={{ background: '#fefcf4' }}>
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
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
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-8 rounded-2xl mb-12 text-center">
                    <h1 className="text-3xl font-bold mb-2">Dyslexia-Optimized Notes Sample</h1>
                    <p className="text-xl opacity-90">ACT Math Session - Easy-to-Read Format</p>
                </div>

                {/* Notes Content with Dyslexia-Friendly Styling */}
                <div
                    className="bg-white rounded-2xl shadow-lg p-10"
                    style={{
                        fontFamily: 'Comic Sans MS, Arial, Verdana, sans-serif',
                        fontSize: '16pt',
                        lineHeight: '2.2',
                        color: '#2d2d2d',
                        letterSpacing: '0.5px',
                        wordSpacing: '2px'
                    }}
                >
                    {/* Main Title */}
                    <div
                        className="mb-8 p-4 rounded-lg"
                        style={{ background: '#fff3cd' }}
                    >
                        <h2 className="text-2xl font-bold text-center">
                            📚 My ACT Math Notes
                        </h2>
                        <p className="text-center text-lg mt-2">Easy-to-Read Format</p>
                    </div>

                    <hr className="my-8 border-gray-300" />

                    {/* Quick Facts */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#d1f4e0' }}
                    >
                        <h3 className="text-xl font-bold mb-6">📌 QUICK FACTS (Read This First)</h3>

                        <div className="space-y-6">
                            <div>
                                <strong>1. Main topic:</strong>
                                <p className="ml-6 mt-2">Quadratic equations</p>
                                <p className="ml-6">(quad-rat-ic e-qua-tions)</p>
                            </div>

                            <div>
                                <strong>2. What I learned:</strong>
                                <p className="ml-6 mt-2">How to solve problems with x²</p>
                            </div>

                            <div>
                                <strong>3. What to practice:</strong>
                                <p className="ml-6 mt-2">Factoring problems from page 127</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-300" />

                    {/* Formulas Section */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#d1f4e0' }}
                    >
                        <h3 className="text-xl font-bold mb-6">📗 FORMULAS TO REMEMBER</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-bold text-lg mb-3">Formula name: Quadratic Formula</p>

                                <p className="font-semibold mb-2">What it means:</p>
                                <p className="ml-6">This helps you find x.</p>
                                <p className="ml-6">Use it when you see x².</p>

                                <div
                                    className="my-6 p-4 text-center text-xl rounded"
                                    style={{ background: '#fff9db' }}
                                >
                                    x = (-b ± √(b² - 4ac)) / 2a
                                </div>

                                <p className="font-semibold mb-2">Memory trick:</p>
                                <p className="ml-6">"Negative b, plus or minus the square root"</p>
                                <p className="ml-6">"b squared minus 4ac"</p>
                                <p className="ml-6">"All over 2a"</p>

                                <p className="font-semibold mt-4 mb-2">Example:</p>
                                <div className="ml-6 space-y-2">
                                    <p>Problem: x² + 5x + 6 = 0</p>
                                    <p>Step 1: Find a, b, and c</p>
                                    <p className="ml-6">a = 1</p>
                                    <p className="ml-6">b = 5</p>
                                    <p className="ml-6">c = 6</p>
                                    <p>Step 2: Put numbers into formula</p>
                                    <p>Step 3: Calculate the answer</p>
                                    <p className="ml-6">Answer: x = -2 or x = -3</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-300" />

                    {/* Step-by-Step Examples */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#e3f2fd' }}
                    >
                        <h3 className="text-xl font-bold mb-6">📘 STEP-BY-STEP EXAMPLES</h3>

                        <div className="space-y-6">
                            <p className="font-bold text-lg">Problem type: Factoring</p>

                            <div
                                className="p-4 rounded border-l-4"
                                style={{ background: '#e3f2fd', borderColor: '#2196f3' }}
                            >
                                <p className="font-semibold mb-3">Step 1:</p>
                                <p className="ml-6">Look for two numbers that multiply to give c</p>
                            </div>

                            <div
                                className="p-4 rounded border-l-4"
                                style={{ background: '#e3f2fd', borderColor: '#2196f3' }}
                            >
                                <p className="font-semibold mb-3">Step 2:</p>
                                <p className="ml-6">Those same numbers must add to give b</p>
                            </div>

                            <div
                                className="p-4 rounded border-l-4"
                                style={{ background: '#e3f2fd', borderColor: '#2196f3' }}
                            >
                                <p className="font-semibold mb-3">Step 3:</p>
                                <p className="ml-6">Write your answer as (x + ?) (x + ?)</p>
                            </div>

                            <p className="font-semibold mt-6 mb-2">Example numbers:</p>
                            <div className="ml-6 space-y-2">
                                <p>x² + 7x + 12</p>
                                <p>Numbers that multiply to 12: 3 and 4</p>
                                <p>Do they add to 7? Yes! (3 + 4 = 7)</p>
                                <p>Answer: (x + 3)(x + 4)</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-300" />

                    {/* Important Rules */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#ffebee' }}
                    >
                        <h3 className="text-xl font-bold mb-6">📕 IMPORTANT RULES</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="font-bold mb-2">Rule 1:</p>
                                <p className="ml-6">Always write the equation with = 0</p>
                                <p className="ml-6">Move everything to one side first</p>
                            </div>

                            <div>
                                <p className="font-bold mb-2">Rule 2:</p>
                                <p className="ml-6">Check your answer</p>
                                <p className="ml-6">Put your x value back into the problem</p>
                                <p className="ml-6">Both sides should equal the same number</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-300" />

                    {/* Homework */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#fff9db' }}
                    >
                        <h3 className="text-xl font-bold mb-6">✏️ HOMEWORK</h3>

                        <div className="space-y-4">
                            <div>
                                <p className="font-bold">1. Practice problems on page 127</p>
                                <p className="ml-6 mt-2">Do problems 1-10</p>
                                <p className="ml-6">Time needed: 20 minutes</p>
                            </div>

                            <div>
                                <p className="font-bold">2. Review the quadratic formula</p>
                                <p className="ml-6 mt-2">Write it 3 times from memory</p>
                                <p className="ml-6">Time needed: 5 minutes</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-300" />

                    {/* What I Did Well */}
                    <div
                        className="mb-8 p-6 rounded-lg"
                        style={{ background: '#e8f5e9' }}
                    >
                        <h3 className="text-xl font-bold mb-6">✅ WHAT I DID WELL</h3>

                        <div className="space-y-3">
                            <p>✓ I remembered the formula without looking</p>
                            <p>✓ I checked my work on every problem</p>
                            <p>✓ I asked questions when I was confused</p>
                        </div>
                    </div>

                    {/* Info Box */}
                    <div
                        className="mt-12 p-6 rounded-lg border-2"
                        style={{ background: '#f5f5f5', borderColor: '#e0e0e0' }}
                    >
                        <p className="text-center font-semibold mb-4">📖 This is what your notes will look like</p>
                        <ul className="space-y-2 text-sm">
                            <li>✓ Short sentences (max 15 words)</li>
                            <li>✓ Easy-to-read font (Comic Sans)</li>
                            <li>✓ Large text size (16pt)</li>
                            <li>✓ Extra space between lines</li>
                            <li>✓ Cream background (not bright white)</li>
                            <li>✓ One idea per line</li>
                            <li>✓ Color-coded sections</li>
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <Link
                        href="/upload"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg font-semibold rounded-lg hover:shadow-xl transition-all"
                    >
                        Try It Free - Upload Your Recording
                    </Link>
                    <p className="mt-4 text-gray-600">No payment required for beta testing</p>
                </div>
            </div>
        </div>
    );
}

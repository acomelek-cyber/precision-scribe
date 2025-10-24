"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xgvpwewe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />

      <div className="container relative z-10 mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Started with Your Free Pilot</h2>
          <p className="text-xl text-slate-300">
            Tell us about your tutoring company and we'll reach out within 24 hours
          </p>
        </div>

        {/* Form Card */}
        <div className="relative">
          {/* Glass morphism card */}
          <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 md:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-slate-300">We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-slate-200 mb-2 block">
                    Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-slate-200 mb-2 block">
                    Email <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <Label htmlFor="company" className="text-slate-200 mb-2 block">
                    Company Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                    placeholder="Your tutoring company"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="text-slate-200 mb-2 block">
                    Phone <span className="text-slate-400 text-sm">(optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-slate-200 mb-2 block">
                    Tell us about your company <span className="text-slate-400 text-sm">(optional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                    placeholder="Number of tutors, subjects you cover, any specific needs..."
                  />
                </div>

                {/* Demo Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="demo"
                    name="demo"
                    className="mt-1 border-slate-600 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                  />
                  <Label htmlFor="demo" className="text-slate-300 font-normal cursor-pointer">
                    I'd like to schedule a demo call
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-6 text-lg rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40"
                >
                  {isSubmitting ? "Sending..." : "Request Free Pilot"}
                </Button>

                {/* Response time note */}
                <p className="text-center text-sm text-slate-400 mt-4">We'll respond within 24 hours</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

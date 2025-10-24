import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ThreeMarketsSection } from "@/components/three-markets-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FounderStorySection } from "@/components/founder-story-section"
import { ActSatSection } from "@/components/act-sat-section"
import { LsatSection } from "@/components/lsat-section"
import { McatSection } from "@/components/mcat-section"
import { PrivacySection } from "@/components/privacy-section"
import { CtaSection } from "@/components/cta-section"
import { UnlimitedSessionsCallout } from "@/components/unlimited-sessions-callout"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 md:pt-20">
        <HeroSection />
        <ThreeMarketsSection />
        <HowItWorksSection />
        <FounderStorySection />
        <ActSatSection />
        <LsatSection />
        <McatSection />
        <PrivacySection />
        <CtaSection />
        <UnlimitedSessionsCallout />
        <ContactFormSection />
        <Footer />
      </main>
    </>
  )
}

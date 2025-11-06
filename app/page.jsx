"use client"
import HeroSection from "@/components/sections/hero-section"
import StatsSection from "@/components/sections/stats-section"
import CompaniesSection from "@/components/sections/companies-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import KeynoteSection from "@/components/sections/keynote-section"
import CTASection from "@/components/sections/cta-section"
import HomeVideo from "../components/sections/HomeVideo"

export default function Home() {
  return (
    <div className="min-h-screen pt-16 pb-20">
      <HeroSection />
      <HomeVideo/>
      <CompaniesSection />
      <StatsSection />
      <TestimonialsSection />
      <KeynoteSection />
      {/* <CTASection /> */}
    </div>
  )
}

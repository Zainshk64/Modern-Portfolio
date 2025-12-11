"use client";
import HeroSection from "@/components/sections/hero-section";
import StatsSection from "@/components/sections/stats-section";
import CompaniesSection from "@/components/sections/companies-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import KeynoteSection from "@/components/sections/keynote-section";
import HomeVideo from "../components/sections/HomeVideo";
import QuoteSection from "../components/sections/quote-section";
import {DraggableCardDemo} from "../components/draggable-demo";
import GallerOutlet from "../components/sections/GallerOutlet";


export default function Home() {
  return (
    <div className="min-h-screen pt-16 pb-20">
      <HeroSection />
      <GallerOutlet/>
      <HomeVideo />
      {/* <CompaniesSection /> */}
      <StatsSection />
      {/* <TestimonialsSection /> */}
      <KeynoteSection />
      <QuoteSection />
      {/* <DraggableCardDemo /> */}
    </div>
  );
}

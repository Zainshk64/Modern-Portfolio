"use client"

import Link from "next/link"
import { Play } from "lucide-react"
import Image from 'next/image'
import CompaniesSection from '@/components/sections/companies-section'
import KeynoteSection from '@/components/sections/keynote-section'
export default function Speaking() {
  const topics = [
    {
      title: "Build For Where The World Is Headed Next",
      subtitle: "Unlocking Innovation in a Rapidly Changing World",
      description:
        "How do the world's most successful leaders navigate uncertainty in a rapidly changing world? Through a teachable four-step framework, Adam Braun shows you how great companies anticipate tomorrow's reality, today.",
      ideal: "C-suite executives, leadership teams, innovation councils",
    },
    {
      title: "The Innovator's Edge",
      subtitle: "Building a Future-Ready Organization",
      description:
        "In a world characterized by rapid change and uncertainty, the ability to anticipate future trends is a critical leadership skill. Learn the frameworks used by leading organizations.",
      ideal: "Organizational development teams, digital transformation initiatives",
    },
    {
      title: "The Mindset of Compounding Greatness",
      subtitle: "The Five Essentials That Drive Repeatable Success",
      description:
        "What's the difference between a one-time success and those that build a culture that produces an enduring legacy? Discover the five principles that unlock sustained excellence.",
      ideal: "Growing companies, scale-up leaders, cultural transformation teams",
    },
    {
      title: "Navigating Disruption",
      subtitle: "How Leaders Thrive When Everything Changes",
      description:
        "Disruption isn't coming—it's here. Learn how to build resilience, anticipate threats, and turn uncertainty into competitive advantage.",
      ideal: "Industries facing disruption, boards of directors, executive retreats",
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
      
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Speaking Topics</h1>
          <p className="text-xl text-gray-400">Keynotes designed to inspire, challenge, and transform</p>
        </div>

        {/* Speaking Reel */}
        <div className="mb-20 bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Watch Adam in Action</h2>
          <div className="relative bg-black rounded-lg overflow-hidden h-64 md:h-96 flex items-center justify-center">
            <button className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-colors">
              <Play size={64} className="text-yellow-400" fill="currentColor" />
            </button>
            <Image src="/placeholder.jpg" alt="Speaking reel" fill className="object-cover -z-10" />
          </div>
          <p className="text-gray-400 mt-4">See highlights from Adam's most impactful keynotes</p>
        </div>

        {/* Topics Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Popular Topics</h2>
          <div className="grid gap-8">
            {topics.map((topic, i) => (
              <div
                key={i}
                className="border border-gray-700 rounded-lg p-8 hover:border-yellow-400/50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{topic.title}</h3>
                <p className="text-yellow-400 font-semibold mb-4">{topic.subtitle}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{topic.description}</p>
                <div className="bg-gray-800 rounded p-4">
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Ideal for:</span> {topic.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CompaniesSection/>
        <KeynoteSection/>

      
      </div>
    </div>
  )
}

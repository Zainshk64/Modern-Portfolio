"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function KeynoteSection() {
  const [openIndex, setOpenIndex] = useState(0)

const topics = [
  {
    title: "Building For Where The World Is Headed Next",
    subtitle: "Preparing Leaders & Youth for the Future",
    description:
      "Hamail Ijaz empowers organizations and young innovators to navigate uncertainty with confidence. Through his proven leadership framework, he teaches how to anticipate global trends, embrace disruption, and build solutions that stay relevant in tomorrow’s world.",
  },
  {
    title: "The Innovator’s Edge",
    subtitle: "How Visionary Thinking Shapes the Next Generation of Businesses",
    description:
      "Drawing from his award-winning entrepreneurial journey, Hamail Ijaz reveals how future-ready companies are built. This session explores how innovation, adaptability, and strategic thinking allow leaders to thrive in fast-moving global markets.",
  },
  {
    title: "The Mindset of Compounding Greatness",
    subtitle: "Principles That Turn Young Talent Into High-Impact Leaders",
    description:
      "Hamail Ijaz shares the five essential habits behind continuous success—habits that helped him earn global recognition, including the Evergreen Award 2025. Learn how individuals and organizations can build a culture where progress compounds into lasting greatness.",
  },
];


  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Keynote Topics</h2>

        <div className="space-y-4">
          {topics.map((topic, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-yellow-400/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full px-6 py-4 flex items-center justify-between bg-yellow-500 hover:bg-gray-800 transition-all duration-500"
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
                  <p className="text-gray-500 text-sm">{topic.subtitle}</p>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-black transition-transform flex-shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-black border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed">{topic.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors">
            View All Topics
          </button>
        </div>
      </div>
    </section>
  )
}

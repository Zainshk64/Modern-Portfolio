"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function KeynoteSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const topics = [
    {
      title: "Build For Where The World Is Headed Next",
      subtitle: "Unlocking Innovation in a Rapidly Changing World",
      description:
        "How do the world's most successful leaders navigate uncertainty in a rapidly changing world? Through a teachable four-step framework, Adam Braun shows you how great companies anticipate tomorrow's reality, today.",
    },
    {
      title: "The Innovator's Edge",
      subtitle: "Building a Future-Ready Organization",
      description:
        "In a world characterized by rapid change and uncertainty, the ability to anticipate future trends is a critical leadership skill.",
    },
    {
      title: "The Mindset of Compounding Greatness",
      subtitle: "The Five Essentials That Drive Repeatable Success",
      description:
        "What's the difference between a one time success and those that build a culture that produces an enduring legacy?",
    },
  ]

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

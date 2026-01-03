"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import Image from "next/image";
import CompaniesSection from "@/components/sections/companies-section";
import KeynoteSection from "@/components/sections/keynote-section";
import { motion } from "framer-motion";
export default function Speaking() {
  const topics = [
    {
      title: "Build For Where The World Is Headed Next",
      subtitle: "Unlocking Innovation in a Rapidly Changing World",
      description:
        "How do the world's most successful leaders navigate uncertainty in a rapidly changing world? Through a teachable four-step framework, Hamail Braun shows you how great companies anticipate tomorrow's reality, today.",
      ideal: "C-suite executives, leadership teams, innovation councils",
    },
    {
      title: "The Innovator's Edge",
      subtitle: "Building a Future-Ready Organization",
      description:
        "In a world characterized by rapid change and uncertainty, the ability to anticipate future trends is a critical leadership skill. Learn the frameworks used by leading organizations.",
      ideal:
        "Organizational development teams, digital transformation initiatives",
    },
    {
      title: "The Mindset of Compounding Greatness",
      subtitle: "The Five Essentials That Drive Repeatable Success",
      description:
        "What's the difference between a one-time success and those that build a culture that produces an enduring legacy? Discover the five principles that unlock sustained excellence.",
      ideal:
        "Growing companies, scale-up leaders, cultural transformation teams",
    },
    {
      title: "Navigating Disruption",
      subtitle: "How Leaders Thrive When Everything Changes",
      description:
        "Disruption isn't coming—it's here. Learn how to build resilience, anticipate threats, and turn uncertainty into competitive advantage.",
      ideal:
        "Industries facing disruption, boards of directors, executive retreats",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        

        {/* Speaking Reel */}
        <div className="mb-20  rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Watch Hamail in Action
          </h2>
          <div className="relative bg-black rounded-lg overflow-hidden  md:h-auto flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-lg"
            >
              <video
                src="/videoclip.mp4"
                autoPlay
                loop
                controls
                muted
                playsInline
                className="w-full h-auto object-cover"
              ></video>
            </motion.div>
          </div>
          
        </div>

        {/* Topics Grid */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Popular Topics</h2>
          <div className="grid gap-8">
            {topics.map((topic, i) => (
              <div
                key={i}
                className="border border-gray-700 rounded-lg p-8 hover:border-yellow-400/50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-yellow-400 font-semibold mb-4">
                  {topic.subtitle}
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {topic.description}
                </p>
                <div className="bg-gray-800 rounded p-4">
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Ideal for:</span>{" "}
                    {topic.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <CompaniesSection /> */}
        {/* <KeynoteSection /> */}
      </div>
    </div>
  );
}

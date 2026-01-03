"use client"

import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Hamail Ijaz
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            “Find a way, or make one.” A journey of leadership, entrepreneurship,
            and youth empowerment.
          </p>
        </div>

        {/* About Content */}
        <div className="space-y-12">
          {/* Intro */}
          <div className="bg-zinc-900/70 border border-gray-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-300">
            <p className="text-gray-300 text-lg leading-relaxed">
              Meet <span className="text-white font-semibold">Mr. Hamail Ijaz</span>,
              a visionary entrepreneur and business administrator whose mission
              has always been to go beyond the ordinary. With deep expertise in
              marketing, networking, and leadership, Hamail has consistently
              transformed ideas into impactful ventures.
            </p>
          </div>

          {/* Business Journey */}
          <div className="bg-zinc-900/70 border border-gray-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-4">
              Entrepreneurial Journey
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Known as one of the youngest realtors to successfully implement
              advanced networking strategies, Hamail founded the real estate
              venture <span className="text-yellow-400 font-semibold">“Khareedo Baicho”</span>.
              His entrepreneurial leadership later expanded into the visa
              consultancy sector, where he now leads one of the largest firms,
              <span className="text-yellow-400 font-semibold"> “H&H Visa Consultants”</span>.
            </p>
          </div>

          {/* Social Impact */}
          <div className="bg-zinc-900/70 border border-gray-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-4">
              Social Leadership & Activism
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hamail is also a passionate social activist and social entrepreneur.
              His journey began as an Ambassador at Talent Expo 2015 and evolved
              into influential leadership roles, including Chairman of the
              <span className="text-yellow-400 font-semibold">
                {" "}Nazriyati Students Federation
              </span>, one of Pakistan’s largest student federations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              He has served as Ex-Chairman of the Universities Council at the State
              Youth Parliament, worked with Youth Impact, and held the position of
              Ex-Director of Operations at LIFT Islamabad Group—always pushing
              boundaries for youth representation and empowerment.
            </p>
          </div>

          {/* Mentorship & Recognition */}
          <div className="bg-zinc-900/70 border border-gray-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-4">
              Mentorship, Awards & Global Recognition
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Today, Hamail mentors multiple organizations, guiding young minds
              toward social awareness, leadership confidence, and ideological
              strength. His relentless efforts have earned him dozens of awards,
              making him one of the youngest social activists in Pakistan.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              In 2025, he was honored with the prestigious
              <span className="text-yellow-400 font-semibold">
                {" "}Evergreen Award – Best Global Business Architect for Youth Empowerment in Pakistan
              </span>.
              His work has been featured in over
              <span className="text-white font-semibold"> 500+ international publications</span>,
              and he continues to inspire thousands of young entrepreneurs
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

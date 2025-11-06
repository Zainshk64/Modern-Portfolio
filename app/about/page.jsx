"use client"

import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
       
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About This Platform</h1>
          <p className="text-xl text-gray-400">Transforming leadership for a changing world</p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To empower leaders and organizations with the frameworks, insights, and inspiration needed to thrive in a
              world of unprecedented change. We believe that the future belongs to those who can anticipate it, adapt to
              it, and ultimately shape it.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">The Adam Braun Difference</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Adam brings a unique combination of entrepreneurial success, academic rigor, and practical wisdom.
                Having built companies from zero to scale, raised over $100MM, and authored bestselling books, Adam
                understands the complexities of leading in uncertainty.
              </p>
              <p>
                His keynotes aren't just inspirational—they're actionable. Audiences leave with concrete frameworks they
                can implement immediately in their organizations.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-yellow-400 font-semibold text-lg mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We challenge conventional thinking and pioneer new approaches to leadership and organizational
                  transformation.
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-yellow-400 font-semibold text-lg mb-3">Impact</h3>
                <p className="text-gray-300">
                  We measure success by the lasting change we create in organizations and the leaders we develop.
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-yellow-400 font-semibold text-lg mb-3">Integrity</h3>
                <p className="text-gray-300">
                  We hold ourselves to the highest standards of authenticity and accountability in everything we do.
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-yellow-400 font-semibold text-lg mb-3">Community</h3>
                <p className="text-gray-300">
                  We believe in lifting others up and creating communities of leaders who support and challenge each
                  other.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

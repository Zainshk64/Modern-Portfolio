"use client"

import { useState } from "react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    eventType: "keynote",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", eventType: "keynote", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-yellow-400 hover:text-yellow-300 mb-6 inline-block">
            ← Back Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-400">Let's discuss how Adam can transform your organization</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 rounded-lg p-8">
                <div>
                  <label className="block text-white font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Event Type *</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  >
                    <option value="keynote">Keynote Speaking</option>
                    <option value="workshop">Workshop</option>
                    <option value="consulting">Consulting</option>
                    <option value="advisory">Advisory Board</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="bg-green-900/20 border border-green-700 rounded-lg p-12 text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for reaching out. We'll be in touch soon.</p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-yellow-400 font-semibold text-lg mb-3">Quick Response</h3>
              <p className="text-gray-300 text-sm">We typically respond within 24 hours.</p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-yellow-400 font-semibold text-lg mb-3">What to Include</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Event date & location</li>
                <li>• Expected audience size</li>
                <li>• Event theme</li>
                <li>• Your timeline</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-yellow-400 font-semibold text-lg mb-3">More Info</h3>
              <p className="text-gray-300 text-sm mb-4">Need more details before reaching out?</p>
              <Link href="/speaking" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
                View speaking topics →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

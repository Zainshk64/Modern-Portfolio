"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function CTASection() {
  const { ref, inView } = useInView({ threshold: 0.5 })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Let's Chat</h2>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to transform your organization? Let's discuss how Adam can help your team thrive in a world of rapid
            change.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>
            <Link
              href="/speaking"
              className="px-8 py-4 border border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400/10 transition-all duration-300"
            >
              View Speaking Topics
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

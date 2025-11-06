"use client"

import { Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <div className="relative">
      {/* Background Text - Large Signature Style */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <h2 
          className="text-[12rem] md:text-[16rem] lg:text-[18rem] font-bold text-gray-300/30 whitespace-nowrap select-none"
          style={{ 
            fontFamily: "'Brush Script MT', cursive",
            lineHeight: "1"
          }}
        >
         Humail Ijaz
        </h2>
      </div>

      {/* Floating Footer Container */}
      <footer className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Let's Chat Section */}
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Chat
            </h3>
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-all hover:scale-105 transform">
              Contact Adam
            </button>
          </div>

          {/* Footer Navigation & Social Links */}
          <div className="bg-zinc-900/80 backdrop-blur-md rounded-3xl px-8 py-6 border border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Navigation Links */}
              <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
                <a 
                  href="#meet-adam" 
                  className="text-white hover:text-yellow-400 transition-colors text-base font-medium"
                >
                  Meet Adam
                </a>
                <a 
                  href="#speaking" 
                  className="text-white hover:text-yellow-400 transition-colors text-base font-medium"
                >
                  Speaking
                </a>
                <a 
                  href="#bestseller" 
                  className="text-white hover:text-yellow-400 transition-colors text-base font-medium"
                >
                  Bestseller
                </a>
                <a 
                  href="#insights" 
                  className="text-white hover:text-yellow-400 transition-colors text-base font-medium"
                >
                  Insights
                </a>
              </nav>

              {/* Social Media Icons */}
              <div className="flex gap-4 items-center">
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors p-2 hover:scale-110 transform"
                  aria-label="Instagram"
                >
                  <Instagram size={22} strokeWidth={2} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors p-2 hover:scale-110 transform"
                  aria-label="Twitter/X"
                >
                  <svg 
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors p-2 hover:scale-110 transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} strokeWidth={2} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors p-2 hover:scale-110 transform"
                  aria-label="YouTube"
                >
                  <Youtube size={22} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Adam Brown. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Brush+Script+MT&display=swap');
      `}</style>
    </div>
  )
}
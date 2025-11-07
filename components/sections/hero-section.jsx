"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <p className="text-yellow-400 text-sm font-semibold tracking-wide">
            Adam is a 3x Entrepreneur, NYT Bestselling Author & Keynote Speaker
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Helping Organizations Thrive In A World Of Rapid Change.
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md md:max-w-lg mx-auto md:mx-0">
            The key to mastering an uncertain future? It’s not about predicting
            every storm — it’s about creating leaders that can weather any
            tempest.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <button className="px-8 py-4 bg-yellow-300 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Connect With Adam
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <Play size={18} fill="white" />
              Watch Adam's Video
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/public/heroimage.png"
            alt="Hero Image"
            width={480}
            height={480}
            className="rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </div>
    </section>
  );
}

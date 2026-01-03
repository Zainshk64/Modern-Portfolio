"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <p className="text-yellow-400 text-sm font-semibold tracking-wide">
            Evergreen Award Winner — Featured on National News
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Celebrating Pakistan’s Visionary Entrepreneur of 2025
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md md:max-w-lg mx-auto md:mx-0">
            Hamail Ejaz has once again made Pakistan proud by earning the
            prestigious “Visionary Entrepreneur of 2025” award a recognition of
            his exceptional leadership, innovative business models, and
            remarkable contributions toward creating opportunities for youth.
            His Evergreen Award as Pakistan’s Best Global Business Architect
            2025 further solidifies his position on the world stage.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <Link href='https://evergreenawards.com/awards/hamail-ijaz-best-global-business-architect-for-youth-empowerment-in-pakistan-of-2025' target="_blank"  > 
             <button className="px-8 cursor-pointer py-4 bg-yellow-300 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
             Read Blog
            </button>
            </Link>
            <Link href={"/meet-hamail"}>
              <button className="px-8 py-4 border border-gray-600 text-white rounded-full cursor-pointer flex items-center gap-2 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                Read More about Hamail
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/heroImageNew.jpeg"
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

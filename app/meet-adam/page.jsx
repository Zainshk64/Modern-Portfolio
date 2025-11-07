"use client";

import Image from "next/image";
import Link from "next/link";
import {TimelineDemo} from "@/components/meetComponents/TimelineDemo";

export default function MeetAdam() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Meet Humail Ijaz
          </h1>
          <p className="text-xl text-gray-400">
            Entrepreneur, Author & Visionary Leader
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-full rounded-lg overflow-hidden">
            <Image
              src="/public/meetimage.png"
              alt="Adam Braun"
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Find a way, or make one. Meet Mr. Hamail Ejaz whose goal and the
              aim was to do something extra in his life. He is a professional in
              business administration and has a lot of knowledge in the
              marketing and networking field. He is the Youngest Realtor who
              implemented his Networking skills in the market and gave birth to
              a successful Real estate company who was named “Khareedo Baicho”.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Hamail Ijaz is also a Social Activist and a social Entrepreneur
              who started his journey as an Ambassador at Talent expo 2015 and
              is now a Chairman of Nazriyati Students Federation (One of the
              largest student federation in Pakistan). He is an ex-Chairman
              Universities Council at ‘State youth Parliament’ and an ex Human
              resource in one of the biggest Youth organizations in Pakistan
              ‘Youth Impact’, He is an ex-Director of Operations at ‘LIFT
              Islamabad Group' but he didn’t stop there!
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              He is mentoring multiple organizations just to give social
              awareness to the youth, counsel youth to know their rights and
              train them to defend their ideas, and their ideology and build
              their strength. He is the youngest Social activist right now in
              Pakistan securing dozens of awards.
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors"
              >
                Book Adam For Your Event
              </Link>
            </div>
          </div>
        </div>

        <TimelineDemo />

        
      </div>
    </div>
  );
}

"use client"

import Image from "next/image"

export default function CompaniesLogo() {
  const companies = [
    { src: "/companyLogo/hnhlogo.png", alt: "hnh-logo" },
    { src: "/companyLogo/backlinx.jpeg", alt: "backlinx-logo" },
    { src: "/companyLogo/kharedo.jpeg", alt: "kharedobachao-logo" },
    { src: "/companyLogo/lift.jpeg", alt: "lift-logo" },
    { src: "/companyLogo/smartech.jpeg", alt: "smart-tech-logo" },
    { src: "/companyLogo/wingsol.jpeg", alt: "wingsol-logo" },
    { src: "/companyLogo/youthimpact.jpeg", alt: "youthimpact-logo" },


  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Companies & Organizations
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Trusted by leading organizations and enterprises where leadership,
            strategy, and impact-driven vision matter the most.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group bg-zinc-900/70 border border-gray-800 rounded-2xl p-6 
              flex items-center justify-center h-32
              hover:shadow-2xl hover:shadow-yellow-400/10
              hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={company.src}
                  alt={company.alt}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

export default function CompaniesSection() {
  const [inView, setInView] = useState(false)
  const containerRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollY = window.scrollY
      const element = containerRef.current
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + scrollY

      const offset = (scrollY - elementTop) * 0.5
      element.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const companies = [
    { 
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    { 
      name: "Meta", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
    },
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    { 
      name: "Apple", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    { 
      name: "Spotify", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
    },
    { 
      name: "Netflix", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    },
    { 
      name: "Coca-Cola", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
    },
    { 
      name: "Nike", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
    },
    { 
      name: "Uber", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
    },
    { 
      name: "Lyft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Lyft_logo.svg"
    },
   
    { 
      name: "IBM", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
    },
    { 
      name: "Intel", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg"
    },
    { 
      name: "Salesforce", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
    },
    { 
      name: "Dell", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg"
    },
    { 
      name: "HP", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg"
    },
    { 
      name: "Oracle", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
    },
    { 
      name: "PayPal", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
    },
    { 
      name: "Tesla", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"
    },
   
    { 
      name: "LinkedIn", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
    },
    { 
      name: "Zoom", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg"
    },
    { 
      name: "Airbnb", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
    },
    { 
      name: "Stripe", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
    },
    { 
      name: "Shopify", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
    },
    { 
      name: "Pinterest", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
    }
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div ref={containerRef} className="transition-transform duration-300">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center text-black mb-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Working with the world's
          </h2>
          <h2
            className={`text-4xl md:text-5xl font-bold text-center text-black mb-16 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            leading organizations
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center">
            {companies.map((company, i) => (
              <div
                key={company.name}
                className={`flex flex- items-center justify-center gap-3 transition-all duration-700 hover:scale-110 ${
                  inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-gray-700 font-semibold text-sm text-center hover:text-black transition-colors">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import { useInView } from "react-intersection-observer"

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  const testimonials = [
    {
      quote: "The best speaker I've ever seen in the history of our company's events.",
      author: "General Counsel",
      company: "Coca-Cola HBC",
    },
    {
      quote:
        "The perfect blend of inspiration, innovative thinking, and practical application while guiding us on a captivating journey.",
      author: "Head of Content Strategy & Brand",
      company: "Logitech for Business",
    },
    {
      quote:
        "Adam has the rare ability to combine data-driven insights with emotional intelligence in a way that resonates with any audience.",
      author: "Chief People Officer",
      company: "Accenture",
    },
  ]

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">What Leaders Say About Adam</h2>

        <div className="grid gap-8 md:gap-12">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`border-l-4 border-yellow-400 pl-8 py-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-lg md:text-xl text-white mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-yellow-400">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

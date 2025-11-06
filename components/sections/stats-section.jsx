"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

function AnimatedCounter({ targetValue, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let startTime
    let animationFrameId

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      // Parse the target value (remove non-numeric characters)
      const numericTarget = Number.parseInt(targetValue.replace(/[^\d]/g, ""))
      setCount(Math.floor(numericTarget * progress))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [targetValue, duration])

  // Reconstruct the formatted value with the animated number
  const format = (value) => {
    if (targetValue.includes("MM+")) return `${value}MM+`
    if (targetValue.includes("T+")) return `${value}T+`
    if (targetValue.includes("K+")) return `${value}K+`
    if (targetValue.startsWith("#")) return "#1"
    if (targetValue.includes("$")) return `$${value}${targetValue.includes("T+") ? "T+" : ""}`
    return value
  }

  return <span>{format(count)}</span>
}

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  const stats = [
    { label: "$100MM+", value: "$100MM+", suffix: "", description: "Raised by ventures founded" },
    { label: "#1", value: "#1", suffix: "", description: "Best-Selling Author" },
    { label: "3MM+", value: "3MM+", suffix: "", description: "Viewers of Adam's talks" },
    { label: "600+", value: "600+", suffix: "", description: "Schools built" },
    { label: "250K+", value: "250K+", suffix: "", description: "Students in programs" },
    { label: "$4T+", value: "$4T+", suffix: "", description: "Market value of clients" },
  ]

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                {inView ? <AnimatedCounter targetValue={stat.value} duration={2} /> : "0"}
              </p>
              <p className="text-gray-400 text-sm md:text-base">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

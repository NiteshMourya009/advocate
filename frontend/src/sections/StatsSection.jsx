import React, { useEffect, useRef, useState } from 'react'
import { Scale, Users, BookOpen, Award } from 'lucide-react'

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          let startTime = null
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // cubic ease out
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const stats = [
  {
    icon: Scale,
    value: 15,
    suffix: '+',
    label: 'Years of Legal Practice',
    desc: 'Combined experience in Mumbai courts'
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Clients Advised',
    desc: 'Across civil, criminal & commercial matters'
  },
  {
    icon: BookOpen,
    value: 12,
    suffix: '+',
    label: 'Practice Areas',
    desc: 'Comprehensive legal coverage'
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'Confidentiality',
    desc: 'Strict advocate-client privilege always'
  }
]

export default function StatsSection() {
  return (
    <section className="py-14 sm:py-16 bg-[#121A29] relative overflow-hidden">
      {/* Decorative gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#B89B5E]" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B89B5E]" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#B89B5E 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="text-center group"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#B89B5E]/10 border border-[#B89B5E]/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B89B5E]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#B89B5E]" />
                </div>

                {/* Counter */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-1.5 tabular-nums">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Gold separator */}
                <div className="w-8 h-[2px] bg-[#B89B5E] mx-auto mb-2.5" />

                {/* Label */}
                <div className="text-xs sm:text-sm font-bold text-[#D4BD8A] font-heading uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <p className="text-[11px] text-white/50 leading-relaxed hidden sm:block">
                  {stat.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

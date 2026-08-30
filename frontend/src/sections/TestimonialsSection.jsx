import React, { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck } from 'lucide-react'
import { testimonialsData } from '../data/testimonials'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1))
  }

  const current = testimonialsData[currentIndex]

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#E9E1D3] relative overflow-hidden">
      {/* Background Accent */}
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#B89B5E]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading">
              Client Experiences
            </span>
            <div className="w-8 h-px bg-[#B89B5E]" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#292929] mb-4">
            TESTIMONIALS & CLIENT TRUST
          </h2>
          <div className="h-1 w-14 bg-[#B89B5E] mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-[#6F6A61] max-w-lg mx-auto">
            Reflections on our advocacy, advisory standards, and confidentiality.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white border border-[#D8CEBE] p-8 sm:p-12 shadow-md">
          {/* Top Gold Corner Accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#B89B5E]" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#B89B5E]" />

          {/* Large Quote Icon */}
          <Quote className="w-12 h-12 text-[#B89B5E]/30 mb-6 mx-auto sm:mx-0" />

          {/* Quote Text */}
          <blockquote className="text-base sm:text-xl text-[#292929] font-serif italic leading-relaxed mb-8">
            "{current.quote}"
          </blockquote>

          {/* Client Details & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#E5DEC9]">
            <div>
              <div className="font-heading font-bold text-sm sm:text-base text-[#292929]">
                {current.client}
              </div>
              <div className="text-xs text-[#6F6A61]">
                {current.location} • <span className="text-[#B89B5E] font-medium">{current.matterType}</span>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-[#D8CEBE] hover:border-[#B89B5E] hover:bg-[#F7F4EE] flex items-center justify-center text-[#292929] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-[#6F6A61]">
                0{currentIndex + 1} / 0{testimonialsData.length}
              </span>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-[#D8CEBE] hover:border-[#B89B5E] hover:bg-[#F7F4EE] flex items-center justify-center text-[#292929] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

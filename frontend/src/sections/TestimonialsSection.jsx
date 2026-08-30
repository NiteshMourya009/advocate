import React, { useState } from 'react'
import { Quote, Star, ShieldCheck, Scale, Sparkles, Building, FileCheck, CheckCircle2, UserCheck, Play, Pause } from 'lucide-react'
import { testimonialsData } from '../data/testimonials'
import Modal from '../components/common/Modal'

// Different visual styling cards for visual richness
const cardThemes = [
  {
    bg: 'bg-[#121A29]',
    border: 'border-[#B89B5E]/50',
    topBorder: 'border-t-[#B89B5E]',
    quoteText: 'text-white/90',
    nameText: 'text-white',
    matterBadge: 'bg-[#B89B5E]/20 text-[#D4BD8A] border-[#B89B5E]/40',
    avatarBg: 'bg-[#B89B5E]',
    avatarText: 'text-[#121A29]',
    tag: 'Property & Real Estate',
  },
  {
    bg: 'bg-white',
    border: 'border-[#D8CEBE]',
    topBorder: 'border-t-[#121A29]',
    quoteText: 'text-[#292929]',
    nameText: 'text-[#121A29]',
    matterBadge: 'bg-[#F7F4EE] text-[#121A29] border-[#D8CEBE]',
    avatarBg: 'bg-[#121A29]',
    avatarText: 'text-white',
    tag: 'Civil Representation',
  },
  {
    bg: 'bg-[#182337]',
    border: 'border-[#3D5275]',
    topBorder: 'border-t-[#D4BD8A]',
    quoteText: 'text-white/90',
    nameText: 'text-white',
    matterBadge: 'bg-[#B89B5E]/20 text-[#D4BD8A] border-[#B89B5E]/30',
    avatarBg: 'bg-[#D4BD8A]',
    avatarText: 'text-[#121A29]',
    tag: 'Commercial & Contract',
  },
  {
    bg: 'bg-[#FAF8F5]',
    border: 'border-[#D8CEBE]',
    topBorder: 'border-t-[#B89B5E]',
    quoteText: 'text-[#3A4155]',
    nameText: 'text-[#121A29]',
    matterBadge: 'bg-white text-[#B89B5E] border-[#D8CEBE]',
    avatarBg: 'bg-[#B89B5E]',
    avatarText: 'text-white',
    tag: 'Family & Estate',
  },
  {
    bg: 'bg-[#0E1726]',
    border: 'border-[#B89B5E]/40',
    topBorder: 'border-t-[#B89B5E]',
    quoteText: 'text-white/90',
    nameText: 'text-white',
    matterBadge: 'bg-[#1A263D] text-[#D4BD8A] border-[#3D5275]',
    avatarBg: 'bg-[#1A3060] border border-[#B89B5E]',
    avatarText: 'text-[#D4BD8A]',
    tag: 'Consumer Forum',
  },
  {
    bg: 'bg-white',
    border: 'border-[#D5CAB8]',
    topBorder: 'border-t-[#B89B5E]',
    quoteText: 'text-[#292929]',
    nameText: 'text-[#121A29]',
    matterBadge: 'bg-[#F7F4EE] text-[#121A29] border-[#D8CEBE]',
    avatarBg: 'bg-[#121A29]',
    avatarText: 'text-[#D4BD8A]',
    tag: 'Criminal Law & Bail',
  },
]

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  // Quadruple items to create an ultra-smooth seamless infinite loop from left to right
  const marqueeItems = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ]

  return (
    <section className="py-20 sm:py-24 bg-[#EFECE4] relative overflow-hidden">
      {/* Decorative top & bottom gold lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#B89B5E]" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B89B5E]" />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#292929 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#B89B5E]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading">
            Client Experiences &amp; Trust
          </span>
          <div className="w-8 h-px bg-[#B89B5E]" />
        </div>

        {/* Section Heading */}
        <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#121A29] mb-4">
          WHAT OUR CLIENTS SAY
        </h2>
        <div className="h-1 w-16 bg-[#B89B5E] mx-auto mb-5" />
        <p className="text-sm sm:text-base text-[#6F6A61] max-w-2xl mx-auto leading-relaxed">
          Reflections from clients on our advocacy, statutory advisory standards, and unwavering dedication to confidentiality.
        </p>

        {/* Floating Animation Status Indicator & Pause Toggle */}
        <div className="mt-6 inline-flex items-center gap-3 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-[#D8CEBE] rounded-full text-xs text-[#6F6A61]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B89B5E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B89B5E]" />
          </span>
          <span className="font-medium">Floating Left-to-Right (Hover any card to pause)</span>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="ml-1 p-1 hover:text-[#B89B5E] transition-colors"
            title={isPaused ? 'Resume Floating' : 'Pause Floating'}
            aria-label="Toggle animation"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* CONTINUOUS FLOATING MARQUEE STREAM (LEFT TO RIGHT) */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Gradient Shadows for seamless edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#EFECE4] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#EFECE4] to-transparent z-20 pointer-events-none" />

        {/* Moving Track */}
        <div
          className="animate-marquee-ltr flex gap-6 px-4"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {marqueeItems.map((item, index) => {
            const theme = cardThemes[index % cardThemes.length]
            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => setSelectedTestimonial(item)}
                className={`
                  w-[300px] sm:w-[380px] shrink-0 p-6 sm:p-7 rounded-sm shadow-md transition-all duration-300
                  ${theme.bg} ${theme.border} border border-t-4 ${theme.topBorder}
                  hover:-translate-y-2 hover:shadow-xl cursor-pointer group relative flex flex-col justify-between
                `}
              >
                {/* Corner ornament for luxury feel */}
                <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r border-[#B89B5E]/40" />
                <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l border-[#B89B5E]/40" />

                <div>
                  {/* Card Header: Matter Tag & Stars */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border font-heading ${theme.matterBadge}`}
                    >
                      {item.matterType}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#B89B5E] fill-[#B89B5E]" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-[#B89B5E]/30 mb-2" />

                  {/* Testimonial Quote Text */}
                  <blockquote
                    className={`text-xs sm:text-sm font-serif italic leading-relaxed mb-6 line-clamp-4 ${theme.quoteText}`}
                  >
                    "{item.quote}"
                  </blockquote>
                </div>

                {/* Card Footer: Client Info */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs font-heading shrink-0 shadow-sm ${theme.avatarBg} ${theme.avatarText}`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <div className={`text-xs font-bold font-heading flex items-center gap-1.5 ${theme.nameText}`}>
                        <span>{item.client}</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#B89B5E]" title="Verified Client Consultation" />
                      </div>
                      <div className="text-[10px] text-[#8C8270]">{item.location}</div>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-[#B89B5E] uppercase tracking-wider font-heading opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Trust Guarantee Footer Note */}
      <div className="mt-8 text-center px-4">
        <div className="inline-flex items-center gap-2 text-xs text-[#6F6A61]">
          <ShieldCheck className="w-4 h-4 text-[#B89B5E]" />
          <span>Client identities and details protected under professional advocate-client privilege.</span>
        </div>
      </div>

      {/* Testimonial Detail Modal */}
      {selectedTestimonial && (
        <Modal
          isOpen={!!selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
          title={`Client Experience — ${selectedTestimonial.matterType}`}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-[#F7F4EE] border border-[#D8CEBE] border-t-4 border-t-[#B89B5E]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#121A29] text-[#B89B5E] flex items-center justify-center font-bold font-heading">
                  {selectedTestimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#292929] font-heading flex items-center gap-1.5">
                    {selectedTestimonial.client}
                    <ShieldCheck className="w-4 h-4 text-[#B89B5E]" />
                  </h4>
                  <p className="text-xs text-[#6F6A61]">{selectedTestimonial.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#B89B5E] fill-[#B89B5E]" />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#121A29] text-white font-heading inline-block">
                {selectedTestimonial.matterType}
              </span>
              <p className="text-base sm:text-lg text-[#292929] font-serif italic leading-relaxed">
                "{selectedTestimonial.quote}"
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] border border-[#D8CEBE] text-xs text-[#6F6A61] space-y-1">
              <div className="font-semibold text-[#292929] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B5E]" />
                <span>Advocate Counsel &amp; Representation</span>
              </div>
              <p>Handled by Adv. Jigar K. Agarwal &amp; Adv. Suman J. Agarwal with strict procedural compliance.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="/contact"
                onClick={() => setSelectedTestimonial(null)}
                className="w-full text-center px-6 py-3 bg-[#121A29] hover:bg-[#B89B5E] text-white text-xs font-bold font-heading uppercase tracking-widest transition-colors shadow"
              >
                Schedule an Appointment
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}

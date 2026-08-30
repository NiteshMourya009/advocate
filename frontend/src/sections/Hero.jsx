import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, ArrowRight, ShieldCheck, Scale, Compass, Award, Sparkles } from 'lucide-react'
import { contactInfo } from '../data/contactInfo'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-[#F7F4EE] overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] -z-10"
        style={{
          backgroundImage: `radial-gradient(#292929 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B89B5E] to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-[2px] bg-[#B89B5E]" />
              <span className="text-[#B89B5E] text-xs sm:text-[13px] font-bold tracking-widest uppercase font-heading">
                {contactInfo.eyebrow}
              </span>
              <div className="w-8 h-[2px] bg-[#B89B5E]" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#292929] leading-[1.12] tracking-tight mb-6"
            >
              Legal Expertise.{' '}
              <span className="text-[#B89B5E] italic block sm:inline font-serif">
                Trusted Counsel.
              </span>{' '}
              Strategic Representation.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#6F6A61] max-w-xl leading-relaxed mb-8"
            >
              Providing dedicated civil, criminal, property, and commercial legal advisory with strict professional confidentiality from our Santacruz (West) chamber in Mumbai.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold font-heading uppercase tracking-widest text-white bg-[#121A29] hover:bg-[#B89B5E] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={contactInfo.advocates.jigar.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold font-heading uppercase tracking-widest text-[#292929] bg-white border border-[#D8CEBE] hover:border-[#B89B5E] hover:text-[#B89B5E] transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp Advocate
              </a>
            </motion.div>

            {/* Trust Indicators Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-10 pt-6 border-t border-[#E5DEC9] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#6F6A61]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <span className="font-medium">Strict Confidentiality</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <span className="font-medium">Direct Advocate Counsel</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Compass className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <span className="font-medium">Mumbai Jurisdictions</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with Hover Reveal Interaction */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Interactive Visual Card */}
              <div
                className="hero-image-container group cursor-pointer relative aspect-[4/3] sm:aspect-[16/11]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered(!isHovered)}
              >
                {/* Primary Hero Image */}
                <img
                  src="/hero-1.jpg"
                  alt="Law Chamber Desk with Scales of Justice and Constitution of India"
                  className="hero-image-primary"
                />

                {/* Secondary Image for Hover / Touch Reveal */}
                <img
                  src="/hero-2.jpg"
                  alt="Executive Law Chamber Consultation Room"
                  className="hero-image-secondary"
                />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-20 bg-[#121A29]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#B89B5E]/50 flex items-center gap-2 text-white">
                  <div className="w-2 h-2 rounded-full bg-[#B89B5E] animate-pulse" />
                  <span className="text-[10px] font-heading tracking-widest uppercase text-[#D4BD8A]">
                    {isHovered ? 'Chamber Consultation Suite' : 'Legal Chambers • Mumbai'}
                  </span>
                </div>

                {/* Interaction prompt badge at bottom */}
                <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 border border-[#D8CEBE] text-[10px] font-heading font-semibold text-[#292929] uppercase tracking-wider shadow-sm flex items-center gap-1.5 group-hover:bg-[#B89B5E] group-hover:text-white transition-colors">
                  <Sparkles className="w-3 h-3 text-[#B89B5E] group-hover:text-white" />
                  <span>{isHovered ? 'Chamber View' : 'Hover to Explore'}</span>
                </div>
              </div>

              {/* Emblem / Chamber Badge Underneath */}
              <div className="mt-4 p-4 bg-white border border-[#D8CEBE] flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="Emblem"
                    className="w-10 h-10 object-contain shrink-0"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-xs text-[#292929]">
                      Adv. Jigar K. Agarwal & Adv. Suman J. Agarwal
                    </h4>
                    <p className="text-[11px] text-[#6F6A61]">
                      Santacruz (West), Mumbai • Direct Consultations
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:${contactInfo.advocates.jigar.phoneClean}`}
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-bold font-heading text-[#B89B5E] hover:text-[#292929] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Direct
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

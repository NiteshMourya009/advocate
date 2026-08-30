import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react'
import { contactInfo } from '../data/contactInfo'

export default function ConsultationCTA() {
  return (
    <section className="py-20 sm:py-24 bg-[#0F2044] relative overflow-hidden">
      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#B89B5E]" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B89B5E]" />

      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#B89B5E]/40 hidden sm:block" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#B89B5E]/40 hidden sm:block" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#B89B5E]/40 hidden sm:block" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#B89B5E]/40 hidden sm:block" />

      {/* Subtle background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#B89B5E 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Emblem Badge Icon */}
        <div className="w-16 h-16 mx-auto mb-6 bg-[#1A3060] border border-[#B89B5E]/50 p-2.5 flex items-center justify-center">
          <img src="/logo.png" alt="Emblem" className="w-10 h-10 object-contain opacity-90" />
        </div>

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-12 h-px bg-[#B89B5E]" />
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#B89B5E] font-heading">
            Schedule a Confidential Consultation
          </span>
          <div className="w-12 h-px bg-[#B89B5E]" />
        </div>

        {/* Headline */}
        <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
          NEED STRATEGIC LEGAL GUIDANCE?
        </h2>

        <div className="h-1 w-16 bg-[#B89B5E] mx-auto mb-6" />

        <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Discuss your case directly with our advocates. We provide honest legal assessment, disciplined statutory compliance, and customized dispute representation in Mumbai.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <Link
            to="/contact"
            className="flex-1 w-full flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold font-heading uppercase tracking-widest text-[#121A29] bg-[#B89B5E] hover:bg-[#D4BD8A] transition-all duration-300 shadow-md"
          >
            Fix an Appointment
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={contactInfo.advocates.jigar.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold font-heading uppercase tracking-widest text-white bg-white/10 border border-white/20 hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/50">
          <ShieldCheck className="w-4 h-4 text-[#B89B5E]" />
          <span>Strict Professional Privilege • Santacruz (West), Mumbai Chamber</span>
        </div>
      </div>
    </section>
  )
}

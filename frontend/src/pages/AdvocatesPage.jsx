import React from 'react'
import AdvocatesSection from '../sections/AdvocatesSection'
import ConsultationCTA from '../sections/ConsultationCTA'
import { Scale, Phone, MessageCircle } from 'lucide-react'
import { contactInfo } from '../data/contactInfo'

export default function AdvocatesPage() {
  return (
    <div className="pt-24 pb-0 bg-[#F7F4EE]">
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89B5E] text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading mb-6 shadow-sm">
          <Scale className="w-3.5 h-3.5" />
          <span>Legal Counsel Profile</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#292929] mb-6">
          Meet Our Advocates
        </h1>

        <div className="h-1 w-16 bg-[#B89B5E] mx-auto mb-6" />

        <p className="text-base sm:text-lg text-[#6F6A61] max-w-3xl mx-auto leading-relaxed">
          Direct, accessible legal counsel led by Adv. Jigar K. Agarwal and Adv. Suman J. Agarwal. Connect directly for legal consultation, document vetting, and court representation.
        </p>
      </section>

      {/* Main Advocates Grid */}
      <div className="-mt-8">
        <AdvocatesSection />
      </div>

      {/* Direct Contact Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-5xl mx-auto">
        <div className="p-8 bg-white border border-[#D8CEBE] border-t-4 border-t-[#B89B5E] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-xl font-bold font-heading text-[#292929] mb-1">
              Need Direct Legal Guidance?
            </h3>
            <p className="text-xs sm:text-sm text-[#6F6A61]">
              Reach out directly to our advocates via phone or WhatsApp for prompt consultation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={contactInfo.advocates.jigar.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] hover:bg-[#22c55e] text-white text-xs font-bold font-heading uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Jigar
            </a>
            <a
              href={`tel:${contactInfo.advocates.suman.phoneClean}`}
              className="px-5 py-2.5 bg-[#121A29] hover:bg-[#B89B5E] text-white text-xs font-bold font-heading uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Suman
            </a>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  )
}

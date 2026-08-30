import React from 'react'
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react'
import { advocatesData } from '../data/advocates'

function AdvocateCard({ advocate }) {
  return (
    <div
      className="group relative bg-white transition-all duration-300 hover:shadow-xl hover:shadow-[#0F2044]/15 hover:-translate-y-1"
      style={{
        border: '1px solid #D5CAB8',
        borderTop: '3px solid #C5A059',
      }}
    >
      {/* Navy header bar */}
      <div className="bg-[#0F2044] px-7 py-7 text-center relative overflow-hidden">
        {/* Corner ornaments */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C5A059]/50" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C5A059]/50" />

        <div className="w-20 h-20 rounded-full border-2 border-[#C5A059] flex items-center justify-center mx-auto mb-4 overflow-hidden bg-[#1A3060]">
          <img
            src="/logo.png"
            alt={advocate.name}
            className="w-14 h-14 object-contain opacity-90"
          />
        </div>

        <div className="text-[10px] font-bold tracking-widest uppercase text-[#C5A059] font-heading mb-1">
          {advocate.badge}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading leading-tight">
          {advocate.name}
        </h3>
        {advocate.qualification && (
          <p className="text-sm text-[#C5A059] font-semibold mt-1">{advocate.qualification}</p>
        )}
        <p className="text-xs text-slate-400 mt-1 font-medium">{advocate.role}</p>
      </div>

      {/* Body */}
      <div className="px-7 py-6">
        <p className="text-sm text-[#3A4155] leading-[1.75] mb-5">{advocate.bio}</p>

        {/* Focus Areas — Phoenix Legal card list style */}
        <div className="mb-6">
          <div className="text-[10px] font-bold tracking-widest uppercase text-[#C5A059] font-heading mb-3">
            Primary Focus & Advisory
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#3A4155]">
            {advocate.focusAreas.map((area, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-[#EEEBE3]">
          <a
            href={`tel:${advocate.phoneClean}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold font-heading uppercase tracking-wide text-[#0F2044] border-2 border-[#0F2044] hover:bg-[#0F2044] hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Call {advocate.name.split(' ')[1]}
          </a>
          <a
            href={advocate.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold font-heading uppercase tracking-wide text-white bg-[#25D366] hover:bg-[#22c55e] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp {advocate.name.split(' ')[1]}
          </a>
        </div>

        <div className="mt-3 text-center text-[11px] text-[#7A8099]">
          Direct Line: <a href={`tel:${advocate.phoneClean}`} className="font-semibold text-[#0F2044] hover:text-[#C5A059] transition-colors">{advocate.phone}</a>
        </div>
      </div>
    </div>
  )
}

export default function AdvocatesSection() {
  return (
    <section id="advocates" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F5EE] relative">
      {/* Right decorative strip */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#C5A059]" />

      <div className="max-w-7xl mx-auto">
        {/* OUR PARTNERS heading (Phoenix Legal style) */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C5A059]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#C5A059] font-heading">
              Legal Practitioners
            </span>
            <div className="w-8 h-px bg-[#C5A059]" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2044] mb-4">
            OUR ADVOCATES
          </h2>
          <div className="h-1 w-14 bg-[#C5A059] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#3A4155] max-w-2xl mx-auto leading-relaxed">
            Experienced legal counsel dedicated to high standards of professionalism, strategic advisory, and personalized client consultation in Mumbai.
          </p>
        </div>

        {/* Two-column Advocate Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {advocatesData.map((advocate) => (
            <AdvocateCard key={advocate.id} advocate={advocate} />
          ))}
        </div>
      </div>
    </section>
  )
}

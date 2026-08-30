import React from 'react'
import { whyChooseUsData } from '../data/whyChooseUs'
import SectionHeading from '../components/common/SectionHeading'

function WhyCard({ item }) {
  return (
    <div className="group relative bg-white border border-[#D5CAB8] border-t-4 border-t-[#C5A059] p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#0F2044]/10 hover:-translate-y-1">
      {/* Number watermark */}
      <div className="absolute top-4 right-5 text-4xl font-extrabold font-heading text-[#EEEBE3] group-hover:text-[#D4B56C]/20 transition-colors select-none">
        {item.number}
      </div>

      <div className="text-[10px] font-bold tracking-widest uppercase text-[#C5A059] font-heading mb-3">
        Principle {item.number}
      </div>

      <h3 className="text-base sm:text-lg font-bold text-[#0F2044] font-heading group-hover:text-[#C5A059] transition-colors mb-3">
        {item.title}
      </h3>

      <p className="text-xs sm:text-sm text-[#7A8099] leading-relaxed">
        {item.description}
      </p>

      <div className="mt-5 pt-4 border-t border-[#EEEBE3]">
        <div className="w-8 h-[2px] bg-[#C5A059]/40 group-hover:w-16 group-hover:bg-[#C5A059] transition-all duration-300" />
      </div>
    </div>
  )
}

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#EEEBE3] relative">
      {/* Phoenix Legal "Our Practices" gray section styling */}
      <div className="max-w-7xl mx-auto">
        {/* Heading — Phoenix Legal centered gray section heading style */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C5A059]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#C5A059] font-heading">
              Our Practice Ethos
            </span>
            <div className="w-8 h-px bg-[#C5A059]" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2044] mb-4">
            Why Choose Our Legal Chamber
          </h2>
          <div className="h-1 w-14 bg-[#C5A059] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#3A4155] max-w-2xl mx-auto leading-relaxed">
            Our practice is rooted in rigorous legal discipline, absolute confidentiality, and accessible advocacy tailored to each client's specific requirements.
          </p>
        </div>

        {/* 6 Core Principles Grid — Phoenix Legal card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {whyChooseUsData.map((item) => (
            <WhyCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

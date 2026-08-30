import React from 'react'

export default function WhyChooseUsCard({ item }) {
  return (
    <div className="relative group rounded-2xl bg-gradient-to-b from-[#0F1D33] to-[#08101E] border border-slate-800 hover:border-[#C5A059]/60 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/5 flex flex-col justify-between overflow-hidden">
      {/* Antique Number Watermark */}
      <div className="absolute top-4 right-6 text-4xl sm:text-5xl font-extrabold font-heading text-slate-800/40 group-hover:text-[#D4AF37]/15 transition-colors select-none">
        {item.number}
      </div>

      <div>
        <div className="text-sm font-bold text-[#D4AF37] font-heading tracking-widest uppercase mb-3">
          Principle {item.number}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-heading group-hover:text-white transition-colors mb-3">
          {item.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/80">
        <div className="w-8 h-[2px] bg-[#D4AF37]/40 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-300" />
      </div>
    </div>
  )
}

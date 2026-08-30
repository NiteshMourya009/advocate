import React from 'react'
import { Phone, MessageCircle, Mail, Award, CheckCircle2, Shield, User } from 'lucide-react'
import Button from '../common/Button'
import GoldBadge from '../common/GoldBadge'

export default function AdvocateCard({ advocate }) {
  const isJigar = advocate.id === 'jigar-agarwal'

  return (
    <div className="relative group rounded-2xl bg-gradient-to-b from-[#0F1D33] via-[#0B1628] to-[#08101E] border border-[#C5A059]/30 hover:border-[#D4AF37] transition-all duration-300 shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-[#D4AF37]/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
      {/* Top subtle golden accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header with Avatar & Badge */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#1A2E4C] via-[#0B1628] to-[#060B14] border-2 border-[#C5A059]/40 flex items-center justify-center shadow-lg group-hover:border-[#D4AF37] transition-colors relative overflow-hidden">
              {/* Subtle scales watermark */}
              <img
                src="/logo.png"
                alt="Emblem"
                className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div>
              <GoldBadge variant="default" className="mb-1.5">
                {advocate.badge}
              </GoldBadge>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-heading">
                {advocate.name}
              </h3>
              {advocate.qualification && (
                <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] tracking-wider">
                  {advocate.qualification}
                </p>
              )}
              <p className="text-xs text-slate-400 font-medium">
                {advocate.role}
              </p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {advocate.bio}
        </p>

        {/* Focus Areas */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            Primary Focus & Advisory
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {advocate.focusAreas.map((area, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Direct Contact Actions */}
      <div className="pt-6 border-t border-slate-800/80 space-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Call Advocate Button */}
          <Button
            href={`tel:${advocate.phoneClean}`}
            variant="secondary"
            size="md"
            icon={Phone}
            className="w-full sm:flex-1 text-xs sm:text-sm"
          >
            Call {advocate.name.split(' ')[1]}
          </Button>

          {/* WhatsApp Advocate Button */}
          <Button
            href={advocate.whatsappUrl}
            target="_blank"
            variant="whatsapp"
            size="md"
            icon={MessageCircle}
            className="w-full sm:flex-1 text-xs sm:text-sm"
          >
            WhatsApp {advocate.name.split(' ')[1]}
          </Button>
        </div>

        {/* Phone number display */}
        <div className="text-center text-xs text-slate-400">
          Direct Line: <a href={`tel:${advocate.phoneClean}`} className="text-slate-200 hover:text-[#D4AF37] font-semibold">{advocate.phone}</a>
        </div>
      </div>
    </div>
  )
}

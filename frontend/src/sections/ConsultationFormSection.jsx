import React from 'react'
import ConsultationForm from '../components/forms/ConsultationForm'
import { ShieldCheck, MessageCircle, Phone, Clock, Calendar, MapPin } from 'lucide-react'
import { contactInfo } from '../data/contactInfo'

export default function ConsultationFormSection() {
  return (
    <section id="consultation" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#B89B5E]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading">
              Book an Appointment
            </span>
            <div className="w-8 h-px bg-[#B89B5E]" />
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#292929] mb-4">
            FIX AN APPOINTMENT
          </h2>
          <div className="h-1 w-14 bg-[#B89B5E] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#6F6A61] max-w-2xl mx-auto leading-relaxed">
            Fill in your details and your appointment request will be sent directly to our advocates via WhatsApp for same-day confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Info Panel */}
          <div className="lg:col-span-5 space-y-5">

            {/* Quick Contact Cards */}
            <div className="bg-white border border-[#D8CEBE] p-6 sm:p-7 shadow-sm" style={{ borderTop: '4px solid #B89B5E' }}>
              <h3 className="text-base font-bold text-[#292929] font-heading mb-5">
                Direct Advocate Contact
              </h3>

              {/* Jigar */}
              <div className="p-4 bg-[#F7F4EE] border border-[#D8CEBE] mb-3">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="text-xs font-bold text-[#292929] font-heading">{contactInfo.advocates.jigar.name}</div>
                    <div className="text-[11px] text-[#B89B5E]">{contactInfo.advocates.jigar.qualification} · {contactInfo.advocates.jigar.designation}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:${contactInfo.advocates.jigar.phoneClean}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[11px] font-bold font-heading uppercase text-[#0F2044] border border-[#0F2044] hover:bg-[#0F2044] hover:text-white transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {contactInfo.advocates.jigar.phone}
                  </a>
                  <a
                    href={contactInfo.advocates.jigar.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[11px] font-bold font-heading uppercase text-white bg-[#25D366] hover:bg-[#22c55e] transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Suman */}
              <div className="p-4 bg-[#F7F4EE] border border-[#D8CEBE]">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="text-xs font-bold text-[#292929] font-heading">{contactInfo.advocates.suman.name}</div>
                    <div className="text-[11px] text-[#B89B5E]">{contactInfo.advocates.suman.qualification} · {contactInfo.advocates.suman.designation}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:${contactInfo.advocates.suman.phoneClean}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[11px] font-bold font-heading uppercase text-[#0F2044] border border-[#0F2044] hover:bg-[#0F2044] hover:text-white transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {contactInfo.advocates.suman.phone}
                  </a>
                  <a
                    href={contactInfo.advocates.suman.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[11px] font-bold font-heading uppercase text-white bg-[#25D366] hover:bg-[#22c55e] transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Chamber Hours & Info */}
            <div className="bg-[#0F2044] border border-[#B89B5E]/20 p-6">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#B89B5E] font-heading mb-4">
                Chamber Information
              </div>

              <div className="space-y-3.5 text-xs text-white/75">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white mb-1">Chamber Hours</div>
                    <div>Monday – Saturday: <span className="text-white font-semibold">10:00 AM – 8:30 PM</span></div>
                    <div>Sunday: <span className="text-[#B89B5E] font-semibold">By Prior Appointment</span></div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white mb-1">Office Address</div>
                    <div>Office No. 2, Nani Bunglow,<br />Chapel Lane, Station Road,<br />Santacruz (West), Mumbai — 400 054.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white mb-1">Strict Confidentiality</div>
                    <div>All case details shared are protected under advocate-client professional privilege.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import ConsultationFormSection from '../sections/ConsultationFormSection'
import OfficeLocationSection from '../sections/OfficeLocationSection'
import { Phone, Mail, MapPin, MessageCircle, Scale } from 'lucide-react'
import { contactInfo } from '../data/contactInfo'

export default function ContactPage() {
  return (
    <div className="pt-24 pb-0 bg-[#F7F4EE]">
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89B5E] text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading mb-6 shadow-sm">
          <Scale className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#292929] mb-6">
          Contact Our Chamber
        </h1>

        <div className="h-1 w-16 bg-[#B89B5E] mx-auto mb-6" />

        <p className="text-base sm:text-lg text-[#6F6A61] max-w-3xl mx-auto leading-relaxed">
          Schedule a confidential legal consultation with Adv. Jigar K. Agarwal and Adv. Suman J. Agarwal. Connect via phone, WhatsApp, email, or visit our chamber in Santacruz (West), Mumbai.
        </p>
      </section>

      {/* Top 3-Card Direct Contacts */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Adv. Jigar Agarwal */}
          <div className="p-6 bg-white border border-[#D8CEBE] border-t-4 border-t-[#B89B5E] text-center space-y-3 shadow-md">
            <div className="w-12 h-12 rounded-full bg-[#F7F4EE] border border-[#D8CEBE] flex items-center justify-center text-[#B89B5E] mx-auto">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#292929] font-heading">
              {contactInfo.advocates.jigar.name}
            </h3>
            <p className="text-xs text-[#6F6A61]">
              {contactInfo.advocates.jigar.qualification} • {contactInfo.advocates.jigar.designation}
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${contactInfo.advocates.jigar.phoneClean}`}
                className="py-2.5 px-4 bg-[#121A29] hover:bg-[#B89B5E] text-white text-xs font-bold font-heading uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                {contactInfo.advocates.jigar.phone}
              </a>
              <a
                href={contactInfo.advocates.jigar.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-[#25D366] hover:bg-[#22c55e] text-white text-xs font-bold font-heading uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Jigar
              </a>
            </div>
          </div>

          {/* Card 2: Adv. Suman Agarwal */}
          <div className="p-6 bg-white border border-[#D8CEBE] border-t-4 border-t-[#B89B5E] text-center space-y-3 shadow-md">
            <div className="w-12 h-12 rounded-full bg-[#F7F4EE] border border-[#D8CEBE] flex items-center justify-center text-[#B89B5E] mx-auto">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#292929] font-heading">
              {contactInfo.advocates.suman.name}
            </h3>
            <p className="text-xs text-[#6F6A61]">
              {contactInfo.advocates.suman.qualification} • {contactInfo.advocates.suman.designation}
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${contactInfo.advocates.suman.phoneClean}`}
                className="py-2.5 px-4 bg-[#121A29] hover:bg-[#B89B5E] text-white text-xs font-bold font-heading uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                {contactInfo.advocates.suman.phone}
              </a>
              <a
                href={contactInfo.advocates.suman.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-[#25D366] hover:bg-[#22c55e] text-white text-xs font-bold font-heading uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Suman
              </a>
            </div>
          </div>

          {/* Card 3: Email & Office Location */}
          <div className="p-6 bg-white border border-[#D8CEBE] border-t-4 border-t-[#B89B5E] text-center space-y-3 shadow-md">
            <div className="w-12 h-12 rounded-full bg-[#F7F4EE] border border-[#D8CEBE] flex items-center justify-center text-[#B89B5E] mx-auto">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#292929] font-heading">
              Email & Chamber Desk
            </h3>
            <p className="text-xs text-[#6F6A61]">
              Santacruz (West), Mumbai - 400 054
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`mailto:${contactInfo.advocates.jigar.email}`}
                className="py-2.5 px-4 bg-[#F7F4EE] hover:bg-[#E9E1D3] border border-[#D8CEBE] text-[#292929] text-xs font-bold font-heading transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#B89B5E]" />
                {contactInfo.advocates.jigar.email}
              </a>
              <a
                href={contactInfo.office.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-white hover:bg-[#F7F4EE] border border-[#D8CEBE] text-[#B89B5E] text-xs font-bold font-heading uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Form & Office Location Sections */}
      <ConsultationFormSection />
      <OfficeLocationSection />
    </div>
  )
}

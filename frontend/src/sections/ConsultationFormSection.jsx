import React from 'react'
import ConsultationForm from '../components/forms/ConsultationForm'
import { ShieldCheck, MessageCircle, Phone, Mail, Clock } from 'lucide-react'
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
              Initiate Legal Inquiry
            </span>
            <div className="w-8 h-px bg-[#B89B5E]" />
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#292929] mb-4">
            SCHEDULE A CONSULTATION
          </h2>
          <div className="h-1 w-14 bg-[#B89B5E] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#6F6A61] max-w-2xl mx-auto leading-relaxed">
            Submit your legal matter details directly to our chamber. All communications are protected under professional privilege.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Guidelines & Chamber Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#D8CEBE] border-t-4 border-t-[#B89B5E] p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#292929] font-heading">
                Consultation Protocol
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#6F6A61]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7F4EE] border border-[#D8CEBE] flex items-center justify-center text-[#B89B5E] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#292929]">Strict Confidentiality</h4>
                    <p className="text-xs text-[#6F6A61] mt-0.5">
                      All case documents and communications are safeguarded under advocate-client legal privilege.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7F4EE] border border-[#D8CEBE] flex items-center justify-center text-[#B89B5E] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#292929]">Prompt Evaluation</h4>
                    <p className="text-xs text-[#6F6A61] mt-0.5">
                      Our advocates review inquiries during chamber hours and provide practical guidance on procedural next steps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7F4EE] border border-[#D8CEBE] flex items-center justify-center text-[#B89B5E] shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#292929]">Urgent Matters</h4>
                    <p className="text-xs text-[#6F6A61] mt-0.5">
                      For time-critical matters such as anticipatory bail, stay applications, or urgent notices, contact directly via WhatsApp or phone.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="pt-4 border-t border-[#E5DEC9] space-y-2.5">
                <a
                  href={contactInfo.advocates.jigar.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-xs font-semibold text-[#1e8343] transition-all"
                >
                  <span className="flex items-center gap-2 font-bold font-heading">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    WhatsApp Adv. Jigar Agarwal
                  </span>
                  <span className="font-mono text-xs">{contactInfo.advocates.jigar.phone}</span>
                </a>

                <a
                  href={`tel:${contactInfo.advocates.suman.phoneClean}`}
                  className="w-full flex items-center justify-between p-3 bg-[#F7F4EE] hover:bg-[#E9E1D3] border border-[#D8CEBE] text-xs font-semibold text-[#292929] transition-all"
                >
                  <span className="flex items-center gap-2 font-bold font-heading">
                    <Phone className="w-4 h-4 text-[#B89B5E]" />
                    Call Adv. Suman Agarwal
                  </span>
                  <span className="font-mono text-xs">{contactInfo.advocates.suman.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  )
}

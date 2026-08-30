import React from 'react'
import { ShieldAlert, Scale, AlertCircle, FileText, CheckCircle2, ArrowRight } from 'lucide-react'
import { contactInfo } from '../data/contactInfo'

export default function DisclaimerPage() {
  return (
    <div className="pt-24 pb-16 bg-[#F7F4EE]">
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-4xl mx-auto">
        {/* Badge & Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89B5E] text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading mb-4 shadow-sm">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Statutory Notice</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#292929] mb-4">
            Legal Disclaimer
          </h1>

          <div className="h-1 w-16 bg-[#B89B5E] mx-auto mb-4" />

          <p className="text-xs sm:text-sm text-[#6F6A61]">
            Statutory Notice in Compliance with Bar Council of India Regulations
          </p>
        </div>

        {/* Disclaimer Content Card */}
        <div className="bg-white border border-[#D8CEBE] border-t-4 border-t-[#B89B5E] p-8 sm:p-12 shadow-md space-y-8 text-sm sm:text-base text-[#6F6A61] leading-relaxed">
          {/* Bar Council Rule Header */}
          <div className="p-4 bg-[#F7F4EE] border border-[#B89B5E]/40 flex items-start gap-3.5 text-xs sm:text-sm text-[#292929]">
            <AlertCircle className="w-5 h-5 text-[#B89B5E] shrink-0 mt-0.5" />
            <p>
              As per the rules of the <strong>Bar Council of India</strong>, advocates are not permitted to solicit work or advertise in any manner. By accessing this website, you acknowledge and confirm that you are seeking information voluntarily of your own accord.
            </p>
          </div>

          {/* Section 1: Informational Purpose Only */}
          <div className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-[#292929] font-heading flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#B89B5E]" />
              1. Informational Nature of Website
            </h2>
            <p>
              The materials and information presented on this website are published solely for general informational, educational, and reference purposes. None of the content on this website constitutes formal legal opinion, statutory advice, or solicitation of professional engagement.
            </p>
          </div>

          {/* Section 2: No Advocate-Client Relationship */}
          <div className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-[#292929] font-heading flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#B89B5E]" />
              2. No Creation of Advocate-Client Relationship
            </h2>
            <p>
              Browsing this website, submitting an inquiry through our consultation form, sending an email, or contacting our advocates via telephone or WhatsApp does not automatically create an advocate-client relationship between you and <strong>Adv. Jigar K. Agarwal</strong> or <strong>Adv. Suman J. Agarwal</strong>. Such a relationship is only established upon formal mutual consultation and statutory engagement.
            </p>
          </div>

          {/* Section 3: Need for Specific Legal Advice */}
          <div className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-[#292929] font-heading flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B89B5E]" />
              3. Independent Case Assessment Required
            </h2>
            <p>
              Every legal dispute, contract, or property matter is subject to specific facts, documentation, limitation periods, and jurisdictional statutes. Readers and visitors must not act or refrain from acting based on any general overview found on this website without consulting a qualified legal practitioner.
            </p>
          </div>

          {/* Section 4: No Guarantee of Results */}
          <div className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-[#292929] font-heading flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#B89B5E]" />
              4. No Outcome Guarantees
            </h2>
            <p>
              Our chamber provides diligent legal consultation and advocacy. Under the law of India, judicial outcomes depend upon court merits, judicial discretion, evidence admissibility, and statutory interpretations. No statements on this website should be construed as an assurance or guarantee of a specific case result.
            </p>
          </div>

          {/* Bottom Chamber Details */}
          <div className="pt-6 border-t border-[#E5DEC9] text-xs text-[#6F6A61] space-y-1">
            <p className="font-semibold text-[#292929]">
              Adv. Jigar K. Agarwal & Adv. Suman J. Agarwal (Advocates & Legal Consultants)
            </p>
            <p>Office No. 2, Nani Bunglow, Chapel Lane, Station Road, Santacruz (West), Mumbai - 400 054.</p>
          </div>
        </div>

        {/* Back / Home Action */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#121A29] hover:bg-[#B89B5E] text-white text-xs font-bold font-heading uppercase tracking-widest transition-colors shadow"
          >
            Return to Home Page
          </a>
        </div>
      </section>
    </div>
  )
}

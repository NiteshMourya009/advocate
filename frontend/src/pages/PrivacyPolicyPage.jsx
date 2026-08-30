import React from 'react'
import { Lock, ShieldCheck, Mail, Phone, MapPin, Eye, ArrowRight } from 'lucide-react'
import { contactInfo } from '../data/contactInfo'

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16 bg-[#F7F4EE]">
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-4xl mx-auto">
        {/* Badge & Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89B5E] text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading mb-4 shadow-sm">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection & Privacy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#292929] mb-4">
            Privacy Policy
          </h1>

          <div className="h-1 w-16 bg-[#B89B5E] mx-auto mb-4" />

          <p className="text-xs sm:text-sm text-[#6F6A61]">
            Committed to strict client confidentiality and responsible data handling
          </p>
        </div>

        {/* Privacy Content Card */}
        <div className="bg-white border border-[#D8CEBE] border-t-4 border-t-[#B89B5E] p-8 sm:p-12 shadow-md space-y-8 text-sm sm:text-base text-[#6F6A61] leading-relaxed">
          {/* Section 1: Overview */}
          <div className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-[#292929] font-heading flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B89B5E]" />
              1. Commitment to Privacy & Privilege
            </h2>
            <p>
              At <strong>Agarwal Legal</strong> (operated by Adv. Jigar K. Agarwal & Adv. Suman J. Agarwal), we respect and protect the privacy of all visitors, prospective clients, and individuals who communicate with our chamber. In the legal profession, attorney-client confidentiality is fundamental.
            </p>
          </div>

          {/* Section 2: Information We Collect */}
          <div className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-[#292929] font-heading flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#B89B5E]" />
              2. Information Collected
            </h2>
            <p>
              We collect information that you choose to provide directly to us through our website consultation form, direct telephone calls, WhatsApp messages, or emails:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-[#6F6A61]">
              <li>Full Name and contact telephone / WhatsApp number</li>
              <li>Email address</li>
              <li>Subject and brief description of your legal inquiry</li>
              <li>Any documents or facts you voluntarily share for legal review</li>
            </ul>
          </div>

          {/* Section 3: Purpose of Information Use */}
          <div className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-[#292929] font-heading flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#B89B5E]" />
              3. Purpose of Processing
            </h2>
            <p>
              The information submitted is used exclusively for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-[#6F6A61]">
              <li>Evaluating and responding to your consultation request</li>
              <li>Scheduling meetings or telephonic discussions</li>
              <li>Preparing relevant legal guidance and matter assessments</li>
              <li>Maintaining professional correspondence</li>
            </ul>
            <p className="text-xs text-[#6F6A61] pt-1">
              * We do not sell, rent, or trade your contact information or case details with any commercial third-party marketing entities.
            </p>
          </div>

          {/* Section 4: Third-Party Integrations */}
          <div className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-[#292929] font-heading flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B89B5E]" />
              4. Third-Party Services
            </h2>
            <p>
              Our website includes direct links to <strong>WhatsApp</strong> and <strong>Google Maps</strong>. When you click these links, your interaction is governed by the respective privacy policies and terms of those external platforms.
            </p>
          </div>

          {/* Section 5: Data Security */}
          <div className="space-y-2.5">
            <h2 className="text-base sm:text-lg font-bold text-[#292929] font-heading flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#B89B5E]" />
              5. Data Security
            </h2>
            <p>
              We implement appropriate physical, electronic, and procedural safeguards to prevent unauthorized access, alteration, or disclosure of confidential client information.
            </p>
          </div>

          {/* Contact Details */}
          <div className="pt-6 border-t border-[#E5DEC9] text-xs text-[#6F6A61] space-y-1">
            <p className="font-semibold text-[#292929]">
              Privacy Inquiries & Chamber Address:
            </p>
            <p>Adv. Jigar K. Agarwal & Adv. Suman J. Agarwal</p>
            <p>Office No. 2, Nani Bunglow, Chapel Lane, Station Road, Santacruz (West), Mumbai - 400 054.</p>
            <p>Email: <a href={`mailto:${contactInfo.advocates.jigar.email}`} className="text-[#B89B5E] hover:underline">{contactInfo.advocates.jigar.email}</a></p>
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

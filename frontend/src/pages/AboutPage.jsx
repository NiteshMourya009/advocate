import React from 'react'
import { Link } from 'react-router-dom'
import { contactInfo } from '../data/contactInfo'
import { Scale, ShieldCheck, Lock, BookOpen, Handshake, ArrowRight } from 'lucide-react'
import ConsultationCTA from '../sections/ConsultationCTA'

export default function AboutPage() {
  const principles = [
    {
      icon: Scale,
      title: "Constitutional & Statutory Integrity",
      desc: "Our legal opinions and procedural filings strictly adhere to statutory provisions, established judicial precedents, and ethical legal practice."
    },
    {
      icon: Lock,
      title: "Complete Client Confidentiality",
      desc: "Trust is our cornerstone. We protect all documents, communications, and strategic discussions under professional legal privilege."
    },
    {
      icon: Handshake,
      title: "Pragmatic Dispute Strategy",
      desc: "We explore early resolution, mediation, and pre-litigation settlement strategies whenever feasible to prevent drawn-out court trials."
    },
    {
      icon: BookOpen,
      title: "Meticulous Case Preparation",
      desc: "Comprehensive fact analysis, rigorous evidence structuring, and precise drafting for civil, criminal, consumer, and corporate matters."
    }
  ]

  return (
    <div className="pt-24 pb-0 bg-[#F7F4EE] page-enter animate-fadein-up">
      {/* Editorial Profile Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89B5E] text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading mb-6 shadow-sm">
          <Scale className="w-3.5 h-3.5" />
          <span>Our Foundation</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#292929] mb-6">
          Chamber &amp; Practice Overview
        </h1>

        <div className="h-1 w-16 bg-[#B89B5E] mx-auto mb-6" />

        <p className="text-base sm:text-lg text-[#6F6A61] max-w-3xl mx-auto leading-relaxed">
          Agarwal Legal is a Mumbai-based legal consultancy operated by Adv. Jigar K. Agarwal and Adv. Suman J. Agarwal, committed to providing client-centered, ethical advocacy and legal consultation.
        </p>
      </section>

      {/* Profile Details */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Office/Advocate Image Visual */}
          <div className="lg:col-span-5 relative">
            <div className="absolute top-4 left-4 w-full h-full border border-[#B89B5E] -z-10" />
            <img
              src="/hero-1.jpg"
              alt="Advocate Jigar K. Agarwal & Adv. Suman J. Agarwal Legal Chambers"
              className="w-full aspect-[4/3] object-cover shadow border border-[#D8CEBE]"
            />
          </div>

          {/* Right: Practice Overview */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#6F6A61] leading-relaxed">
            <h2 className="text-2xl font-bold font-heading text-[#292929]">
              Professional Advocacy with Personal Attention
            </h2>

            <p>
              Under the joint leadership of <strong className="text-[#292929]">Adv. Jigar K. Agarwal</strong> (M.Com., LL.B.) and <strong className="text-[#292929]">Adv. Suman J. Agarwal</strong> (B.L.S., LL.B.), our chamber provides comprehensive legal services spanning advisory, statutory documentation, dispute negotiation, and litigation representation.
            </p>

            <p>
              We recognize that each client's circumstances require distinct legal discernment. Rather than applying generic advice, we examine every transaction, contract, or dispute with exhaustive scrutiny to formulate clear, legally robust pathways.
            </p>

            <p>
              From our chamber in Santacruz West, we serve individual clients, families, business owners, and commercial entities across the Mumbai metropolitan area and surrounding jurisdictions.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/advocates"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold font-heading uppercase tracking-widest text-white bg-[#121A29] hover:bg-[#B89B5E] transition-colors shadow"
              >
                View Advocate Profiles
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold font-heading uppercase tracking-widest text-[#292929] bg-white border border-[#D8CEBE] hover:border-[#B89B5E] transition-colors shadow-sm"
              >
                Chamber Office &amp; Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-6xl mx-auto border-t border-[#E5DEC9]">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#B89B5E]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading">
              Our Core Foundations
            </span>
            <div className="w-8 h-px bg-[#B89B5E]" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#292929]">
            Practicing with Purpose &amp; Precision
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-[#D8CEBE] hover:shadow-md transition-all"
                style={{ borderTop: '3px solid #B89B5E' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#F7F4EE] border border-[#D8CEBE] flex items-center justify-center text-[#B89B5E] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#292929] font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6A61] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <ConsultationCTA />
    </div>
  )
}

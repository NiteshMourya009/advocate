import React from 'react'
import { Link } from 'react-router-dom'
import { Lock, Scale, FileCheck, ArrowRight } from 'lucide-react'
import { contactInfo } from '../data/contactInfo'

export default function AboutSection() {
  const pillars = [
    {
      icon: Lock,
      title: "Confidentiality & Ethics",
      desc: "All client communications and case documentation are preserved with strict professional privilege."
    },
    {
      icon: Scale,
      title: "Objective Legal Guidance",
      desc: "Pragmatic, statutory-based counsel aimed at delivering clear legal understanding without unnecessary litigation."
    },
    {
      icon: FileCheck,
      title: "Meticulous Due Diligence",
      desc: "Thorough statutory analysis, rigorous document vetting, and well-drafted legal instruments."
    }
  ]

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F5EE] relative">
      {/* Phoenix Legal style: decorative left strip */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C5A059]" />

      <div className="max-w-7xl mx-auto">
        {/* Phoenix Legal two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Right: Emblem Card + Location */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            {/* Emblem Card */}
            <div
              className="text-center p-8"
              style={{
                background: 'white',
                border: '1px solid #D5CAB8',
                borderTop: '3px solid #C5A059',
                boxShadow: '0 4px 24px rgba(15,32,68,0.08)'
              }}
            >
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C5A059] opacity-50" />
              <img
                src="/logo.png"
                alt="Official Emblem"
                className="w-28 h-28 mx-auto object-contain mb-5"
              />
              <div className="h-px w-12 bg-[#C5A059] mx-auto mb-4" />
              <blockquote className="text-sm font-serif-body text-[#3A4155] italic leading-relaxed">
                "{contactInfo.quote}"
              </blockquote>
              <p className="mt-3 text-[10px] font-bold tracking-widest uppercase text-[#C5A059] font-heading">
                Agarwal Legal Ethos
              </p>
            </div>

            {/* Chamber Location */}
            <div
              className="p-5"
              style={{
                background: '#0F2044',
                border: '1px solid rgba(197,160,89,0.3)',
              }}
            >
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#C5A059] font-heading mb-2">
                Chamber Office
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                Office No. 2, Nani Bunglow,<br />
                Chapel Lane, Station Road,<br />
                Santacruz (West), Mumbai – 400 054.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-[#C5A059] hover:text-white transition-colors"
              >
                View Map & Directions <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Left: Content */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            {/* Phoenix Legal heading style */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="section-rule" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#C5A059] font-heading">
                  About the Practice
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2044] leading-tight mb-4">
                Legal Counsel Built on<br />Trust and Integrity
              </h2>
              <div className="h-1 w-16 bg-[#C5A059] mb-6" />
            </div>

            <div className="space-y-4 text-[15px] text-[#3A4155] leading-[1.8]">
              <p>
                Under the joint stewardship of <strong className="text-[#0F2044] font-semibold">Adv. Jigar K. Agarwal</strong> (M.Com., LL.B.) and <strong className="text-[#0F2044] font-semibold">Adv. Suman J. Agarwal</strong> (B.L.S., LL.B.), our chamber is established in Santacruz (West), Mumbai, providing dedicated legal consultation, statutory advisory, and advocacy representation across civil, criminal, property, and commercial matters.
              </p>
              <p>
                We recognize that navigating legal proceedings, contractual commitments, and property disputes can be demanding. Our approach emphasizes straightforward advice, disciplined procedural compliance, and strategic foresight to safeguard your legal rights.
              </p>
            </div>

            {/* Core Values Pillars — Phoenix Legal card style */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {pillars.map((p, idx) => {
                const Icon = p.icon
                return (
                  <div
                    key={idx}
                    className="law-card p-5"
                  >
                    <div className="icon-circle mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-[#0F2044] mb-1.5">{p.title}</h4>
                    <p className="text-[12px] text-[#7A8099] leading-relaxed">{p.desc}</p>
                  </div>
                )
              })}
            </div>

            {/* Action CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/advocates"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold font-heading uppercase tracking-wide text-white bg-[#0F2044] hover:bg-[#C5A059] transition-colors"
              >
                Meet the Advocates <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/practice-areas"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold font-heading uppercase tracking-wide text-[#0F2044] border-2 border-[#0F2044] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
              >
                Explore Practice Areas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

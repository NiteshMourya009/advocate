import React from 'react'
import PracticeAreasSection from '../sections/PracticeAreasSection'
import ConsultationCTA from '../sections/ConsultationCTA'
import { Scale } from 'lucide-react'

export default function PracticeAreasPage() {
  return (
    <div className="pt-24 pb-0 bg-[#F7F4EE]">
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89B5E] text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading mb-6 shadow-sm">
          <Scale className="w-3.5 h-3.5" />
          <span>Legal Services Overview</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold font-heading text-[#292929] mb-6">
          Our Practice Areas
        </h1>

        <div className="h-1 w-16 bg-[#B89B5E] mx-auto mb-6" />

        <p className="text-base sm:text-lg text-[#6F6A61] max-w-3xl mx-auto leading-relaxed">
          Explore the legal categories and advisory services handled by our chamber in Mumbai. Click on any practice area card to view details on the included scope and legal procedures.
        </p>
      </section>

      {/* Main Practice Section with Search */}
      <div className="-mt-8">
        <PracticeAreasSection showAll={true} enableFilter={true} />
      </div>

      <ConsultationCTA />
    </div>
  )
}

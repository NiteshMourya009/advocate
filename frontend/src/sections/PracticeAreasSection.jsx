import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { practiceAreasData } from '../data/practiceAreas'
import PracticeAreaCard from '../components/cards/PracticeAreaCard'
import { ArrowRight, Search } from 'lucide-react'

export default function PracticeAreasSection({ showAll = false, enableFilter = true }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPractices = practiceAreasData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const displayedPractices = showAll ? (enableFilter ? filteredPractices : practiceAreasData) : practiceAreasData.slice(0, 6)

  return (
    <section id="practice-areas" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C5A059]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading — Phoenix Legal style */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C5A059]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#C5A059] font-heading">
              Our Practice Areas
            </span>
            <div className="w-8 h-px bg-[#C5A059]" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2044] mb-4">
            PRACTICE FOCUS &amp; ADVISORY
          </h2>
          <div className="h-1 w-14 bg-[#C5A059] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#3A4155] max-w-2xl mx-auto leading-relaxed">
            Professional legal advocacy and comprehensive advisory across key Indian jurisdictions.
          </p>
        </div>

        {/* Search bar inside practice areas page (enableFilter is true only on dedicated page) */}
        {enableFilter && (
          <div className="max-w-md mx-auto mb-10 relative">
            <Search className="w-4 h-4 text-[#7A8099] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search legal practice area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-3 bg-[#F8F5EE] border border-[#D5CAB8] focus:border-[#C5A059] focus:outline-none text-sm text-[#0F2044] transition-colors"
            />
          </div>
        )}

        {/* Practice Areas Grid — Phoenix Legal style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {displayedPractices.map((practice) => (
            <PracticeAreaCard key={practice.id} practice={practice} />
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold font-heading uppercase tracking-wide text-[#0F2044] border-2 border-[#0F2044] hover:bg-[#0F2044] hover:text-white transition-colors"
            >
              View All Practice Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { ArrowRight, BookOpen, Clock, Calendar, User, CheckCircle2 } from 'lucide-react'
import { insightsData } from '../data/insights'
import Modal from '../components/common/Modal'

export default function InsightsSection() {
  const [selectedInsight, setSelectedInsight] = useState(null)

  return (
    <section id="insights" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] relative">
      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#B89B5E]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#B89B5E]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading">
              Legal Knowledge & Updates
            </span>
            <div className="w-8 h-px bg-[#B89B5E]" />
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#292929] mb-4">
            LEGAL INSIGHTS & ADVISORY
          </h2>
          <div className="h-1 w-14 bg-[#B89B5E] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#6F6A61] max-w-2xl mx-auto leading-relaxed">
            Practical legal commentary and statutory explanations to keep clients informed about property regulations, dispute resolution, and contractual protections.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insightsData.map((item) => (
            <div
              key={item.id}
              className="law-card group p-6 sm:p-7 flex flex-col justify-between cursor-pointer bg-white"
              onClick={() => setSelectedInsight(item)}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[11px] text-[#6F6A61] mb-3 pb-3 border-b border-[#E5DEC9]">
                  <span className="font-bold text-[#B89B5E] font-heading uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#B89B5E]" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#292929] group-hover:text-[#B89B5E] transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#6F6A61] leading-relaxed mb-6">
                  {item.excerpt}
                </p>
              </div>

              {/* Footer row */}
              <div className="pt-4 border-t border-[#E5DEC9] flex items-center justify-between">
                <span className="text-[11px] text-[#6F6A61] flex items-center gap-1 font-medium">
                  <User className="w-3 h-3 text-[#B89B5E]" />
                  {item.author}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B89B5E] group-hover:text-[#292929] transition-colors font-heading uppercase tracking-wider">
                  Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedInsight && (
        <Modal
          isOpen={!!selectedInsight}
          onClose={() => setSelectedInsight(null)}
          title={selectedInsight.title}
        >
          <div className="space-y-5 text-sm text-[#292929] leading-relaxed">
            <div className="flex items-center gap-4 text-xs text-[#6F6A61] pb-3 border-b border-[#D8CEBE]">
              <span className="font-bold text-[#B89B5E] uppercase tracking-wider">{selectedInsight.category}</span>
              <span>•</span>
              <span>Published: {selectedInsight.date}</span>
              <span>•</span>
              <span>{selectedInsight.author}</span>
            </div>

            <div className="p-4 bg-[#F7F4EE] border-l-4 border-[#B89B5E] text-xs sm:text-sm text-[#6F6A61] italic">
              "{selectedInsight.excerpt}"
            </div>

            <div className="space-y-3">
              <h4 className="font-heading font-bold text-sm text-[#292929] uppercase tracking-wider">
                Key Legal Takeaways:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#6F6A61]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                  <span>Statutory compliance and timely notice issuance preserve substantive legal rights.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                  <span>Documentary evidence, registered instruments, and clear covenants prevent costly litigation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                  <span>Consulting legal counsel prior to signing agreements mitigates subsequent exposure.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#D8CEBE] flex justify-end">
              <a
                href="/contact"
                onClick={() => setSelectedInsight(null)}
                className="px-6 py-2.5 bg-[#121A29] text-white hover:bg-[#B89B5E] text-xs font-bold font-heading uppercase tracking-widest transition-colors"
              >
                Discuss this Matter with Our Advocates
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}

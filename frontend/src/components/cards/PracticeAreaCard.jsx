import React, { useState } from 'react'
import {
  Scale, ShieldAlert, Building2, Users, ShoppingBag, FileCheck,
  FileText, Briefcase, Handshake, Compass, ArrowRight, CheckCircle2, MessageCircle
} from 'lucide-react'
import Modal from '../common/Modal'
import Button from '../common/Button'
import { contactInfo } from '../../data/contactInfo'

const iconMap = {
  Scale, ShieldAlert, Building2, Users, ShoppingBag,
  FileCheck, FileText, Briefcase, Handshake, Compass,
}

export default function PracticeAreaCard({ practice }) {
  const [modalOpen, setModalOpen] = useState(false)
  const IconComponent = iconMap[practice.iconName] || Scale

  return (
    <>
      {/* Phoenix Legal card: icon circle + title + desc + READ MORE link */}
      <div className="group law-card p-6 sm:p-7 flex flex-col justify-between">
        <div>
          {/* Icon + Title row (Phoenix Legal icon-circle style) */}
          <div className="flex items-start gap-4 mb-4">
            <div className="icon-circle group-hover:scale-105 transition-transform shrink-0">
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0F2044] font-heading group-hover:text-[#C5A059] transition-colors leading-tight">
                {practice.title}
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#7A8099] leading-relaxed mb-4">
            {practice.shortDesc}
          </p>
        </div>

        {/* Phoenix Legal-style READ MORE link */}
        <div className="pt-4 border-t border-[#EEEBE3]">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-[#C5A059] hover:text-[#0F2044] transition-colors font-heading uppercase focus:outline-none"
          >
            READ MORE <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Scope Details Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={practice.title}>
        <div className="space-y-6">
          <div className="flex items-center gap-3 p-4 bg-[#F8F5EE] border border-[#D5CAB8] border-t-4 border-t-[#C5A059]">
            <IconComponent className="w-7 h-7 text-[#C5A059] shrink-0" />
            <p className="text-sm text-[#3A4155]">{practice.shortDesc}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] font-heading mb-3">
              Included Legal Services & Matters
            </h4>
            <ul className="space-y-2.5">
              {practice.scope.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-[#3A4155]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-[#EEEBE3] border border-[#D5CAB8] text-xs text-[#7A8099]">
            <p>* General legal scope outline. Specific strategies and procedures depend on individual case facts and statutory jurisdictions.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href="/contact"
              onClick={() => setModalOpen(false)}
              className="flex-1 w-full text-center px-5 py-3 text-sm font-bold font-heading uppercase tracking-wide text-white bg-[#0F2044] hover:bg-[#C5A059] transition-colors"
            >
              Consult for this Matter
            </a>
            <a
              href={contactInfo.advocates.jigar.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 w-full text-center flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold font-heading uppercase tracking-wide text-white bg-[#25D366] hover:bg-[#22c55e] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </Modal>
    </>
  )
}

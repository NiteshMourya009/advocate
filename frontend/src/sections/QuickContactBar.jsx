import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Clock, Calendar, ArrowRight, ShieldAlert, FileText } from 'lucide-react'
import { contactInfo } from '../data/contactInfo'

export default function QuickContactBar() {
  return (
    <section className="bg-[#121A29] text-white border-y-2 border-[#B89B5E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#B89B5E]/30">
          {/* Column 1: Emergency Cases / Urgent Advisory */}
          <div className="py-6 sm:py-8 px-4 sm:px-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-4 h-4 text-[#B89B5E]" />
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  Urgent Legal Matters?
                </h3>
              </div>
              <p className="text-xs text-white/70 mb-4">
                Immediate consultation for bail, injunctions, or pressing legal deadlines.
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B89B5E] font-heading block mb-1">
                Direct Advocate Line:
              </span>
              <a
                href={`tel:${contactInfo.advocates.jigar.phoneClean}`}
                className="text-base sm:text-lg font-bold text-white hover:text-[#B89B5E] transition-colors flex items-center gap-2 font-heading"
              >
                <Phone className="w-4 h-4 text-[#B89B5E]" />
                {contactInfo.advocates.jigar.phone}
              </a>
            </div>
          </div>

          {/* Column 2: Need Legal Help / Fix Appointment */}
          <div className="py-6 sm:py-8 px-4 sm:px-6 flex flex-col justify-between bg-[#182235]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-[#B89B5E]" />
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  Need Legal Guidance?
                </h3>
              </div>
              <p className="text-xs text-white/70 mb-4">
                Schedule an appointment for strategic advice on any civil, property, or corporate matter.
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-between gap-3 w-full sm:w-auto px-5 py-2.5 bg-white text-[#121A29] hover:bg-[#B89B5E] hover:text-white transition-colors text-xs font-bold font-heading uppercase tracking-wider rounded-sm shadow"
              >
                <span>Fix an Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 3: Working Hours & Chamber Timing */}
          <div className="py-6 sm:py-8 px-4 sm:px-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#B89B5E]" />
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  Chamber Hours
                </h3>
              </div>
              <div className="space-y-2 text-xs text-white/80">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-white/60">Monday – Saturday</span>
                  <span className="font-semibold text-white">10:00 AM – 08:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Sunday</span>
                  <span className="font-semibold text-[#B89B5E]">By Prior Appointment</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-white/50 mt-3">
              Office No. 2, Nani Bunglow, Chapel Lane, Santacruz (W), Mumbai
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

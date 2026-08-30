import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, ShieldAlert, CheckCircle2 } from 'lucide-react'

const DISCLAIMER_KEY = 'agarwal_legal_disclaimer_accepted'

export default function DisclaimerGate({ children }) {
  const [accepted, setAccepted] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const val = sessionStorage.getItem(DISCLAIMER_KEY)
    setAccepted(val === 'yes')
    setLoading(false)
  }, [])

  const handleAccept = () => {
    sessionStorage.setItem(DISCLAIMER_KEY, 'yes')
    setAccepted(true)
  }

  if (loading) return null

  return (
    <>
      {children}
      <AnimatePresence>
        {!accepted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: 'rgba(18, 26, 41, 0.92)', backdropFilter: 'blur(6px)' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#F7F4EE] overflow-hidden"
              style={{
                border: '1px solid #D5CAB8',
                borderTop: '4px solid #B89B5E',
                boxShadow: '0 32px 80px rgba(0,0,0,0.5)'
              }}
            >
              {/* Header */}
              <div className="bg-[#121A29] px-6 sm:px-8 py-5 relative overflow-hidden">
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#B89B5E]/50" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#B89B5E]/50" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1A3060] border border-[#B89B5E]/50 flex items-center justify-center shrink-0">
                    <img src="/logo.png" alt="Agarwal Legal" className="w-9 h-9 object-contain" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-[#B89B5E] font-heading mb-0.5">
                      Agarwal Legal — Advocates &amp; Legal Consultants
                    </div>
                    <h2 className="text-base sm:text-xl font-bold text-white font-heading leading-snug">
                      Important Legal Disclaimer
                    </h2>
                  </div>
                </div>
              </div>

              {/* Bar Council Notice */}
              <div className="flex items-start gap-3 px-6 sm:px-8 py-4 bg-[#FFF8EE] border-b border-[#D5CAB8]">
                <ShieldAlert className="w-5 h-5 text-[#B89B5E] shrink-0 mt-0.5" />
                <p className="text-xs text-[#5A4A30] leading-relaxed">
                  <strong>Statutory Notice:</strong> As per the rules of the <strong>Bar Council of India</strong>, advocates are not permitted to solicit work or advertise. By proceeding, you acknowledge accessing this website voluntarily for informational purposes of your own accord.
                </p>
              </div>

              {/* Disclaimer Points */}
              <div className="px-6 sm:px-8 py-5 space-y-3 max-h-[38vh] overflow-y-auto">
                <p className="text-sm text-[#3A4155] leading-relaxed font-medium">
                  By clicking <strong>"I Agree &amp; Proceed"</strong>, you confirm the following:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "No attorney-client relationship is created by accessing this website or submitting an inquiry.",
                    "There has been no advertisement, solicitation, or inducement from Adv. Jigar K. Agarwal, Adv. Suman J. Agarwal, or any member of Agarwal Legal to create an advocate-client relationship.",
                    "This website is for educational and informational purposes only. You wish to gain information for your own use.",
                    "Any transmission, receipt, or use of this website does not create any advocate-client relationship.",
                    "Information on this website does not constitute formal legal advice and must not be acted upon without consulting a qualified legal practitioner.",
                    "No outcome or result in any legal matter is guaranteed by any content on this website."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#3A4155]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B5E] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-[11px] text-[#7A8099] pt-2 border-t border-[#E0D8CC]">
                  <strong>Ownership:</strong> This website is owned and operated by Adv. Jigar K. Agarwal &amp; Adv. Suman J. Agarwal, Office No. 2, Nani Bunglow, Chapel Lane, Station Road, Santacruz (West), Mumbai — 400 054.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 sm:px-8 py-4 bg-white border-t border-[#D5CAB8] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-[#7A8099] flex items-center gap-1">
                  <Scale className="w-3 h-3 text-[#B89B5E]" />
                  <em>Regulated by the Bar Council of India.</em>
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://www.google.com"
                    className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold font-heading uppercase tracking-wide text-[#6F6A61] border border-[#D5CAB8] hover:border-[#B89B5E] hover:text-[#292929] transition-colors text-center"
                  >
                    Decline &amp; Exit
                  </a>
                  <button
                    onClick={handleAccept}
                    className="flex-1 sm:flex-none px-6 py-2.5 text-xs font-bold font-heading uppercase tracking-widest text-white bg-[#B89B5E] hover:bg-[#8F743E] transition-colors shadow-md whitespace-nowrap"
                  >
                    I Agree &amp; Proceed
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

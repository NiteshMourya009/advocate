import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, User, ExternalLink } from 'lucide-react'
import { contactInfo } from '../../data/contactInfo'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef(null)

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div ref={popupRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* WhatsApp Advocates Selection Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-white border border-[#D8CEBE] border-t-4 border-t-[#25D366] rounded shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#121A29] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-full bg-[#25D366]">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-wider uppercase font-heading">Direct WhatsApp</h4>
                  <p className="text-[11px] text-white/70">Connect directly with our Advocates</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close WhatsApp options"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body: Direct Advocate Options */}
            <div className="p-3.5 space-y-2.5 bg-[#F7F4EE]">
              {/* Jigar Agarwal */}
              <a
                href={contactInfo.advocates.jigar.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white hover:bg-[#E9E1D3] border border-[#D8CEBE] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7F4EE] border border-[#B89B5E] flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-[#B89B5E]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-[#292929] group-hover:text-[#B89B5E] font-heading">
                      {contactInfo.advocates.jigar.name}
                    </div>
                    <div className="text-[11px] text-[#1e8343] font-semibold flex items-center gap-1">
                      <span>{contactInfo.advocates.jigar.phone}</span>
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#6F6A61] group-hover:text-[#25D366] transition-colors" />
              </a>

              {/* Suman Agarwal */}
              <a
                href={contactInfo.advocates.suman.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white hover:bg-[#E9E1D3] border border-[#D8CEBE] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7F4EE] border border-[#B89B5E] flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-[#B89B5E]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-[#292929] group-hover:text-[#B89B5E] font-heading">
                      {contactInfo.advocates.suman.name}
                    </div>
                    <div className="text-[11px] text-[#1e8343] font-semibold flex items-center gap-1">
                      <span>{contactInfo.advocates.suman.phone}</span>
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#6F6A61] group-hover:text-[#25D366] transition-colors" />
              </a>

              <p className="text-[10px] text-[#6F6A61] text-center pt-1">
                Typical response time: During chamber hours
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Open WhatsApp Chat"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <MessageCircle className="w-4 h-4 text-white" />
        <span className="text-xs font-bold uppercase tracking-wider font-heading hidden sm:inline">WhatsApp</span>
      </button>
    </div>
  )
}

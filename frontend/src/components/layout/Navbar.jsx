import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { contactInfo } from '../../data/contactInfo'
import { cn } from '../../lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Our Advocates', path: '/advocates' },
    { name: 'Why Choose Us', path: '/#why-choose-us' },
    { name: 'Insights', path: '/#insights' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleNavClick = (e, path) => {
    if (path.includes('#')) {
      e.preventDefault()
      const targetId = path.split('#')[1]
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.getElementById(targetId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      } else {
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* === TOP INFORMATION BAR (Advocate Shah & Phoenix Legal Style) === */}
      <div className="top-bar hidden md:block sticky-top z-50 w-full bg-[#121A29] text-white/85 border-b border-[#B89B5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-[11px] tracking-wider uppercase font-medium">
            <p className="text-white/80">
              Advocates & Legal Consultants • Santacruz (West), Mumbai
            </p>
            <div className="flex items-center gap-6">
              <a
                href={`tel:${contactInfo.advocates.jigar.phoneClean}`}
                className="flex items-center gap-1.5 text-[#D4BD8A] hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-[#B89B5E]" />
                Adv. Jigar: {contactInfo.advocates.jigar.phone}
              </a>
              <span className="text-white/25">|</span>
              <a
                href={`tel:${contactInfo.advocates.suman.phoneClean}`}
                className="flex items-center gap-1.5 text-[#D4BD8A] hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-[#B89B5E]" />
                Adv. Suman: {contactInfo.advocates.suman.phone}
              </a>
              <span className="text-white/25">|</span>
              <a
                href={contactInfo.advocates.jigar.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === MAIN NAVBAR === */}
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          scrolled
            ? 'bg-[#F7F4EE]/95 backdrop-blur-md border-b border-[#D8CEBE] shadow-md shadow-black/5'
            : 'bg-[#F7F4EE] border-b border-[#E5DEC9]'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-3.5 group focus:outline-none"
            >
              <div className="bg-white rounded-md p-1 shadow-sm border border-[#D8CEBE] group-hover:border-[#B89B5E] transition-colors">
                <img
                  src="/logo.png"
                  alt="Official Legal Emblem"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg sm:text-xl text-[#292929] group-hover:text-[#B89B5E] transition-colors tracking-wider leading-tight">
                  AGARWAL LEGAL
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#6F6A61] font-semibold tracking-widest uppercase">
                  Advocates & Legal Consultants
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
              {navLinks.filter(link => link.name !== 'Contact').map((link) => {
                const isAnchor = link.path.includes('#')
                const isActive = !isAnchor && location.pathname === link.path

                return isAnchor ? (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="px-3 py-2 text-xs font-bold transition-all duration-200 text-[#292929] hover:text-[#B89B5E] font-heading tracking-widest uppercase whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'px-3 py-2 text-xs font-bold transition-all duration-200 font-heading tracking-widest uppercase border-b-2 whitespace-nowrap',
                      isActive
                        ? 'text-[#B89B5E] border-[#B89B5E]'
                        : 'text-[#292929] hover:text-[#B89B5E] border-transparent hover:border-[#B89B5E]'
                    )}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>

            {/* Right Consultation Button */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-5 py-2.5 text-xs font-bold font-heading uppercase tracking-widest text-white bg-[#121A29] hover:bg-[#B89B5E] transition-colors rounded-sm shadow-sm whitespace-nowrap"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={contactInfo.advocates.jigar.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#25D366]/10 text-[#25D366]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded border border-[#D8CEBE] text-[#292929] hover:text-[#B89B5E] hover:border-[#B89B5E] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F7F4EE] border-t border-[#D8CEBE] px-4 py-5 space-y-4 shadow-xl">
            <div className="flex flex-col divide-y divide-[#E9E1D3]">
              {navLinks.map((link) => {
                const isAnchor = link.path.includes('#')
                const isActive = !isAnchor && location.pathname === link.path

                return isAnchor ? (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="py-3 text-xs font-bold font-heading tracking-widest uppercase text-[#292929] hover:text-[#B89B5E]"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'py-3 text-xs font-bold font-heading tracking-widest uppercase transition-colors',
                      isActive ? 'text-[#B89B5E]' : 'text-[#292929] hover:text-[#B89B5E]'
                    )}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>

            <div className="pt-3 flex flex-col gap-2.5 border-t border-[#D8CEBE]">
              <Link
                to="/contact"
                className="w-full text-center py-3 text-xs font-bold font-heading uppercase tracking-widest text-white bg-[#121A29] hover:bg-[#B89B5E] transition-colors"
              >
                Schedule Consultation
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={contactInfo.advocates.jigar.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-white bg-[#25D366] rounded"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Jigar
                </a>
                <a
                  href={contactInfo.advocates.suman.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-white bg-[#25D366] rounded"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Suman
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

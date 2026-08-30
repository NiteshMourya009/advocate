import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Scale, ShieldCheck, ArrowRight } from 'lucide-react'
import { contactInfo } from '../../data/contactInfo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#121A29] border-t-2 border-[#B89B5E] text-white/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Official Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded border border-[#B89B5E]">
                <img
                  src="/logo.png"
                  alt="Agarwal Legal Official Emblem"
                  className="w-11 h-11 object-contain shrink-0"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-white tracking-wider">
                  AGARWAL LEGAL
                </h3>
                <p className="text-[10px] text-[#D4BD8A] font-semibold tracking-widest uppercase">
                  Advocates & Legal Consultants
                </p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed">
              Professional legal consultation and strategic advocacy in Mumbai, committed to integrity, statutory compliance, and confidentiality.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 p-2.5 bg-white/5 border border-white/10 text-xs text-white/80">
                <Scale className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <span className="italic font-serif text-[11px]">"{contactInfo.quote}"</span>
              </div>
            </div>
          </div>

          {/* Column 2: The Advocates */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-[#B89B5E] uppercase font-heading">
              Our Advocates
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-white/5 border border-white/10">
                <div className="font-bold text-white font-heading">
                  {contactInfo.advocates.jigar.name}
                </div>
                <div className="text-white/60 text-[11px]">
                  {contactInfo.advocates.jigar.qualification} • {contactInfo.advocates.jigar.designation}
                </div>
                <div className="mt-2">
                  <a
                    href={`tel:${contactInfo.advocates.jigar.phoneClean}`}
                    className="text-[#D4BD8A] hover:text-white flex items-center gap-1.5 font-medium"
                  >
                    <Phone className="w-3 h-3 text-[#B89B5E]" />
                    {contactInfo.advocates.jigar.phone}
                  </a>
                </div>
              </div>

              <div className="p-3 bg-white/5 border border-white/10">
                <div className="font-bold text-white font-heading">
                  {contactInfo.advocates.suman.name}
                </div>
                <div className="text-white/60 text-[11px]">
                  {contactInfo.advocates.suman.designation}
                </div>
                <div className="mt-2">
                  <a
                    href={`tel:${contactInfo.advocates.suman.phoneClean}`}
                    className="text-[#D4BD8A] hover:text-white flex items-center gap-1.5 font-medium"
                  >
                    <Phone className="w-3 h-3 text-[#B89B5E]" />
                    {contactInfo.advocates.suman.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-[#B89B5E] uppercase font-heading">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-white/70 hover:text-[#B89B5E] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#B89B5E]" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-[#B89B5E] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#B89B5E]" />
                  About the Firm
                </Link>
              </li>
              <li>
                <Link to="/advocates" className="text-white/70 hover:text-[#B89B5E] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#B89B5E]" />
                  Our Advocates
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-white/70 hover:text-[#B89B5E] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#B89B5E]" />
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-[#B89B5E] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#B89B5E]" />
                  Chamber & Contact
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-white/70 hover:text-[#B89B5E] transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#B89B5E]" />
                  Legal Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Office Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-[#B89B5E] uppercase font-heading">
              Chamber Office
            </h4>
            
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{contactInfo.office.name}</p>
                  <p>{contactInfo.office.street}</p>
                  <p>{contactInfo.office.area}, {contactInfo.office.city} - {contactInfo.office.pincode}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B89B5E] shrink-0" />
                <a href={`mailto:${contactInfo.advocates.jigar.email}`} className="hover:text-[#B89B5E] transition-colors">
                  {contactInfo.advocates.jigar.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={contactInfo.office.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-[#B89B5E] hover:text-white text-xs text-[#D4BD8A] font-semibold transition-colors"
                >
                  <span>Google Maps Directions</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Council of India Notice */}
        <div className="py-6 border-b border-white/10 text-[11px] text-white/60 leading-relaxed">
          <p className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B89B5E] shrink-0 mt-0.5" />
            <span>
              <strong>Statutory Compliance (Bar Council of India):</strong> As per the rules of the Bar Council of India, Indian advocates are prohibited from soliciting clients or advertising. The contents of this website are strictly for informational purposes and intended solely to facilitate communication for those voluntarily seeking legal guidance. No content herein constitutes formal legal advice or creates an advocate-client relationship.
            </span>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {currentYear} Adv. Jigar K. Agarwal & Adv. Suman J. Agarwal. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/disclaimer" className="hover:text-[#B89B5E] transition-colors">
              Legal Disclaimer
            </Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-[#B89B5E] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#B89B5E] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

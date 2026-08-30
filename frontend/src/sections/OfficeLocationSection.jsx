import React from 'react'
import { MapPin, Navigation, Phone, Train } from 'lucide-react'
import { contactInfo } from '../data/contactInfo'

export default function OfficeLocationSection() {
  return (
    <section id="office-location" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F4EE] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#B89B5E]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#B89B5E] font-heading">
              Visit Our Chamber
            </span>
            <div className="w-8 h-px bg-[#B89B5E]" />
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#292929] mb-4">
            CHAMBER LOCATION & ACCESSIBILITY
          </h2>
          <div className="h-1 w-14 bg-[#B89B5E] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#6F6A61] max-w-2xl mx-auto leading-relaxed">
            Conveniently situated on Chapel Lane, Station Road in Santacruz (West), Mumbai. Accessible via Western Railway and SV Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Address Details Card */}
          <div className="lg:col-span-5 bg-white border border-[#D8CEBE] border-t-4 border-t-[#B89B5E] p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F7F4EE] border border-[#D8CEBE] flex items-center justify-center text-[#B89B5E] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#B89B5E] uppercase tracking-widest font-heading mb-1">
                    Official Chamber Address
                  </div>
                  <h3 className="text-lg font-bold text-[#292929] font-heading">
                    {contactInfo.office.name}
                  </h3>
                  <p className="text-sm text-[#6F6A61] mt-1">
                    {contactInfo.office.street}
                  </p>
                  <p className="text-sm text-[#6F6A61]">
                    {contactInfo.office.area}, {contactInfo.office.city} - {contactInfo.office.pincode}
                  </p>
                </div>
              </div>

              {/* Transit & Landmark note */}
              <div className="p-4 bg-[#F7F4EE] border border-[#D8CEBE] space-y-1.5 text-xs text-[#6F6A61]">
                <div className="flex items-center gap-2 text-[#292929] font-semibold">
                  <Train className="w-4 h-4 text-[#B89B5E]" />
                  <span>Transit & Location Guide:</span>
                </div>
                <p>
                  Located just off Station Road on Chapel Lane, within walking distance from <strong>Santacruz Railway Station (West side)</strong>.
                </p>
              </div>

              {/* Direct Lines */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between p-3 bg-[#F7F4EE] border border-[#D8CEBE] text-xs">
                  <div>
                    <span className="text-[#6F6A61] block text-[11px] font-medium">{contactInfo.advocates.jigar.name}</span>
                    <a href={`tel:${contactInfo.advocates.jigar.phoneClean}`} className="text-[#292929] font-bold hover:text-[#B89B5E]">
                      {contactInfo.advocates.jigar.phone}
                    </a>
                  </div>
                  <a
                    href={`tel:${contactInfo.advocates.jigar.phoneClean}`}
                    className="px-3 py-1 bg-white border border-[#D8CEBE] hover:border-[#B89B5E] text-[#B89B5E] text-xs font-semibold font-heading"
                  >
                    Call
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#F7F4EE] border border-[#D8CEBE] text-xs">
                  <div>
                    <span className="text-[#6F6A61] block text-[11px] font-medium">{contactInfo.advocates.suman.name}</span>
                    <a href={`tel:${contactInfo.advocates.suman.phoneClean}`} className="text-[#292929] font-bold hover:text-[#B89B5E]">
                      {contactInfo.advocates.suman.phone}
                    </a>
                  </div>
                  <a
                    href={`tel:${contactInfo.advocates.suman.phoneClean}`}
                    className="px-3 py-1 bg-white border border-[#D8CEBE] hover:border-[#B89B5E] text-[#B89B5E] text-xs font-semibold font-heading"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps CTA */}
            <div className="pt-6 border-t border-[#E5DEC9]">
              <a
                href={contactInfo.office.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#121A29] hover:bg-[#B89B5E] text-white text-xs font-bold font-heading uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow"
              >
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed Frame */}
          <div className="lg:col-span-7 overflow-hidden border border-[#D8CEBE] shadow-md min-h-[350px] lg:min-h-[450px] relative bg-white">
            <iframe
              title="Agarwal Legal Chamber Location Map"
              src={contactInfo.office.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[25%] contrast-110 opacity-95 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 border border-[#D8CEBE] text-[11px] font-semibold text-[#292929] flex items-center gap-1.5 pointer-events-none shadow">
              <MapPin className="w-3.5 h-3.5 text-[#B89B5E]" />
              <span>Santacruz (West), Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

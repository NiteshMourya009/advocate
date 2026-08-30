import React, { useState } from 'react'
import { CheckCircle2, AlertCircle, Send, MessageCircle, Phone, Clock, ArrowRight } from 'lucide-react'
import { contactInfo } from '../../data/contactInfo'
import { practiceAreasData } from '../../data/practiceAreas'

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    advocatePreference: 'Either Advocate',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required'
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name should be at least 3 characters'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else {
      const cleanPhone = formData.phone.replace(/[^0-9]/g, '')
      if (cleanPhone.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number'
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a legal matter category'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details of your legal inquiry'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const buildWhatsAppMessage = () => {
    const lines = [
      `📋 *APPOINTMENT REQUEST — Agarwal Legal Chamber*`,
      ``,
      `👤 *Name:* ${formData.fullName}`,
      `📞 *Phone:* ${formData.phone}`,
      formData.email ? `📧 *Email:* ${formData.email}` : null,
      `⚖️ *Legal Matter:* ${formData.subject}`,
      `👨‍⚖️ *Preferred Advocate:* ${formData.advocatePreference}`,
      formData.preferredDate ? `📅 *Preferred Date:* ${formData.preferredDate}` : null,
      formData.preferredTime ? `🕐 *Preferred Time:* ${formData.preferredTime}` : null,
      ``,
      `📝 *Details:*`,
      formData.message,
    ]
    return lines.filter(Boolean).join('\n')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 700)
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      subject: '',
      advocatePreference: 'Either Advocate',
      preferredDate: '',
      preferredTime: '',
      message: '',
    })
    setIsSubmitted(false)
  }

  const getWhatsAppUrl = (advocate = 'jigar') => {
    const msg = encodeURIComponent(buildWhatsAppMessage())
    const number = advocate === 'suman'
      ? contactInfo.advocates.suman.whatsappNumber
      : contactInfo.advocates.jigar.whatsappNumber
    return `https://wa.me/${number}?text=${msg}`
  }

  if (isSubmitted) {
    return (
      <div className="bg-white border border-[#D8CEBE] p-8 sm:p-10 text-center shadow-lg" style={{ borderTop: '4px solid #B89B5E' }}>
        <div className="w-16 h-16 rounded-full bg-[#25D366]/12 border-2 border-[#25D366]/40 flex items-center justify-center mx-auto mb-5 text-[#25D366]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#292929] font-heading mb-2">
          Appointment Request Ready!
        </h3>

        <p className="text-sm text-[#6F6A61] max-w-md mx-auto mb-3">
          Your details for <span className="font-semibold text-[#B89B5E]">{formData.subject}</span> have been prepared,{' '}
          <span className="font-semibold text-[#292929]">{formData.fullName}</span>.
        </p>

        <div className="p-4 bg-[#F7F4EE] border border-[#D8CEBE] text-xs text-[#6F6A61] max-w-md mx-auto text-left space-y-1.5 mb-7 rounded-sm">
          <div className="flex items-center gap-2 text-[#292929] font-semibold mb-1">
            <Clock className="w-3.5 h-3.5 text-[#B89B5E]" />
            <span>Send your request directly via WhatsApp below</span>
          </div>
          <p>Our advocates will confirm your appointment slot during chamber hours (Mon–Sat, 10 AM – 8:30 PM).</p>
        </div>

        {/* Send to WhatsApp buttons */}
        <div className="space-y-3 max-w-md mx-auto mb-5">
          <a
            href={getWhatsAppUrl('jigar')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#22c55e] text-white text-xs font-bold font-heading uppercase tracking-widest transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Send to Adv. Jigar Agarwal
          </a>
          <a
            href={getWhatsAppUrl('suman')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#128C7E] hover:bg-[#0f7a6e] text-white text-xs font-bold font-heading uppercase tracking-widest transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Send to Adv. Suman Agarwal
          </a>
        </div>

        <button
          onClick={handleReset}
          className="text-xs text-[#6F6A61] hover:text-[#B89B5E] underline transition-colors font-heading uppercase tracking-wider"
        >
          Submit Another Inquiry
        </button>
      </div>
    )
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-[#F7F4EE] border ${
      errors[field] ? 'border-rose-500 focus:ring-rose-300' : 'border-[#D8CEBE] focus:border-[#B89B5E] focus:ring-[#B89B5E]'
    } text-[#292929] placeholder-[#9C9484] text-sm focus:outline-none focus:ring-1 transition-colors`

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-[#D8CEBE] p-6 sm:p-10 shadow-lg"
      style={{ borderTop: '4px solid #B89B5E' }}
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#292929] font-heading mb-1.5">
          Book an Appointment
        </h3>
        <p className="text-xs sm:text-sm text-[#6F6A61]">
          Fill in the details below. Your inquiry will be sent directly to our advocates via WhatsApp for quick confirmation.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#292929] mb-1.5 font-heading">
              Full Name <span className="text-[#B89B5E]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rajesh Sharma"
              className={inputClass('fullName')}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#292929] mb-1.5 font-heading">
              Phone / WhatsApp <span className="text-[#B89B5E]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98200 XXXXX"
              className={inputClass('phone')}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Email & Legal Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#292929] mb-1.5 font-heading">
              Email Address <span className="text-[#6F6A61] text-[10px] font-normal lowercase">(optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. client@example.com"
              className={inputClass('email')}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#292929] mb-1.5 font-heading">
              Legal Category <span className="text-[#B89B5E]">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClass('subject')}
            >
              <option value="">-- Select Legal Category --</option>
              {practiceAreasData.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title}
                </option>
              ))}
              <option value="Other General Legal Matter">Other Legal Matter</option>
            </select>
            {errors.subject && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.subject}
              </p>
            )}
          </div>
        </div>

        {/* Preferred Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-[#292929] mb-1.5 font-heading">
              Preferred Date <span className="text-[#6F6A61] text-[10px] font-normal lowercase">(optional)</span>
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={inputClass('preferredDate')}
            />
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-[#292929] mb-1.5 font-heading">
              Preferred Time <span className="text-[#6F6A61] text-[10px] font-normal lowercase">(optional)</span>
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className={inputClass('preferredTime')}
            >
              <option value="">-- Select Time Slot --</option>
              <option value="10:00 AM – 12:00 PM">Morning: 10:00 AM – 12:00 PM</option>
              <option value="12:00 PM – 2:00 PM">Noon: 12:00 PM – 2:00 PM</option>
              <option value="2:00 PM – 5:00 PM">Afternoon: 2:00 PM – 5:00 PM</option>
              <option value="5:00 PM – 8:30 PM">Evening: 5:00 PM – 8:30 PM</option>
            </select>
          </div>
        </div>

        {/* Advocate Preference */}
        <div>
          <label htmlFor="advocatePreference" className="block text-xs font-bold uppercase tracking-wider text-[#292929] mb-1.5 font-heading">
            Preferred Advocate
          </label>
          <select
            id="advocatePreference"
            name="advocatePreference"
            value={formData.advocatePreference}
            onChange={handleChange}
            className={inputClass('advocatePreference')}
          >
            <option value="Either Advocate">Consult with Available Advocate</option>
            <option value="Adv. Jigar K. Agarwal">Adv. Jigar K. Agarwal (M.Com., LL.B.)</option>
            <option value="Adv. Suman J. Agarwal">Adv. Suman J. Agarwal (B.L.S., LL.B.)</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#292929] mb-1.5 font-heading">
            Brief Details of Legal Matter <span className="text-[#B89B5E]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please outline the nature of your legal issue, notices received, or documentation involved..."
            className={`${inputClass('message')} resize-none`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        <p className="text-[11px] text-[#6F6A61] pt-1 leading-normal">
          * Submitting this form does not create an advocate-client relationship. All data is protected under advocate-client confidentiality. Your details will be sent directly to our chamber via WhatsApp.
        </p>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 bg-[#121A29] hover:bg-[#B89B5E] text-white text-xs sm:text-sm font-bold font-heading uppercase tracking-widest transition-all duration-300 shadow flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Preparing Request...
              </>
            ) : (
              <>
                <ArrowRight className="w-4 h-4" />
                Fix an Appointment
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

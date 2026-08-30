import React, { useState } from 'react'
import { CheckCircle2, AlertCircle, Send, MessageCircle, Phone, Clock } from 'lucide-react'
import { contactInfo } from '../../data/contactInfo'
import { practiceAreasData } from '../../data/practiceAreas'

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    advocatePreference: 'Either Advocate',
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      subject: '',
      advocatePreference: 'Either Advocate',
      message: '',
    })
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    const whatsappText = encodeURIComponent(
      `Hello Advocate, I submitted a consultation inquiry on your website.\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nLegal Matter: ${formData.subject}\nMessage: ${formData.message}`
    )
    const instantWhatsappUrl = `https://wa.me/${contactInfo.advocates.jigar.whatsappNumber}?text=${whatsappText}`

    return (
      <div className="bg-white border border-[#D8CEBE] border-t-4 border-t-[#B89B5E] p-8 sm:p-10 text-center shadow-lg">
        <div className="w-14 h-14 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center mx-auto mb-5 text-[#25D366]">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#292929] font-heading mb-2">
          Consultation Request Recorded
        </h3>

        <p className="text-sm text-[#6F6A61] max-w-md mx-auto mb-6">
          Thank you, <span className="font-semibold text-[#292929]">{formData.fullName}</span>. Your inquiry regarding <span className="font-semibold text-[#B89B5E]">{formData.subject}</span> has been logged.
        </p>

        <div className="p-4 bg-[#F7F4EE] border border-[#D8CEBE] text-xs text-[#6F6A61] max-w-md mx-auto text-left space-y-2 mb-8">
          <div className="flex items-center gap-2 text-[#292929]">
            <Clock className="w-4 h-4 text-[#B89B5E]" />
            <span className="font-medium">Advocate Response: Within Chamber Hours</span>
          </div>
          <p>
            For urgent time-sensitive legal queries, you may also forward your consultation details directly via WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href={instantWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#22c55e] text-white text-xs font-bold font-heading uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Forward on WhatsApp
          </a>

          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-6 py-3 border border-[#D8CEBE] hover:border-[#B89B5E] text-[#292929] text-xs font-bold font-heading uppercase tracking-widest transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-[#D8CEBE] border-t-4 border-t-[#B89B5E] p-6 sm:p-10 shadow-lg"
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#292929] font-heading mb-1.5">
          Request Legal Consultation
        </h3>
        <p className="text-xs sm:text-sm text-[#6F6A61]">
          Fill in the details below. All consultations and case inquiries are held in strict professional confidence.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name & Phone Grid */}
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
              className={`w-full px-4 py-3 bg-[#F7F4EE] border ${
                errors.fullName ? 'border-rose-500' : 'border-[#D8CEBE] focus:border-[#B89B5E]'
              } text-[#292929] placeholder-[#9C9484] text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B5E] transition-colors`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#292929] mb-1.5 font-heading">
              Phone Number <span className="text-[#B89B5E]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98200 XXXXX"
              className={`w-full px-4 py-3 bg-[#F7F4EE] border ${
                errors.phone ? 'border-rose-500' : 'border-[#D8CEBE] focus:border-[#B89B5E]'
              } text-[#292929] placeholder-[#9C9484] text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B5E] transition-colors`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Email & Matter Category Grid */}
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
              className={`w-full px-4 py-3 bg-[#F7F4EE] border ${
                errors.email ? 'border-rose-500' : 'border-[#D8CEBE] focus:border-[#B89B5E]'
              } text-[#292929] placeholder-[#9C9484] text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B5E] transition-colors`}
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
              className={`w-full px-4 py-3 bg-[#F7F4EE] border ${
                errors.subject ? 'border-rose-500' : 'border-[#D8CEBE] focus:border-[#B89B5E]'
              } text-[#292929] text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B5E] transition-colors`}
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
            className="w-full px-4 py-3 bg-[#F7F4EE] border border-[#D8CEBE] focus:border-[#B89B5E] text-[#292929] text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B5E] transition-colors"
          >
            <option value="Either Advocate">Consult with Available Advocate</option>
            <option value="Adv. Jigar K. Agarwal">Adv. Jigar K. Agarwal (M.Com., LL.B.)</option>
            <option value="Adv. Suman J. Agarwal">Adv. Suman J. Agarwal (Advocate)</option>
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
            className={`w-full px-4 py-3 bg-[#F7F4EE] border ${
              errors.message ? 'border-rose-500' : 'border-[#D8CEBE] focus:border-[#B89B5E]'
            } text-[#292929] placeholder-[#9C9484] text-sm focus:outline-none focus:ring-1 focus:ring-[#B89B5E] transition-colors resize-none`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        <p className="text-[11px] text-[#6F6A61] pt-1 leading-normal">
          * Submitting an inquiry does not constitute an advocate-client relationship. All data is protected under advocate-client confidentiality.
        </p>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 bg-[#121A29] hover:bg-[#B89B5E] text-white text-xs sm:text-sm font-bold font-heading uppercase tracking-widest transition-all duration-300 shadow flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Recording Inquiry...' : 'Submit Consultation Request'}
          </button>
        </div>
      </div>
    </form>
  )
}

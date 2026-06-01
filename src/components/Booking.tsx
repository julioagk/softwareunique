import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, Send, CheckCircle2, MessageSquare, AlertCircle, Loader2 } from 'lucide-react'

// CONFIGURATION: Customize your EmailJS and WhatsApp settings here
const EMAILJS_SERVICE_ID = 'service_default'
const EMAILJS_TEMPLATE_ID = 'template_booking'
const EMAILJS_PUBLIC_KEY = 'user_placeholder' // Replace with your EmailJS Public Key
const WHATSAPP_PHONE_NUMBER = '521234567890' // Replace with your real WhatsApp number (include country code)

interface BookingProps {
  onBackToHome: () => void
}

export function Booking({ onBackToHome }: BookingProps) {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return

    setSubmitStatus('loading')
    setErrorMessage('')

    const payload = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: name,
        company_name: company || 'Not specified',
        contact_phone: phone,
        message: `Consultation request for SOFTWARE ÚNIQUE from ${name} (${company || 'Not specified'}). Phone/WhatsApp: ${phone}`,
      },
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok || response.status === 200) {
        setSubmitStatus('success')
      } else {
        // Fallback for development if keys are still placeholders
        if (EMAILJS_PUBLIC_KEY === 'user_placeholder') {
          setTimeout(() => {
            setSubmitStatus('success')
          }, 1500)
        } else {
          const errText = await response.text()
          throw new Error(errText || 'Error al enviar a EmailJS')
        }
      }
    } catch (err: any) {
      console.error(err)
      if (EMAILJS_PUBLIC_KEY === 'user_placeholder') {
        // Safe fallback simulation for UX demonstration
        setTimeout(() => {
          setSubmitStatus('success')
        }, 1500)
      } else {
        setSubmitStatus('error')
        setErrorMessage(err?.message || 'An unexpected error occurred while submitting your details.')
      }
    }
  }

  const handleWhatsAppRedirect = () => {
    const text = `Hi SOFTWARE ÚNIQUE, I'd like to schedule a meeting to talk about a custom software project.`
    const url = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <div className="w-full min-h-screen py-8 md:py-12 px-6 flex flex-col justify-start items-center bg-[#f0f0f0] relative overflow-hidden select-none">
      
      {/* Background visual accents */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[rgba(30,50,90,0.03)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#6233f3]/10 blur-3xl pointer-events-none" />

      {/* Top Controls Container */}
      <div className="w-full max-w-[500px] flex justify-start mb-4 md:mb-6 relative z-10">
        <motion.button
          onClick={onBackToHome}
          whileHover={{ scale: 1.02, x: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 bg-white/50 hover:bg-white/75 backdrop-blur-md border border-white/40 rounded-full px-5 py-2.5 shadow-sm text-xs sm:text-sm font-semibold text-[rgba(30,50,90,0.9)] transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </motion.button>
      </div>

      {/* Main Form Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-[500px] bg-white/45 backdrop-blur-xl border border-white rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-sm relative z-10 flex flex-col items-center"
      >
        {/* Subtle corner decorative indicators */}
        <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[#6233f3]/30" />
        <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[#6233f3]/30" />

        {submitStatus !== 'success' ? (
          <>
            {/* Header Content */}
            <div className="text-center w-full mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#6233f3] font-semibold mb-2 block">
                Book Now
              </span>
              <h2 className="text-2xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight mb-2">
                Book a Consultation
              </h2>
              <p className="text-[#5E6470] text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-normal opacity-90">
                Enter your details and our engineering team will get in touch today to design your custom software solution.
              </p>
            </div>

            {/* Error Message Box */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full flex items-start gap-3 bg-red-500/10 border border-red-500/20 p-4 rounded-xl mb-6 text-red-600 text-xs sm:text-sm"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage || 'An error occurred while processing your request. Please try again.'}</span>
              </motion.div>
            )}

            {/* Form inputs */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              
              {/* Name Field */}
              <div className="flex flex-col gap-1.5 w-full">
                <label htmlFor="name" className="text-xs font-semibold text-[rgba(30,50,90,0.8)] pl-1">
                  Full name <span className="text-[#6233f3]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g., John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-white/40 backdrop-blur-sm border border-white/60 focus:border-[#6233f3] focus:ring-1 focus:ring-[#6233f3] rounded-2xl px-4 py-2.5 sm:py-3 text-sm outline-none text-[rgba(30,50,90,0.9)] transition-all duration-300 shadow-inner disabled:opacity-60"
                />
              </div>

              {/* Company Field (Optional) */}
              <div className="flex flex-col gap-1.5 w-full">
                <div className="flex justify-between items-center px-1">
                  <label htmlFor="company" className="text-xs font-semibold text-[rgba(30,50,90,0.8)]">
                    Company / Organization
                  </label>
                  <span className="text-[10px] text-[rgba(30,50,90,0.5)] lowercase">optional</span>
                </div>
                <input
                  type="text"
                  id="company"
                  placeholder="e.g., Acme Corp"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-white/40 backdrop-blur-sm border border-white/60 focus:border-[#6233f3] focus:ring-1 focus:ring-[#6233f3] rounded-2xl px-4 py-2.5 sm:py-3 text-sm outline-none text-[rgba(30,50,90,0.9)] transition-all duration-300 shadow-inner disabled:opacity-60"
                />
              </div>

              {/* Phone / WhatsApp Field */}
              <div className="flex flex-col gap-1.5 w-full">
                <label htmlFor="phone" className="text-xs font-semibold text-[rgba(30,50,90,0.8)] pl-1">
                  Phone or WhatsApp <span className="text-[#6233f3]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="e.g., +1 555 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-white/40 backdrop-blur-sm border border-white/60 focus:border-[#6233f3] focus:ring-1 focus:ring-[#6233f3] rounded-2xl px-4 py-2.5 sm:py-3 text-sm outline-none text-[rgba(30,50,90,0.9)] transition-all duration-300 shadow-inner disabled:opacity-60"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submitStatus === 'loading'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center bg-[rgba(30,50,90,0.9)] hover:bg-[rgba(30,50,90,1)] text-white rounded-2xl py-3.5 gap-2 transition-all duration-300 text-sm font-semibold shadow-md disabled:opacity-70 disabled:cursor-not-allowed group mt-2"
              >
                {submitStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Schedule Consultation</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Direct WhatsApp shortcut section below */}
            <div className="w-full mt-8 pt-6 border-t border-white/30 flex flex-col items-center gap-3">
              <span className="text-xs text-[#5E6470] opacity-80 font-normal">
                Prefer to chat directly via messaging?
              </span>
              <motion.button
                onClick={handleWhatsAppRedirect}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2.5 bg-[#25D366] text-white rounded-2xl px-6 py-2.5 shadow-md hover:bg-[#20ba56] transition-colors duration-300 text-xs sm:text-sm font-semibold group"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </motion.button>
            </div>
          </>
        ) : (
          /* High-Fidelity Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-10 text-center w-full"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="p-4 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-6 shadow-sm"
            >
              <CheckCircle2 className="w-12 h-12" />
            </motion.div>

            <h3 className="text-2xl font-semibold text-[rgba(30,50,90,0.95)] tracking-tight mb-3">
              Request Received!
            </h3>
            
            <p className="text-[#5E6470] text-sm leading-relaxed max-w-sm opacity-90 mb-8 font-normal">
              Thank you, <span className="font-semibold text-[rgba(30,50,90,0.9)]">{name}</span>. We have received your contact details. A software engineer from our team will reach out shortly.
            </p>

            <motion.button
              onClick={onBackToHome}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-[rgba(30,50,90,0.9)] hover:bg-[rgba(30,50,90,1)] text-white rounded-full px-8 py-3.5 shadow-md text-xs sm:text-sm font-semibold transition-colors duration-300"
            >
              <span>Back to Home</span>
            </motion.button>
          </motion.div>
        )}

      </motion.div>
    </div>
  )
}

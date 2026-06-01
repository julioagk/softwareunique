import { motion } from 'motion/react'
import { Calendar } from 'lucide-react'

interface CTAProps {
  onNavigateToBooking: () => void
}

export function CTA({ onNavigateToBooking }: CTAProps) {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-16 max-w-[1536px] mx-auto bg-[#f0f0f0]">
      <div className="relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/30 rounded-[2rem] p-6 sm:p-10 md:p-14 text-center flex flex-col items-center justify-center overflow-hidden shadow-sm group">
        
        {/* Luxury Background Glow Effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[rgba(30,50,90,0.03)] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#6233f3]/10 blur-3xl pointer-events-none" />

        {/* Small Tag */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#6233f3] font-semibold mb-4 block relative z-10">
          Direct Contact
        </span>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[rgba(30,50,90,0.95)] max-w-4xl tracking-tight leading-[1.15] mb-4 relative z-10">
          Does your business need software that actually fits?
        </h2>

        {/* Subtitle */}
        <p className="text-[#5E6470] text-sm sm:text-sm md:text-base opacity-90 max-w-xl mb-8 font-normal leading-relaxed relative z-10">
          Stop struggling with generic platforms. Schedule a session today and talk directly with our systems architects.
        </p>

        {/* Primary Action Button */}
        <motion.button
          onClick={onNavigateToBooking}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.9)] hover:bg-[rgba(30,50,90,1)] text-white rounded-full px-6 py-3.5 gap-3 transition-all duration-300 text-xs sm:text-sm font-semibold relative z-10 shadow-md group/btn"
        >
          <div className="bg-white/20 p-1.5 rounded-full flex items-center justify-center text-white">
            <Calendar className="w-4 h-4" />
          </div>
          <span>Schedule a Consultation</span>
        </motion.button>

        {/* Decorative corner highlights */}
        <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[#6233f3]/30" />
        <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[#6233f3]/30" />
        <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-[#6233f3]/30" />
        <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-[#6233f3]/30" />

      </div>
    </section>
  )
}

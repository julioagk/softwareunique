import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Navbar } from './Navbar'
import { HeroBadge } from './HeroBadge'
import { BottomLeftCard } from './BottomLeftCard'
import { BottomRightCorner } from './BottomRightCorner'

interface HeroProps {
  onNavigateToBooking: () => void
}

export function Hero({ onNavigateToBooking }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
        {/* The Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0 pointer-events-none"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
            type="video/mp4"
          />
        </video>

        {/* The Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar onNavigateToBooking={onNavigateToBooking} />

          {/* Text Container */}
          <div className="w-full flex flex-col items-center pt-2 md:pt-6 lg:pt-8 px-6 text-center max-w-5xl">
            <HeroBadge />
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[54px] font-normal text-[#5E6470] mb-3 tracking-tight leading-[1.08] max-w-3xl"
            >
              Software engineered for the way your business scales.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs sm:text-xs md:text-sm lg:text-base text-[#5E6470] opacity-80 leading-relaxed max-w-xl font-normal"
            >
              We design and build high-performance platforms, integrations, and intelligent systems tailored to your unique operation.
            </motion.p>

            {/* Central Call-to-Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-6"
            >
              <motion.button
                onClick={onNavigateToBooking}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center bg-[rgba(30,50,90,0.9)] text-white rounded-full px-6 py-3 gap-2 hover:bg-[rgba(30,50,90,1)] transition-colors group shadow-md text-xs sm:text-sm font-semibold"
              >
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('solutions')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center bg-white/40 backdrop-blur-md border border-white/30 text-[rgba(30,50,90,0.9)] rounded-full px-6 py-3 hover:bg-white/60 transition-colors text-xs sm:text-sm font-semibold shadow-sm"
              >
                <span>View Solutions</span>
              </motion.button>
            </motion.div>
          </div>

          <BottomLeftCard onNavigateToBooking={onNavigateToBooking} />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  )
}

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

interface BottomLeftCardProps {
  onNavigateToBooking: () => void
}

export function BottomLeftCard({ onNavigateToBooking }: BottomLeftCardProps) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-2 rounded-full bg-white/30 backdrop-blur-xl flex items-center w-fit shadow-md border border-white/20"
    >
      {/* Action button */}
      <motion.button
        onClick={onNavigateToBooking}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center bg-white rounded-full pl-1.5 pr-5 py-2 gap-2 hover:bg-white/90 transition-colors self-start group shadow-sm"
      >
        <div className="bg-[rgba(30,50,90,0.1)] p-1 rounded-full flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)]" />
        </div>
        <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
          Request Consultation
        </span>
      </motion.button>
    </motion.div>
  )
}

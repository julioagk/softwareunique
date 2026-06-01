import { motion } from 'motion/react'
import { ChevronRight, ArrowUpRight } from 'lucide-react'

interface NavbarProps {
  onNavigateToBooking: () => void
}

export function Navbar({ onNavigateToBooking }: NavbarProps) {
  const menuItems = [
    { label: 'Solutions', target: 'solutions', hasDropdown: true },
    { label: 'Services', target: 'solutions', hasDropdown: true },
    { label: 'Process', target: 'process', hasDropdown: true },
    { label: 'Technologies', target: 'technologies', hasDropdown: true },
    { label: 'Contact', target: 'contact', hasDropdown: true },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="flex items-center justify-between py-5 px-6 md:px-10 lg:px-12 w-full relative z-10 max-w-[1536px] mx-auto gap-4">
      {/* Left Side Branding */}
      <div className="flex-initial shrink-0">
        <span className="font-plus-jakarta select-none flex items-center gap-3">
          <img src="/logosoftwareunido.jpeg" alt="SOFTWARE ÚNIQUE Logo" className="w-10 h-10 md:w-11 md:h-11 rounded-xl object-contain shadow-md shrink-0 border border-white/30 hover:scale-105 transition-transform duration-300" />
          <span className="flex items-center gap-2 text-sm md:text-base font-light tracking-[0.18em] text-[#1E325A]">
            <span>SOFTWARE</span>
            <span className="text-[#6233f3] font-semibold">ÚNIQUE</span>
          </span>
        </span>
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex items-center gap-5 lg:gap-8 text-[rgb(45,45,45)] font-normal text-xs lg:text-sm">
        {menuItems.map((item) => (
          <li
            key={item.label}
            onClick={() => scrollToSection(item.target)}
            className="cursor-pointer hover:text-[rgba(30,50,90,0.8)] hover:opacity-100 opacity-75 transition-all flex items-center group relative py-1"
          >
            <span>{item.label}</span>
            {item.hasDropdown && (
              <span className="overflow-hidden inline-flex items-center w-0 opacity-0 group-hover:w-3.5 group-hover:opacity-100 transition-all duration-300 ml-0.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#6233f3]" />
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Right Button */}
      <div className="flex-initial shrink-0 flex justify-end">
        <motion.button
          onClick={onNavigateToBooking}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.85)] text-white rounded-full pl-2 pr-4 md:pr-5 py-1.5 gap-2 hover:bg-[rgba(30,50,90,1)] transition-colors group shadow-sm"
        >
          <div className="bg-white/20 p-1 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-xs font-semibold hidden sm:inline">Schedule a Consultation</span>
          <span className="text-xs font-semibold inline sm:hidden">Schedule</span>
        </motion.button>
      </div>
    </nav>
  )
}

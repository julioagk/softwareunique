import { motion } from 'motion/react'
import { ChevronRight, ArrowUpRight } from 'lucide-react'

interface NavbarProps {
  onNavigateToBooking: () => void
}

export function Navbar({ onNavigateToBooking }: NavbarProps) {
  const menuItems = [
    { label: 'Soluciones', target: 'soluciones', hasDropdown: true },
    { label: 'Servicios', target: 'soluciones', hasDropdown: true },
    { label: 'Proceso', target: 'proceso', hasDropdown: true },
    { label: 'Tecnologías', target: 'tecnologias', hasDropdown: true },
    { label: 'Contacto', target: 'contacto', hasDropdown: true },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      {/* Left Side Branding */}
      <div className="flex-1">
        <span className="font-regular tracking-tighter text-xl md:text-2xl text-[rgba(30,50,90,0.9)] font-semibold select-none flex items-center gap-3">
          <img src="/logosoftwareunido.jpeg" alt="Logo Software Único" className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl object-contain shadow-md shrink-0 border border-white/30 hover:scale-105 transition-transform duration-300" />
          <span>
            SOFTWARE <span className="text-[#C5A880]">ÚNICO</span>
          </span>
        </span>
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">
        {menuItems.map((item) => (
          <li
            key={item.label}
            onClick={() => scrollToSection(item.target)}
            className="cursor-pointer hover:text-[rgba(30,50,90,0.8)] hover:opacity-100 opacity-80 transition-all flex items-center gap-1 group"
          >
            <span>{item.label}</span>
            {item.hasDropdown && (
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#C5A880]" />
            )}
          </li>
        ))}
      </ul>

      {/* Right Button */}
      <div className="flex-1 flex justify-end">
        <motion.button
          onClick={onNavigateToBooking}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group shadow-sm"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Agenda una Consultoría</span>
        </motion.button>
      </div>
    </nav>
  )
}

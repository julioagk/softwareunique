export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#f0f0f0] border-t border-white/40 py-8 px-6 md:px-12 lg:px-16 max-w-[1536px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Label */}
        <div>
          <span className="font-regular tracking-tighter text-lg text-[rgba(30,50,90,0.9)] font-semibold select-none flex items-center gap-2">
            <img src="/logosoftwareunido.jpeg" alt="Logo Software Único" className="w-6 h-6 rounded-md object-contain shrink-0 border border-white/20" />
            <span>
              SOFTWARE <span className="text-[#C5A880]">ÚNICO</span>
            </span>
          </span>
          <p className="text-[#5E6470] text-xs mt-1.5 opacity-80 font-normal">
            Bespoke Software Engineering & AI Studio.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs text-[#5E6470] opacity-80 font-normal">
          <a href="#" className="hover:text-[rgba(30,50,90,0.9)] transition-colors">
            Soluciones
          </a>
          <a href="#" className="hover:text-[rgba(30,50,90,0.9)] transition-colors">
            Servicios
          </a>
          <a href="#" className="hover:text-[rgba(30,50,90,0.9)] transition-colors">
            Proceso
          </a>
          <a href="#" className="hover:text-[rgba(30,50,90,0.9)] transition-colors">
            Tecnologías
          </a>
          <a href="#" className="hover:text-[rgba(30,50,90,0.9)] transition-colors">
            Aviso de Privacidad
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[#5E6470] text-xs opacity-75 font-normal">
          © {currentYear} SOFTWAREUNICO. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  )
}

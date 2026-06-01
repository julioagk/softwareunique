export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#f0f0f0] border-t border-white/40 py-8 px-6 md:px-12 lg:px-16 max-w-[1536px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Label */}
        <div>
          <span className="font-plus-jakarta select-none flex items-center gap-3">
            <img src="/logosoftwareunido.jpeg" alt="SOFTWARE ÚNIQUE Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-contain shrink-0 border border-white/30 hover:scale-105 transition-transform duration-300" />
            <span className="flex items-center gap-2 text-sm md:text-base font-light tracking-[0.25em] text-[#1E325A]">
              <span>SOFTWARE</span>
              <span className="text-[#6233f3] font-medium">ÚNIQUE</span>
            </span>
          </span>
          {/* Removed Bespoke Software Engineering text per request */}
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs text-[#5E6470] opacity-80 font-normal">
          <a href="#solutions" className="hover:text-[rgba(30,50,90,0.9)] transition-colors">
            Solutions
          </a>
          <a href="#solutions" className="hover:text-[rgba(30,50,90,0.9)] transition-colors">
            Services
          </a>
          <a href="#process" className="hover:text-[rgba(30,50,90,0.9)] transition-colors">
            Process
          </a>
          <a href="#technologies" className="hover:text-[rgba(30,50,90,0.9)] transition-colors">
            Technologies
          </a>
          <a href="#" className="hover:text-[rgba(30,50,90,0.9)] transition-colors">
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[#5E6470] text-xs opacity-75 font-normal">
          © {currentYear} SOFTWAREUNICO. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

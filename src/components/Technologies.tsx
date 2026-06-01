import { motion } from 'motion/react'
import { Atom, Database, Cloud, Cpu, Server, Flame, HardDrive, Terminal } from 'lucide-react'

export function Technologies() {
  const techs = [
    { name: 'Next.js', icon: Terminal, color: 'text-black' },
    { name: 'React', icon: Atom, color: 'text-cyan-500' },
    { name: 'Node.js', icon: Server, color: 'text-green-600' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-600' },
    { name: 'Supabase', icon: Flame, color: 'text-emerald-500' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-500' },
    { name: 'OpenAI', icon: Cpu, color: 'text-purple-600' },
    { name: 'Docker', icon: HardDrive, color: 'text-sky-500' },
  ]

  return (
    <section id="technologies" className="py-16 px-6 md:px-12 lg:px-16 max-w-[1536px] mx-auto bg-[#f0f0f0]">
      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Left Side Copy */}
        <div className="lg:col-span-1 max-w-lg">
          <span className="text-xs uppercase tracking-[0.2em] text-[#6233f3] font-semibold mb-2 block">
            Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] mb-4 tracking-tight leading-[1.15]">
            Result-Oriented Technology
          </h2>
          <p className="text-[#5E6470] text-sm md:text-base leading-relaxed font-normal opacity-90">
            We leverage modern technologies to build fast, secure, and highly scalable platforms designed to handle millions of transactions without compromising stability.
          </p>
        </div>

        {/* Right Side Tech Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {techs.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/40 backdrop-blur-md border border-white/30 p-5 sm:p-6 rounded-[1.5rem] flex flex-col items-center justify-center hover:bg-white/60 hover:border-[#6233f3]/30 transition-all duration-300 shadow-sm group cursor-default"
              >
                {/* Tech Icon Container */}
                <div className={`p-4 rounded-2xl bg-white/50 border border-white/40 shadow-sm transition-all duration-300 group-hover:scale-110 ${tech.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Tech Name */}
                <span className="text-xs sm:text-sm font-semibold text-[rgba(30,50,90,0.95)] tracking-tight mt-4">
                  {tech.name}
                </span>

                {/* Gold micro dot highlight */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#6233f3] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

import { motion } from 'motion/react'
import { Eye, Layers, Code, TrendingUp } from 'lucide-react'

export function Process() {
  const steps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Deep dive into your operations, workflows, and business objectives.',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Architecture',
      description: 'Designing the structural blueprint, database schemas, and data pipelines.',
      icon: Layers,
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile coding sprints, high-quality standards, and automated unit testing.',
      icon: Code,
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'Continuous integration, cloud configuration, and secure staging launch.',
      icon: TrendingUp,
    },
  ]

  return (
    <section id="process" className="py-16 px-6 md:px-12 lg:px-16 max-w-[1536px] mx-auto bg-[#f0f0f0]">
      {/* Header Container */}
      <div className="max-w-3xl mb-12 text-left">
        <span className="text-xs uppercase tracking-[0.2em] text-[#6233f3] font-semibold mb-2 block">
          Methodology
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">
          Our Process
        </h2>
        <div className="w-16 h-0.5 bg-[#6233f3] mt-3" />
      </div>

      {/* Horizontal Line on Desktop, Vertical on Mobile */}
      <div className="relative">
        {/* Connection Line (Hidden on Mobile) */}
        <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[rgba(30,50,90,0.15)] to-transparent -translate-y-1/2 z-0 hidden lg:block" />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 relative z-10">
          {steps.map((st, index) => {
            const Icon = st.icon
            return (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/40 backdrop-blur-md border border-white/30 p-6 rounded-[1.5rem] flex flex-col justify-between hover:border-[#6233f3]/30 hover:bg-white/60 transition-all duration-300 shadow-sm group"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-semibold text-[#6233f3] uppercase tracking-widest bg-white/50 border border-white/40 px-3 py-1 rounded-full shadow-sm">
                      Step {st.step}
                    </span>
                    <div className="p-2 bg-[rgba(30,50,90,0.05)] rounded-lg text-[rgba(30,50,90,0.8)] border border-[rgba(30,50,90,0.08)] group-hover:bg-[#6233f3]/10 group-hover:text-[#6233f3] transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-[rgba(30,50,90,0.9)] mb-3 tracking-tight">
                    {st.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#5E6470] text-sm leading-relaxed opacity-90 font-normal">
                    {st.description}
                  </p>
                </div>

                {/* Subtle indicator bulb */}
                <div className="mt-8 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#6233f3] group-hover:scale-125 transition-transform duration-300" />
                  <div className="h-[1px] bg-white/30 flex-1 group-hover:bg-[#6233f3]/30 transition-colors duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

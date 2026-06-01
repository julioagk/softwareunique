import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Briefcase, Cpu, Network, Shield, X, CheckCircle2, Calendar, Smartphone, Cloud } from 'lucide-react'

interface SolutionsProps {
  onNavigateToBooking: () => void
}

export function Solutions({ onNavigateToBooking }: SolutionsProps) {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[number] | null>(null)

  const solutions = [
    {
      id: '01',
      title: 'AI & Automation',
      description: 'Intelligent agents, predictive analysis, and LLM integrations to automate complex operational workflows.',
      subtitle: 'Eliminate human error and scale corporate productivity.',
      detailedContent: 'We integrate advanced language models (LLMs) and predictive data analytics directly into your operations. Automate report generation, billing flows, internal approvals, and repetitive tasks with intelligent orchestrators, allowing your business to run autonomously 24/7.',
      benefits: [
        'Average of 85% time savings on automated operational workflows.',
        'Real-time automated logging and failure alerting systems.',
        'Automated notifications via Slack, WhatsApp, or secure email.',
      ],
      icon: Cpu,
    },
    {
      id: '02',
      title: 'Web Platforms',
      description: 'High-capacity corporate portals, SaaS systems, and cloud portals designed for heavy workloads.',
      subtitle: 'Premium, ultra-secure collaboration spaces for your ecosystem.',
      detailedContent: 'Deliver high-fidelity web experiences for your clients, partners, and remote teams. We design custom portals, SaaS platforms, and enterprise solutions featuring advanced role-based access controls and optimized file transfers.',
      benefits: [
        'Fully integrated multi-factor authentication (MFA) and SSO.',
        'Cloud-native optimized file uploads for massive datasets.',
        'Granular Role-Based Access Control (RBAC) schemas.',
      ],
      icon: Briefcase,
    },
    {
      id: '03',
      title: 'Mobile Apps',
      description: 'Premium native and cross-platform apps for iOS and Android, focusing on intuitive user experiences.',
      subtitle: 'Bespoke mobile platforms with native responsiveness.',
      detailedContent: 'Bring your custom systems and customer portals directly to iOS and Android. We build premium, high-performance native and cross-platform mobile apps focused on fluid micro-interactions and bulletproof reliability.',
      benefits: [
        'High-fidelity native visual layouts and transitions.',
        'Offline-first data syncing mechanisms for remote operations.',
        'Seamless hardware integrations (biometrics, camera, GPS).',
      ],
      icon: Smartphone,
    },
    {
      id: '04',
      title: 'Cloud Infrastructure',
      description: 'Highly secure, scalable architecture optimized on AWS and Google Cloud for maximum stability.',
      subtitle: 'Highly secure systems prepared to scale to millions of requests.',
      detailedContent: 'Ensure your services remain immune to downtime under heavy workloads. We architect and manage high-availability cloud setups on AWS and GCP, leveraging Docker containers, continuous integration, and secure scaling systems.',
      benefits: [
        'Auto-scaling clusters configured for zero downtime.',
        'Proactive server monitoring and automated daily backups.',
        'Secure cloud firewalls and military-grade encryption.',
      ],
      icon: Cloud,
    },
    {
      id: '05',
      title: 'API Integrations',
      description: 'Seamless connections between your legacy databases, CRM, ERP, and external services.',
      subtitle: 'Unified data sync across your entire software ecosystem.',
      detailedContent: 'Eliminate data silos by making your tools speak to one another seamlessly. We build robust and secure API connections between global ERPs (SAP, Oracle), CRMs (Salesforce, HubSpot), payment gateways (Stripe), and your legacy databases.',
      benefits: [
        'Real-time, ultra-fast bi-directional data synchronization.',
        'Robust event-driven architecture using resilient Webhooks.',
        'Detailed monitoring dashboards for API consumption and quotas.',
      ],
      icon: Network,
    },
    {
      id: '06',
      title: 'Cybersecurity',
      description: 'Advanced security compliance, identity verification, encryption, and structural audits.',
      subtitle: 'Bulletproof security audits and system hardening.',
      detailedContent: 'Protect your proprietary company data, client databases, and digital infrastructure. We conduct deep code audits, security scanning, identity verification setups, and apply industry-leading encryption to keep you compliant and safe.',
      benefits: [
        'Regular automated vulnerability scans and threat profiling.',
        'End-to-end data encryption in transit and at rest.',
        'Deep compliance alignment (GDPR, HIPAA, SOC 2 guidance).',
      ],
      icon: Shield,
    },
  ]

  const handleBookSolution = () => {
    setSelectedSolution(null)
    setTimeout(() => {
      onNavigateToBooking()
    }, 200)
  }

  return (
    <section id="solutions" className="py-16 px-6 md:px-12 lg:px-16 max-w-[1536px] mx-auto bg-[#f0f0f0]">
      {/* Header Container */}
      <div className="max-w-3xl mb-10">
        <span className="text-xs uppercase tracking-[0.2em] text-[#6233f3] font-semibold mb-2 block">
          Focus Areas
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] mb-4 tracking-tight leading-[1.15]">
          Solutions engineered for competitive advantage
        </h2>
        <p className="text-[#5E6470] text-sm md:text-base leading-relaxed font-normal opacity-90 max-w-2xl">
          Every business has unique processes, objectives, and challenges. That is why we engineer completely custom software that integrates seamlessly with your real operations.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {solutions.map((sol, index) => {
          const Icon = sol.icon
          return (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedSolution(sol)}
              className="bg-white/40 backdrop-blur-md border border-white/30 p-6 md:p-7 rounded-[1.5rem] flex flex-col justify-between hover:border-[#6233f3]/30 hover:bg-white/60 transition-all duration-300 shadow-sm relative group overflow-hidden cursor-pointer"
            >
              {/* Glass subtle gradient element */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[#6233f3] font-semibold text-xs tracking-wider uppercase">
                    {sol.id}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/50 border border-white/40 text-[rgba(30,50,90,0.8)] group-hover:bg-[#6233f3]/10 group-hover:text-[#6233f3] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[rgba(30,50,90,0.9)] mb-3 tracking-tight">
                  {sol.title}
                </h3>

                {/* Description */}
                <p className="text-[#5E6470] text-sm leading-relaxed opacity-90 font-normal">
                  {sol.description}
                </p>
              </div>

              {/* Action decoration */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#6233f3] transition-all duration-300">
                <span className="font-semibold group-hover:underline">Learn more</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Modern High-Fidelity Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="absolute inset-0 bg-black/55 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[650px] max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-xl border border-white rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-2xl flex flex-col text-left z-10"
            >
              {/* Top Accent corner marks */}
              <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[#6233f3]/30" />
              <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[#6233f3]/30" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[rgba(30,50,90,0.05)] hover:bg-[rgba(30,50,90,0.1)] transition-colors border border-[rgba(30,50,90,0.1)] text-[rgba(30,50,90,0.8)]"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icon & Category */}
              <div className="flex items-center gap-3 mb-6 mt-2">
                <div className="p-3 rounded-xl bg-[#6233f3]/10 text-[#6233f3] border border-[#6233f3]/20">
                  {selectedSolution && <selectedSolution.icon className="w-6 h-6" />}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#6233f3] font-semibold block">
                    Solution {selectedSolution.id}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[rgba(30,50,90,0.95)] tracking-tight">
                    {selectedSolution.title}
                  </h3>
                </div>
              </div>

              {/* Subheading */}
              <h4 className="text-sm font-medium text-[#6233f3] leading-relaxed mb-4 border-l-2 border-[#6233f3] pl-3 italic">
                "{selectedSolution.subtitle}"
              </h4>

              {/* Paragraph details */}
              <p className="text-[#5E6470] text-sm sm:text-base leading-relaxed opacity-95 mb-8 font-normal">
                {selectedSolution.detailedContent}
              </p>

              {/* Bullet Features list */}
              <div className="flex flex-col gap-3 mb-8 bg-[rgba(30,50,90,0.02)] p-4 sm:p-6 rounded-[1.2rem] border border-[rgba(30,50,90,0.05)]">
                <span className="text-xs uppercase tracking-wider text-[rgba(30,50,90,0.5)] font-semibold mb-1 block">
                  Operational Advantages
                </span>
                {selectedSolution.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#6233f3] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-normal text-[rgba(30,50,90,0.85)] leading-tight">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button inside Modal */}
              <motion.button
                onClick={handleBookSolution}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center bg-[rgba(30,50,90,0.9)] hover:bg-[rgba(30,50,90,1)] text-white rounded-full py-3.5 px-6 gap-2 transition-all duration-300 text-xs sm:text-sm font-semibold shadow-md group/btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Consult with an Expert</span>
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, Globe, Building2, Zap, Layers, Factory, Target, ShieldCheck, ChevronRight } from 'lucide-react'

const ecosystems = [
  { id: 'I', title: 'Real Estate & Urban Development', main: 'ZARNEX Real Estate Development', subs: [{ name: 'NEPTUNE', role: 'Strategic Real Estate Asset Management', capabilities: ['Asset Acquisition', 'Master Planning', 'Urban Development Strategy'] }], icon: <Building2 className="w-6 h-6 text-accent" /> },
  { id: 'II', title: 'Events & Sports Management', main: 'LANIAKEA Events', subs: [{ name: 'ARIAZ', role: 'Premium Event Hospitality', capabilities: ['VIP Experiences', 'Logistics Management'] }, { name: 'XLive', role: 'Global Live Media', capabilities: ['Broadcast Engineering', 'Hybrid Event Tech'] }], icon: <Target className="w-6 h-6 text-accent" /> },
  { id: 'III', title: 'Media & Creative Arts', main: 'LANIAKEA Creative', subs: [{ name: 'ALCHEMY', role: 'Visual Identity', capabilities: ['Brand Strategy', 'Creative Direction'] }], icon: <Zap className="w-6 h-6 text-accent" /> },
  { id: 'IV', title: 'Technology & Digital Infrastructure', main: 'QUANTUM Tech', subs: [{ name: 'CYBERNEX', role: 'Cybersecurity', capabilities: ['Network Security', 'AI Infrastructure'] }], icon: <Layers className="w-6 h-6 text-accent" /> },
  { id: 'V', title: 'Facilities & Operations', main: 'PROTECH Facilities', subs: [{ name: 'INTEGRITY', role: 'Building Management', capabilities: ['Smart Buildings', 'Safety Audits'] }], icon: <Factory className="w-6 h-6 text-accent" /> },
  { id: 'VI', title: 'Investments & Partnerships', main: 'NEXUS Capital', subs: [{ name: 'SYNERGY', role: 'Advisory', capabilities: ['M&A Strategy', 'Capital Allocation'] }], icon: <Globe className="w-6 h-6 text-accent" /> }
]

export default function EcosystemSection() {
  const [activePopup, setActivePopup] = useState<any>(null)

  return (
    <section className="bg-bg-main px-8 md:px-20 py-32 relative overflow-hidden" id="ecosystems">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="flex flex-col gap-6 mb-24 items-start border-l-4 border-accent pl-10">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-accent font-black tracking-[0.4em] text-[10px] uppercase"
          >
            Strategic Pillars
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
          >
            Diverse <span className="text-gradient">Ecosystems.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted max-w-2xl text-lg font-light leading-relaxed"
          >
            We operate as a global builder-operator platform, unifying specialized intelligence to drive high-value outcomes across multiple high-growth sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ecosystems.map((eco, idx) => (
            <motion.div 
              key={eco.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card group"
            >
              <div className="flex items-center justify-between mb-10">
                 <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-all duration-500">
                    <span className="text-accent">{eco.icon}</span>
                 </div>
                 <span className="text-5xl font-black text-white/5 group-hover:text-gold-glow transition-colors duration-700">{eco.id}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-5 tracking-tight text-white group-hover:text-accent transition-colors">{eco.title}</h3>
              <p className="text-sm text-text-muted mb-10 font-light leading-relaxed">
                Strategic orchestration of market leadership, innovation, and global expansion within {eco.title}.
              </p>
              
              <div className="space-y-4">
                <span className="text-[9px] font-black text-accent tracking-[0.3em] uppercase block mb-4">Core Strategic Units</span>
                {eco.subs.map((sub, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-between p-5 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-all border border-white/5 hover:border-accent/30 group/sub"
                    onClick={() => setActivePopup({ ...sub, eco: eco.title })}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover/sub:text-accent transition-colors">{sub.name}</span>
                      <span className="text-[10px] text-text-muted uppercase tracking-[0.1em] mt-1">{sub.role}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-accent/50 group-hover/sub:text-accent transition-all" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activePopup && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setActivePopup(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="bg-secondary p-12 md:p-16 rounded-3xl max-w-2xl w-full relative shadow-2xl border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 p-8">
                <button 
                  onClick={() => setActivePopup(null)}
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-text-muted hover:text-accent hover:bg-white/10 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="relative z-10">
                <span className="text-accent text-[11px] tracking-[0.4em] font-black uppercase mb-6 block border-b border-accent/20 pb-4">
                  {activePopup.eco} <span className="text-white/30 ml-2">// STRATEGIC UNIT</span>
                </span>
                <h3 className="text-5xl font-bold mb-4 text-white tracking-tighter">{activePopup.name}</h3>
                <p className="text-text-muted text-lg mb-12 font-light leading-relaxed">{activePopup.role}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-6">
                    <span className="text-white text-[11px] tracking-[0.3em] font-black uppercase">Core Capabilities</span>
                    <div className="flex flex-col gap-4">
                      {activePopup.capabilities.map((cap: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-4 group/item">
                          <div className="w-2 h-2 bg-accent rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="text-sm font-medium text-text-main group-hover/item:text-white transition-colors">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/5 flex flex-col justify-center gap-4">
                    <Zap className="text-accent w-10 h-10 mb-2" />
                    <span className="text-xl font-bold text-white">Value Proposition</span>
                    <p className="text-xs text-text-muted leading-relaxed uppercase tracking-widest font-black">Centralized Intelligence // Optimal Expansion // Vertical Integration</p>
                  </div>
                </div>
              </div>

              {/* Decorative Background for modal */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 blur-[80px] rounded-full pointer-events-none"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

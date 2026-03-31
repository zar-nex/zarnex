import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Box, Cpu, Eye, LayoutGrid, Settings, Target, ChevronRight } from 'lucide-react'

const steps = [
  { id: 'DEVELOPMENT', icon: <LayoutGrid />, desc: 'Strategic acquisition and planning of core assets.' },
  { id: 'CREATION', icon: <Eye />, desc: 'Creative vision and visual identity development.' },
  { id: 'PRODUCTION', icon: <Box />, desc: 'Execution of live media and large-scale events.', 
    popups: ['XLive', 'VR1', 'Laniakea Events'] 
  },
  { id: 'TECHNOLOGY', icon: <Cpu />, desc: 'Digital infrastructure and cybersecurity integration.' },
  { id: 'OPERATIONS', icon: <Settings />, desc: 'Operational excellence and ecosystem management.' }
]

export default function ValueProposition() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null)

  return (
    <section className="bg-primary px-8 md:px-20 py-40 overflow-visible relative" id="advantage">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(197,160,89,0.05),_transparent_70%)]"></div>

      <div className="container relative z-10 transition-all duration-700">
        <div className="text-center mb-32 max-w-4xl mx-auto flex flex-col gap-8">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-black tracking-[0.6em] text-[10px] uppercase"
          >
            End-to-End Strategic Integration
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
          >
            Integrated <span className="text-gradient">Advantage.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg font-light leading-relaxed"
          >
            Our operational model ensures every phase of the value chain is internalized, minimizing market friction and maximizing institutional quality.
          </motion.p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto py-20 px-8">
           {/* Connecting Line (Desktop) */}
           <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden md:block z-0"></div>
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-20 md:gap-4 relative z-10">
             {steps.map((step, i) => (
                <div 
                  key={step.id} 
                  className="flex flex-col items-center group cursor-pointer relative"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                   {/* Step Icon Container */}
                   <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 mb-10 relative z-10 shadow-2xl border-2 backdrop-blur-2xl ${
                      hoveredStep === step.id ? 'bg-accent border-accent text-primary shadow-accent/40' : 'bg-white/5 border-white/10 text-accent'
                   }`}>
                      {step.icon}
                   </motion.div>

                   <span className={`text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-500 ${
                      hoveredStep === step.id ? 'text-accent' : 'text-white/40'
                   }`}>
                      {step.id}
                   </span>
                   
                   <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredStep === step.id ? 1 : 0.6 }}
                    className="text-[11px] text-text-muted text-center mt-8 max-w-[180px] font-bold leading-relaxed uppercase tracking-widest hidden lg:block"
                   >
                      {step.desc}
                   </motion.p>

                   {/* Production Sub-Entities */}
                   {step.popups && hoveredStep === 'PRODUCTION' && (
                      <AnimatePresence>
                         <motion.div 
                           initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.9 }}
                           className="absolute -top-40 left-1/2 -translate-x-1/2 flex flex-col gap-3 items-center z-50 pointer-events-none"
                         >
                            {step.popups.map((popup, idx) => (
                               <motion.div 
                                 key={popup} 
                                 initial={{ x: -10 }} animate={{ x: 0 }}
                                 transition={{ delay: idx * 0.1 }}
                                 className="bg-accent text-primary p-3 px-8 rounded-lg text-[10px] font-black tracking-[0.4em] shadow-[0_20px_40px_rgba(197,160,89,0.3)] whitespace-nowrap border border-white/20 uppercase"
                               >
                                  {popup}
                               </motion.div>
                            ))}
                            <div className="w-4 h-4 bg-accent rotate-45 mt-[-10px] border-b border-r border-white/20"></div>
                         </motion.div>
                      </AnimatePresence>
                   )}
                </div>
             ))}
           </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 p-12 md:p-16 glass-navbar rounded-3xl border border-white/10 max-w-5xl mx-auto shadow-2xl flex flex-col md:flex-row items-center gap-16 relative overflow-hidden group"
        >
           <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
           <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center shrink-0 border border-accent/30 group-hover:scale-110 transition-transform duration-700">
              <Target className="w-12 h-12 text-accent" />
           </div>
           <div className="flex flex-col gap-6 relative z-10">
              <h3 className="text-3xl font-bold text-white tracking-tight">Institutional Excellence</h3>
              <p className="text-text-muted text-lg font-light leading-relaxed">
                We maintain institutional-grade excellence by internalizing specialized functions while retaining centralized strategic control. This dual-layered model across our ecosystems ensures optimal asset expansion and market performance.
              </p>
              <div className="flex items-center gap-10 mt-4">
                <a href="#contact" className="text-accent text-[11px] font-black tracking-[0.4em] uppercase hover:tracking-[0.6em] transition-all flex items-center gap-3">
                  Initiate Partnership <ChevronRight className="w-4 h-4" />
                </a>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Send, Mail, Briefcase, User, MessageCircle, Layers } from 'lucide-react'

export default function FormSection() {
  const [formData, setFormData] = useState<any>({ name: '', company: '', sector: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const sectors = ['Global Infrastructure', 'Digital Transformation', 'Media Intelligence', 'Strategic Venture Capital', 'Real Estate Development', 'Sports & Entertainment']

  return (
    <section className="bg-primary px-8 md:px-20 py-40 relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full translate-x-[-50%] pointer-events-none"></div>

      <div className="container relative z-10 transition-all duration-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="flex flex-col gap-12 sticky top-40">
            <div className="flex flex-col gap-6">
               <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-accent font-black tracking-[0.5em] text-[10px] uppercase"
               >
                 Initiate Connection
               </motion.span>
               <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter text-text-main"
               >
                 Partner With <span className="text-gradient">ZARNEX.</span>
               </motion.h2>
               <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-text-muted text-lg font-light leading-relaxed max-w-lg mt-4"
               >
                 Connect with our executive team to explore architectural growth, ecosystem integration, and institutional asset management.
               </motion.p>
            </div>

            <div className="flex flex-col gap-8 mt-4">
               <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-8 group"
               >
                  <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center border border-black/5 group-hover:border-accent group-hover:text-accent transition-all duration-500 shadow-2xl">
                     <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] text-accent font-black uppercase tracking-[0.3em] mb-1">Corporate Enquiry</span>
                     <span className="text-xl font-bold text-text-main group-hover:text-accent transition-colors">executive.office@zarnex.com</span>
                  </div>
               </motion.div>
               <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-8 group"
               >
                  <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center border border-black/5 group-hover:border-accent group-hover:text-accent transition-all duration-500 shadow-2xl">
                     <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] text-accent font-black uppercase tracking-[0.3em] mb-1">Investment Relations</span>
                     <span className="text-xl font-bold text-text-main group-hover:text-accent transition-colors">+966 50 1990 007</span>
                  </div>
               </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 p-10 glass-navbar rounded-3xl border border-black/5 italic text-sm text-text-muted leading-relaxed font-light border-l-accent border-l-4"
            >
               "We specialize in the strategic internalization of high-value functions, creating resilient ecosystem systems that drive global market leadership."
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="card p-12 md:p-16 relative overflow-hidden"
          >
             {/* Decorative glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

             {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-10 relative z-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="flex flex-col gap-3">
                         <label className="text-[10px] font-black text-accent uppercase tracking-[0.3em] flex items-center gap-2">
                           <User className="w-3 h-3" /> Originator Name
                         </label>
                         <input 
                           type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                           className="form-input" placeholder="Full Name" 
                         />
                      </div>
                      <div className="flex flex-col gap-3">
                         <label className="text-[10px] font-black text-accent uppercase tracking-[0.3em] flex items-center gap-2">
                           <Briefcase className="w-3 h-3" /> Organization
                         </label>
                         <input 
                           type="text" required value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})}
                           className="form-input" placeholder="Company Name" 
                         />
                      </div>
                   </div>

                   <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-black text-accent uppercase tracking-[0.3em] flex items-center gap-2">
                        <Layers className="w-3 h-3" /> Core Strategic Sector
                      </label>
                      <select 
                        required value={formData.sector} onChange={(e) => setFormData({...formData, sector: e.target.value})}
                        className="form-input cursor-pointer appearance-none"
                      >
                         <option value="" disabled className="bg-primary">Select Targeted Sector</option>
                         {sectors.map(s => <option key={s} value={s} className="bg-primary text-text-main">{s}</option>)}
                      </select>
                   </div>

                   <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-black text-accent uppercase tracking-[0.3em] flex items-center gap-2">
                        <MessageCircle className="w-3 h-3" /> Partnership Vision
                      </label>
                      <textarea 
                        required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="form-input h-40 resize-none" placeholder="Elaborate on the strategic scope of this partnership..." 
                      />
                   </div>

                   <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="btn-primary w-full justify-center group"
                   >
                      Transmit Data Protocol <Send className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                   </motion.button>

                   <div className="flex justify-between items-center mt-6">
                      <span className="text-[9px] text-text-muted uppercase tracking-[0.3em]">Institutional Secure Layer</span>
                      <span className="text-[9px] text-text-muted uppercase tracking-[0.3em]">Ref: 2025.SEC.INT</span>
                   </div>
                </form>
             ) : (
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                   className="flex flex-col items-center justify-center py-24 text-center gap-10"
                 >
                   <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(197,160,89,0.2)] border border-accent/40">
                      <Check className="w-12 h-12 text-accent" />
                   </div>
                   <div className="flex flex-col gap-3">
                      <h3 className="text-4xl font-bold text-white tracking-tight">Transmission Complete.</h3>
                      <p className="text-text-muted max-w-sm font-light text-lg">Your data has been successfully routed to our Strategic Intelligence Unit. An executive will provide a response within the prescribed window.</p>
                   </div>
                   <button onClick={() => setIsSubmitted(false)} className="text-accent hover:tracking-[0.5em] transition-all duration-500 text-xs font-black uppercase tracking-[0.3em]">Initiate New Cycle</button>
                </motion.div>
             )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

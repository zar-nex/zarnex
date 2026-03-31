import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Twitter, Globe, ArrowUp, ArrowRight, ChevronRight } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-40 pb-16 px-8 md:px-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 pb-24 border-b border-white/5">
          <div className="lg:col-span-1 flex flex-col gap-10">
             <div className="flex flex-col items-start gap-2 group">
                <span className="text-3xl font-black tracking-[0.2em] font-outfit uppercase leading-none text-white group-hover:text-accent transition-all duration-500">
                  Z<span className="text-accent underline decoration-accent/30 underline-offset-4">A</span>RNEX
                </span>
                <span className="text-[8px] tracking-[0.5em] font-black text-white/40 uppercase group-hover:text-accent transition-colors duration-500">
                  HOLDING COMPANY
                </span>
             </div>
             <p className="text-sm text-white/40 leading-relaxed font-light max-w-xs">
                A premier global builder-operator platform orchestrating specialized intelligence and decentralized execution across 7 unique ecosystems.
             </p>
             <div className="flex gap-6">
                <motion.div whileHover={{ scale: 1.1 }} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all cursor-pointer">
                   <Linkedin className="w-5 h-5" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all cursor-pointer">
                   <Twitter className="w-5 h-5" />
                </motion.div>
             </div>
          </div>

          <div className="flex flex-col gap-10">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent border-b border-accent/20 pb-4 inline-block">Global Ecosystems</h4>
             <ul className="flex flex-col gap-5 text-[11px] font-bold text-white/50 uppercase tracking-widest">
                <li><a href="#ecosystems" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group-link"><ChevronRight className="w-3 h-3 text-accent/30" /> Real Estate & Urban Dev</a></li>
                <li><a href="#ecosystems" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group-link"><ChevronRight className="w-3 h-3 text-accent/30" /> Events & Sports Mgmt</a></li>
                <li><a href="#ecosystems" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group-link"><ChevronRight className="w-3 h-3 text-accent/30" /> Media & Creative Arts</a></li>
                <li><a href="#ecosystems" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group-link"><ChevronRight className="w-3 h-3 text-accent/30" /> Technology & Digital</a></li>
                <li><a href="#ecosystems" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group-link"><ChevronRight className="w-3 h-3 text-accent/30" /> Facilities & Operations</a></li>
             </ul>
          </div>

          <div className="flex flex-col gap-10">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent border-b border-accent/20 pb-4 inline-block">Connect Center</h4>
             <ul className="flex flex-col gap-8 text-[11px] font-bold text-white/50 uppercase tracking-widest">
                <li className="flex items-center gap-6">
                   <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                   </div>
                   <span className="leading-relaxed">Riyadh, Kingdom <br/>of Saudi Arabia</span>
                </li>
                <li className="flex items-center gap-6">
                   <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                   </div>
                   <span>+966 50 1990 007</span>
                </li>
                <li className="flex items-center gap-6">
                   <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                   </div>
                   <span className="lowercase">executive.office@zarnex.com</span>
                </li>
             </ul>
          </div>

          <div className="flex flex-col gap-10">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent border-b border-accent/20 pb-4 inline-block">Strategic Intel</h4>
             <p className="text-sm text-white/40 leading-relaxed font-light">Stay updated with ZARNEX Holding's global asset expansion and sector performance.</p>
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-white/5 rounded-xl p-3 border border-white/5 focus-within:border-accent/40 transition-all">
                   <input type="email" placeholder="Corporate Email" className="bg-transparent border-none text-[11px] font-bold w-full px-4 outline-none uppercase tracking-widest text-white placeholder:text-white/20" />
                   <button className="bg-accent text-primary h-12 w-12 rounded-lg flex items-center justify-center hover:shadow-[0_20px_40px_rgba(197,160,89,0.4)] transition-all shrink-0">
                      <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
                <span className="text-[9px] text-white/20 font-black uppercase tracking-[0.2em] px-4 italic">© 2026 Institutional Intel Unit</span>
             </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
             <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-[9px] font-black text-white/30 tracking-[0.4em] uppercase">Built & Operated by ZARNEX HOLDING.</span>
             </div>
             <a href="http://www.zar-nex.com" className="text-[9px] font-black text-accent tracking-[0.4em] uppercase hover:underline flex items-center gap-3">
               WWW.ZAR-NEX.COM <ExternalLink className="w-3 h-3" />
             </a>
          </div>

          <button onClick={scrollToTop} className="flex items-center gap-6 group transition-all">
             <span className="text-[9px] font-black tracking-[0.4em] uppercase text-white/30 group-hover:text-white transition-colors">Scroll to Origin</span>
             <motion.div 
               whileHover={{ y: -5 }}
               className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-2xl"
             >
                <ArrowUp className="w-6 h-6" />
             </motion.div>
          </button>
        </div>
      </div>
    </footer>
  )
}

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ShieldCheck, Globe, Building2, Ticket, Video, MonitorDot, Factory, Search } from 'lucide-react'
import HeroSection from './components/HeroSection'
import EcosystemSection from './components/EcosystemSection'
import FormSection from './components/FormSection'
import ValueProposition from './components/ValueProposition'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Ecosystems', href: '#ecosystems' },
    { name: 'Strategy', href: '#advantage' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <div className="relative min-h-screen bg-bg-main text-text-main antialiased selection:bg-accent/30 selection:text-white">
      {/* Search Overlay (Corporate Look) */}
      <AnimatePresence>
         {isMenuOpen && (
            <motion.div 
               initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
               className="fixed inset-0 z-[100] bg-primary p-8 md:p-32 flex flex-col gap-12"
            >
               <div className="container flex justify-between items-center">
                  <Logo />
                  <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center hover:bg-accent/20 transition-all border border-black/10">
                     <X className="w-6 h-6 text-accent" />
                  </button>
               </div>
               <div className="container flex flex-col gap-12 mt-20">
                  <div className="flex flex-col gap-8">
                     <span className="text-accent text-[12px] font-black tracking-[0.3em] uppercase">Navigation</span>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-6xl font-bold tracking-tighter">
                         {navLinks.map((link) => (
                            <motion.a 
                              whileHover={{ x: 20 }}
                              key={link.name} 
                              href={link.href} 
                              onClick={() => setIsMenuOpen(false)} 
                              className="hover:text-accent transition-colors block"
                            >
                              {link.name}
                            </motion.a>
                         ))}
                     </div>
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>

      {/* Corporate Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 py-8 px-4 md:px-20 ${
        isScrolled ? 'glass-navbar py-4 shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="container flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
            ))}
            <a href="#contact" className="btn-primary">
              Connect <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex md:hidden items-center gap-4">
             <button onClick={() => setIsMenuOpen(true)} className="p-2 text-accent">
                <Menu className="w-8 h-8" />
             </button>
          </div>
        </div>
      </nav>

      <main className="overflow-hidden">
        <HeroSection />
        <ValueProposition />
        <FormSection />
        <Footer />
      </main>

      {/* Global Indicator */}
      <div className="fixed left-8 bottom-8 z-50 hidden xl:block">
         <div className="flex items-center gap-5 bg-primary/80 backdrop-blur-xl p-4 px-8 rounded-full border border-black/5 shadow-xl">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-accent animate-ping absolute inset-0"></div>
              <div className="w-2 h-2 rounded-full bg-accent relative"></div>
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-text-muted">
              Global Platform <span className="text-accent ml-2">v2.0.4.AC</span>
            </span>
         </div>
      </div>
    </div>
  )
}

const Logo = () => (
   <a href="/" className="flex items-center no-underline group">
     <img
       src="/zarnex-logo.png"
       alt="ZARNEX Holding Company"
       className="h-10 w-auto object-contain transition-all duration-500 group-hover:opacity-80"
       style={{ maxWidth: '200px' }}
     />
   </a>
)

export default App

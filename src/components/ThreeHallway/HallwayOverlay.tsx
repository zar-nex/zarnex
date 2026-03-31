import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, ChevronRight, Hash, Database, Cpu, LayoutGrid, Box, Target } from 'lucide-react'

interface Subsidiary {
  id: string
  name: string
  sub: string
  desc: string
  color: string
  z: number
  side: 'left' | 'right'
}

const SUBS: Subsidiary[] = [
  {
    id: 'gallery',
    name: 'Art\nGallery',
    sub: 'Curating Vision',
    desc: 'Original works, sculpture, and immersive installation.',
    color: '#ff3300',
    z: -28,
    side: 'left',
  },
  {
    id: 'nft',
    name: 'NFT\nVault',
    sub: 'Digital Assets',
    desc: 'On-chain provenance and custody for blue-chip collectibles.',
    color: '#00ddff',
    z: -64,
    side: 'right',
  },
  {
    id: 'cafe',
    name: 'Photo\nCafé',
    sub: 'Community & Focus',
    desc: 'Working café and studio hybrid. Espresso and darkrooms.',
    color: '#b06a3a',
    z: -100,
    side: 'left',
  },
  {
    id: 'ai',
    name: 'AI\nInstitute',
    sub: 'Machine Learning',
    desc: 'Applied research and model deployment for enterprise.',
    color: '#00e87a',
    z: -136,
    side: 'right',
  },
  {
    id: 'robotics',
    name: 'Robot\nProduction',
    sub: 'Hardware Lab',
    desc: 'Precision assembly of autonomous industrial arms.',
    color: '#ff8800',
    z: -172,
    side: 'left',
  },
  {
    id: 'studio',
    name: 'Music\nStudio',
    sub: 'Sound Engineering',
    desc: 'Five live rooms. Spatial audio and artist development.',
    color: '#8800ff',
    z: -208,
    side: 'right',
  },
  {
    id: 'screens',
    name: 'Tech &\nScreens',
    sub: 'Display Technology',
    desc: 'LED architecture and immersive projection solutions.',
    color: '#0044ff',
    z: -244,
    side: 'left',
  },
]

export default function HallwayOverlay({ scrollProgress }: { scrollProgress: number }) {
  const [activeZone, setActiveZone] = useState(-1)
  
  const camZ = 8 + (SUBS[SUBS.length - 1].z - 18) * scrollProgress
  const realZ = -camZ

  useEffect(() => {
    let nearest = -1
    let nearestDist = Infinity
    
    SUBS.forEach((sub, i) => {
      const d = Math.abs(sub.z - realZ)
      if (d < nearestDist) {
        nearestDist = d
        nearest = i
      }
    })
    
    if (nearestDist < 18) {
      if (nearest !== activeZone) setActiveZone(nearest)
    } else {
      if (activeZone !== -1) setActiveZone(-1)
    }
  }, [realZ, activeZone])

  return (
    <div className="fixed inset-0 pointer-events-none z-20 font-inter">
      {/* HUD: Logo & Status */}
      <div className="absolute top-32 left-12 flex flex-col gap-2">
         <span className="text-[10px] font-black tracking-[0.5em] text-accent uppercase">Ecological Infrastructure</span>
         <div className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-bold tracking-widest text-text-main">SYSTEM STATUS: <span className="text-accent">SYNCHRONIZED</span></span>
         </div>
      </div>

      {/* HUD: Sector Number */}
      <div className="absolute top-32 right-12 text-right flex flex-col gap-1 hidden md:flex">
         <span className="text-7xl md:text-8xl font-black text-text-main/10 tracking-tighter leading-none">
            {activeZone !== -1 ? String(activeZone + 1).padStart(3, '0') : 'INIT'}
         </span>
         <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase mr-2">Target Sector Vector</span>
      </div>

      {/* Center Stage Card */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeZone !== -1 ? (
            <motion.div 
               key={SUBS[activeZone].id}
               initial={{ opacity: 0, scale: 0.95, y: 30 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 1.05, y: -30 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="flex flex-col items-center text-center max-w-xl gap-8"
            >
               <span className="text-[10px] font-black tracking-[0.6em] text-accent uppercase bg-accent/10 p-2 px-6 rounded-full border border-accent/20">
                  Sector {activeZone + 1} &bull; {SUBS[activeZone].sub}
               </span>
               <h2 className="text-7xl md:text-8xl font-bold tracking-tighter text-text-main">
                  {SUBS[activeZone].name.replace('\n', ' ')}
               </h2>
               <p className="text-lg font-light text-text-muted leading-relaxed uppercase tracking-[0.2em]">
                  {SUBS[activeZone].desc}
               </p>
               <div className="w-12 h-px bg-accent/50"></div>
            </motion.div>
          ) : (
            scrollProgress < 0.02 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-12"
              >
                  <div className="flex flex-col items-center gap-4">
                     <span className="text-[11px] font-black tracking-[0.8em] text-accent uppercase">Commence Immersion</span>
                     <div className="w-px h-24 bg-gradient-to-b from-accent/80 to-transparent animate-pulse"></div>
                  </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>

      {/* Coordinate Readout */}
      <div className="absolute bottom-12 right-12 flex flex-col gap-2">
         <div className="flex items-center gap-10">
            <div className="flex flex-col text-right">
               <span className="text-[9px] font-black text-text-muted/60 uppercase tracking-[0.3em]">Depth Vector</span>
               <span className="text-xl font-bold text-text-main tracking-widest">{String(Math.abs(Math.round(realZ))).padStart(5, '0')}z</span>
            </div>
            <div className="flex flex-col text-right">
               <span className="text-[9px] font-black text-text-muted/60 uppercase tracking-[0.3em]">Operational Phase</span>
               <span className="text-xl font-bold text-accent tracking-widest">{(scrollProgress * 100).toFixed(2)}%</span>
            </div>
         </div>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/5">
         <motion.div 
            className="h-full bg-accent shadow-[0_0_20px_#c5a059]"
            animate={{ width: `${scrollProgress * 100}%` }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
         />
      </div>

      {/* Sector Navigation Dots */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-6">
         {SUBS.map((s, i) => (
            <div key={s.id} className="flex items-center gap-4 group">
               <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${activeZone === i ? 'bg-accent scale-[3] shadow-[0_0_10px_#d4af37]' : 'bg-black/10'}`} />
               <span className={`text-[10px] font-black uppercase tracking-[0.3em] font-outfit transition-all duration-500 opacity-0 group-hover:opacity-100 ${activeZone === i ? 'text-accent opacity-100 translate-x-2' : 'text-text-muted'}`}>
                  {s.id}
               </span>
            </div>
         ))}
      </div>
    </div>
  )
}

import React, { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { HallwayScene } from './ThreeHallway/HallwayScene'
import HallwayOverlay from './ThreeHallway/HallwayOverlay'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [progressVal, setProgressVal] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgressVal(latest)
  })

  return (
    <div ref={containerRef} className="relative h-[1200vh] bg-primary">
      {/* 3D Canvas Layer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Canvas shadows gl={{ antialias: true, alpha: false, stencil: false }}>
          <React.Suspense fallback={null}>
            <HallwayScene scrollProgress={progressVal} />
          </React.Suspense>
        </Canvas>
        
        {/* HTML Overlay Layer */}
        <HallwayOverlay scrollProgress={progressVal} />
      </div>
      
      {/* Scroll Hint for UX */}
      <div className="absolute top-[90vh] left-1/2 -translate-x-1/2 text-text-muted/40 pointer-events-none z-30">
         <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
         >
            <span className="text-[10px] uppercase tracking-[0.4em] font-black tracking-widest text-text-muted">Scroll to Traverse</span>
            <div className="w-px h-12 bg-accent/30" />
         </motion.div>
      </div>
      
      {/* Anchor Navigation Targets for Global Navbar */}
      <div id="ecosystems" className="absolute top-[150vh] w-full invisible pointer-events-none" />
      <div id="mission" className="absolute top-[1100vh] w-full invisible pointer-events-none" />
    </div>
  )
}

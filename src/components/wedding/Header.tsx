
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import FlowerDecoration2 from "./FlowerDecoration2";
import gunungan from "../../media/gunungan.webp";
import bg from "../../media/gunung.webp";
import React, { useEffect, useState } from "react";

export function Header() {
  // On Android (especially low/mid devices), continuous transform animations + blend modes
  // on full-screen backgrounds can cause white flicker during scrolling/repaint.
  // Keep layout identical, but disable the expensive parts for coarse-pointer/mobile or reduced-motion.
  const [isMotionSafe, setIsMotionSafe] = useState(true);

  useEffect(() => {
    const mqReduce = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const mqCoarse = window.matchMedia?.("(hover: none) and (pointer: coarse)");

    const update = () => {
      const reduce = mqReduce?.matches ?? false;
      const coarse = mqCoarse?.matches ?? false;
      setIsMotionSafe(!(reduce || coarse));
    };

    update();
    mqReduce?.addEventListener?.("change", update);
    mqCoarse?.addEventListener?.("change", update);
    return () => {
      mqReduce?.removeEventListener?.("change", update);
      mqCoarse?.removeEventListener?.("change", update);
    };
  }, []);

  return (
    <section className="wedding-header relative h-screen w-full overflow-hidden bg-stone-100 flex items-center justify-center" style={{
      boxShadow: 'inset 0 -80px 100px -50px rgba(0, 0, 0, 0.35)'
    }}>
      
      {/* Parallax Background Image - Mount Bromo Scenery */}
      <motion.div 
        className="wedding-header-bg absolute inset-0 z-0 bg-stone-900"
        initial={{ scale: isMotionSafe ? 1.1 : 1 }}
        animate={{ scale: 1 }}
        transition={
          isMotionSafe
            // One-time subtle ken-burns (no infinite zoom in/out) to reduce GPU load on Android
            ? { duration: 6, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0 }
        }
      >
        <div className={`absolute inset-0 bg-stone-900/30 z-15 ${isMotionSafe ? "mix-blend-multiply" : ""}`} />
        <img 
          src={bg} 
          alt="Javanese Scenery" 
          className="h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <FlowerDecoration2 className="z-[15]" animate={false} />
      </motion.div>

      {/* Decorative Overlay Pattern (Batik Motif subtle) */}
      {/* <div
        className="wedding-header-pattern absolute inset-0 z-10 opacity-10"
        style={{ backgroundImage: `url(${batik})` }}
      /> */}

      {/* Content */}
      <div className="relative z-20 text-center text-white space-y-6 px-4">
        {/* Gunungan Silhouette Top Decoration */}
        <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-16 h-16 mx-auto mb-4 opacity-80"
        >
             {/* Simple Gunungan-like SVG Shape */}
             <img src={gunungan} alt="Gunungan" className="w-16" />
        </motion.div>

        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-sm tracking-[0.3em] uppercase font-medium drop-shadow-md text-amber-50"
        >
          Pernikahan
        </motion.p>
        
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="font-handwriting-elegant text-5xl md:text-7xl lg:text-8xl drop-shadow-lg"
        >
          Isma <br /> <span className="text-3xl md:text-5xl font-sans font-light">&</span> Irwansyah
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex items-center justify-center gap-4 text-sm md:text-base font-light tracking-wide drop-shadow-md opacity-90"
        >
          <span className="w-12 h-px bg-white/60" />
          <span>Sabtu, 27 Desember 2025</span>
          <span className="w-12 h-px bg-white/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isMotionSafe ? { opacity: 1, y: [0, 10, 0] } : { opacity: 1 }}
          transition={isMotionSafe ? { duration: 2, repeat: Infinity, delay: 1 } : { duration: 0 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="pt-16 flex flex-col items-center">
            <ChevronDown className="text-white opacity-80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

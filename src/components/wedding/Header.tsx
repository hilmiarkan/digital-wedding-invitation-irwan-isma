
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-100 flex items-center justify-center">
      {/* Parallax Background Image - Mount Bromo Scenery */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-stone-900/30 z-10 mix-blend-multiply" />
        <img 
          src="https://images.unsplash.com/photo-1722661671972-89e5e2fb532a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
          alt="Javanese Scenery" 
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Decorative Overlay Pattern (Batik Motif subtle) */}
      <div className="absolute inset-0 z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/batik.png')]" />

      {/* Content */}
      <div className="relative z-20 text-center text-white space-y-6 px-4">
        {/* Gunungan Silhouette Top Decoration */}
        <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-16 h-16 mx-auto mb-4 opacity-80"
        >
             {/* Simple Gunungan-like SVG Shape */}
             <svg viewBox="0 0 100 100" fill="currentColor" className="text-amber-100 drop-shadow-md">
                <path d="M50 0 C20 40 10 60 10 100 L90 100 C90 60 80 40 50 0 Z" />
             </svg>
        </motion.div>

        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase font-medium drop-shadow-md text-amber-50"
        >
          Pernikahan
        </motion.p>
        
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl drop-shadow-lg"
        >
          Isma <br /> <span className="text-3xl md:text-5xl font-sans font-light">dan</span> Irwansyah
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 text-sm md:text-base font-light tracking-wide drop-shadow-md opacity-90"
        >
          <span className="w-12 h-px bg-white/60" />
          <span>Sabtu, 27 Desember 2025</span>
          <span className="w-12 h-px bg-white/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-white opacity-80" />
        </motion.div>
      </div>
    </section>
  );
}

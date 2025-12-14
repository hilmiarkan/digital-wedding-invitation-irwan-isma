
import { motion } from "motion/react";
import { MailOpen, Flower } from "lucide-react";
import { useState } from "react";
import gunungan from "../../media/gunungan.png";

interface SplashCoverProps {
  guestName: string;
  onOpen: () => void;
  onStartOpening: () => void;
}

export function SplashCover({ guestName, onOpen, onStartOpening }: SplashCoverProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    onStartOpening();
    setTimeout(() => {
      onOpen();
    }, 2500); 
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-auto"
    >
      
      {/* Left Gate Panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={isOpening ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#fdfbf7] z-20 flex items-center justify-end shadow-[5px_0_30px_rgba(0,0,0,0.1)]"
        style={{ transformOrigin: "left center" }}
      >
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-stone-300/30 to-transparent pointer-events-none" />
        
        {/* Gunungan Outline Left Half */}
        <div className="absolute bottom-0 right-0 w-48 h-96 overflow-hidden opacity-10">
            <svg viewBox="0 0 100 200" preserveAspectRatio="none" className="w-full h-full fill-stone-800">
                <path d="M100 0 L100 200 L0 200 C20 150 60 100 100 0 Z" />
            </svg>
        </div>
      </motion.div>

      {/* Right Gate Panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={isOpening ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#fdfbf7] z-20 flex items-center justify-start shadow-[-5px_0_30px_rgba(0,0,0,0.1)]"
      >
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-stone-300/30 to-transparent pointer-events-none" />

        {/* Gunungan Outline Right Half */}
        <div className="absolute bottom-0 left-0 w-48 h-96 overflow-hidden opacity-10">
            <svg viewBox="0 0 100 200" preserveAspectRatio="none" className="w-full h-full fill-stone-800">
                <path d="M0 0 L0 200 L100 200 C80 150 40 100 0 0 Z" />
            </svg>
        </div>
      </motion.div>

      {/* Content Layer */}
      <motion.div
        className="absolute z-30 flex flex-col items-center justify-center w-full h-full pointer-events-none"
        animate={isOpening ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="pointer-events-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-sm w-[90%] text-center border border-stone-100 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
            <div className="absolute inset-3 border-2 border-stone-200 rounded-md pointer-events-none" />
            
            {/* Top Ornamental Icon */}
            <div className="flex justify-center mb-6">
                <div className="text-amber-600 opacity-60">
                    <img src={gunungan} alt="Gunungan" className="w-12" />
                </div>
            </div>

            <div className="relative z-10">
                <p className="font-serif text-stone-500 italic mb-3 tracking-widest text-sm">Pernikahan</p>
                <h1 className="font-handwriting-elegant text-4xl text-stone-800 font-bold mb-2">Isma</h1>
                <p className="font-serif text-xl text-amber-600 mb-2">dan</p>
                <h1 className="font-handwriting-elegant text-4xl text-stone-800 font-bold mb-6">Irwansyah</h1>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent my-6" />

                <div className="mb-8">
                    <p className="text-stone-400 text-xs uppercase tracking-widest mb-3">Kepada Yth.</p>
                    <div className="font-serif text-xl font-bold text-stone-800 bg-stone-50 py-2 px-4 rounded border border-stone-100 shadow-inner inline-block min-w-[200px]">
                        {guestName}
                    </div>
                </div>

                <motion.button
                    onClick={handleOpen}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-3 bg-stone-800 text-amber-50 px-8 py-3 rounded shadow-lg transition-all hover:bg-stone-700 hover:shadow-xl"
                >
                    <MailOpen size={18} className="text-amber-200" />
                    <span className="tracking-wide uppercase text-xs font-bold">Buka Undangan</span>
                </motion.button>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

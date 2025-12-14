
import { motion } from "motion/react";
import { FlowerDecoration } from "./FlowerDecoration";

export function Footer() {
  return (
    <footer className="py-20 bg-stone-900 text-white text-center px-4 relative overflow-hidden">
      <FlowerDecoration />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-10 space-y-12 max-w-3xl mx-auto"
      >
        <div className="space-y-6">
            <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-serif text-2xl text-amber-100"
            >
                Kami Yang Berbahagia
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-stone-300">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-1"
                >
                    <p className="font-bold text-white">Kel. Bpk. Suwadi</p>
                    <p>& Ibu Sugiarti</p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-1"
                >
                    <p className="font-bold text-white">Kel. Bpk. Ibrahim Z</p>
                    <p>& Ibu Siti Hajar</p>
                </motion.div>
            </div>
            
            <div className="pt-8">
                 <motion.h2 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl mb-4"
                 >
                    Isma & Irwansyah
                 </motion.h2>
            </div>
        </div>

        <div className="w-full h-px bg-stone-800" />

        <div className="space-y-4">
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-stone-400 max-w-xl mx-auto italic font-light leading-relaxed text-sm"
            >
            "Dan diantara tanda-tanda kekuasaan-Nya adalah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berfikir"
            </motion.p>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-stone-500 text-xs"
            >
                (Q.S Ar-Rum : 21)
            </motion.p>
        </div>

        <div className="pt-8 text-[10px] text-stone-600">
            <p>Dibuat dengan ☕ oleh arknmaulana</p>
        </div>
      </motion.div>
    </footer>
  );
}

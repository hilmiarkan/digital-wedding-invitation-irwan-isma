
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-20 bg-stone-900 text-white text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-12 max-w-3xl mx-auto"
      >
        <div className="space-y-6">
            <h3 className="font-serif text-2xl text-amber-100">Kami Yang Berbahagia</h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-stone-300">
                <div className="space-y-1">
                    <p className="font-bold text-white">Kel. Bpk. Suwadi</p>
                    <p>& Ibu Sugiarti</p>
                </div>
                <div className="space-y-1">
                    <p className="font-bold text-white">Kel. Bpk. Ibrahim Z</p>
                    <p>& Ibu Siti Hajar</p>
                </div>
            </div>
            
            <div className="pt-8">
                 <h2 className="font-serif text-4xl md:text-5xl mb-4">Isma & Irwansyah</h2>
            </div>
        </div>

        <div className="w-full h-px bg-stone-800" />

        <div className="space-y-4">
            <p className="text-stone-400 max-w-xl mx-auto italic font-light leading-relaxed text-sm">
            "Dan diantara tanda-tanda kekuasaan-Nya adalah diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berfikir"
            </p>
            <p className="text-stone-500 text-xs">(Q.S Ar-Rum : 21)</p>
        </div>

        <div className="pt-8 text-[10px] text-stone-600">
            <p>Dibuat dengan ❤️ oleh Figma Make</p>
        </div>
      </motion.div>
    </footer>
  );
}

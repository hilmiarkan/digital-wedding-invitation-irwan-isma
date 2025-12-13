
import { motion } from "motion/react";

export function CoupleInfo() {
  return (
    <section className="py-24 px-4 bg-stone-50 overflow-hidden relative">
      {/* Background Ornament */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 rotate-180 pointer-events-none">
         <img src="https://images.unsplash.com/photo-1577926438757-8dfef3e621ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" className="w-full h-full object-cover mix-blend-multiply" alt="Batik" />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none">
         <img src="https://images.unsplash.com/photo-1577926438757-8dfef3e621ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" className="w-full h-full object-cover mix-blend-multiply" alt="Batik" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16 space-y-6"
        >
            <div className="font-serif text-2xl text-stone-600 mb-4">Bismillahirrahmanirrahim</div>
            <p className="text-stone-500 max-w-lg mx-auto italic">
              "Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan."
            </p>
            <p className="text-stone-600 font-medium mt-4">
              Ya Allah, perkenankan putra putri kami:
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center mb-16">
            {/* Bride - Isma */}
            <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center space-y-6"
            >
                <div className="p-8 border border-amber-200/50 rounded-full bg-white/50 shadow-sm relative">
                    <div className="absolute inset-0 border border-stone-100 rounded-full m-1" />
                    <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-stone-800 font-bold mb-2">Isma Harika Nurrohmah</h3>
                        <div className="w-12 h-1 bg-amber-200 mx-auto mb-3" />
                        <p className="text-stone-600">Putri dari Bpk. Suwadi</p>
                        <p className="text-stone-600">& Ibu Sugiati</p>
                    </div>
                </div>
            </motion.div>

            {/* Groom - Irwansyah */}
            <motion.div 
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center space-y-6"
            >
                <div className="p-8 border border-amber-200/50 rounded-full bg-white/50 shadow-sm relative">
                    <div className="absolute inset-0 border border-stone-100 rounded-full m-1" />
                    <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-stone-800 font-bold mb-2">Irwansyah</h3>
                        <div className="w-12 h-1 bg-amber-200 mx-auto mb-3" />
                        <p className="text-stone-600">Putra dari Bpk. Ibrahim Z</p>
                        <p className="text-stone-600">& Ibu Siti Hajar</p>
                    </div>
                </div>
            </motion.div>
        </div>

        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center max-w-2xl mx-auto px-4"
        >
            <p className="text-stone-600 italic leading-relaxed">
                "Untuk melaksanakan syariat agama-Mu, mengikuti sunnah Rasul-Mu dalam membentuk rumah tangga sakinah, mawadah, warahmah dalam ikatan pernikahan"
            </p>
        </motion.div>
      </div>
    </section>
  );
}

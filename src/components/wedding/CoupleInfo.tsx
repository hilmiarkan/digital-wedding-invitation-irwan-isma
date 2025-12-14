
import { motion } from "motion/react";
import { FlowerDecoration } from "./FlowerDecoration";
import FlowerDecoration2 from "./FlowerDecoration2";
import gunungan from '../../media/gunungan.webp';

export function CoupleInfo() {
  return (
    <section className="py-24 px-4 bg-wood-light overflow-hidden relative -mt-[1px]" style={{
      boxShadow: 'inset 0 80px 100px -50px rgba(0, 0, 0, 0.35), inset 0 -80px 100px -50px rgba(0, 0, 0, 0.35)'
    }}>
      {/* <FlowerDecoration /> */}
      <FlowerDecoration2 className="z-[15]" />

      <div className="max-w-4xl mx-auto relative z-10">
      
        <div className="text-center mb-16 space-y-6">
          <img src={gunungan} alt="Gunungan" className="w-16 mx-auto" />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="font-handwriting-elegant text-2xl text-stone-600 mb-4"
            >
              Bismillahirrahmanirrahim
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-stone-500 max-w-lg mx-auto italic"
            >
              "Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan."
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-stone-600 font-medium mt-4"
            >
              Ya Allah, perkenankan putra putri kami:
            </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
            {/* Bride - Isma */}
            <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4 w-full md:flex-1 md:max-w-xs"
            >
                <div className="w-full">
                    <h3 className="font-handwriting-elegant text-2xl md:text-3xl text-stone-800 font-bold mb-2">Isma Harika Nurrohmah</h3>
                    <div className="w-12 h-1 bg-amber-200 mx-auto mb-3" />
                    <p className="text-stone-600">Putri dari Bpk. Suwadi</p>
                    <p className="text-stone-600">& Ibu Sugiati</p>
                </div>
            </motion.div>

            {/* Ampersand */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl text-amber-600 font-serif flex-shrink-0"
            >
                &
            </motion.div>

            {/* Groom - Irwansyah */}
            <motion.div 
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4 w-full md:flex-1 md:max-w-xs"
            >
                <div className="w-full">
                    <h3 className="font-handwriting-elegant text-2xl md:text-3xl text-stone-800 font-bold mb-2">Irwansyah</h3>
                    <div className="w-12 h-1 bg-amber-200 mx-auto mb-3" />
                    <p className="text-stone-600">Putra dari Bpk. Ibrahim Z</p>
                    <p className="text-stone-600">& Ibu Siti Hajar</p>
                </div>
            </motion.div>
        </div>

        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            viewport={{ once: true }}
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

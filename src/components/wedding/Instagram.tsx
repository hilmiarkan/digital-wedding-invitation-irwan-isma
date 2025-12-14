import { motion } from "motion/react";
import { Instagram as InstagramIcon } from "lucide-react";
import { FlowerDecoration } from "./FlowerDecoration";
import gunungan from '../../media/gunungan.webp';

export function Instagram() {
  return (
    <section className="py-20 px-4 bg-wood-soft overflow-hidden relative -mt-[1px]" style={{
      boxShadow: 'inset 0 80px 100px -50px rgba(0, 0, 0, 0.35), inset 0 -80px 100px -50px rgba(0, 0, 0, 0.35)'
    }}>
      <FlowerDecoration />
      <div className="max-w-4xl mx-auto relative z-10">
        <img src={gunungan} alt="Gunungan" className="w-16 mx-auto" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-8">
            Ikuti Perjalanan Kami
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* Isma Instagram */}
            <motion.a
              href="https://www.instagram.com/isma.harika?utm_source=qr&igsh=MWZ5cWNtbnVxMWc0aQ=="
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200/50 group"
            >
              <InstagramIcon className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
              <div className="text-left">
                <p className="font-semibold text-stone-800">Isma Harika</p>
                <p className="text-sm text-stone-500">@isma.harika</p>
              </div>
            </motion.a>

            {/* Irwansyah Instagram */}
            <motion.a
              href="https://www.instagram.com/ketan_hitam36?igsh=MXJva3ZqZDh1anRiYg=="
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200/50 group"
            >
              <InstagramIcon className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
              <div className="text-left">
                <p className="font-semibold text-stone-800">Irwansyah</p>
                <p className="text-sm text-stone-500">@ketan_hitam36</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


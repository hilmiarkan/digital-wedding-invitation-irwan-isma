
import { motion } from "motion/react";
import { MapPin, Clock, Calendar } from "lucide-react";
import { FlowerDecoration } from "./FlowerDecoration";

export function EventDetails() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <FlowerDecoration />
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Akad Nikah Section */}
        <div className="text-center space-y-8">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="font-serif text-3xl text-stone-800"
            >
                Akad Nikah
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-stone-50 rounded-2xl p-8 border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden max-w-xl mx-auto"
            >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-50 rounded-full opacity-50 blur-xl" />
                
                <div className="space-y-6 text-stone-600">
                    <div className="flex flex-col items-center gap-2">
                        <Calendar className="w-6 h-6 text-amber-600" />
                        <span className="font-bold text-lg text-stone-800">Sabtu, 27 Desember 2025</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Clock className="w-6 h-6 text-amber-600" />
                        <span>Pukul 13.00 WIB</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <MapPin className="w-6 h-6 text-amber-600" />
                        <div className="text-center">
                            <p className="font-medium text-stone-800">Bertempat di</p>
                            <p className="text-sm">Kediaman Mempelai Wanita</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <a 
                    href="https://www.google.com/maps/search/?api=1&query=Jln.+Ikan+Kembangwaru+RT+004+RW+001+Lingk.+Kaliasin+Karangrejo+Banyuwangi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-2.5 px-6 bg-white border border-amber-200 text-amber-800 rounded-lg text-sm font-medium hover:bg-amber-50 transition-colors"
                    >
                    Lihat Lokasi
                    </a>
                </div>
            </motion.div>
        </div>

        {/* Resepsi Section */}
        <div className="space-y-8">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="text-center max-w-2xl mx-auto space-y-4"
             >
                <div className="w-full h-px bg-stone-200 my-8" />
                <h3 className="font-serif text-xl font-bold text-stone-600">Assalamualaikum Warahmatullahi Wabarakatuh</h3>
                <p className="text-stone-600 leading-relaxed">
                    Dengan segala kerendahan hati dan dengan ungkapan syukur atas karunia Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara resepsi pernikahan putra putri kami yang akan diselenggarakan pada:
                </p>
             </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-stone-50 rounded-2xl p-8 border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden max-w-xl mx-auto text-center"
            >
                <div className="absolute top-0 left-0 -mt-4 -ml-4 w-24 h-24 bg-amber-50 rounded-full opacity-50 blur-xl" />
                
                <h3 className="font-serif text-3xl text-amber-800 mb-6 font-bold">Resepsi</h3>
                
                <div className="space-y-6 text-stone-600">
                    <div className="flex flex-col items-center gap-2">
                        <Calendar className="w-6 h-6 text-amber-600" />
                        <span className="font-bold text-lg text-stone-800">Minggu, 28 Desember 2025</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Clock className="w-6 h-6 text-amber-600" />
                        <span>Pukul 14.00 - 17.00 WIB</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <MapPin className="w-6 h-6 text-amber-600" />
                        <div className="text-center">
                            <p className="font-medium text-stone-800">Bertempat di</p>
                            <p className="text-sm font-semibold">Kediaman Mempelai Wanita</p>
                            <p className="text-sm mt-1">Jln. Ikan Kembangwaru RT 004 RW 001</p>
                            <p className="text-sm">Lingk. Kaliasin. Kel. Karangrejo</p>
                            <p className="text-sm">Kec/Kab. Banyuwangi</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-stone-200 shadow-sm relative z-0">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=Jln.+Ikan+Kembangwaru+RT+004+RW+001+Lingk.+Kaliasin+Karangrejo+Banyuwangi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight={0} 
                            marginWidth={0}
                            title="Map"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    
                    <a 
                    href="https://www.google.com/maps/search/?api=1&query=Jln.+Ikan+Kembangwaru+RT+004+RW+001+Lingk.+Kaliasin+Karangrejo+Banyuwangi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-2.5 px-6 bg-white border border-amber-200 text-amber-800 rounded-lg text-sm font-medium hover:bg-amber-50 transition-colors"
                    >
                    Lihat Lokasi di Google Maps
                    </a>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center max-w-2xl mx-auto space-y-4 pt-8"
            >
                <p className="text-stone-600 leading-relaxed">
                    Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dalam acara tersebut untuk memberikan doa restu kepada kedua mempelai.
                </p>
                <p className="text-stone-600 font-medium">
                    Atas kehadiran dan doa restunya kami ucapkan terimakasih.
                </p>
                <h3 className="font-serif text-xl font-bold text-stone-600 mt-4">Wassalamualaikum Warahmatullahi Wabarakatuh</h3>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

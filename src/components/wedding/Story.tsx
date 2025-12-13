
import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Story() {
  const stories = [
    {
      year: "2018",
      title: "Pertemuan Pertama",
      desc: "Kami bertemu di sebuah acara kampus. Sebuah tatapan singkat yang menjadi awal dari segalanya."
    },
    {
      year: "2020",
      title: "Menjalin Hubungan",
      desc: "Setelah 2 tahun berteman, kami memutuskan untuk melangkah lebih jauh dan saling berkomitmen."
    },
    {
      year: "2024",
      title: "Lamaran",
      desc: "Irwansyah memberanikan diri untuk meminta restu kepada orang tua Isma. Sebuah langkah besar menuju masa depan."
    },
    {
      year: "2025",
      title: "Pernikahan",
      desc: "Insya Allah, kami akan menyempurnakan separuh agama kami dalam ikatan suci pernikahan."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl text-stone-800">Cerita Kami</h2>
          <div className="w-20 h-1 bg-amber-200 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-stone-200 md:left-1/2 md:-ml-[0.5px]" />

          <div className="space-y-12">
            {stories.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-0 md:left-1/2 md:-ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-amber-200 z-10">
                   <Heart size={12} className="text-amber-500 fill-amber-500" />
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className={`bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm relative ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

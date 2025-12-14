
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import FlowerDecoration2 from "./FlowerDecoration2";

export function Story() {
  const stories = [
    {
      date: "02 Desember 2022",
      title: "Awal yang Dingin",
      desc: [
        "Dicomblangkan oleh sahabat saya, perkenalan kami bermula via WhatsApp. Kesan pertama? Dia begitu dingin dan misterius. Saya merasa dia adalah \"wanita mahal\" yang sulit digapai. Merasa perlu memantas diri, saya memilih mundur teratur. \"Jika jodoh, pasti bertemu lagi,\" batin saya saat itu."
      ]
    },
    {
      date: "29 April 2025",
      title: "Drama 12 Jam",
      desc: [
        "Tiga tahun berlalu. Setelah mendapat lampu hijau dari salah satu Ustazah bahwa dia masih sendiri, saya memberanikan diri menyapa kembali. Tapi sejarah berulang! Pesan saya tidak dibalas selama 12 jam. Di situ saya gundah gulana, hampir putus asa, dan berniat mundur lagi. Ternyata... dia hanya sedang sakit dan butuh istirahat. Rasa lega itu tak terlukiskan!"
      ]
    },
    {
      date: "Mei - Juni 2025",
      title: "Niat yang \"Sat-Set\"",
      desc: [
        "Tak ingin terjebak dalam hubungan tanpa kepastian, saya langsung meminta izin keluarga untuk serius. Reaksi mereka? Kaget, bingung, tapi bahagia luar biasa. Berbekal restu dari Abah Romo KH. Marzuki Mustamar, saya mantap melangkah."
      ]
    },
    {
      date: "29 Juni 2025",
      title: "Lamaran Virtual",
      desc: [
        "Hari bersejarah itu tiba. Didampingi keluarga besar SMP Islam Sabilurrosyad, saya resmi melamarnya. Momen ini penuh haru, karena orang tua kandung saya hanya bisa menyaksikan dan memberi restu via Video Call. Meski terpisah jarak, doa mereka terasa begitu dekat."
      ]
    },
    {
      date: "27 Desember 2025",
      title: "Awal Selamanya",
      desc: [
        "InsyaAllah, di tanggal ini kami berikhtiar menyempurnakan separuh agama. Mengikat janji suci untuk saling membahagiakan, hingga ke surga-Nya."
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-wood-soft overflow-hidden relative -mt-[1px]" style={{
      boxShadow: 'inset 0 80px 100px -50px rgba(0, 0, 0, 0.35), inset 0 -80px 100px -50px rgba(0, 0, 0, 0.35)'
    }}>
      <FlowerDecoration2 className="z-[5]" />
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-handwriting-elegant text-3xl text-stone-800">Kisah Kami</h2>
          <p className="text-stone-500 text-sm mt-2">Love Story</p>
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
                transition={{ duration: 1.2, delay: i * 0.2 }}
                viewport={{ once: true }}
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
                      {item.date}
                    </span>
                    <h3 className="font-handwriting-elegant text-xl font-bold text-stone-800 mb-2">{item.title}</h3>
                    <div className="text-stone-600 text-sm leading-relaxed space-y-4">
                        {item.desc.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
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

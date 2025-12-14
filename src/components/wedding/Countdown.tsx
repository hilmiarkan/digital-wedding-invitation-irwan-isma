
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { FlowerDecoration } from "./FlowerDecoration";

export function Countdown() {
  const targetDate = new Date("2025-12-27T13:00:00"); 

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      hari: 0,
      jam: 0,
      menit: 0,
      detik: 0
    };

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSaveDate = () => {
    // Coordinates for Kediaman Mempelai Wanita, Banyuwangi
    // Jln. Ikan Kembangwaru RT 004 RW 001, Lingk. Kaliasin, Kel. Karangrejo, Kec/Kab. Banyuwangi
    const latitude = -8.2194; // Approximate coordinates for Banyuwangi area
    const longitude = 114.3694;
    
    const event = {
      title: "Pernikahan Isma & Irwansyah",
      description: "Resepsi Pernikahan Isma & Irwansyah\n\nBertempat di:\nKediaman Mempelai Wanita\nJln. Ikan Kembangwaru RT 004 RW 001\nLingk. Kaliasin. Kel. Karangrejo\nKec/Kab. Banyuwangi",
      startTime: "20251227T130000",
      endTime: "20251228T170000",
      location: "Kediaman Mempelai Wanita, Jln. Ikan Kembangwaru RT 004 RW 001, Lingk. Kaliasin, Kel. Karangrejo, Kec/Kab. Banyuwangi",
      geoLat: latitude,
      geoLon: longitude
    };
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invitation//Isma & Irwansyah//EN
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${event.startTime}
DTEND:${event.endTime}
LOCATION:${event.location}
DESCRIPTION:${event.description}
GEO:${event.geoLat};${event.geoLon}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "wedding-invitation.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-6 bg-stone-50 text-center relative overflow-hidden">
      <FlowerDecoration />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <h2 className="font-serif text-3xl text-stone-800">Menghitung Hari</h2>
        <p className="text-stone-500 italic">Menuju hari bahagia kami:</p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div 
                key={unit} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-sm border border-stone-200 flex items-center justify-center mb-2">
                <span className="font-serif text-2xl md:text-3xl text-stone-800 font-bold">
                  {String(value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs uppercase tracking-widest text-stone-500">{unit}</span>
            </motion.div>
          ))}
        </div>

        <div className="pt-8 relative">
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute top-1/2 left-0 h-px bg-stone-200 -z-10" 
            />
            <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                onClick={handleSaveDate}
                className="bg-stone-800 text-white px-6 py-2 rounded-full inline-flex items-center gap-2 text-sm font-medium shadow-md hover:bg-stone-700"
            >
                <Calendar size={16} />
                Buat Reminder
            </motion.button>
        </div>
      </motion.div>
    </section>
  );
}


import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

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
    const event = {
      title: "Pernikahan Isma & Irwansyah",
      description: "Resepsi Pernikahan Isma & Irwansyah",
      startTime: "20251227T130000",
      endTime: "20251228T170000",
      location: "Banyuwangi"
    };
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${event.startTime}
DTEND:${event.endTime}
LOCATION:${event.location}
DESCRIPTION:${event.description}
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
    <section className="py-20 px-6 bg-stone-50 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <h2 className="font-serif text-3xl text-stone-800">Menghitung Hari</h2>
        <p className="text-stone-500 italic">Menuju hari bahagia kami:</p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-sm border border-stone-200 flex items-center justify-center mb-2">
                <span className="font-serif text-2xl md:text-3xl text-stone-800 font-bold">
                  {String(value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs uppercase tracking-widest text-stone-500">{unit}</span>
            </div>
          ))}
        </div>

        <div className="pt-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-stone-200 -z-10" />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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

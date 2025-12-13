
import { motion } from "motion/react";
import { Copy, Gift, CreditCard, Box } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner"; // Assuming sonner is installed as per instructions

export function Gifts() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // You would typically use a toast here
    // alert("Nomor rekening berhasil disalin");
    // Since I can't guarantee Sonner is setup in App.tsx (though I will try to), I'll use simple alert or console
    console.log("Copied:", text);
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 space-y-4"
        >
            <h2 className="font-serif text-3xl text-stone-800">Amplop Digital & Hadiah</h2>
            <p className="text-stone-500 max-w-lg mx-auto">
                Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
                Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
            {/* Bank Card */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center"
            >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-amber-600">
                    <CreditCard size={24} />
                </div>
                <h3 className="font-bold text-stone-800 mb-1">Bank BRI</h3>
                <p className="text-sm text-stone-500 mb-4">a.n Irwansyah</p>
                
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-stone-200">
                    <span className="font-mono text-lg font-medium text-stone-800">009301007657536</span>
                    <button onClick={() => handleCopy("009301007657536")} className="text-stone-400 hover:text-amber-600">
                        <Copy size={16} />
                    </button>
                </div>
            </motion.div>

             {/* E-Wallet Card */}
             <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center"
            >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-amber-600">
                    <CreditCard size={24} />
                </div>
                <h3 className="font-bold text-stone-800 mb-1">Bank Mandiri</h3>
                <p className="text-sm text-stone-500 mb-4">a.n Isma Harika</p>
                
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-stone-200">
                    <span className="font-mono text-lg font-medium text-stone-800">9000041625212</span>
                    <button onClick={() => handleCopy("9000041625212")} className="text-stone-400 hover:text-amber-600">
                        <Copy size={16} />
                    </button>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

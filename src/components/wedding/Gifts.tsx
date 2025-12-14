
import { motion } from "motion/react";
import { Copy, Gift, CreditCard, Box } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner"; // Assuming sonner is installed as per instructions
import { FlowerDecoration } from "./FlowerDecoration";

export function Gifts() {
  const handleCopy = async (text: string, accountName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`Nomor rekening ${accountName} berhasil disalin!`);
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        toast.success(`Nomor rekening ${accountName} berhasil disalin!`);
      } catch (err) {
        toast.error("Gagal menyalin nomor rekening");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <FlowerDecoration />
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
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
                transition={{ duration: 1.2, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center"
            >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-amber-600">
                    <CreditCard size={24} />
                </div>
                <h3 className="font-bold text-stone-800 mb-1">Bank BRI</h3>
                <p className="text-sm text-stone-500 mb-4">a.n Irwansyah</p>
                
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-stone-200">
                    <span className="font-mono text-lg font-medium text-stone-800">009301007657536</span>
                    <button 
                      onClick={() => handleCopy("009301007657536", "BRI")} 
                      className="text-stone-400 hover:text-amber-600 transition-colors"
                      aria-label="Salin nomor rekening BRI"
                    >
                        <Copy size={16} />
                    </button>
                </div>
            </motion.div>

             {/* E-Wallet Card */}
             <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center"
            >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-amber-600">
                    <CreditCard size={24} />
                </div>
                <h3 className="font-bold text-stone-800 mb-1">Bank Mandiri</h3>
                <p className="text-sm text-stone-500 mb-4">a.n Isma Harika</p>
                
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-stone-200">
                    <span className="font-mono text-lg font-medium text-stone-800">9000041625212</span>
                    <button 
                      onClick={() => handleCopy("9000041625212", "Mandiri")} 
                      className="text-stone-400 hover:text-amber-600 transition-colors"
                      aria-label="Salin nomor rekening Mandiri"
                    >
                        <Copy size={16} />
                    </button>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

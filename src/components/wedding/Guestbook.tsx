
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Send, User, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { 
  subscribeToGuestbookComments, 
  saveGuestbookComment,
  type GuestbookComment 
} from "../../firebase/guestbook";
import { formatRelativeTime } from "../../utils/time";
import { slugToName } from "../../utils/slug";
import { FlowerDecoration } from "./FlowerDecoration";

interface GuestbookProps {
  slug?: string;
  isInvitedGuest?: boolean;
}

export function Guestbook({ slug, isInvitedGuest = false }: GuestbookProps) {
  const [comments, setComments] = useState<GuestbookComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get guest name from slug automatically
  const guestName = slug ? slugToName(slug) : "";
  const [form, setForm] = useState({ 
    name: guestName, 
    attendance: "hadir" as "hadir" | "tidak", 
    message: "" 
  });

  // Update form name when slug changes
  useEffect(() => {
    if (slug) {
      setForm(prev => ({ ...prev, name: slugToName(slug) }));
    }
  }, [slug]);

  // Subscribe to real-time comments
  useEffect(() => {
    const unsubscribe = subscribeToGuestbookComments((fetchedComments) => {
      setComments(fetchedComments);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      toast.error("Mohon isi ucapan");
      return;
    }
    
    if (!slug) {
      toast.error("Terjadi kesalahan. Silakan refresh halaman.");
      return;
    }

    setIsSubmitting(true);
    try {
      await saveGuestbookComment({
        name: form.name,
        attendance: form.attendance,
        message: form.message,
        slug: slug || undefined,
      });
      
      toast.success("Ucapan berhasil dikirim!");
      // Keep name after submit (user may want to send another message)
      setForm((prev) => ({ name: prev.name, attendance: "hadir", message: "" }));
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("Gagal mengirim ucapan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 bg-wood-soft relative overflow-hidden -mt-[1px]" style={{
      boxShadow: 'inset 0 80px 100px -50px rgba(0, 0, 0, 0.35), inset 0 -80px 100px -50px rgba(0, 0, 0, 0.35)'
    }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-stone-800">RSVP & Ucapan</h2>
          <p className="text-stone-500 mt-2">Konfirmasi kehadiran dan kirimkan doa restu.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-2xl shadow-sm h-fit"
          >
            {!isInvitedGuest ? (
              <div className="text-center py-8 text-stone-500">
                <p className="text-sm">Hanya tamu undangan yang dapat mengisi form ini.</p>
                <p className="text-xs mt-2">Silakan akses melalui link undangan yang diberikan.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-stone-200 bg-white text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-200 transition"
                  placeholder="Masukkan nama"
                />
                <p className="text-xs text-stone-500">Nama terisi otomatis dari undangan, tapi bisa kamu ubah.</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Konfirmasi Kehadiran</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="attendance" 
                      value="hadir" 
                      checked={form.attendance === "hadir"}
                      onChange={e => setForm({...form, attendance: e.target.value})}
                      className="text-amber-600 focus:ring-amber-200"
                    />
                    <span className="text-sm">Hadir</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="attendance" 
                      value="tidak" 
                      checked={form.attendance === "tidak"}
                      onChange={e => setForm({...form, attendance: e.target.value})}
                      className="text-amber-600 focus:ring-amber-200"
                    />
                    <span className="text-sm">Tidak Hadir</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Ucapan & Doa</label>
                <textarea 
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-200 transition h-24 resize-none"
                  placeholder="Tuliskan ucapan..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-stone-800 text-white py-2.5 rounded-lg font-medium hover:bg-stone-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Kirim Ucapan
                  </>
                )}
              </button>
            </form>
            )}
          </motion.div>

          {/* Comments List */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="animate-spin text-stone-400" size={24} />
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center py-12 text-stone-400">
                <p className="text-sm">Belum ada ucapan. Jadilah yang pertama!</p>
              </div>
            ) : (
              comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-stone-50"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${comment.attendance === 'hadir' ? 'bg-amber-400' : 'bg-stone-300'}`}>
                      <User size={14} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-stone-800 text-sm">{comment.name}</h4>
                        <span className="text-[10px] text-stone-400">
                          {formatRelativeTime(comment.createdAt)}
                        </span>
                      </div>
                      <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] mb-2 ${comment.attendance === 'hadir' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {comment.attendance === 'hadir' ? 'Akan Hadir' : 'Berhalangan'}
                      </span>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        "{comment.message}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

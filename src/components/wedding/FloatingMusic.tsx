
import { useState } from "react";
import { Pause, Play } from "lucide-react";

export function FloatingMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  // Using a dummy audio file for demonstration - typically this would be a real URL
  
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-stone-800 shadow-lg backdrop-blur-sm transition hover:bg-white hover:scale-105"
      >
        {isPlaying ? <Pause size={20} className="animate-pulse" /> : <Play size={20} className="ml-1" />}
      </button>
    </div>
  );
}

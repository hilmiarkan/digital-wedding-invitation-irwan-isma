
import { useState, useRef, useEffect } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import muzik from "../../media/muzik.mp3";

export function FloatingMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(muzik);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5; // Set default volume to 50%

      // Handle audio events
      audioRef.current.addEventListener("play", () => setIsPlaying(true));
      audioRef.current.addEventListener("pause", () => setIsPlaying(false));
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));

      // Cleanup on unmount
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, []);

  // Auto-play after user interaction (when splash screen is opened)
  useEffect(() => {
    const handleSplashOpened = () => {
      setHasInteracted(true);
      // Try to autoplay after splash opens (user has interacted by clicking "Buka Undangan")
      setTimeout(() => {
        if (audioRef.current && !isPlaying) {
          audioRef.current.play().catch((error) => {
            // Autoplay prevented by browser, user needs to click manually
            console.log("Autoplay prevented:", error);
          });
        }
      }, 500);
    };

    window.addEventListener("splashOpened", handleSplashOpened);
    return () => window.removeEventListener("splashOpened", handleSplashOpened);
  }, [isPlaying]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    setHasInteracted(true);

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.volume = 0.5;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Mute/Unmute Button */}
      {/* <button
        onClick={toggleMute}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-stone-800 shadow-lg backdrop-blur-sm transition hover:bg-white hover:scale-105"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button> */}

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-stone-800 shadow-lg backdrop-blur-sm transition hover:bg-white hover:scale-105"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause size={20} className="animate-pulse" />
        ) : (
          <Play size={20} className="ml-1" />
        )}
      </button>
    </div>
  );
}

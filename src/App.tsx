
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { 
  SplashCover, 
  Header, 
  FloatingMusic, 
  Countdown, 
  EventDetails, 
  CoupleInfo, 
  Story, 
  Gifts, 
  Guestbook, 
  Instagram,
  Footer,
  Divider
} from "./components/wedding";
import { Toaster } from "sonner";
import { slugToName, isValidGuestSlug } from "./utils/slug";

// Preload critical assets BEFORE showing SplashCover (so opening feels instant).
import headerBg from "./media/gunung.webp";
import gunungan from "./media/gunungan.webp";
import batik from "./media/batik.webp";
import f1 from "./media/flowey/1.webp";
import f2 from "./media/flowey/2.webp";
import f3 from "./media/flowey/3.webp";
import f4 from "./media/flowey/4.webp";
import f5 from "./media/flowey/5.webp";
import f6 from "./media/flowey/6.webp";
import f7 from "./media/flowey/7.webp";
import f8 from "./media/flowey/8.webp";
import f9 from "./media/flowey/9.webp";
import f10 from "./media/flowey/10.webp";
import f11 from "./media/flowey/11.webp";

// Keep boot fast: only preload above-the-fold assets.
const BOOT_IMAGES = [headerBg, gunungan, batik];

// Heavy assets: warm these up while SplashCover is shown (so Header feels instant after open).
const DEFERRED_IMAGES = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11];

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const img = new Image();
    img.src = src;
    const done = () => resolve();
    img.onload = done;
    img.onerror = done;
    // decode() makes the first paint smoother when supported
    // but we still resolve via onload/onerror in all cases.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (img as any).decode?.().then(done).catch(done);
  });
}

export default function App() {
  const { slug } = useParams<{ slug?: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const [isBootReady, setIsBootReady] = useState(false);

  // Get guest name from slug or use default
  const guestName = slug ? slugToName(slug) : "Tamu Undangan";
  const isInvitedGuest = slug ? isValidGuestSlug(slug) : false;

  // Handle body scroll locking
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isScrollLocked]);

  // Boot preload: do this BEFORE rendering SplashCover so "Buka Undangan" feels instant.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        await Promise.all(BOOT_IMAGES.map(preloadImage));
      } finally {
        if (!cancelled) setIsBootReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Background preload: do NOT block boot/splash, but warm up heavy decorative assets.
  useEffect(() => {
    if (!isBootReady) return;
    let cancelled = false;

    const run = () => {
      Promise.allSettled(DEFERRED_IMAGES.map(preloadImage)).finally(() => {
        // no-op; we just want them cached/decoded
      });
    };

    const ric = (window as any).requestIdleCallback as undefined | ((cb: () => void, opts?: any) => number);
    const cancelRic = (window as any).cancelIdleCallback as undefined | ((id: number) => void);

    if (ric) {
      const id = ric(() => {
        if (!cancelled) run();
      }, { timeout: 1500 });
      return () => {
        cancelled = true;
        cancelRic?.(id);
      };
    }

    const t = window.setTimeout(() => {
      if (!cancelled) run();
    }, 250);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [isBootReady]);

  // Smooth scrolling: pause expensive decorative animations during scroll, resume shortly after.
  useEffect(() => {
    let timeout: number | undefined;
    const onScroll = () => {
      document.documentElement.classList.add("is-scrolling");
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        document.documentElement.classList.remove("is-scrolling");
      }, 140);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll as any);
      if (timeout) window.clearTimeout(timeout);
      document.documentElement.classList.remove("is-scrolling");
    };
  }, []);

  if (!isBootReady) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#fdfbf7] text-stone-700">
        <div className="text-center space-y-3">
          <div className="text-sm tracking-widest uppercase">Memuat Undangan</div>
          <div className="h-1 w-48 mx-auto bg-stone-200 overflow-hidden rounded">
            <div className="h-full w-1/2 bg-amber-300 animate-pulse" />
          </div>
          <div className="text-xs text-stone-500">Mohon tunggu sebentar…</div>
        </div>
      </div>
    );
  }

  const handleOpen = () => {
    setIsOpen(true);
    // Trigger autoplay after splash screen opens (user interaction)
    window.dispatchEvent(new CustomEvent("splashOpened"));
  };

  const handleStartOpening = () => {
    setIsScrollLocked(false);
  };

  return (
    <div className="min-h-screen font-sans bg-wood-light text-stone-800 selection:bg-amber-200">
      <Toaster position="bottom-center" />
      
      {/* 
        The SplashCover stays in the DOM until the animation is complete.
        We use AnimatePresence to handle the unmount animation if we were removing it,
        but since the SplashCover handles its own exit animation visually (sliding gates),
        we can just keep it conditionally rendered with a delay or let it handle the removal.
        
        However, to ensure the "reveal" effect works, the main content MUST be rendered 
        BEHIND the SplashCover.
      */}
      <AnimatePresence>
        {!isOpen && (
          <SplashCover 
            guestName={guestName} 
            onOpen={handleOpen} 
            onStartOpening={handleStartOpening}
          />
        )}
      </AnimatePresence>

      {/* Main content is always rendered now, sitting behind the z-index 50 SplashCover */}
      <main className="relative z-0">
        <Header />
        <Divider />
        <Countdown />
        <Divider />
        <CoupleInfo />
        <Divider />
        <EventDetails />
        <Divider />
        <Story />
        <Divider />
        <Gifts />
        <Divider />
        <Instagram />
        <Divider />
        <Guestbook slug={slug} isInvitedGuest={isInvitedGuest} />
        <Divider />
        <Footer />
        <FloatingMusic />
      </main>
    </div>
  );
}

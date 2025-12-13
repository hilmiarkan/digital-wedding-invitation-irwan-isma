
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
  Footer 
} from "./components/wedding";
import { Toaster } from "sonner";
import { slugToName, isValidGuestSlug } from "./utils/slug";

export default function App() {
  const { slug } = useParams<{ slug?: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(true);

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

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleStartOpening = () => {
    setIsScrollLocked(false);
  };

  return (
    <div className="min-h-screen font-sans bg-stone-50 text-stone-800 selection:bg-amber-200">
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
        <Countdown />
        <CoupleInfo />
        <EventDetails />
        <Story />
        <Gifts />
        <Guestbook slug={slug} isInvitedGuest={isInvitedGuest} />
        <Footer />
        <FloatingMusic />
      </main>
    </div>
  );
}


import React, { useEffect, useState } from "react";
import batik from '../../media/batik.webp';


export function FlowerDecoration() {
  const flowerUrl = batik;
  // Defer starting animations until after the invitation is opened.
  // This reduces main-thread contention with the splash/door animation and avoids jank on Android.
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleSplashOpened = () => {
      requestAnimationFrame(() => setIsActive(true));
    };
    window.addEventListener("splashOpened", handleSplashOpened);
    return () => window.removeEventListener("splashOpened", handleSplashOpened);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left */}
      <div
        className={`flower-decoration-item absolute -top-12 -left-12 w-40 h-40 md:w-56 md:h-56 mix-blend-multiply opacity-100 ${isActive ? "is-active" : ""}`}
        style={{ transformOrigin: "0% 0%" }}
      >
        <img src={flowerUrl} alt="" aria-hidden="true" className="w-full h-full object-cover rotate-180" loading="lazy" decoding="async" />
      </div>

      {/* Top Right */}
      <div
        className={`flower-decoration-item absolute -top-12 -right-12 w-40 h-40 md:w-56 md:h-56 mix-blend-multiply opacity-100 ${isActive ? "is-active" : ""}`}
        style={{ transformOrigin: "100% 0%" }}
      >
        <img src={flowerUrl} alt="" aria-hidden="true" className="w-full h-full object-cover -rotate-90" loading="lazy" decoding="async" />
      </div>

      {/* Bottom Left */}
      <div
        className={`flower-decoration-item absolute -bottom-12 -left-12 w-40 h-40 md:w-56 md:h-56 mix-blend-multiply opacity-100 ${isActive ? "is-active" : ""}`}
        style={{ transformOrigin: "0% 100%" }}
      >
        <img src={flowerUrl} alt="" aria-hidden="true" className="w-full h-full object-cover rotate-90" loading="lazy" decoding="async" />
      </div>

      {/* Bottom Right */}
      <div
        className={`flower-decoration-item absolute -bottom-12 -right-12 w-40 h-40 md:w-56 md:h-56 mix-blend-multiply opacity-100 ${isActive ? "is-active" : ""}`}
        style={{ transformOrigin: "100% 100%" }}
      >
        <img src={flowerUrl} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

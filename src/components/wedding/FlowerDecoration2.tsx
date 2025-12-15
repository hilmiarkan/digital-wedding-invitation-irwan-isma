import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

// import semua layer
import layer1 from '../../media/flowey/1.webp';
import layer2 from '../../media/flowey/2.webp';
import layer3 from '../../media/flowey/3.webp';
import layer4 from '../../media/flowey/4.webp';
import layer5 from '../../media/flowey/5.webp';
import layer6 from '../../media/flowey/6.webp';
import layer7 from '../../media/flowey/7.webp';
import layer8 from '../../media/flowey/8.webp';
import layer9 from '../../media/flowey/9.webp';
import layer10 from '../../media/flowey/10.webp';
import layer11 from '../../media/flowey/11.webp';

type FlowerDecoration2Props = {
  className?: string;
  /** If false, render decoration fully visible with no animations (useful for Header). */
  animate?: boolean;
};

type AnimatedLayer = {
  src: string;
  delay: number;
  amplitude: number;
  duration: number;
};

// Memoized component untuk render layered flower di satu corner
const FlowerLayered = memo(({ 
  transformClass, 
  transformStyle, 
  isActive,
  isStatic,
}: { 
  transformClass?: string; 
  transformStyle?: CSSProperties; 
  isActive: boolean;
  isStatic: boolean;
}) => {
  // Always keep full look: 11 layers. We optimize by using CSS keyframes (compositor)
  // instead of JS-driven animations for smoother performance on Android.
  const layers: AnimatedLayer[] = useMemo(() => [
    { src: layer1, delay: 0, amplitude: 3, duration: 4 },
    { src: layer2, delay: 0.1, amplitude: 4, duration: 4.5 },
    { src: layer3, delay: 0.2, amplitude: 5, duration: 5 },
    { src: layer4, delay: 0.3, amplitude: 3.5, duration: 4.2 },
    { src: layer5, delay: 0.4, amplitude: 4.5, duration: 4.8 },
    { src: layer6, delay: 0.5, amplitude: 3.2, duration: 4.3 },
    { src: layer7, delay: 0.6, amplitude: 4.2, duration: 4.7 },
    { src: layer8, delay: 0.7, amplitude: 3.8, duration: 4.4 },
    { src: layer9, delay: 0.8, amplitude: 4.8, duration: 5.2 },
    { src: layer10, delay: 0.9, amplitude: 3.5, duration: 4.6 },
    { src: layer11, delay: 1.0, amplitude: 5.5, duration: 5.5 },
  ], []);

  return (
    <div 
      className={`relative w-full h-full isolate overflow-visible ${transformClass ?? ""}`} 
      style={{
        ...transformStyle,
        // Optimize rendering but allow overflow
        contain: 'layout style',
        willChange: 'transform',
        clipPath: 'none',
      }}
    >
      {layers.map((layer, index) => (
        <img
          key={index}
          src={layer.src}
          alt=""
          aria-hidden="true"
          className={`flower-layer absolute inset-0 w-full h-full object-cover ${
            isStatic ? "is-static" : (isActive ? "is-active" : "")
          }`}
          style={
            {
              // Drive keyframes with CSS variables (compositor-friendly)
              ["--flower-delay" as any]: `${layer.delay}s`,
              ["--flower-amp" as any]: `${layer.amplitude}px`,
              ["--flower-dur" as any]: `${layer.duration}s`,
            } as React.CSSProperties
          }
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
});

FlowerLayered.displayName = 'FlowerLayered';

export function FlowerDecoration2Base({ className, animate = true }: FlowerDecoration2Props) {
  // Defer heavy animations until after the user opens the invitation (splashOpened).
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [hasOpened, setHasOpened] = useState(false);
  // Default to true so decoration is visible/ready immediately (no initial delay waiting for IO callback).
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const handleSplashOpened = () => {
      // Start animations on next frame to avoid competing with the door animation.
      requestAnimationFrame(() => setHasOpened(true));
    };
    window.addEventListener("splashOpened", handleSplashOpened);
    return () => window.removeEventListener("splashOpened", handleSplashOpened);
  }, []);

  // Only animate when the section is near viewport (huge perf win on long pages).
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }
    // Ensure we don't hide everything while waiting for the first observer callback.
    setIsInView(true);
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(Boolean(entry?.isIntersecting));
      },
      // Large margin so animations start earlier (feels instant on open)
      { root: null, rootMargin: "800px 0px 800px 0px", threshold: 0.01 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isStatic = !animate;
  const isActive = animate && hasOpened && isInView;

  // Extract opacity from className if provided, otherwise default to 100% (fully visible)
  const opacityMatch = className?.match(/opacity-(\d+)/);
  const opacityValue = opacityMatch ? parseInt(opacityMatch[1]) : 100;
  
  // Use inline style for opacity to ensure it works correctly
  const opacityStyle = { opacity: opacityValue / 100 };
  // Remove opacity class and keep other classes (like z-index)
  const otherClasses = className?.replace(/opacity-\d+/g, '').trim() || '';

  return (
    <div 
      ref={rootRef}
      className={`absolute inset-0 pointer-events-none overflow-visible ${otherClasses}`}
      aria-hidden="true"
      style={{
        // Optimize container rendering but allow overflow
        contain: 'layout style',
        // Avoid 'contents' here; it can trigger extra work in some browsers
        willChange: 'transform',
        // Ensure images can overflow
        clipPath: 'none',
      }}
    >
      {/* Top Left - flip horizontal */}
      <div
        className="absolute -top-6 -left-12 w-64 h-64 md:w-80 md:h-80 overflow-visible"
        style={{ 
          ...opacityStyle,
          willChange: 'transform',
          transform: 'translateZ(0)',
          clipPath: 'none',
        }}
      >
        <FlowerLayered isStatic={isStatic} isActive={isActive} transformStyle={{ transform: 'scaleX(-1) translateZ(0)' }} />
      </div>

      {/* Top Right - normal */}
      <div
        className="absolute -top-6 -right-12 w-64 h-64 md:w-80 md:h-80 overflow-visible"
        style={{ 
          ...opacityStyle,
          willChange: 'transform',
          transform: 'translateZ(0)',
          clipPath: 'none',
        }}
      >
        <FlowerLayered isStatic={isStatic} isActive={isActive} />
      </div>

      {/* Bottom Left - flip horizontal and vertical */}
      <div
        className="absolute -bottom-12 -left-12 w-64 h-64 md:w-80 md:h-80 overflow-visible"
        style={{ 
          ...opacityStyle,
          willChange: 'transform',
          transform: 'translateZ(0)',
          clipPath: 'none',
        }}
      >
        <FlowerLayered isStatic={isStatic} isActive={isActive} transformStyle={{ transform: 'scaleX(-1) scaleY(-1) translateZ(0)' }} />
      </div>

      {/* Bottom Right - flip vertical */}
      <div
        className="absolute -bottom-12 -right-12 w-64 h-64 md:w-80 md:h-80 overflow-visible"
        style={{ 
          ...opacityStyle,
          willChange: 'transform',
          transform: 'translateZ(0)',
          clipPath: 'none',
        }}
      >
        <FlowerLayered isStatic={isStatic} isActive={isActive} transformStyle={{ transform: 'scaleY(-1) translateZ(0)' }} />
      </div>
    </div>
  );
}

// Memoize component utama untuk mencegah re-render yang tidak perlu
const FlowerDecoration2 = memo(FlowerDecoration2Base);
export default FlowerDecoration2;
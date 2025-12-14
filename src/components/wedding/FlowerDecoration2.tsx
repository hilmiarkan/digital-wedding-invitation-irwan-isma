import { motion } from "motion/react";
import type { CSSProperties } from "react";

// import semua layer
import layer1 from '../../media/flowey/1.png';
import layer2 from '../../media/flowey/2.png';
import layer3 from '../../media/flowey/3.png';
import layer4 from '../../media/flowey/4.png';
import layer5 from '../../media/flowey/5.png';
import layer6 from '../../media/flowey/6.png';
import layer7 from '../../media/flowey/7.png';
import layer8 from '../../media/flowey/8.png';
import layer9 from '../../media/flowey/9.png';
import layer10 from '../../media/flowey/10.png';
import layer11 from '../../media/flowey/11.png';

type FlowerDecoration2Props = {
  className?: string;
};

export default function FlowerDecoration2({ className }: FlowerDecoration2Props) {
  // Create wavy animation config for each layer
  const layers = [
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
  ];

  // Component untuk render layered flower di satu corner
  const FlowerLayered = ({ transformClass, transformStyle }: { transformClass?: string; transformStyle?: CSSProperties }) => (
    <div className={`relative w-full h-full isolate ${transformClass ?? ""}`} style={transformStyle}>
      {layers.map((layer, index) => (
        <motion.img
          key={index}
          src={layer.src}
          alt={`flower layer ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [
              0,
              layer.amplitude,
              -layer.amplitude,
              layer.amplitude,
              0,
            ],
            x: [
              0,
              layer.amplitude * 0.5,
              -layer.amplitude * 0.5,
              layer.amplitude * 0.5,
              0,
            ],
          }}
          transition={{
            opacity: {
              duration: 1.5,
              delay: layer.delay,
              ease: "easeOut",
            },
            y: {
              duration: layer.duration,
              delay: layer.delay + 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            x: {
              duration: layer.duration * 1.2,
              delay: layer.delay + 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );

  // Extract opacity from className if provided, otherwise default to 100% (fully visible)
  const opacityMatch = className?.match(/opacity-(\d+)/);
  const opacityValue = opacityMatch ? parseInt(opacityMatch[1]) : 100;
  
  // Use inline style for opacity to ensure it works correctly
  const opacityStyle = { opacity: opacityValue / 100 };
  // Remove opacity class and keep other classes (like z-index)
  const otherClasses = className?.replace(/opacity-\d+/g, '').trim() || '';

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${otherClasses}`}>
      {/* Top Left - flip horizontal */}
      <motion.div 
        className="absolute -top-12 -left-12 w-64 h-64 md:w-80 md:h-80"
        style={{ originX: 0, originY: 0, ...opacityStyle }}
      >
        <FlowerLayered transformStyle={{ transform: 'scaleX(-1)' }} />
      </motion.div>

      {/* Top Right - normal */}
      <motion.div 
        className="absolute -top-6 -right-12 w-64 h-64 md:w-80 md:h-200"
        style={{ originX: 1, originY: 0, ...opacityStyle }}
      >
        <FlowerLayered />
      </motion.div>

      {/* Bottom Left - flip horizontal and vertical */}
      <motion.div 
        className="absolute -bottom-12 -left-12 w-64 h-64 md:w-80 md:h-80"
        style={{ originX: 0, originY: 1, ...opacityStyle }}
      >
        <FlowerLayered transformStyle={{ transform: 'scaleX(-1) scaleY(-1)' }} />
      </motion.div>

      {/* Bottom Right - flip vertical */}
      <motion.div 
        className="absolute -bottom-12 -right-12 w-64 h-64 md:w-80 md:h-80"
        style={{ originX: 1, originY: 1, ...opacityStyle }}
      >
        <FlowerLayered transformStyle={{ transform: 'scaleY(-1)' }} />
      </motion.div>
    </div>
  );
}
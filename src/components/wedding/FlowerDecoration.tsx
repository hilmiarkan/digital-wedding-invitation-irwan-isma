
import { motion } from "motion/react";
import batik from '../../media/batik.png'; // Path relative to the current JS/TS file


export function FlowerDecoration() {
  // Using a watercolor floral image that works well with blend modes
  const flowerUrl = batik;

  const swayAnimation = {
    rotate: [-3, 3, -3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left */}
      <motion.div 
        animate={swayAnimation}
        className="absolute -top-12 -left-12 w-40 h-40 md:w-56 md:h-56 mix-blend-multiply opacity-100"
        style={{ originX: 0, originY: 0 }}
      >
         <img src={flowerUrl} alt="Flower Decoration" className="w-full h-full object-cover rotate-180" />
      </motion.div>

      {/* Top Right */}
      <motion.div 
        animate={swayAnimation}
        className="absolute -top-12 -right-12 w-40 h-40 md:w-56 md:h-56 mix-blend-multiply opacity-100"
        style={{ originX: 1, originY: 0 }}
      >
         <img src={flowerUrl} alt="Flower Decoration" className="w-full h-full object-cover -rotate-90" />
      </motion.div>

      {/* Bottom Left */}
      <motion.div 
        animate={swayAnimation}
        className="absolute -bottom-12 -left-12 w-40 h-40 md:w-56 md:h-56 mix-blend-multiply opacity-100"
        style={{ originX: 0, originY: 1 }}
      >
         <img src={flowerUrl} alt="Flower Decoration" className="w-full h-full object-cover rotate-90" />
      </motion.div>

      {/* Bottom Right */}
      <motion.div 
        animate={swayAnimation}
        className="absolute -bottom-12 -right-12 w-40 h-40 md:w-56 md:h-56 mix-blend-multiply opacity-100"
        style={{ originX: 1, originY: 1 }}
      >
         <img src={flowerUrl} alt="Flower Decoration" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
}

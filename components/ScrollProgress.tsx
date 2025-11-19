'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Show progress bar after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-niftek-light/20" />
      
      {/* Progress fill */}
      <motion.div
        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-niftek-medium to-niftek-dark"
        style={{
          scaleX: scaleX,
          transformOrigin: 'left',
          width: '100%',
        }}
      />
    </motion.div>
  );
}


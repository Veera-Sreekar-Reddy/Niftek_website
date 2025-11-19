'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Handle page load
    const handleLoad = () => {
      // Wait a minimum time for smooth experience (600ms)
      setTimeout(() => {
        setShowContent(true);
        // Fade out after content is shown
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 600);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showContent ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-niftek-light/30 via-white to-niftek-offwhite"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <Image
                src="/niftek-logo.png"
                alt="Niftek Logo"
                width={200}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </motion.div>

            {/* Animated Loader */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              {/* Spinning circles */}
              <div className="flex items-center justify-center space-x-2">
                <motion.div
                  className="w-3 h-3 rounded-full bg-niftek-medium"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-niftek-dark"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.2,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-niftek-medium"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.4,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              {/* Alternative: Spinning ring loader */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center -z-10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="w-16 h-16 border-4 border-niftek-light border-t-niftek-medium rounded-full opacity-30"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


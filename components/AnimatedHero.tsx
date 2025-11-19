'use client';

import { useState, useEffect } from 'react';

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Niftek - Secure AI Innovation';

  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(true);

    // Typewriter effect
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100); // Adjust speed here (lower = faster)

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-niftek-light/30 via-white to-niftek-offwhite animate-gradient-shift"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="inline-block">
              <span className="text-niftek-dark">{displayText.slice(0, 7)}</span>
              <span className="text-niftek-medium">{displayText.slice(7, 9)}</span>
              <span className="text-niftek-dark">{displayText.slice(9, 16)}</span>
              <span className="text-niftek-medium">{displayText.slice(16)}</span>
            </span>
            {displayText.length < fullText.length && (
              <span className="inline-block w-1 h-12 md:h-16 bg-niftek-medium ml-1 animate-blink"></span>
            )}
          </h1>
          
          {/* Subtitle with fade-in */}
          <p
            className={`text-xl md:text-2xl text-niftek-dark/70 mt-6 transform transition-all duration-1000 delay-500 ${
              displayText.length === fullText.length
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            Empowering businesses with cutting-edge AI solutions
          </p>

          {/* Animated decorative elements */}
          <div className="flex justify-center gap-4 mt-8">
            <div
              className={`w-3 h-3 rounded-full bg-niftek-medium transform transition-all duration-700 delay-700 ${
                displayText.length === fullText.length
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0'
              }`}
            ></div>
            <div
              className={`w-3 h-3 rounded-full bg-niftek-dark transform transition-all duration-700 delay-800 ${
                displayText.length === fullText.length
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0'
              }`}
            ></div>
            <div
              className={`w-3 h-3 rounded-full bg-niftek-medium transform transition-all duration-700 delay-900 ${
                displayText.length === fullText.length
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0'
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}


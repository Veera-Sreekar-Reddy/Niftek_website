'use client';

import { useState, useEffect } from 'react';

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
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

  useEffect(() => {
    // Scroll-based transition for hero section
    const handleScroll = () => {
      const maxScroll = window.innerHeight; // only react for the first viewport height
      const current = Math.min(window.scrollY, maxScroll);
      const progress = current / maxScroll; // 0 to 1
      setScrollProgress(progress);
    };

    // Use requestAnimationFrame for smoother updates
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Map scroll progress to subtle transform/opacity changes
  const translateY = 10 + scrollProgress * 40; // from 10px down to ~50px
  const scale = 1 - scrollProgress * 0.05; // from 1 to 0.95
  const scrollOpacity = 1 - scrollProgress * 0.4; // from 1 to 0.6

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-niftek-light/30 via-white to-niftek-offwhite animate-gradient-shift"></div>

      {/* Wavy animated background filling bottom half behind content */}
      <div className="pointer-events-none absolute inset-0 bottom-0 overflow-hidden flex items-end">
        <div className="w-full h-1/2 animate-hero-wave">
          <svg
            viewBox="0 0 1440 600"
            className="w-full h-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="heroWaveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(82, 171, 152, 0.65)" />
                <stop offset="50%" stopColor="rgba(82, 171, 152, 0.75)" />
                <stop offset="100%" stopColor="rgba(82, 171, 152, 0.65)" />
              </linearGradient>
            </defs>
            <path
              d="M0,320 C160,280 320,360 480,340 C640,320 800,240 960,250 C1120,260 1280,320 1440,300 L1440,600 L0,600 Z"
              fill="url(#heroWaveGradient)"
            />
          </svg>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 -mt-8 md:-mt-16">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            transform: `translateY(${translateY}px) scale(${scale})`,
            opacity: scrollOpacity,
          }}
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


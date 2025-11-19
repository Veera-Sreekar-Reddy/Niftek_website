'use client';

import { useState, useEffect, useRef } from 'react';

export default function ScrollRevealSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer to detect when section enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-niftek-medium rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-niftek-dark rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`relative transition-opacity duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-niftek-dark leading-relaxed text-center">
              <span className="block">
                We help organizations{' '}
                <span className="font-semibold text-niftek-medium">design</span>,{' '}
                <span className="font-semibold text-niftek-medium">develop</span>, and{' '}
                <span className="font-semibold text-niftek-medium">scale</span> AI products and systems
              </span>
              <span className="block">
                that are not only{' '}
                <span className="font-semibold text-niftek-dark">intelligent</span> — but also{' '}
                <span className="font-semibold text-niftek-medium">secure</span>,{' '}
                <span className="font-semibold text-niftek-medium">compliant</span>, and{' '}
                <span className="font-semibold text-niftek-medium">enterprise-ready</span>.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


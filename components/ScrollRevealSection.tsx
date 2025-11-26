'use client';

import { useState, useEffect, useRef } from 'react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const scrollRevealText = `We help organizations design, develop, and scale AI products and systems that are not only intelligent — but also secure, compliant, and enterprise-ready.`;

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
        // Trigger when a good portion of the section is actually in view
        threshold: 0.4,
        rootMargin: '0px',
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
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-white flex items-center"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-niftek-medium rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-niftek-dark rounded-full blur-3xl"></div>
      </div>

      {/* Top gradient morph to blend from hero into this section */}
      <div
        className={`pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-niftek-offwhite via-white to-transparent transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
        }`}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`relative transform transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            {isVisible && (
              <TextGenerateEffect
                words={scrollRevealText}
                className="font-normal text-center"
                filter
                duration={0.8}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


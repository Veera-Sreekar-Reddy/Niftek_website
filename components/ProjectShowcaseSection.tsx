'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    id: 1,
    title: 'Share Details',
    description: 'Car Buyer shares the car details (Make, Model, Budget etc.) with AI Agent',
    position: 'top',
  },
  {
    id: 2,
    title: 'Search & Contact',
    description: 'AI Agent searches the listings and reaches out to Dealers via email',
    position: 'bottom',
  },
  {
    id: 3,
    title: 'Negotiate',
    description: 'AI Agent Negotiates with the Dealers for the best OTD price',
    position: 'top',
  },
  {
    id: 4,
    title: 'Review Quote',
    description: 'AI Agent Reviews the PDF Quote',
    position: 'bottom',
  },
  {
    id: 5,
    title: 'Share Quote',
    description: 'AI Agent shares the PDF Quote with the Car buyer',
    position: 'top',
  },
];

export default function ProjectShowcaseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-niftek-medium rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-niftek-dark rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-niftek-dark mb-16">
              Our live products
            </h2>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-niftek-dark mb-4">
              HeyHica – AI Concierge Agent
            </h3>
            <p className="text-xl text-niftek-dark/70 max-w-3xl mx-auto">
              An intelligent AI-powered car buying assistant that streamlines the entire car purchasing process
            </p>
          </motion.div>

          {/* Flowchart */}
          <div className="relative">
            {/* Horizontal Connection Line with Progress Bar (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-niftek-light rounded-full -translate-y-1/2 z-0 overflow-hidden">
              {/* Background line */}
              <div className="absolute inset-0 bg-niftek-light rounded-full" />
              
              {/* Progress fill based on active step */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={
                  isVisible
                    ? {
                        scaleX: (activeStep + 1) / steps.length,
                      }
                    : { scaleX: 0 }
                }
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-niftek-medium to-niftek-dark rounded-full origin-left"
                style={{
                  transformOrigin: 'left center',
                }}
              />
              
              {/* Glowing effect on progress */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                animate={
                  isVisible && activeStep >= 0
                    ? {
                        x: ['-100%', '200%'],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  width: '30%',
                }}
              />
            </div>

            {/* Vertical Progress Line (Mobile) - Right Side */}
            <div className="block md:hidden absolute top-0 bottom-0 w-2 bg-niftek-light rounded-full z-0 overflow-hidden" style={{ right: 'calc(50% - 140px)' }}>
              {/* Background line */}
              <div className="absolute inset-0 bg-niftek-light rounded-full" />
              
              {/* Progress fill based on active step */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={
                  isVisible
                    ? {
                        scaleY: (activeStep + 1) / steps.length,
                      }
                    : { scaleY: 0 }
                }
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-b from-niftek-medium to-niftek-dark rounded-full origin-top"
                style={{
                  transformOrigin: 'center top',
                }}
              />
              
              {/* Glowing effect on progress */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-full"
                animate={
                  isVisible && activeStep >= 0
                    ? {
                        y: ['-100%', '200%'],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  height: '30%',
                }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10 py-12 md:py-20">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const delay = index * 0.2;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={
                      isVisible
                        ? {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }
                        : { opacity: 0, y: 50, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: delay,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    className={`flex flex-col items-center relative ${
                      step.position === 'bottom' ? 'md:flex-col-reverse' : ''
                    }`}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Step Circle - rendered first when position is bottom (so it appears at bottom with reverse) */}
                    <motion.div
                      className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl text-white shadow-lg cursor-pointer z-20 ${
                        isActive
                          ? 'bg-niftek-medium scale-110'
                          : 'bg-niftek-dark'
                      }`}
                      animate={
                        isActive
                          ? {
                              scale: 1.1,
                              boxShadow: '0 10px 30px rgba(82, 171, 152, 0.4)',
                            }
                          : {
                              scale: 1,
                              boxShadow: '0 4px 15px rgba(43, 103, 119, 0.3)',
                            }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      {step.id}
                      {/* Pulse effect for active step */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-niftek-medium"
                          animate={{
                            scale: [1, 1.5, 1.5],
                            opacity: [0.8, 0, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeOut',
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Step Content - Below circle (when circle is on top) */}
                    {step.position === 'top' && (
                      <motion.div
                        className="mt-8 text-center max-w-[200px] relative z-10"
                        animate={
                          isActive
                            ? {
                                y: 5,
                              }
                            : { y: 0 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        <h3
                          className={`font-semibold text-niftek-dark mb-2 ${
                            isActive ? 'text-niftek-medium' : ''
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm text-niftek-dark/70 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    )}

                    {/* Step Content - Above circle (when circle is on bottom) - rendered after circle so it appears on top with reverse */}
                    {step.position === 'bottom' && (
                      <motion.div
                        className="mt-8 md:mb-8 text-center max-w-[200px] relative z-10"
                        animate={
                          isActive
                            ? {
                                y: -5,
                              }
                            : { y: 0 }
                        }
                        transition={{ duration: 0.3 }}
                      >
                        <h3
                          className={`font-semibold text-niftek-dark mb-2 ${
                            isActive ? 'text-niftek-medium' : ''
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm text-niftek-dark/70 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Project Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-16"
          >
            <a
              href="https://heyhica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-niftek-medium text-white rounded-full font-semibold hover:bg-niftek-dark transition-colors shadow-lg hover:shadow-xl"
            >
              View Live Project
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


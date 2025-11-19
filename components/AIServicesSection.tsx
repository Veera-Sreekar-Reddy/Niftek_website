'use client';

import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const content = [
  {
    title: 'LLM & RAG Implementations',
    description:
      'Build intelligent assistants using GPT-4o, Gemini, Claude, or open-source models. Implement Retrieval-Augmented Generation (RAG) for grounded, source-backed responses. Deploy LangChain, LangGraph, or custom pipelines tailored to enterprise data.',
    gradient: 'linear-gradient(to bottom right, #1a4a56, #2b6777)',
    subtitle: 'Intelligent AI Assistants',
  },
  {
    title: 'Knowledge Augmentation',
    description:
      'Ingest PDFs, policy documents, logs, transcripts, and structured data. Organize knowledge into reusable embeddings or graph structures. Enable semantic recall and long-term memory in assistants and copilots.',
    gradient: 'linear-gradient(to bottom right, #2b6777, #1a4a56)',
    subtitle: 'Semantic Memory Systems',
  },
  {
    title: 'AI Integration & API Orchestration',
    description:
      'Seamlessly embed AI into existing business systems and user workflows. Connect models with databases, CRM, ticketing systems, and cloud services.',
    gradient: 'linear-gradient(to bottom right, #1a4a56, #2b6777)',
    subtitle: 'Seamless Workflow Integration',
  },
  {
    title: 'AI Governance & Compliance',
    description:
      'Design and implement governance frameworks: model cards, audit trails, bias testing. Ensure traceability, version control, and explainability in production pipelines. Align with NIST AI RMF, ISO 42001, EU AI Act, and internal risk policies.',
    gradient: 'linear-gradient(to bottom right, #2b6777, #1a4a56)',
    subtitle: 'Compliance & Risk Management',
  },
  {
    title: 'AI for Cybersecurity',
    description:
      'Augment SOC and threat intel workflows with LLM-based summarization, alert triage, and phishing detection. Build RAG-powered copilots for security analysts and compliance teams. Embed security by design: prompt injection defense, role-based access, encrypted memory.',
    gradient: 'linear-gradient(to bottom right, #1a4a56, #2b6777)',
    subtitle: 'AI-Powered Security Solutions',
  },
];

// Desktop content format for StickyScroll
const desktopContent = content.map((item) => ({
  title: item.title,
  description: item.description,
  content: (
    <div className="flex h-full w-full items-center justify-center text-white rounded-md" style={{ background: item.gradient }}>
      <div className="text-center p-8">
        <h3 className="text-2xl font-bold mb-4 text-white">
          {item.title.includes('&') 
            ? item.title.split('&')[0].trim() 
            : item.title.split(' ').slice(0, 2).join(' ')}
        </h3>
        <p className="text-lg text-white">{item.subtitle}</p>
      </div>
    </div>
  ),
}));

export default function AIServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.1,
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

  // Auto-play carousel
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + content.length) % content.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % content.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  return (
    <div ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-niftek-dark mb-16">
            AI Services
          </h2>
          
          {/* Mobile View - Card Carousel */}
          <div className="block lg:hidden">
            <div 
              ref={carouselRef}
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Carousel Container */}
              <div className="relative h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
                      {/* Gradient Header */}
                      <div
                        className="h-32 flex items-center justify-center text-white relative flex-shrink-0"
                        style={{ background: content[currentIndex].gradient }}
                      >
                        {/* Dark overlay for better text contrast */}
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="text-center px-4 relative z-10">
                          <h3 className="text-xl font-bold mb-1 drop-shadow-lg text-white">
                            {content[currentIndex].title}
                          </h3>
                          <p className="text-sm opacity-95 drop-shadow-md text-white">
                            {content[currentIndex].subtitle}
                          </p>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex-grow flex flex-col justify-center">
                        <p className="text-niftek-dark/80 leading-relaxed text-sm">
                          {content[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all active:scale-95"
                aria-label="Previous card"
              >
                <svg
                  className="w-6 h-6 text-niftek-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all active:scale-95"
                aria-label="Next card"
              >
                <svg
                  className="w-6 h-6 text-niftek-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'bg-niftek-medium w-8 h-2'
                        : 'bg-niftek-light w-2 h-2 hover:bg-niftek-medium/50'
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop View - Sticky Scroll */}
          <div className="hidden lg:block w-full">
            <StickyScroll content={desktopContent} />
          </div>
        </div>
      </div>
    </div>
  );
}


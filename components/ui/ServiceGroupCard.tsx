'use client';

import { useState, useEffect, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useOutsideClick } from '@/hooks/use-outside-click';

interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  detailedContent?: {
    paragraph: string;
    listItems: string[];
  };
}

interface ServiceGroupCardProps {
  groupTitle: string;
  groupDescription: string;
  services: ServiceItem[];
  icon: React.ReactNode;
}

export default function ServiceGroupCard({
  groupTitle,
  groupDescription,
  services,
  icon,
}: ServiceGroupCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();

  useOutsideClick(modalRef, () => {
    setIsExpanded(false);
    setIsTransitioning(true);
    // Keep z-index high during transition
    setTimeout(() => setIsTransitioning(false), 500);
  });

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
      setIsTransitioning(false);
    } else {
      // When closing, keep transition state for animation duration
      if (isTransitioning) {
        setTimeout(() => {
          document.body.style.overflow = 'auto';
        }, 500);
      } else {
        document.body.style.overflow = 'auto';
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded, isTransitioning]);

  return (
    <>
      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-0 bg-black/40 z-[100]"
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${groupTitle}-${uniqueId}`}
                ref={modalRef}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.3, ease: 'easeInOut' },
                  scale: { duration: 0.3, ease: 'easeInOut' }
                }}
                className="bg-niftek-dark rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
              >
                {/* Header */}
                <motion.div 
                  layoutId={`header-${groupTitle}-${uniqueId}`}
                  layout
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="bg-gradient-to-r from-niftek-medium/20 to-niftek-dark p-6 border-b border-niftek-medium/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        layoutId={`icon-${groupTitle}-${uniqueId}`}
                        layout
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="w-12 h-12 rounded-full bg-niftek-medium/20 flex items-center justify-center"
                      >
                        {icon}
                      </motion.div>
                      <div>
                        <motion.h3 
                          layoutId={`title-${groupTitle}-${uniqueId}`}
                          layout
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                          className="text-2xl md:text-3xl font-bold text-white"
                        >
                          {groupTitle}
                        </motion.h3>
                        <motion.p 
                          layoutId={`description-${groupTitle}-${uniqueId}`}
                          layout
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                          className="text-niftek-light/70 text-sm mt-1"
                        >
                          {groupDescription}
                        </motion.p>
                      </div>
                    </div>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsExpanded(false)}
                      className="text-white hover:text-niftek-light transition-colors p-2"
                      aria-label="Close"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Content - Side by Side */}
                <motion.div 
                  layout
                  className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        layoutId={`service-${service.title}-${uniqueId}`}
                        layout
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ 
                          layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                          opacity: { duration: 0.4, delay: 0.2 + index * 0.1 },
                          scale: { duration: 0.4, delay: 0.2 + index * 0.1 },
                          y: { duration: 0.4, delay: 0.2 + index * 0.1 }
                        }}
                        className="bg-niftek-dark/50 rounded-lg p-6 border border-niftek-medium/20"
                      >
                        <motion.h4 
                          layoutId={`service-title-${service.title}-${uniqueId}`}
                          layout
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                          className="text-xl font-bold text-white mb-3"
                        >
                          {service.title}
                        </motion.h4>
                        <motion.p 
                          layoutId={`service-desc-${service.title}-${uniqueId}`}
                          layout
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                          className="text-niftek-light/80 mb-4 leading-relaxed"
                        >
                          {service.description}
                        </motion.p>
                        {service.detailedContent && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="space-y-3"
                          >
                            <p className="text-niftek-light/70 text-sm leading-relaxed">
                              {service.detailedContent.paragraph}
                            </p>
                            <ul className="space-y-2">
                              {service.detailedContent.listItems.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start text-sm text-niftek-light/70"
                                >
                                  <span className="text-niftek-medium mr-2 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Card - Hide when expanded */}
      <motion.div
        layoutId={`card-${groupTitle}-${uniqueId}`}
        ref={cardRef}
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        animate={{ 
          opacity: isExpanded ? 0 : 1,
          pointerEvents: isExpanded ? 'none' : 'auto',
          scale: isExpanded ? 0.95 : 1
        }}
        transition={{ 
          layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 0.3, ease: 'easeInOut' },
          scale: { duration: 0.3, ease: 'easeInOut' }
        }}
        onClick={() => {
          setIsExpanded(true);
          setIsTransitioning(false);
        }}
        className={`relative bg-niftek-dark rounded-xl p-8 md:p-10 shadow-xl overflow-hidden group hover:shadow-2xl cursor-pointer ${
          isExpanded ? 'invisible pointer-events-none' : ''
        }`}
        style={{
          zIndex: isExpanded || isTransitioning ? 50 : 1,
          position: 'relative'
        }}
      >
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-niftek-medium/10 rounded-full blur-3xl group-hover:bg-niftek-medium/20 transition-all duration-300" />
      
      {/* Icon header */}
      <div className="relative z-10 flex items-center gap-4 mb-6">
        <motion.div 
          layoutId={`icon-${groupTitle}-${uniqueId}`}
          layout
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="w-12 h-12 rounded-full bg-niftek-medium/20 flex items-center justify-center group-hover:bg-niftek-medium/30 transition-all duration-300 shadow-lg"
        >
          {icon}
        </motion.div>
        <motion.h3 
          layoutId={`title-${groupTitle}-${uniqueId}`}
          layout
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          {groupTitle}
        </motion.h3>
      </div>

      {/* Description - Hide when expanded */}
      <AnimatePresence mode="wait">
        {!isExpanded && (
          <motion.p 
            key="description"
            layoutId={`description-${groupTitle}-${uniqueId}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 text-niftek-light/80 text-base md:text-lg mb-8 leading-relaxed"
          >
            {groupDescription}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Services list - Hide when expanded */}
      <AnimatePresence mode="wait">
        {!isExpanded && (
          <motion.div
            key="services-list"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 space-y-5 mb-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                layoutId={`service-${service.title}-${uniqueId}`}
                layout
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.4, delay: index * 0.1 },
                  x: { duration: 0.4, delay: index * 0.1 }
                }}
                className="border-l-2 border-niftek-medium/30 pl-4 hover:border-niftek-medium transition-colors"
              >
                <motion.h4 
                  layoutId={`service-title-${service.title}-${uniqueId}`}
                  layout
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="text-lg font-semibold text-white mb-2"
                >
                  {service.title}
                </motion.h4>
                <motion.p 
                  layoutId={`service-desc-${service.title}-${uniqueId}`}
                  layout
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="text-sm text-niftek-light/70 leading-relaxed"
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative tags/elements at bottom - Hide when expanded */}
      <AnimatePresence mode="wait">
        {!isExpanded && (
          <motion.div
            key="tags"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex flex-wrap gap-2 mt-6 pt-6 border-t border-niftek-medium/20"
          >
            {services.map((service, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-niftek-medium/20 text-niftek-light text-xs rounded-full border border-niftek-medium/30"
              >
                {service.title.split(' ')[0]}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Learn More Button - Hide when expanded */}
      <AnimatePresence mode="wait">
        {!isExpanded && (
          <motion.div
            key="learn-more-button"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 mt-6 pt-6 border-t border-niftek-medium/20"
          >
            <button className="w-full px-6 py-3 bg-niftek-medium hover:bg-niftek-medium/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn">
              <span>Learn More</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-niftek-medium/50 to-transparent opacity-50" />
      </motion.div>
    </>
  );
}


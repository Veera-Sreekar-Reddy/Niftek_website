'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function CompanyPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const createObserver = (ref: React.RefObject<HTMLDivElement>, id: string) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(id));
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px',
        }
      );

      observer.observe(ref.current);
      return observer;
    };

    const aboutObserver = createObserver(aboutRef, 'about');
    const missionObserver = createObserver(missionRef, 'mission');
    const valuesObserver = createObserver(valuesRef, 'values');

    [aboutObserver, missionObserver, valuesObserver].forEach((obs) => {
      if (obs) observers.push(obs);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const values = [
    {
      title: 'Innovation and Excellence',
      description: 'We continuously push the boundaries of technology to deliver cutting-edge solutions that exceed expectations.',
      icon: '💡',
      detailedContent: {
        overview: 'At Niftek, innovation isn\'t just a buzzword—it\'s the foundation of everything we do. We believe that true excellence comes from constantly challenging the status quo and exploring new possibilities.',
        keyPoints: [
          'We invest heavily in research and development to stay at the forefront of technological advancements',
          'Our team is encouraged to experiment, take calculated risks, and learn from both successes and failures',
          'We maintain rigorous quality standards across all our projects, ensuring every solution meets the highest benchmarks',
          'We foster a culture of continuous improvement, where feedback drives refinement and optimization',
        ],
        impact: 'This commitment to innovation and excellence ensures that our clients receive solutions that are not only cutting-edge but also reliable, scalable, and future-proof.',
      },
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We listen, understand, and deliver solutions tailored to your unique needs.',
      icon: '🎯',
      detailedContent: {
        overview: 'Every client is unique, and we recognize that one-size-fits-all solutions simply don\'t work. Our client-centric approach means we start by understanding your business, your challenges, and your goals.',
        keyPoints: [
          'We begin every engagement with deep discovery sessions to understand your specific needs and context',
          'Our solutions are custom-tailored to fit your business processes, not the other way around',
          'We maintain open, transparent communication throughout the entire project lifecycle',
          'Your feedback shapes our work—we iterate based on your input to ensure the final product exceeds expectations',
        ],
        impact: 'By putting clients at the center of everything we do, we build lasting partnerships that drive real business value and measurable results.',
      },
    },
    {
      title: 'Integrity and Transparency',
      description: 'We build trust through honest communication, ethical practices, and complete transparency in everything we do.',
      icon: '🤝',
      detailedContent: {
        overview: 'Trust is the cornerstone of every successful partnership. At Niftek, we believe that integrity and transparency aren\'t just good business practices—they\'re non-negotiable principles.',
        keyPoints: [
          'We provide clear, honest communication about project timelines, costs, and potential challenges',
          'Our ethical framework guides all business decisions, ensuring we always do what\'s right',
          'We maintain complete transparency in our processes, keeping you informed at every step',
          'We take responsibility for our work and stand behind our solutions with comprehensive support',
        ],
        impact: 'This unwavering commitment to integrity builds trust, fosters long-term relationships, and ensures that our clients can rely on us as true partners in their success.',
      },
    },
    {
      title: 'Continuous Learning and Growth',
      description: 'We embrace change, learn from challenges, and continuously evolve to stay ahead in an ever-changing landscape.',
      icon: '📈',
      detailedContent: {
        overview: 'The technology landscape evolves rapidly, and so do we. Our commitment to continuous learning ensures that we stay ahead of trends, master new tools, and bring the latest best practices to every project.',
        keyPoints: [
          'We invest in ongoing training and professional development for our entire team',
          'We actively monitor industry trends and emerging technologies to identify opportunities',
          'We learn from every project, incorporating lessons learned into our methodologies',
          'We encourage knowledge sharing within our team and with our clients',
        ],
        impact: 'This culture of continuous learning means our clients benefit from the latest innovations, best practices, and proven methodologies, ensuring their solutions remain competitive and effective.',
      },
    },
  ];

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedValue !== null) {
        setSelectedValue(null);
      }
    };

    if (selectedValue !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [selectedValue]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedValue(null);
      }
    };

    if (selectedValue !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedValue]);

  return (
    <div className="bg-niftek-offwhite min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-niftek-dark/70">
            <li>
              <Link href="/" className="hover:text-niftek-medium transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-niftek-dark font-medium">Company</li>
          </ol>
        </nav>

        {/* Animated Header Section */}
        <div className="mb-16 text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-niftek-medium rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-niftek-dark rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-niftek-dark mb-6 animate-fade-in-up">
              <span className="inline-block">About</span>{' '}
              <span className="inline-block text-niftek-medium">Niftek</span>
            </h1>
            <p className="text-xl md:text-2xl text-niftek-dark/80 max-w-3xl mx-auto animate-fade-in-up-delay">
              Learn more about Niftek Inc. and our mission to transform businesses through innovation.
            </p>
          </div>
        </div>

        {/* About Us Section with Scroll Reveal */}
        <div
          ref={aboutRef}
          className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 ${
            visibleSections.has('about')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            {/* Decorative gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-niftek-light/0 via-niftek-light/0 to-niftek-medium/0 group-hover:from-niftek-light/5 group-hover:via-niftek-light/10 group-hover:to-niftek-medium/5 transition-all duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-niftek-medium to-niftek-dark rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-niftek-dark">About Us</h2>
              </div>
              <p className="text-lg md:text-xl text-niftek-dark/80 leading-relaxed">
                Welcome to <span className="font-semibold text-niftek-medium">Niftek Inc.</span> We are dedicated to providing innovative solutions and exceptional service that drive real business value. Our team combines deep technical expertise with a passion for solving complex challenges, helping organizations navigate the digital landscape with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section with Scroll Reveal */}
        <div
          ref={missionRef}
          className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 delay-200 ${
            visibleSections.has('mission')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-niftek-medium/10 via-white to-niftek-light/20 rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 right-10 w-40 h-40 bg-niftek-dark rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-niftek-medium rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-niftek-dark to-niftek-medium rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-niftek-dark">Our Mission</h2>
              </div>
              <p className="text-lg md:text-xl text-niftek-dark/80 leading-relaxed">
                Our mission is to deliver <span className="font-semibold text-niftek-medium">cutting-edge technology solutions</span> that drive business success and create lasting value for our clients. We strive to be a trusted partner in your digital transformation journey, combining innovation with practical expertise to solve real-world challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section with Interactive Cards */}
        <div
          ref={valuesRef}
          className={`mb-20 transition-all duration-1000 delay-300 ${
            visibleSections.has('values')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-niftek-dark mb-4">
              Our <span className="text-niftek-medium">Values</span>
            </h2>
            <p className="text-lg text-niftek-dark/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                value={value}
                index={index}
                isVisible={visibleSections.has('values')}
                onLearnMore={() => setSelectedValue(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Value Modal */}
      <AnimatePresence>
        {selectedValue !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setSelectedValue(null)}
            />

            {/* Modal Card */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden pointer-events-auto relative flex flex-col"
              >
                {/* Sticky Header */}
                <div className="sticky top-0 z-20 bg-white border-b border-niftek-light/30 p-8 md:p-10 pb-6">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedValue(null)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-niftek-light hover:bg-niftek-medium text-niftek-dark hover:text-white transition-all duration-300 group"
                    aria-label="Close"
                  >
                    <svg
                      className="w-6 h-6 transition-transform group-hover:rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Header Content */}
                  <div className="flex items-center gap-4 pr-12">
                    <div className="text-5xl">{values[selectedValue].icon}</div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-niftek-dark mb-2">
                        {values[selectedValue].title}
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-niftek-medium to-niftek-dark rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto flex-1 p-8 md:p-10 pt-6">

                  {/* Overview */}
                  <div className="mb-8">
                    <p className="text-lg md:text-xl text-niftek-dark/80 leading-relaxed">
                      {values[selectedValue].detailedContent.overview}
                    </p>
                  </div>

                  {/* Key Points */}
                  <div className="mb-8">
                    <h4 className="text-xl md:text-2xl font-semibold text-niftek-dark mb-4">
                      What This Means
                    </h4>
                    <ul className="space-y-4">
                      {values[selectedValue].detailedContent.keyPoints.map((point, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-niftek-dark/80"
                        >
                          <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-niftek-medium"></div>
                          <span className="text-base md:text-lg leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-br from-niftek-light/30 via-niftek-medium/10 to-niftek-light/20 rounded-xl p-6 md:p-8 border border-niftek-medium/20">
                    <h4 className="text-xl md:text-2xl font-semibold text-niftek-dark mb-3">
                      The Impact
                    </h4>
                    <p className="text-base md:text-lg text-niftek-dark/80 leading-relaxed">
                      {values[selectedValue].detailedContent.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ValueCardProps {
  value: {
    title: string;
    description: string;
    icon: string;
    detailedContent?: {
      overview: string;
      keyPoints: string[];
      impact: string;
    };
  };
  index: number;
  isVisible: boolean;
  onLearnMore: () => void;
}

function ValueCard({ value, index, isVisible, onLearnMore }: ValueCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="bg-white rounded-xl shadow-md p-6 md:p-8 h-full relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border border-niftek-light/50 hover:border-niftek-medium/50"
        onClick={onLearnMore}
      >
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-niftek-light/0 to-niftek-medium/0 transition-all duration-500 ${
            isHovered
              ? 'from-niftek-light/20 to-niftek-medium/30'
              : ''
          }`}
        ></div>

        {/* Decorative corner accent */}
        <div
          className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-niftek-medium/0 to-niftek-dark/0 transition-all duration-500 ${
            isHovered ? 'from-niftek-medium/10 to-niftek-dark/20' : ''
          }`}
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
          }}
        ></div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-4 flex items-center gap-4">
            <div
              className={`text-4xl transition-transform duration-300 ${
                isHovered ? 'scale-110 rotate-6' : ''
              }`}
            >
              {value.icon}
            </div>
            <div
              className={`h-0.5 bg-gradient-to-r from-niftek-medium to-transparent transition-all duration-300 ${
                isHovered ? 'w-16' : 'w-8'
              }`}
            ></div>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-niftek-dark mb-3 group-hover:text-niftek-medium transition-colors duration-300">
            {value.title}
          </h3>

          {/* Description */}
          <p className="text-niftek-dark/70 leading-relaxed text-sm md:text-base">
            {value.description}
          </p>

          {/* Learn More Button */}
          <div
            className={`mt-4 flex items-center gap-2 text-niftek-medium transition-all duration-300 group/btn ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
            }`}
          >
            <span className="text-sm font-semibold group-hover/btn:text-niftek-dark transition-colors">
              Learn more
            </span>
            <svg
              className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
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
          </div>
        </div>
      </div>
    </div>
  );
}

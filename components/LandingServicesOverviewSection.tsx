'use client';

import { useState } from 'react';
import Link from 'next/link';
import ExpandableServiceCard from '@/components/ui/expandable-service-card';
import { services } from '@/lib/servicesData';
import AIServicesSection from '@/components/AIServicesSection';

// Gradient colors for service cards (alternating pattern)
const gradients = [
  'linear-gradient(to bottom right, #1a4a56, #2b6777)',
  'linear-gradient(to bottom right, #2b6777, #1a4a56)',
  'linear-gradient(to bottom right, #1a4a56, #2b6777)',
  'linear-gradient(to bottom right, #2b6777, #1a4a56)',
  'linear-gradient(to bottom right, #1a4a56, #2b6777)',
  'linear-gradient(to bottom right, #2b6777, #1a4a56)',
  'linear-gradient(to bottom right, #1a4a56, #2b6777)',
  'linear-gradient(to bottom right, #2b6777, #1a4a56)',
];

// Generate subtitle from title
const getSubtitle = (title: string): string => {
  const subtitleMap: Record<string, string> = {
    'AI Services': 'Intelligent Solutions',
    'Development': 'Custom Software Solutions',
    'Cybersecurity': 'AI-Powered Security',
    'Consulting': 'Expert Guidance',
    'Data Solutions': 'Data-Driven Insights',
    'Integration': 'Seamless Connectivity',
    'Cloud Transformation Services': 'Cloud Excellence',
    'Business Intelligence & Analytics': 'Actionable Insights',
  };
  return subtitleMap[title] || 'Professional Services';
};

const tabConfig = [
  {
    label: 'All',
    titles: services.map((s) => s.title),
  },
  {
    label: 'AI Services',
    titles: ['AI Services'],
  },
  {
    label: 'Build & Integrate',
    titles: ['Development', 'Integration'],
  },
  {
    label: 'Cloud, Data & BI',
    titles: ['Cloud Transformation Services', 'Data Solutions', 'Business Intelligence & Analytics'],
  },
  {
    label: 'Security',
    titles: ['Cybersecurity'],
  },
  {
    label: 'Consulting',
    titles: ['Consulting'],
  },
];

export default function LandingServicesOverviewSection() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const activeConfig = tabConfig.find((tab) => tab.label === activeTab) ?? tabConfig[0];

  const visibleCards = services.filter((service) =>
    activeConfig.titles.includes(service.title)
  );

  return (
    <section className="bg-niftek-offwhite py-20 md:py-28 border-t border-niftek-light/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-niftek-dark mb-4">
            All Our Services at a Glance
          </h2>
          <p className="text-niftek-dark/80 text-base md:text-lg max-w-3xl mx-auto">
            From AI product engineering to cloud, data, and cybersecurity, Niftek provides end-to-end services
            to modernize and secure your digital enterprise.
          </p>
        </div>

        {/* Tabs - Sticky */}
        <div className="sticky top-0 z-50 bg-niftek-offwhite pt-4 pb-2 mb-1 md:mb-1">
          <div className="max-w-6xl mx-auto">
            
            <div className="relative">
              <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex justify-center">
                  <div className="inline-flex gap-2 md:gap-3 bg-white rounded-full border border-niftek-light/70 p-1 shadow-sm">
                  {tabConfig.map((tab) => {
                    const isActive = tab.label === activeTab;
                    return (
                      <button
                        key={tab.label}
                        type="button"
                        onClick={() => setActiveTab(tab.label)}
                        className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
                          isActive
                            ? 'bg-niftek-dark text-white shadow-sm'
                            : 'bg-transparent text-niftek-dark/70 hover:bg-niftek-light/40 hover:text-niftek-dark'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
                </div>
                <div className="flex items-center justify-center py-2 gap-4 mb-3">
              <Link
                href="/services"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-niftek-dark text-white text-sm font-semibold hover:bg-niftek-medium transition-colors shadow-sm"
              >
                View full Services page
              </Link>
            </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards area */}
        <div className="max-w-7xl mx-auto">
          {activeTab === 'AI Services' ? (
            <AIServicesSection />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {visibleCards.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col border border-niftek-light/60"
                >
                  {/* Gradient header */}
                  <div
                    className="h-32 flex items-center justify-center text-white relative"
                    style={{ background: gradients[index % gradients.length] }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 text-center px-4">
                      <h3 className="text-xl font-bold mb-1 text-white">{service.title}</h3>
                      <p className="text-sm opacity-95 text-white">{getSubtitle(service.title)}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-sm md:text-base text-niftek-dark/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 rounded-full bg-niftek-dark text-white text-sm md:text-base font-semibold hover:bg-niftek-medium transition-colors shadow-md hover:shadow-lg"
          >
            Explore all services
          </Link>
        </div>
      </div>
    </section>
  );
}



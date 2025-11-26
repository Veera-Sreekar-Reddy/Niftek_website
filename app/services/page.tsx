'use client';

import Link from 'next/link';
import ExpandableServiceCard from '@/components/ui/expandable-service-card';
import { services } from '@/lib/servicesData';

export default function ServicesPage() {
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
            <li className="text-niftek-dark font-medium">Services</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-niftek-dark mb-4">
            Services
          </h1>
          <p className="text-lg text-niftek-dark/80 max-w-3xl mx-auto">
            Discover our comprehensive range of services designed to meet your business needs. Click on any service card to learn more.
          </p>
        </div>

        {/* Services Grid with Expandable Cards */}
        <div className="max-w-7xl mx-auto">
          <ExpandableServiceCard cards={services} />
        </div>
      </div>
    </div>
  );
}

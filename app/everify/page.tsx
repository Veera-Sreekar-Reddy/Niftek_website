'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function EVerifyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            <li>
              <Link href="/company" className="hover:text-niftek-medium transition-colors">
                Company
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-niftek-dark font-medium">E-Verify</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-niftek-dark mb-4">
            We E-Verify
          </h1>
          <p className="text-lg text-niftek-dark/80 max-w-3xl mx-auto">
            Niftek is committed to following all government standards and regulations.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Content */}
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-niftek-dark mb-4">
                    E-Verify Registered Company
                  </h2>
                  <div className="w-20 h-1 bg-niftek-medium rounded-full mb-6"></div>
                </div>
                
                <div className="prose prose-lg max-w-none text-niftek-dark/80 leading-relaxed space-y-4">
                  <p className="text-lg">
                    Niftek is an <strong className="text-niftek-dark">E-Verify Registered Company</strong>. Niftek follows all government standards and regulations regarding an employee's eligibility to work within the United States.
                  </p>
                  
                  <div className="mt-8 p-6 bg-niftek-light/30 rounded-lg border-l-4 border-niftek-medium">
                    <p className="text-niftek-dark/90 leading-relaxed">
                      E-Verify is an internet-based system that compares information from an employee's Form I-9, Employment Eligibility Verification, to data from U.S. Department of Homeland Security and Social Security Administration records to confirm employment eligibility.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-niftek-dark mb-3">Our Commitment</h3>
                    <ul className="list-disc list-inside space-y-2 text-niftek-dark/80">
                      <li>Compliance with all federal employment verification requirements</li>
                      <li>Maintaining accurate employment eligibility records</li>
                      <li>Protecting employee privacy and information</li>
                      <li>Following E-Verify procedures for all new hires</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Side - US Capitol Logo with Animation */}
              <div
                className={`flex items-center justify-center transform transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
                }`}
              >
                <div className="relative w-full max-w-md">
                  {/* Animated background circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-niftek-light via-niftek-medium/20 to-niftek-light animate-pulse"></div>
                  </div>
                  
                  {/* Rotating ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-72 h-72 md:w-96 md:h-96 border-4 border-niftek-medium/30 rounded-full animate-spin-slow"></div>
                  </div>

                  {/* US Capitol Building Image */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="bg-white rounded-full p-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/Us-capital-logo.png"
                        alt="US Capitol Building"
                        width={300}
                        height={300}
                        className="rounded-lg object-contain w-64 h-64 md:w-80 md:h-80"
                        priority
                      />
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-10 right-10 w-4 h-4 bg-niftek-medium rounded-full animate-bounce delay-100"></div>
                  <div className="absolute bottom-20 left-10 w-3 h-3 bg-niftek-dark rounded-full animate-bounce delay-300"></div>
                  <div className="absolute top-1/2 right-5 w-2 h-2 bg-niftek-medium rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Card */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-niftek-dark mb-4">About E-Verify</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-niftek-dark mb-2">What is E-Verify?</h4>
                <p className="text-niftek-dark/80 text-sm leading-relaxed">
                  E-Verify is a web-based system that allows enrolled employers to confirm the eligibility of their employees to work in the United States.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-niftek-dark mb-2">Why It Matters</h4>
                <p className="text-niftek-dark/80 text-sm leading-relaxed">
                  E-Verify helps employers maintain a legal workforce and provides a fast, easy way to verify employment eligibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


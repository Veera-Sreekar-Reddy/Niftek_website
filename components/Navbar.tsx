'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useOutsideClick } from '@/hooks/use-outside-click';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const companyDropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useOutsideClick(companyDropdownRef, () => setIsCompanyOpen(false));

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  // Check if company dropdown should be active
  const isCompanyActive = isActive('/company') || isActive('/privacy') || isActive('/everify');

  return (
    <nav className="sticky top-0 z-50 bg-white border-niftek-light pl-2 pr-4 lg:pl-2 lg:pr-6 py-2.5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center -ml-2">
          <div className="bg-white p-2 rounded">
            <Image
              src="/niftek-logo.png"
              alt="Niftek Logo"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Mobile menu button - Animated Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`burger-toggle lg:hidden ml-3 ${isOpen ? 'active' : ''}`}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="burger-bar burger-bar-1"></div>
          <div className="burger-bar burger-bar-2"></div>
          <div className="burger-bar burger-bar-3"></div>
        </button>

        {/* Navigation items on the right */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:block lg:w-auto`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                href="/"
                className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 transition-all duration-300 ${
                  isActive('/')
                    ? 'text-niftek-medium font-semibold lg:border-b-2 lg:border-niftek-medium'
                    : 'text-niftek-dark hover:text-niftek-medium hover:bg-niftek-light/50 lg:hover:bg-transparent lg:hover:text-niftek-medium lg:hover:scale-105'
                }`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li 
              ref={companyDropdownRef}
              className="relative"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className={`flex items-center justify-between w-full py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 transition-all duration-300 ${
                  isCompanyActive
                    ? 'text-niftek-medium font-semibold lg:border-b-2 lg:border-niftek-medium'
                    : 'text-niftek-dark hover:text-niftek-medium hover:bg-niftek-light/50 lg:hover:bg-transparent lg:hover:text-niftek-medium lg:hover:scale-105'
                }`}
                aria-expanded={isCompanyOpen}
                aria-haspopup="true"
              >
                <span>Company</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={`${
                  isCompanyOpen ? 'block' : 'hidden'
                } absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-niftek-light z-50 lg:mt-0`}
              >
                <ul className="py-2">
                  <li>
                    <Link
                      href="/company"
                      className="block px-4 py-2 text-sm text-niftek-dark hover:bg-niftek-light/50 hover:text-niftek-medium transition-all duration-300 rounded"
                      onClick={() => {
                        setIsCompanyOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="block px-4 py-2 text-sm text-niftek-dark hover:bg-niftek-light/50 hover:text-niftek-medium transition-all duration-300 rounded"
                      onClick={() => {
                        setIsCompanyOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/everify"
                      className="block px-4 py-2 text-sm text-niftek-dark hover:bg-niftek-light/50 hover:text-niftek-medium transition-all duration-300 rounded"
                      onClick={() => {
                        setIsCompanyOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      E-Verify
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/services"
                className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 transition-all duration-300 ${
                  isActive('/services')
                    ? 'text-niftek-medium font-semibold lg:border-b-2 lg:border-niftek-medium'
                    : 'text-niftek-dark hover:text-niftek-medium hover:bg-niftek-light/50 lg:hover:bg-transparent lg:hover:text-niftek-medium lg:hover:scale-105'
                }`}
                aria-current={isActive('/services') ? 'page' : undefined}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 transition-all duration-300 ${
                  isActive('/careers')
                    ? 'text-niftek-medium font-semibold lg:border-b-2 lg:border-niftek-medium'
                    : 'text-niftek-dark hover:text-niftek-medium hover:bg-niftek-light/50 lg:hover:bg-transparent lg:hover:text-niftek-medium lg:hover:scale-105'
                }`}
                aria-current={isActive('/careers') ? 'page' : undefined}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 transition-all duration-300 ${
                  isActive('/contact')
                    ? 'text-niftek-medium font-semibold lg:border-b-2 lg:border-niftek-medium'
                    : 'text-niftek-dark hover:text-niftek-medium hover:bg-niftek-light/50 lg:hover:bg-transparent lg:hover:text-niftek-medium lg:hover:scale-105'
                }`}
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


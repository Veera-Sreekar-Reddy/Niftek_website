'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useOutsideClick } from '@/hooks/use-outside-click';

const aiProductLinks = [
  {
    href: '/what-we-do/ai-products/learning-coach',
    name: 'AI Learning Coach',
    description: 'K-12, higher education & workforce learning',
  },
  {
    href: '/what-we-do/ai-products/student-advisor',
    name: 'AI Student Advisor',
    description: 'Student-facing guidance for higher education',
  },
  {
    href: '/what-we-do/ai-products/advisor-copilot',
    name: 'Advisor Copilot',
    description: 'AI preparation and workflow support for advisors',
  },
];

const aiPlatformLinks = [
  {
    href: '/what-we-do/ai-platform/autonomous-deal-negotiation',
    name: 'Autonomous Deal Negotiation',
    description: 'Multi-agent vendor negotiation and procurement',
  },
];

const aiSolutionLinks = [
  {
    href: '/what-we-do/ai-solutions/agentic-ai-solutions',
    name: 'Agentic AI Solutions',
    description: 'Education and enterprise AI workflows',
  },
  {
    href: '/what-we-do/ai-solutions/cross-tool-workflow-automation',
    name: 'Cross-Tool Workflow Automation',
    description: 'Governed automation across enterprise systems',
  },
  {
    href: '/what-we-do/ai-solutions/ai-product-engineering',
    name: 'AI Product Engineering',
    description: 'From use-case discovery to production',
  },
];

const whatWeDoLinks = [
  { href: '/what-we-do/ai-products', label: 'AI Products', children: aiProductLinks },
  { href: '/what-we-do/ai-platform', label: 'AI Platform', children: aiPlatformLinks },
  { href: '/what-we-do/ai-solutions', label: 'AI Solutions', children: aiSolutionLinks },
  { href: '/services', label: 'Services' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const companyDropdownRef = useRef<HTMLLIElement>(null);
  const whatWeDoDropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useOutsideClick(companyDropdownRef, () => setIsCompanyOpen(false));
  useOutsideClick(whatWeDoDropdownRef, () => setIsWhatWeDoOpen(false));

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  // Check if company dropdown should be active
  const isCompanyActive = isActive('/company') || isActive('/privacy') || isActive('/everify');
  const isWhatWeDoActive = whatWeDoLinks.some((item) => isActive(item.href));

  const closeMenus = () => {
    setIsCompanyOpen(false);
    setIsWhatWeDoOpen(false);
    setIsOpen(false);
  };

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
            <li
              ref={whatWeDoDropdownRef}
              className="relative"
              onMouseEnter={() => setIsWhatWeDoOpen(true)}
              onMouseLeave={() => setIsWhatWeDoOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                className={`flex items-center justify-between w-full py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 transition-all duration-300 ${
                  isWhatWeDoActive
                    ? 'text-niftek-medium font-semibold lg:border-b-2 lg:border-niftek-medium'
                    : 'text-niftek-dark hover:text-niftek-medium hover:bg-niftek-light/50 lg:hover:bg-transparent lg:hover:text-niftek-medium lg:hover:scale-105'
                }`}
                aria-expanded={isWhatWeDoOpen}
                aria-haspopup="true"
              >
                <span>What We Do</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${isWhatWeDoOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`${
                  isWhatWeDoOpen ? 'block' : 'hidden'
                } absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-niftek-light z-50 lg:mt-0`}
              >
                <ul className="py-2">
                  {whatWeDoLinks.map((item) =>
                    item.children ? (
                      <li key={item.href} className="group/flyout relative">
                        <Link
                          href={item.href}
                          className="flex items-center justify-between px-4 py-2 text-sm text-niftek-dark hover:bg-niftek-light/50 hover:text-niftek-medium group-hover/flyout:bg-niftek-light/50 group-hover/flyout:text-niftek-medium transition-all duration-300 rounded"
                          onClick={closeMenus}
                        >
                          <span>{item.label}</span>
                          <svg
                            className="hidden h-4 w-4 lg:block"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>

                        <ul className="space-y-1 px-3 pb-2 lg:hidden">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block rounded px-3 py-2 hover:bg-niftek-light/50"
                                onClick={closeMenus}
                              >
                                <span className="block text-sm font-semibold text-niftek-dark">{child.name}</span>
                                <span className="mt-0.5 block text-xs leading-snug text-niftek-dark/70">
                                  {child.description}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>

                        <div className="absolute left-full top-0 z-50 -ml-1 hidden pl-2 lg:group-hover/flyout:block">
                          <div className="w-72 rounded-lg border border-niftek-light bg-white py-2 shadow-lg">
                            <ul>
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="mx-1 block rounded-md px-3 py-2.5 hover:bg-niftek-light/50"
                                    onClick={closeMenus}
                                  >
                                    <span className="block text-sm font-semibold text-niftek-dark">
                                      {child.name}
                                    </span>
                                    <span className="mt-0.5 block text-sm leading-snug text-niftek-dark/70">
                                      {child.description}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    ) : (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-niftek-dark hover:bg-niftek-light/50 hover:text-niftek-medium transition-all duration-300 rounded"
                          onClick={closeMenus}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
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


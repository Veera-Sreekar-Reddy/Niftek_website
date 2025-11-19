'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-niftek-light pl-2 pr-4 lg:pl-2 lg:pr-6 py-2.5 shadow-sm">
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

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-niftek-dark rounded-lg lg:hidden hover:bg-niftek-offwhite focus:outline-none focus:ring-2 focus:ring-niftek-medium"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
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
                className="block py-2 pl-3 pr-4 text-niftek-dark rounded lg:bg-transparent lg:text-niftek-dark lg:p-0 hover:text-niftek-medium hover:bg-niftek-offwhite lg:hover:bg-transparent transition-colors"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="block py-2 pl-3 pr-4 text-niftek-dark rounded lg:bg-transparent lg:text-niftek-dark lg:p-0 hover:text-niftek-medium hover:bg-niftek-offwhite lg:hover:bg-transparent transition-colors"
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 pl-3 pr-4 text-niftek-dark rounded lg:bg-transparent lg:text-niftek-dark lg:p-0 hover:text-niftek-medium hover:bg-niftek-offwhite lg:hover:bg-transparent transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="block py-2 pl-3 pr-4 text-niftek-dark rounded lg:bg-transparent lg:text-niftek-dark lg:p-0 hover:text-niftek-medium hover:bg-niftek-offwhite lg:hover:bg-transparent transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-niftek-dark rounded lg:bg-transparent lg:text-niftek-dark lg:p-0 hover:text-niftek-medium hover:bg-niftek-offwhite lg:hover:bg-transparent transition-colors"
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


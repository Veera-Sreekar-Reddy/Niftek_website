import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/servicesData';

export default function Footer() {
  // Select a subset of services to display in footer
  const footerServices = services.slice(0, 6); // Get first 6 services
  return (
    <footer className="bg-white text-gray-800 mt-auto border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/niftek-logo.png"
                alt="Niftek Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Niftek Inc is an emerging business providing world-class Information Technology Services and Solutions. 
              We focus on client-centered analysis, exceeding expectations, and providing superior services with innovation and thought leadership in the industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-niftek-dark">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/" className="hover:text-niftek-dark transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/company" className="hover:text-niftek-dark transition-colors">
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/services" className="hover:text-niftek-dark transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/privacy" className="hover:text-niftek-dark transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/everify" className="hover:text-niftek-dark transition-colors">
                  E-Verify
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/careers" className="hover:text-niftek-dark transition-colors">
                  Careers
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/contact" className="hover:text-niftek-dark transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-niftek-dark">IT Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {footerServices.map((service) => (
                <li key={service.title} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <Link href="/services" className="hover:text-niftek-dark transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-niftek-dark">Reach Us</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-gray-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>5899 Preston Rd Suite 1204 Frisco, Texas, 75034</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>703.962.7755</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                <span>703.962.7888(Fax)</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:hr@niftek.com" className="hover:text-niftek-dark transition-colors">
                  hr@niftek.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Niftek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


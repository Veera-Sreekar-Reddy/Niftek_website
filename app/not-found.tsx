import Link from 'next/link';
import GlitchText from '@/components/GlitchText';

export const metadata = {
  title: '404 - Page Not Found | Niftek',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="bg-niftek-offwhite min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Glitch 404 Text */}
        <div className="mb-8">
          <GlitchText 
            text="404" 
            className="text-9xl md:text-[12rem] font-bold text-niftek-dark block mb-4"
          />
        </div>

        {/* Glitch "NOT FOUND" Text */}
        <div className="mb-8">
          <GlitchText 
            text="NOT FOUND" 
            className="text-4xl md:text-6xl font-bold text-niftek-medium block"
          />
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-niftek-dark/80 mb-8 max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="px-8 py-3 bg-niftek-medium text-white rounded-lg font-semibold hover:bg-niftek-dark transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-niftek-dark border-2 border-niftek-medium rounded-lg font-semibold hover:bg-niftek-offwhite transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            Contact Us
          </Link>
        </div>

        {/* Additional Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-niftek-dark/70">
          <Link href="/services" className="hover:text-niftek-medium transition-colors">
            Services
          </Link>
          <Link href="/company" className="hover:text-niftek-medium transition-colors">
            Company
          </Link>
          <Link href="/careers" className="hover:text-niftek-medium transition-colors">
            Careers
          </Link>
        </div>
      </div>
    </div>
  );
}


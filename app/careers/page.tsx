import Link from 'next/link';

export const metadata = {
  title: 'Careers | Niftek',
  description: 'Join the Niftek team and build your career with us.',
};

export default function CareersPage() {
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
            <li className="text-niftek-dark font-medium">Careers</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-niftek-dark mb-4">
            Careers
          </h1>
          <p className="text-lg text-niftek-dark/80 max-w-3xl mx-auto">
            Join our team and help shape the future of technology. Explore exciting career opportunities at Niftek Inc.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-semibold text-niftek-dark mb-4">Why Work With Us?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-niftek-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-niftek-dark mb-1">Innovative Projects</h3>
                  <p className="text-niftek-dark/80 leading-relaxed">
                    Work on cutting-edge AI and technology projects that make a real impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-niftek-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-niftek-dark mb-1">Collaborative Team</h3>
                  <p className="text-niftek-dark/80 leading-relaxed">
                    Join a supportive team that values collaboration, learning, and growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-niftek-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-niftek-dark mb-1">Career Growth</h3>
                  <p className="text-niftek-dark/80 leading-relaxed">
                    Opportunities for professional development and career advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-niftek-dark mb-6">Open Positions</h2>
            <div className="space-y-4">
              <div className="border border-niftek-light rounded-lg p-4 hover:border-niftek-medium transition-colors">
                <h3 className="text-xl font-semibold text-niftek-dark mb-2">AI Engineer</h3>
                <p className="text-niftek-dark/80 mb-3">
                  We are looking for an experienced AI Engineer to join our team and work on innovative AI solutions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-niftek-medium hover:text-niftek-dark transition-colors font-medium"
                >
                  Apply Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="border border-niftek-light rounded-lg p-4 hover:border-niftek-medium transition-colors">
                <h3 className="text-xl font-semibold text-niftek-dark mb-2">Software Developer</h3>
                <p className="text-niftek-dark/80 mb-3">
                  Join our development team to build scalable and innovative software solutions.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-niftek-medium hover:text-niftek-dark transition-colors font-medium"
                >
                  Apply Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="border border-niftek-light rounded-lg p-4 hover:border-niftek-medium transition-colors">
                <h3 className="text-xl font-semibold text-niftek-dark mb-2">Cybersecurity Specialist</h3>
                <p className="text-niftek-dark/80 mb-3">
                  Help protect our clients with cutting-edge cybersecurity solutions and AI-powered security tools.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-niftek-medium hover:text-niftek-dark transition-colors font-medium"
                >
                  Apply Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mt-8 p-4 bg-niftek-light/30 rounded-lg">
              <p className="text-niftek-dark/80 text-center">
                Don't see a position that matches your skills?{' '}
                <Link href="/contact" className="text-niftek-medium hover:text-niftek-dark font-medium transition-colors">
                  Contact us
                </Link>
                {' '}to learn about future opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



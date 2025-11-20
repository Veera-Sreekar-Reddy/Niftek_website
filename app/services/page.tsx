import Link from 'next/link';

export const metadata = {
  title: 'Services | Niftek',
  description: 'Explore our comprehensive range of services at Niftek Inc.',
};

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
            Discover our comprehensive range of services designed to meet your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-niftek-medium rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-niftek-dark mb-2">AI Services</h3>
              <p className="text-niftek-dark/80 leading-relaxed">
                Comprehensive AI solutions including LLM implementations, RAG systems, and AI governance.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-niftek-medium rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-niftek-dark mb-2">Development</h3>
              <p className="text-niftek-dark/80 leading-relaxed">
                Custom software development and integration services tailored to your business requirements.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-niftek-medium rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-niftek-dark mb-2">Cybersecurity</h3>
              <p className="text-niftek-dark/80 leading-relaxed">
                AI-powered security solutions to protect your business from threats and vulnerabilities.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-niftek-medium rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-niftek-dark mb-2">Consulting</h3>
              <p className="text-niftek-dark/80 leading-relaxed">
                Expert consulting services to help you make informed technology decisions.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-niftek-medium rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-niftek-dark mb-2">Data Solutions</h3>
              <p className="text-niftek-dark/80 leading-relaxed">
                Data management, analytics, and knowledge augmentation services.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-niftek-medium rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-niftek-dark mb-2">Integration</h3>
              <p className="text-niftek-dark/80 leading-relaxed">
                Seamless integration of AI and technology solutions into your existing workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



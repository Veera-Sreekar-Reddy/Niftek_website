import Link from 'next/link';

export const metadata = {
  title: 'Company | Niftek',
  description: 'Learn more about Niftek Inc.',
};

export default function CompanyPage() {
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
            <li className="text-niftek-dark font-medium">Company</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-niftek-dark mb-4">
            Company
          </h1>
          <p className="text-lg text-niftek-dark/80 max-w-3xl mx-auto">
            Learn more about Niftek Inc. and our mission.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-niftek-dark mb-4">About Us</h2>
              <p className="text-niftek-dark/80 leading-relaxed mb-6">
                Welcome to Niftek Inc. We are dedicated to providing innovative solutions and exceptional service.
              </p>
              
              <h2 className="text-2xl font-semibold text-niftek-dark mb-4 mt-8">Our Mission</h2>
              <p className="text-niftek-dark/80 leading-relaxed mb-6">
                Our mission is to deliver cutting-edge technology solutions that drive business success and create value for our clients.
              </p>
              
              <h2 className="text-2xl font-semibold text-niftek-dark mb-4 mt-8">Our Values</h2>
              <ul className="list-disc list-inside text-niftek-dark/80 leading-relaxed space-y-2">
                <li>Innovation and Excellence</li>
                <li>Client-Centric Approach</li>
                <li>Integrity and Transparency</li>
                <li>Continuous Learning and Growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


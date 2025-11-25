import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Niftek',
  description: 'Niftek Privacy Policy - Learn how we protect your personal information and data.',
};

export default function PrivacyPolicyPage() {
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
            <li className="text-niftek-dark font-medium">Privacy Policy</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-niftek-dark mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-niftek-dark/80 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we protect and handle your personal information.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-8">
            {/* Privacy Policy Section */}
            <section>
              <h2 className="text-2xl font-semibold text-niftek-dark mb-4 pb-2 border-b-2 border-niftek-medium">
                Privacy Policy
              </h2>
              <div className="prose prose-lg max-w-none text-niftek-dark/80 leading-relaxed space-y-4">
                <p>
                  Niftek is committed to protect the privacy of all our consultants, clients. We will not sell or donate any phone numbers, email addresses, or other personal information obtained from using this site. The personally identifiable information such as name, phone number provided by you for general enquiries is recorded and used for reasonable business purposes including, but not limited to, fulfilling your request. We will not use this information for any other purpose without your permission.
                </p>
                <p>
                  We provide the information to trusted employees, partners, associations, and other service providers who work on behalf of or with Niftek. These companies may use your personal information to help Niftek communicate with you about positions and job offers. However, these companies do not have any independent right to share this information.
                </p>
              </div>
            </section>

            {/* Acceptable Use Policy Section */}
            <section className="pt-6 border-t border-niftek-light">
              <h2 className="text-2xl font-semibold text-niftek-dark mb-4 pb-2 border-b-2 border-niftek-medium">
                Acceptable Use Policy
              </h2>
              <div className="prose prose-lg max-w-none text-niftek-dark/80 leading-relaxed">
                <p>
                  Any and all material contained within this website is the sole property of Niftek and cannot be duplicated or used for personal or external company use without the express written permission from Niftek.
                </p>
              </div>
            </section>

            {/* Legal Disclaimer Section */}
            <section className="pt-6 border-t border-niftek-light">
              <h2 className="text-2xl font-semibold text-niftek-dark mb-4 pb-2 border-b-2 border-niftek-medium">
                Legal Disclaimer
              </h2>
              <div className="prose prose-lg max-w-none text-niftek-dark/80 leading-relaxed space-y-4">
                <p>
                  All information provided is of a general nature and is not intended to address the circumstances of any particular individual or entity. Although we endeavor to provide accurate and timely information, there can be no guarantee that such information is accurate as of the date it is received or that it will continue to be accurate in the future. No one should act upon such information without appropriate professional advice after a thorough examination of the facts of the particular situation.
                </p>
                <p>
                  If you have questions, please contact us, through our main office number.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="pt-6 border-t border-niftek-light">
              <div className="bg-niftek-light/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-niftek-dark mb-4">Questions About Our Privacy Policy?</h3>
                <p className="text-niftek-dark/80 mb-4">
                  If you have any questions or concerns about our privacy practices, please don't hesitate to reach out to us.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-niftek-medium hover:text-niftek-dark transition-colors font-medium"
                >
                  Contact Us
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </section>

            {/* Last Updated */}
            <div className="pt-6 border-t border-niftek-light text-sm text-niftek-dark/60 text-center">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


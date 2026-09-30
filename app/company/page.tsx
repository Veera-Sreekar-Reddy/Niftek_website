import Link from 'next/link';
import ScrollRevealSection from '@/components/ScrollRevealSection';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#f6f5f2]">
      <div className="container mx-auto px-4 pt-8 md:pt-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-niftek-dark/70">
            <li>
              <Link href="/" className="transition-colors hover:text-niftek-medium">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="font-medium text-niftek-dark">Company</li>
          </ol>
        </nav>
      </div>
      <ScrollRevealSection />
    </div>
  );
}

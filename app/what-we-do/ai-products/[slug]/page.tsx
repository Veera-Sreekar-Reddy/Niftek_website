import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import LearningCoachPage from '@/components/LearningCoachPage';
import StudentAdvisorPage from '@/components/StudentAdvisorPage';
import AdvisorCopilotPage from '@/components/AdvisorCopilotPage';
import { aiProducts, getAiProduct } from '@/lib/aiProductsData';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return aiProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getAiProduct(params.slug);
  if (!product) {
    return { title: 'AI Product | Niftek' };
  }
  return {
    title: `${product.name} | Niftek`,
    description: product.summary,
  };
}

export default function AiProductPage({ params }: Props) {
  const product = getAiProduct(params.slug);

  if (!product) {
    notFound();
  }

  if (product.slug === 'learning-coach') {
    return <LearningCoachPage />;
  }

  if (product.slug === 'student-advisor') {
    return <StudentAdvisorPage />;
  }

  if (product.slug === 'advisor-copilot') {
    return <AdvisorCopilotPage />;
  }

  return (
    <div className="min-h-screen bg-niftek-offwhite">
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-niftek-dark/70">
            <li>
              <Link href="/" className="hover:text-niftek-medium transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-1">/</span>
            </li>
            <li>
              <Link href="/what-we-do/ai-products" className="hover:text-niftek-medium transition-colors">
                AI Products
              </Link>
            </li>
            <li>
              <span className="mx-1">/</span>
            </li>
            <li className="font-medium text-niftek-dark">{product.name}</li>
          </ol>
        </nav>

        <h1 className="mb-3 text-4xl font-bold text-niftek-dark md:text-5xl">{product.name}</h1>
        <p className="text-xl font-medium text-niftek-medium">{product.description}</p>
        <p className="mt-6 text-lg leading-relaxed text-niftek-dark/85">{product.summary}</p>
      </div>
    </div>
  );
}

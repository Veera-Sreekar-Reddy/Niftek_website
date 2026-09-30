import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import DealNegotiationPage from '@/components/DealNegotiationPage';

const platformItems = [
  {
    slug: 'autonomous-deal-negotiation',
    name: 'HeyHica - Autonomous Deal Negotiation',
    description: 'Multi-agent vendor negotiation and procurement',
    summary:
      'A governed multi-agent system that coordinates vendor outreach, inbound replies, quote extraction, negotiation strategy, approval, comparison, and final recommendation across a persistent deal workflow.',
  },
];

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return platformItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = platformItems.find((entry) => entry.slug === params.slug);
  if (!item) {
    return { title: 'AI Platform | Niftek' };
  }
  return {
    title: `${item.name} | Niftek`,
    description: item.summary,
  };
}

export default function AiPlatformItemPage({ params }: Props) {
  const item = platformItems.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  if (item.slug === 'autonomous-deal-negotiation') {
    return <DealNegotiationPage />;
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
              <Link href="/what-we-do/ai-platform" className="hover:text-niftek-medium transition-colors">
                AI Platform
              </Link>
            </li>
            <li>
              <span className="mx-1">/</span>
            </li>
            <li className="font-medium text-niftek-dark">{item.name}</li>
          </ol>
        </nav>

        <h1 className="mb-3 text-4xl font-bold text-niftek-dark md:text-5xl">{item.name}</h1>
        <p className="text-xl font-medium text-niftek-medium">{item.description}</p>
        <p className="mt-6 text-lg leading-relaxed text-niftek-dark/85">{item.summary}</p>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AgenticAiSolutionsPage from '@/components/AgenticAiSolutionsPage';
import CrossToolWorkflowPage from '@/components/CrossToolWorkflowPage';
import AiProductEngineeringPage from '@/components/AiProductEngineeringPage';

const solutionItems = [
  {
    slug: 'agentic-ai-solutions',
    name: 'Agentic AI Solutions',
    description: 'Education and enterprise AI workflows',
    summary:
      'Customer-specific AI workflows that combine retrieval, specialized agents, enterprise integrations, governed action, and measurable operational outcomes.',
  },
  {
    slug: 'cross-tool-workflow-automation',
    name: 'Cross-Tool Workflow Automation',
    description: 'Governed automation across enterprise systems',
    summary:
      'We redesign fragmented workflows across enterprise systems, then automate deterministic work and add AI reasoning only where the process genuinely requires context, state, or dynamic decisions.',
  },
  {
    slug: 'ai-product-engineering',
    name: 'AI Product Engineering',
    description: 'From use-case discovery to production',
    summary:
      'Bring us a use case, workflow, or AI product concept. We turn it into a bounded architecture, working proof of concept, focused MVP, and practical path to production.',
  },
];

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return solutionItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = solutionItems.find((entry) => entry.slug === params.slug);
  if (!item) {
    return { title: 'AI Solutions | Niftek' };
  }
  return {
    title: `${item.name} | Niftek`,
    description: item.summary,
  };
}

export default function AiSolutionItemPage({ params }: Props) {
  const item = solutionItems.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  if (item.slug === 'agentic-ai-solutions') {
    return <AgenticAiSolutionsPage />;
  }

  if (item.slug === 'cross-tool-workflow-automation') {
    return <CrossToolWorkflowPage />;
  }

  if (item.slug === 'ai-product-engineering') {
    return <AiProductEngineeringPage />;
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
              <Link href="/what-we-do/ai-solutions" className="hover:text-niftek-medium transition-colors">
                AI Solutions
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

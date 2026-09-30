export type WhatWeDoSlug = 'ai-products' | 'ai-platform' | 'ai-solutions';

export interface WhatWeDoPage {
  slug: WhatWeDoSlug;
  title: string;
  description: string;
  paragraphs: string[];
  points?: string[];
  link?: { href: string; label: string; external?: boolean };
}

export const whatWeDoPages: WhatWeDoPage[] = [
  {
    slug: 'ai-products',
    title: 'AI Products',
    description:
      'AI products for learning, student guidance, and advisor workflows across K-12, higher education, and the workforce.',
    paragraphs: [
      'Niftek builds AI products that support learners and the people who guide them. Each product is aimed at a specific moment in education or workforce learning.',
    ],
    points: [
      'AI Learning Coach — K-12, higher education, and workforce learning',
      'AI Student Advisor — student-facing guidance for higher education',
      'Advisor Copilot — AI preparation and workflow support for advisors',
    ],
  },
  {
    slug: 'ai-platform',
    title: 'AI Platform',
    description: 'Platform capabilities for autonomous negotiation and procurement.',
    paragraphs: [
      'The AI platform includes systems that carry multi-step commercial work, including vendor negotiation and procurement, with less manual coordination.',
    ],
    points: [
      'Autonomous Deal Negotiation — multi-agent vendor negotiation and procurement',
    ],
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    description:
      'Agentic workflows, governed automation, and product engineering from discovery through production.',
    paragraphs: [
      'Niftek delivers AI solutions for education and enterprise teams, from workflow automation across existing systems to products taken from the first use case into production.',
    ],
    points: [
      'Agentic AI Solutions — education and enterprise AI workflows',
      'Cross-Tool Workflow Automation — governed automation across enterprise systems',
      'AI Product Engineering — from use-case discovery to production',
    ],
  },
];

export function getWhatWeDoPage(slug: string): WhatWeDoPage | undefined {
  return whatWeDoPages.find((page) => page.slug === slug);
}

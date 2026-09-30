export interface AiProduct {
  slug: string;
  name: string;
  description: string;
  summary: string;
}

export const aiProducts: AiProduct[] = [
  {
    slug: 'learning-coach',
    name: 'AI Learning Coach',
    description: 'K-12, higher education & workforce learning',
    summary:
      'A multi-agent learning companion that turns approved course content, learner goals, progress, and deadlines into personalized plans, explanations, practice, and timely guidance.',
  },
  {
    slug: 'student-advisor',
    name: 'AI Student Advisor',
    description: 'Student-facing guidance for higher education',
    summary:
      'A student-facing advisor that helps learners navigate academic planning, degree requirements, deadlines, policies, resources, tutoring, and next steps with source-grounded answers.',
  },
  {
    slug: 'advisor-copilot',
    name: 'Advisor Copilot',
    description: 'AI preparation and workflow support for advisors',
    summary:
      'An internal AI copilot that prepares advisors for student meetings by assembling context, surfacing risk signals, recommending questions and next actions, and drafting follow-up work.',
  },
];

export function getAiProduct(slug: string): AiProduct | undefined {
  return aiProducts.find((product) => product.slug === slug);
}

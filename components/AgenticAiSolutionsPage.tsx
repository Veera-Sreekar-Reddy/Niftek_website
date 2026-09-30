import type { ReactNode } from 'react';
import Link from 'next/link';

const solutionAreas = [
  {
    title: 'Student Success & Early Warning',
    description:
      'Detect attendance, grade, engagement, and missing-work signals; recommend interventions; draft outreach; and track outcomes.',
  },
  {
    title: 'Teacher Productivity',
    description:
      'Learning planning, differentiated activities, rubric-aligned feedback, communication drafts, assessments, and class summaries.',
  },
  {
    title: 'Administrative Communication',
    description:
      'Classify registrar, admissions, financial aid, and service inquiries; retrieve policy answers; draft responses; and route sensitive cases.',
  },
  {
    title: 'AI Governance Assistant',
    description:
      'Answer safe-use policy questions, classify AI use-case risk, explain policy, and route approval requests.',
  },
  {
    title: 'Research AI Workspace',
    description:
      'Secure search, synthesis, comparison, and reasoning over papers, lab notes, protocols, grant files, and approved datasets.',
  },
  {
    title: 'Grant & Funding Intelligence',
    description:
      'Match opportunities, organize proposal requirements, draft narratives, generate outcome plans, and support review workflows.',
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#1a4a40]">
      <span className="mr-2" aria-hidden>
        —
      </span>
      {children}
    </p>
  );
}

export default function AgenticAiSolutionsPage() {
  return (
    <div className="bg-[#f7f3ee] text-[#14362e]">
      <section className="px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-[#12352c] sm:text-6xl">
            Agentic AI Solutions
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5d6b66]">
            Customer-specific AI workflows that combine retrieval, specialized agents, enterprise
            integrations, governed action, and measurable operational outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#1b4d42] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#163f36]"
            >
              Discuss Your Use Case
            </Link>
            <Link
              href="/what-we-do/ai-solutions/agentic-ai-solutions/delivery"
              className="inline-flex items-center rounded-full border border-[#8fb8ae] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#1b4d42] transition-colors hover:bg-white/70"
            >
              See Delivery Method
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Example solution areas</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
            Build around the outcome, not the buzzword.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4e5c58]">
            These solution families can be shaped into a tightly bounded POC, expanded into an MVP,
            and hardened into a controlled production pilot.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutionAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-[#d5e6e1] bg-white px-6 py-7"
              >
                <h3 className="text-lg font-bold text-[#14362e]">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5d6b66]">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

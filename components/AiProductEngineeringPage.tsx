import type { ReactNode } from 'react';
import Link from 'next/link';

const stages = [
  {
    title: 'Product & use-case discovery',
    description:
      'Clarify the buyer, end user, measurable outcome, workflow, system boundaries, data access, risks, and success criteria.',
  },
  {
    title: 'Architecture & engineering',
    description:
      'Design the UI, APIs, data model, RAG pipeline, agents, integrations, approvals, deployment path, and observability.',
  },
  {
    title: 'Evaluation & pilot readiness',
    description:
      'Define realistic test cases, baseline metrics, failure paths, security assumptions, monitoring, rollout, and expansion criteria.',
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

export default function AiProductEngineeringPage() {
  return (
    <div className="bg-[#f7f3ee] text-[#14362e]">
      <section className="px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-[#12352c] sm:text-6xl">
            AI Product Engineering
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5d6b66]">
            Bring us a use case, workflow, or AI product concept. We turn it into a bounded
            architecture, working proof of concept, focused MVP, and practical path to production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#1b4d42] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#163f36]"
            >
              Discuss Your Use Case
            </Link>
            <Link
              href="/what-we-do/ai-solutions/ai-product-engineering/delivery"
              className="inline-flex items-center rounded-full border border-[#8fb8ae] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#1b4d42] transition-colors hover:bg-white/70"
            >
              See Delivery Method
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>End-to-end build</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
            From ambiguity to a working product.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4e5c58]">
            We combine product discovery, workflow design, AI architecture, software engineering,
            evaluation, security controls, and pilot planning in one delivery path.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {stages.map((stage) => (
              <li
                key={stage.title}
                className="rounded-2xl border border-[#d5e6e1] bg-[#fbfcfb] px-5 py-6"
              >
                <h3 className="font-bold text-[#14362e]">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5d6b66]">{stage.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

import type { ReactNode } from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Confirm the buyer pain, process owner, users, systems, data, policy constraints, integrations, and measurable success criteria.',
  },
  {
    number: '02',
    title: 'Target-state design',
    description:
      'Map the desired workflow and classify each step as deterministic automation, AI-assisted work, agentic reasoning, or human-controlled action.',
  },
  {
    number: '03',
    title: 'Architecture selection',
    description:
      'Choose the smallest viable architecture and decide where existing platforms, APIs, RAG, multi-agent orchestration, or custom services belong.',
  },
  {
    number: '04',
    title: 'Rapid POC',
    description:
      'For tightly bounded use cases, build an end-to-end proof using synthetic, de-identified, or approved data. Target: from 1–2 weeks when scope is intentionally narrow.',
  },
  {
    number: '05',
    title: 'Focused MVP',
    description:
      'Add selected live integrations, identity, role-specific UX, approval workflows, auditability, and outcome analytics. Target: from 2–4 weeks for contained scope.',
  },
  {
    number: '06',
    title: 'Controlled validation',
    description:
      'Replay historical scenarios, run synthetic cases, test failure paths, validate permissions, evaluate outputs, and operate in shadow or recommendation mode when appropriate.',
  },
  {
    number: '07',
    title: 'Enterprise pilot',
    description:
      'Deploy to selected users or teams with explicit monitoring, operational runbooks, support ownership, rollback procedures, and agreed success metrics.',
  },
  {
    number: '08',
    title: 'Measure & scale',
    description:
      'Compare results to baseline. Expand integrations, workflows, users, or autonomy only where evidence supports the next step.',
  },
];

const proofs = [
  {
    title: 'Complete workflow',
    description:
      'Demonstrate the end-to-end path with realistic data, explicit roles, and at least one meaningful action or decision point.',
  },
  {
    title: 'Traceable behavior',
    description:
      'Show retrieval sources, agent steps, risk flags, approvals, failures, and the evidence used to reach an output.',
  },
  {
    title: 'Business evidence',
    description:
      'Include baseline and target metrics plus a concrete MVP scope, integration plan, risks, timeline, and next-step recommendation.',
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

export default function DeliveryMethodPage() {
  return (
    <div className="bg-[#f7f3ee] text-[#14362e]">
      <section className="px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Delivery methodology</Eyebrow>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-[#12352c] sm:text-6xl">
            How We Deliver
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5d6b66]">
            A practical sequence from outcome discovery to controlled production—designed to prove
            value early while keeping architecture, security, and governance visible from the
            beginning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#1b4d42] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#163f36]"
            >
              Discuss Your Use Case
            </Link>
            <a
              href="#method"
              className="inline-flex items-center rounded-full border border-[#8fb8ae] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#1b4d42] transition-colors hover:bg-white/70"
            >
              See Delivery Method
            </a>
          </div>
        </div>
      </section>

      <section id="method" className="scroll-mt-24 bg-white px-4 py-6 sm:px-6 md:py-10">
        <ol className="mx-auto max-w-6xl">
          {steps.map((step) => (
            <li
              key={step.number}
              className="grid gap-2 border-b border-[#e3eeea] py-6 sm:grid-cols-[220px_1fr] sm:items-start sm:gap-12 md:py-7"
            >
              <h2 className="text-sm font-semibold leading-snug text-[#1b6b57] sm:text-base">
                {step.number}
                <span className="mx-1.5">·</span>
                {step.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#5d6b66] sm:text-base">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Definition of a serious POC</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
            It should prove more than a chat demo.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {proofs.map((proof) => (
              <article
                key={proof.title}
                className="rounded-2xl border border-[#d5e6e1] bg-white px-6 py-7"
              >
                <h3 className="text-lg font-bold text-[#14362e]">{proof.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5d6b66]">{proof.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

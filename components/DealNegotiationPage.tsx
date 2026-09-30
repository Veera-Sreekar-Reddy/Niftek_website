import type { ReactNode } from 'react';
import Link from 'next/link';

const stages = [
  {
    number: '01',
    title: 'Structure the requirement',
    description:
      'Convert business needs, constraints, timelines, budgets, and vendor lists into a normalized negotiation brief.',
  },
  {
    number: '02',
    title: 'Engage vendors',
    description:
      'Draft and send approved outreach, receive replies, and keep each negotiation thread associated with the correct deal.',
  },
  {
    number: '03',
    title: 'Analyze & negotiate',
    description:
      'Extract pricing, terms, SLAs, warranties, delivery, risks, and gaps; generate counteroffer and clarification strategies.',
  },
  {
    number: '04',
    title: 'Compare & recommend',
    description:
      'Normalize final offers, score against buyer priorities, and produce a documented recommendation with negotiation history.',
  },
];

const capabilities = [
  'Multi-agent orchestration',
  'Email-native workflow',
  'PDF/quote extraction',
  'Persistent deal state',
  'Negotiation policy engine',
  'Human approval',
  'Offer comparison',
  'Audit trail',
];

const components = [
  {
    number: '1',
    title: 'Inbound/outbound communication layer',
    description: 'Email channels, vendor identity, thread correlation, and delivery controls.',
  },
  {
    number: '2',
    title: 'Offer normalization',
    description:
      'Extract structured pricing, line items, terms, support, delivery, and exceptions from varied vendor responses.',
  },
  {
    number: '3',
    title: 'Negotiation intelligence',
    description:
      'Strategy, counteroffers, clarification questions, comparison logic, and buyer-preference weighting.',
  },
  {
    number: '4',
    title: 'Governance',
    description:
      'Buyer authority boundaries, approvals, traceable decisions, and protection against unauthorized commitments.',
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

export default function DealNegotiationPage() {
  return (
    <div className="bg-[#f7f3ee] text-[#14362e]">
      <section className="px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-[#12352c] sm:text-6xl">
            HeyHica - Autonomous Deal Negotiation
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5d6b66]">
            A governed multi-agent system that coordinates vendor outreach, inbound replies, quote
            extraction, negotiation strategy, approval, comparison, and final recommendation across
            a persistent deal workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#1b4d42] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#163f36]"
            >
              Discuss Your Use Case
            </Link>
            <Link
              href="/what-we-do/ai-platform/autonomous-deal-negotiation/delivery"
              className="inline-flex items-center rounded-full border border-[#8fb8ae] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#1b4d42] transition-colors hover:bg-white/70"
            >
              See Delivery Method
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>End-to-end negotiation</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
            From purchase need to decision-ready recommendation.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4e5c58]">
            Designed for procurement, vendor renewals, managed services, software and hardware
            buying, education procurement, and other multi-vendor sourcing workflows.
          </p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage) => (
              <li
                key={stage.number}
                className="rounded-2xl border border-[#d5e6e1] bg-[#fbfcfb] px-5 py-6"
              >
                <p className="text-sm font-semibold text-[#1b6b57]">{stage.number}</p>
                <h3 className="mt-3 font-bold text-[#14362e]">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5d6b66]">{stage.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Architecture</Eyebrow>
            <h2 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
              Autonomy with explicit authority boundaries.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4e5c58]">
              The platform can pursue a defined negotiation goal across multiple steps while
              preserving approval controls around outbound communication, commitments, and
              policy-sensitive actions.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#d5e6e1] bg-white px-3 py-1.5 text-sm font-medium text-[#3d524c]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#d5e6e1] bg-white px-6 py-7 sm:px-8 sm:py-8">
            <span className="inline-block rounded-md bg-[#f3ebe3] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5c5348]">
              Core technical components
            </span>
            <ol className="mt-6 space-y-5">
              {components.map((item) => (
                <li key={item.number} className="flex gap-4">
                  <span className="w-4 shrink-0 pt-0.5 text-sm font-semibold text-[#c4a15a]">
                    {item.number}
                  </span>
                  <div>
                    <p className="font-semibold text-[#14362e]">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#5d6b66]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

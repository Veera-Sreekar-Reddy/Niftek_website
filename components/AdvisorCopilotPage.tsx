import type { ReactNode } from 'react';
import Link from 'next/link';

const capabilities = [
  {
    title: 'Student 360 preparation',
    description:
      'Compile allowed SIS, LMS, degree progress, attendance, advising notes, and recent interaction context.',
  },
  {
    title: 'Concise pre-meeting brief',
    description: 'Highlight blockers, strengths, recent changes, and relevant timeline events.',
  },
  {
    title: 'Next-best-action support',
    description:
      'Suggest questions, referrals, follow-up tasks, and policy-aligned interventions for advisor review.',
  },
  {
    title: 'Follow-up drafting',
    description: 'Prepare session recap, tasks, and student communications after advisor approval.',
  },
];

const outcomes = [
  'Advisor prep time',
  'Timely outreach',
  'Recommendation acceptance',
  'Missed risk signals',
  'Meeting quality',
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

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-[#2f7d62]"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M4.5 10.5 8 14l7.5-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AdvisorCopilotPage() {
  return (
    <div className="bg-[#f7f3ee] text-[#14362e]">
      <section className="px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-[#12352c] sm:text-6xl">
            Advisor Copilot
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5d6b66]">
            An internal AI copilot that prepares advisors for student meetings by assembling
            context, surfacing risk signals, recommending questions and next actions, and drafting
            follow-up work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#1b4d42] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#163f36]"
            >
              Discuss Your Use Case
            </Link>
            <Link
              href="/what-we-do/ai-products/advisor-copilot/delivery"
              className="inline-flex items-center rounded-full border border-[#8fb8ae] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#1b4d42] transition-colors hover:bg-white/70"
            >
              See Delivery Method
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Advisor productivity</Eyebrow>
            <h2 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
              Turn scattered student context into a meeting-ready brief.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4e5c58]">
              Designed for higher education advising centers, community colleges, high-school
              counseling, and student success teams managing large caseloads across multiple
              systems.
            </p>
            <ul className="mt-8 space-y-5">
              {capabilities.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckIcon />
                  <div>
                    <p className="font-semibold text-[#14362e]">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#5d6b66]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#d5e6e1] bg-[#fbfcfb] px-6 py-7 sm:px-8 sm:py-8">
            <span className="inline-block rounded-md bg-[#f3ebe3] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5c5348]">
              Governance
            </span>
            <h3 className="mt-5 text-xl font-bold text-[#14362e]">Human judgment stays central.</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5d6b66]">
              Strict role-based access, minimum-necessary student data, field masking, audit logs,
              and configurable approval rules keep the copilot focused on preparation and
              recommendation rather than autonomous high-stakes decisions.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-full border border-[#d5e6e1] bg-white px-3 py-1.5 text-sm font-medium text-[#3d524c]"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

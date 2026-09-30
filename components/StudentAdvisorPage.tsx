import type { ReactNode } from 'react';
import Link from 'next/link';

const capabilities = [
  {
    title: 'Natural-language advising',
    description:
      'Students can ask about requirements, deadlines, policies, resources, and course planning in plain language.',
  },
  {
    title: 'Source-grounded answers',
    description:
      'Retrieval from approved catalogs, handbooks, policy documents, advising FAQs, and campus resources.',
  },
  {
    title: 'Context-aware guidance',
    description:
      'When permitted, role and student context can shape recommended next steps without bypassing institutional rules.',
  },
  {
    title: 'Escalation by confidence and risk',
    description:
      'Ambiguous or high-stakes questions are routed to human advisors rather than treated as final decisions.',
  },
];

const sources = [
  'Course Catalog',
  'Degree Audit',
  'Registrar Policies',
  'Financial Aid FAQs',
  'Academic Calendar',
  'LMS/SIS',
  'SSO',
];

const workflow = [
  {
    number: '1',
    title: 'Understand intent',
    description: 'Classify the request: degree planning, policy, deadline, resource referral, or escalation.',
  },
  {
    number: '2',
    title: 'Retrieve evidence',
    description: 'Search approved institutional sources and preserve source references.',
  },
  {
    number: '3',
    title: 'Apply context',
    description: 'Use permitted student or role context only when policy allows.',
  },
  {
    number: '4',
    title: 'Respond or escalate',
    description:
      'Return a clear answer and next step, or hand the case to a person when confidence or risk requires it.',
  },
  {
    number: '5',
    title: 'Audit',
    description:
      'Record question type, source, confidence, and escalation behavior for review and improvement.',
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

export default function StudentAdvisorPage() {
  return (
    <div className="bg-[#f7f3ee] text-[#14362e]">
      <section className="px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-[#12352c] sm:text-6xl">
            AI Student Advisor
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5d6b66]">
            A student-facing advisor that helps learners navigate academic planning, degree
            requirements, deadlines, policies, resources, tutoring, and next steps with
            source-grounded answers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#1b4d42] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#163f36]"
            >
              Discuss Your Use Case
            </Link>
            <Link
              href="/what-we-do/ai-products/student-advisor/delivery"
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
            <Eyebrow>Best fit</Eyebrow>
            <h2 className="max-w-md text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
              Designed first for higher education.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4e5c58]">
              Universities, community colleges, dual-enrollment programs, and high schools can use
              the AI Student Advisor to make accurate institutional guidance easier to find while
              reducing repetitive advising demand.
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
              Technical foundation
            </span>
            <h3 className="mt-5 text-xl font-bold text-[#14362e]">Core components</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5d6b66]">
              RAG assistant, policy-aware answer generation, intent classification, escalation
              queue, source citations, role-based authorization, optional student-profile
              integration, and analytics for unanswered questions.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {sources.map((source) => (
                <li
                  key={source}
                  className="rounded-full border border-[#d5e6e1] bg-white px-3 py-1 text-xs font-medium text-[#3d524c]"
                >
                  {source}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Example workflow</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
            One question, a governed path to an answer.
          </h2>
          <ol className="mt-10">
            {workflow.map((step) => (
              <li
                key={step.number}
                className="grid gap-2 border-b border-[#e3eeea] py-6 sm:grid-cols-[220px_1fr] sm:items-start sm:gap-12 md:py-7"
              >
                <h3 className="text-sm font-semibold leading-snug text-[#1b6b57] sm:text-base">
                  {step.number}
                  <span className="mx-1.5">·</span>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5d6b66] sm:text-base">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

import type { ReactNode } from 'react';
import Link from 'next/link';

const audiences = [
  {
    title: 'Personalized learning plan',
    description: 'Goal-aware plans with modules, checkpoints, pacing, and suggested schedules.',
  },
  {
    title: 'Course-grounded tutoring',
    description: 'Explanations, examples, and practice generated from approved learning materials.',
  },
  {
    title: 'Progress and reflection',
    description: 'Track completed work, confidence signals, quiz performance, and what needs more practice.',
  },
  {
    title: 'Governed reminders',
    description: 'Deadline and progress nudges through approved channels and policy rules.',
  },
];

const architecture = [
  {
    title: 'Multi-agent orchestration',
    description:
      'Goal intake, retrieval, planning, tutoring, progress, reflection, and notification roles.',
  },
  {
    title: 'RAG & learner context',
    description:
      'Permission-aware retrieval over course content, syllabi, rubrics, standards, and approved resources.',
  },
  {
    title: 'Data & integrations',
    description:
      'LMS, identity provider, calendar, gradebook summaries, analytics, and content repositories.',
  },
  {
    title: 'Safety controls',
    description:
      'Role-based access, age-appropriate controls, data minimization, logging, and teacher/admin oversight.',
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

export default function LearningCoachPage() {
  return (
    <div className="bg-[#f7f3ee] text-[#14362e]">
      <section className="px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>AI Product</Eyebrow>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-[#12352c] sm:text-6xl">
            AI Learning Coach
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5d6b66]">
            A multi-agent learning companion that turns approved course content, learner goals,
            progress, and deadlines into personalized plans, explanations, practice, and timely
            guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#1b4d42] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#163f36]"
            >
              Discuss Your Use Case
            </Link>
            <Link
              href="/what-we-do/ai-products/learning-coach/delivery"
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
            <Eyebrow>Who it serves</Eyebrow>
            <h2 className="max-w-md text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
              Personalized learning without losing institutional control.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4e5c58]">
              K-12 schools, universities, online programs, executive education, and workforce
              learning teams can use the Learning Coach to provide structured guidance while
              keeping approved content and oversight at the center.
            </p>
            <ul className="mt-8 space-y-5">
              {audiences.map((item) => (
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
            <h3 className="mt-5 text-xl font-bold text-[#14362e]">Core architecture</h3>
            <ol className="mt-6 space-y-5">
              {architecture.map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span className="w-4 shrink-0 pt-0.5 text-sm font-semibold text-[#c4a15a]">
                    {index + 1}
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

      <section id="delivery" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>POC → MVP</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
            Start with one learning context, then expand.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-[#d5e6e1] bg-white px-6 py-7 sm:px-7">
              <span className="inline-block rounded-md bg-[#f3ebe3] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5c5348]">
                Rapid POC
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#14362e]">From 1–2 weeks</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5d6b66]">
                Use one course, subject, or curated content set with synthetic or approved learner
                profiles. Demonstrate personalized planning, Q&A, practice generation, progress
                tracking, and learner summaries.
              </p>
            </article>
            <article className="rounded-2xl border border-[#d5e6e1] bg-white px-6 py-7 sm:px-7">
              <span className="inline-block rounded-md bg-[#f3ebe3] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5c5348]">
                Focused MVP
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#14362e]">From 2–4 weeks</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5d6b66]">
                For contained scope: add selected LMS/identity integrations, role visibility,
                analytics, content approval, and safe-interaction policies. Larger enterprise
                integrations are estimated separately.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

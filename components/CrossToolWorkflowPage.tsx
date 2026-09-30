import type { ReactNode } from 'react';
import Link from 'next/link';

const tools = [
  'ServiceNow',
  'Splunk',
  'BigPanda',
  'Teams',
  'Slack',
  'Jira',
  'GitHub / GitLab',
  'Azure DevOps',
  'Boomi',
  'UiPath',
  'Power Automate',
  'MuleSoft',
];

const decisions = [
  {
    title: 'Deterministic automation',
    description:
      'Rules, ticket creation, field mapping, notifications, status updates, and API transformations.',
  },
  {
    title: 'AI-assisted work',
    description:
      'Summaries, drafts, classifications, knowledge retrieval, and recommendations with review or confidence thresholds.',
  },
  {
    title: 'Agentic reasoning',
    description:
      'Evidence gathering, dynamic branching, long-running context, runbook selection, and multi-step investigation.',
  },
  {
    title: 'Human-controlled action',
    description:
      'Production changes, sensitive communications, and high-severity decisions remain explicitly approval-controlled.',
  },
];

const pilotSteps = [
  {
    title: 'Alert',
    description: 'Receive a selected alert or event from an observability platform.',
  },
  {
    title: 'Record',
    description: 'Create or update the system-of-record incident and preserve ownership.',
  },
  {
    title: 'Enrich',
    description:
      'Retrieve service ownership, prior incidents, relevant knowledge, deployment context, and other approved evidence.',
  },
  {
    title: 'Recommend',
    description: 'Generate a concise operational summary and suggested next steps.',
  },
  {
    title: 'Coordinate',
    description:
      'Publish approved context to collaboration channels, capture human feedback, and update the incident workflow.',
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

export default function CrossToolWorkflowPage() {
  return (
    <div className="bg-[#f7f3ee] text-[#14362e]">
      <section className="px-4 pb-16 pt-14 sm:px-6 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>AI Services</Eyebrow>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#12352c] sm:text-6xl">
            Cross-Tool Workflow Automation
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5d6b66]">
            We redesign fragmented workflows across enterprise systems, then automate deterministic
            work and add AI reasoning only where the process genuinely requires context, state, or
            dynamic decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#1b4d42] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#163f36]"
            >
              Discuss Your Use Case
            </Link>
            <Link
              href="/what-we-do/ai-solutions/cross-tool-workflow-automation/delivery"
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
            <Eyebrow>Workflow first</Eyebrow>
            <h2 className="max-w-md text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
              Your workflow crosses five systems. Your automation should too.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4e5c58]">
              We begin with the current process: actors, systems, inputs, delays, exceptions,
              approvals, and measurable pain. Then we design the target workflow around the
              customer&apos;s existing technology stack wherever practical.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-[#d5e6e1] bg-white px-3 py-1.5 text-sm text-[#3d524c]"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#d5e6e1] bg-[#fbfcfb] px-6 py-7 sm:px-8 sm:py-8">
            <span className="inline-block rounded-md bg-[#f3ebe3] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5c5348]">
              Decision model
            </span>
            <ol className="mt-6 space-y-5">
              {decisions.map((item, index) => (
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

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Example pilot</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[#12352c] sm:text-5xl">
            Incident enrichment & response coordination.
          </h2>
          <ol className="mt-10">
            {pilotSteps.map((step) => (
              <li
                key={step.title}
                className="grid gap-2 border-b border-[#e3eeea] py-5 sm:grid-cols-[180px_1fr] sm:items-start sm:gap-12"
              >
                <h3 className="text-sm font-semibold text-[#14362e] sm:text-base">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#5d6b66] sm:text-base">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

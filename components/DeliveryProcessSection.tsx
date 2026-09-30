'use client';

import { motion, useReducedMotion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as const;

const headlineVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
};

const wordVariants = {
  hidden: { y: '115%' },
  show: {
    y: '0%',
    transition: { duration: 0.7, ease },
  },
};

const steps = [
  {
    number: '01',
    title: 'Discover',
    body: 'Clarify the outcome, workflow, users, systems, data, constraints, and success metrics.',
  },
  {
    number: '02',
    title: 'Architect',
    body: 'Separate deterministic automation, AI reasoning, knowledge retrieval, integrations, and approvals.',
  },
  {
    number: '03',
    title: 'Prove',
    body: 'Build the smallest end-to-end workflow that demonstrates credible value with measurable results.',
  },
  {
    number: '04',
    title: 'Pilot & Scale',
    body: 'Integrate live systems, validate controls, measure performance, and expand only where evidence supports it.',
  },
];

const timelines = [
  {
    title: '1–2 weeks',
    body: 'Rapid proof of concept for tightly scoped workflows using available, synthetic, or de-identified data.',
  },
  {
    title: '2–4 weeks',
    body: 'Focused MVP for contained solutions with limited integrations and clearly defined users.',
  },
  {
    title: 'Enterprise pilot',
    body: 'Customer-specific timeline for live integrations, SSO, policy controls, production support, and security review.',
  },
];

function RevealHeading({
  text,
  className,
  reduceMotion,
  as: Tag = 'h2',
}: {
  text: string;
  className: string;
  reduceMotion: boolean | null;
  as?: 'h2' | 'h3';
}) {
  const words = text.split(' ');
  const Heading = motion[Tag];

  return (
    <Heading
      className={className}
      variants={headlineVariants}
      initial={reduceMotion ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.14em] align-bottom"
        >
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
            {index < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Heading>
  );
}

export default function DeliveryProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section>
      <div className="bg-white py-20 md:py-28 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <motion.p
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-niftek-medium"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease }}
            >
              <motion.span
                className="inline-block h-px w-7 origin-left bg-niftek-medium"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, ease }}
                aria-hidden="true"
              />
              Delivery process
            </motion.p>

            <RevealHeading
              text="From use case to working AI."
              className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#0f403c] sm:text-5xl lg:text-[3.45rem]"
              reduceMotion={reduceMotion}
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {steps.map((step, index) => (
                <motion.article
                  key={step.number}
                  className="h-full"
                  initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.65,
                    delay: reduceMotion ? 0 : 0.12 + index * 0.1,
                    ease,
                  }}
                >
                  <motion.div
                    className="h-full rounded-2xl border border-[#e6e8e6] bg-white px-6 py-7"
                    whileHover={reduceMotion ? undefined : { y: -6 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  >
                    <p className="text-sm font-semibold tracking-wide text-[#1a8f84]">
                      {step.number}
                    </p>
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-[#0f403c]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#5c676c]">
                      {step.body}
                    </p>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#007a78] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <motion.p
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease }}
            >
              <motion.span
                className="inline-block h-px w-7 origin-left bg-white/70"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, ease }}
                aria-hidden="true"
              />
              Delivery speed
            </motion.p>

            <RevealHeading
              as="h3"
              text="Start small. Prove value. Scale what works."
              className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
              reduceMotion={reduceMotion}
            />

            <motion.p
              className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.35, ease }}
            >
              Fast delivery for tightly bounded use cases, with enterprise timelines shaped by
              integrations, identity, security, data access, and governance.
            </motion.p>

            <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
              {timelines.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="h-full"
                  initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.65,
                    delay: reduceMotion ? 0 : 0.15 + index * 0.12,
                    ease,
                  }}
                >
                  <motion.div
                    className="h-full rounded-2xl border border-white/15 bg-[#188687] px-6 py-7 sm:px-7 sm:py-8"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -6, backgroundColor: '#1c9495' }
                    }
                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  >
                    <h4 className="text-lg font-bold tracking-tight text-white">{item.title}</h4>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/85">{item.body}</p>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

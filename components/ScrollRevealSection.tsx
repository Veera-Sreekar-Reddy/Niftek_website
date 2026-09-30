'use client';

import { motion, useReducedMotion } from 'motion/react';

const headline = 'AI should move work forward.';

const principles = [
  {
    title: 'Outcome first',
    body: 'We start with the business or educational outcome, then choose the smallest architecture that can prove value.',
  },
  {
    title: 'Human authority stays explicit',
    body: 'High-impact decisions and sensitive actions are approval-controlled, traceable, and aligned to customer policy.',
  },
  {
    title: 'Reuse what already works',
    body: 'Existing enterprise platforms and systems of record remain central. Custom AI orchestration is added where reasoning and state create clear value.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const headlineVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.14 },
  },
};

const wordVariants = {
  hidden: { y: '115%' },
  show: {
    y: '0%',
    transition: { duration: 0.7, ease },
  },
};

export default function ScrollRevealSection() {
  const reduceMotion = useReducedMotion();
  const words = headline.split(' ');

  return (
    <section className="relative overflow-hidden bg-[#f6f5f2] py-20 md:py-28 lg:py-32">
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
            Vision &amp; Mission
          </motion.p>

          <motion.h2
            className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#143832] sm:text-5xl lg:text-[3.45rem]"
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
          </motion.h2>

          <motion.p
            className="mt-6 max-w-3xl text-base leading-relaxed text-[#5c676c] sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.42, ease }}
          >
            Our vision is a world where AI works alongside people across real systems,
            knowledge, and workflows. Our mission is to turn AI experimentation into secure,
            measurable, production-ready outcomes through practical architecture and governed
            autonomy.
          </motion.p>

          <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                className="h-full"
                initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : 0.2 + index * 0.12,
                  ease,
                }}
              >
                <motion.div
                  className="h-full rounded-2xl border border-[#e7e4de] bg-white px-6 py-7 shadow-[0_10px_30px_-18px_rgba(20,56,50,0.45)] sm:px-7 sm:py-8"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -6,
                          boxShadow: '0 22px 40px -20px rgba(20,56,50,0.35)',
                        }
                  }
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                >
                  <h3 className="text-lg font-bold tracking-tight text-[#143832]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#5c676c]">
                    {principle.body}
                  </p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

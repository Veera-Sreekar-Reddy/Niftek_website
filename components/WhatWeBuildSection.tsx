'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as const;

const headline = 'Three ways to move from AI interest to working capability.';

const headlineVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.12 },
  },
};

const wordVariants = {
  hidden: { y: '115%' },
  show: {
    y: '0%',
    transition: { duration: 0.7, ease },
  },
};

const offerings = [
  {
    label: 'AI Products',
    title: 'Education AI Products',
    body: 'Student-facing and advisor-facing AI experiences for personalized learning, academic guidance, and advising productivity.',
    cta: 'Explore products',
    href: '/what-we-do/ai-products/learning-coach',
  },
  {
    label: 'AI Platform',
    title: 'HeyHica - Autonomous Deal Negotiation',
    body: 'A governed multi-agent platform for vendor outreach, quote analysis, negotiation strategy, approvals, comparison, and recommendations.',
    cta: 'Explore platform',
    href: '/what-we-do/ai-platform/autonomous-deal-negotiation',
  },
  {
    label: 'AI Solutions',
    title: 'Agentic AI & Workflow Automation',
    body: 'Customer-specific AI solutions that connect knowledge, APIs, workflow systems, approvals, and human decision makers.',
    cta: 'Explore services',
    href: '/what-we-do/ai-solutions/agentic-ai-solutions',
  },
];

export default function WhatWeBuildSection() {
  const reduceMotion = useReducedMotion();
  const words = headline.split(' ');

  return (
    <section className="relative bg-[#f6f5f2] py-20 md:py-28 lg:py-32">
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
            What we build
          </motion.p>

          <motion.h2
            className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[#143832] sm:text-5xl lg:text-[3.35rem]"
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
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.35, ease }}
          >
            Choose a focused AI product, deploy a multi-agent platform, or redesign a workflow
            around the systems you already use.
          </motion.p>

          <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {offerings.map((offering, index) => (
              <motion.article
                key={offering.title}
                className="h-full"
                initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : 0.15 + index * 0.12,
                  ease,
                }}
              >
                <motion.div
                  className="h-full"
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                >
                  <Link
                    href={offering.href}
                    className="group flex h-full flex-col rounded-2xl border border-[#e7e4de] bg-white px-6 py-7 shadow-[0_10px_30px_-18px_rgba(20,56,50,0.45)] transition-shadow hover:shadow-[0_22px_40px_-20px_rgba(20,56,50,0.35)] sm:px-7 sm:py-8"
                  >
                    <span className="inline-flex w-fit rounded-full bg-[#e7f4f0] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a8f84]">
                      {offering.label}
                    </span>
                    <h3 className="mt-5 text-xl font-bold tracking-tight text-[#143832]">
                      {offering.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5c676c]">
                      {offering.body}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a8f84]">
                      {offering.cta}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

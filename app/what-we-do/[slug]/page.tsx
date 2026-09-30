import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getWhatWeDoPage, whatWeDoPages } from '@/lib/whatWeDoData';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return whatWeDoPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getWhatWeDoPage(params.slug);
  if (!page) {
    return { title: 'What We Do | Niftek' };
  }
  return {
    title: `${page.title} | Niftek`,
    description: page.description,
  };
}

export default function WhatWeDoPage({ params }: Props) {
  const page = getWhatWeDoPage(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="bg-niftek-offwhite min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-niftek-dark/70">
            <li>
              <Link href="/" className="hover:text-niftek-medium transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-1">/</span>
            </li>
            <li className="font-medium text-niftek-dark">{page.title}</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-bold text-niftek-dark md:text-5xl">{page.title}</h1>
          <p className="text-lg leading-relaxed text-niftek-dark/80">{page.description}</p>
        </header>

        <div className="space-y-5 text-lg leading-relaxed text-niftek-dark/85">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {page.points && page.points.length > 0 && (
          <ul className="mt-8 space-y-3">
            {page.points.map((point) => (
              <li key={point} className="flex gap-3 leading-relaxed text-niftek-dark/85">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-niftek-medium" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        )}

        {page.link &&
          (page.link.external ? (
            <a
              href={page.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-niftek-medium px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-niftek-dark"
            >
              {page.link.label}
            </a>
          ) : (
            <Link
              href={page.link.href}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-niftek-medium px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-niftek-dark"
            >
              {page.link.label}
            </Link>
          ))}
      </div>
    </div>
  );
}

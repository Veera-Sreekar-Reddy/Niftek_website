import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { aiProducts, getAiProduct } from '@/lib/aiProductsData';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return aiProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getAiProduct(params.slug);
  if (!product) {
    return { title: 'Product | Niftek' };
  }
  return {
    title: `${product.name} | Niftek`,
    description: product.summary,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getAiProduct(params.slug);

  if (!product) {
    notFound();
  }

  redirect(`/what-we-do/ai-products/${product.slug}`);
}

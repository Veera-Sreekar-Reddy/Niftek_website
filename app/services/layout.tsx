import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Niftek',
  description: 'Explore our comprehensive range of services at Niftek Inc.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company | Niftek',
  description: 'Learn more about Niftek Inc.',
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


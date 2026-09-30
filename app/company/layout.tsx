import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company | Niftek',
  description:
    'Our vision is a world where AI works alongside people across real systems, knowledge, and workflows.',
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


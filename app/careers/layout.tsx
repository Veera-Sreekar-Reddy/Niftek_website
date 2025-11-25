import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Niftek',
  description: 'Join the Niftek team and build your career with us. Explore exciting career opportunities.',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


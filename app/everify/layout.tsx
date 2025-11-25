import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Verify | Niftek',
  description: 'Niftek is an E-Verify Registered Company. We follow all government standards and regulations regarding employee eligibility to work in the United States.',
};

export default function EVerifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


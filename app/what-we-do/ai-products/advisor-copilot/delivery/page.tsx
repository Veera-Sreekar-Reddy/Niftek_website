import type { Metadata } from 'next';
import DeliveryMethodPage from '@/components/DeliveryMethodPage';

export const metadata: Metadata = {
  title: 'How We Deliver | Niftek',
  description:
    'A practical sequence from outcome discovery to controlled production—designed to prove value early while keeping architecture, security, and governance visible from the beginning.',
};

export default function AdvisorCopilotDeliveryPage() {
  return <DeliveryMethodPage />;
}

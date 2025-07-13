import React from 'react';
import PaymentPage from '@/components/PaymentPage';

export default function Username({ params }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <PaymentPage username={params.username} />
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.username} – PatreonHive`,
  };
}
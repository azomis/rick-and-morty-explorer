'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <button
        onClick={handleGoBack}
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full 
                     bg-green-500 text-purple-900 font-bold text-lg
                     border-2 border-yellow-300 shadow-[0_0_10px_#00FF00]
                     hover:bg-green-600 hover:scale-105 transition-all"
      >
        <ArrowLeft size={20} />
        Go back
      </button>

      <div>{children}</div>
    </>
  );
}

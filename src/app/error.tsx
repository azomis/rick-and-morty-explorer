'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-[40vh] flex flex-col items-center justify-center 
                 bg-gradient-to-br from-green-300 via-yellow-300 to-cyan-300 
                 text-purple-900 p-8 rounded-2xl shadow-2xl border-4 border-purple-600"
    >
      <h2 className="text-3xl font-extrabold mb-4 drop-shadow-[2px_2px_0px_#00FF00]">
        Wubba Lubba Dub Dub! Something went wrong!
      </h2>
      <p className="mb-6 text-lg opacity-90 max-w-md text-center">
        {error.message || 'An unexpected portal malfunction occurred.'}
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-purple-700 text-green-300 rounded-xl shadow-md 
                   hover:bg-purple-800 hover:scale-105 transition-transform duration-200
                   font-semibold border-2 border-green-400"
      >
        Try Again
      </button>
    </div>
  );
}

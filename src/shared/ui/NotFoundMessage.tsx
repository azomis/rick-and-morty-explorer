'use client';

import { useRouter } from 'next/navigation';

export function NotFoundMessage({ query }: { query?: string }) {
  const router = useRouter();

  return (
    <div
      className="min-h-[40vh] flex flex-col items-center justify-center 
                 bg-gradient-to-br from-green-200 via-yellow-200 to-cyan-200 
                 text-purple-900 p-8 rounded-2xl shadow-xl border-4 border-purple-600"
    >
      <h2 className="text-3xl font-extrabold mb-4 drop-shadow-[2px_2px_0px_#00FF00]">
        No Results Found!
      </h2>
      <p className="text-lg max-w-md text-center mb-6">
        {query ? (
          <>
            Looks like there&apos;s nothing for{' '}
            <span className="font-bold text-purple-800">
              &quot;{query}&quot;
            </span>
            .
          </>
        ) : (
          <>Nothing to show here, Morty!</>
        )}
      </p>

      <button
        onClick={() => router.back()}
        className="px-6 py-2 rounded-xl bg-purple-600 text-yellow-200 font-bold
                   shadow-md hover:bg-purple-700 hover:shadow-lg transition-all
                   border-2 border-green-400"
      >
        Go Back
      </button>
    </div>
  );
}

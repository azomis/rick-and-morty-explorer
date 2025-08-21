import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="flex items-center justify-center
                 bg-[url('/portal-bg.png')] bg-cover bg-center
                 text-green-300 p-6"
    >
      <div
        className="bg-black/60 backdrop-blur-sm p-10 rounded-3xl 
                      border-4 border-green-400 shadow-[0_0_20px_#00FF00]
                      max-w-md text-center"
      >
        <h2 className="text-5xl font-extrabold mb-4 text-green-400 drop-shadow-[0_0_10px_#39FF14]">
          Wubba Lubba Dub Dub!
        </h2>
        <p className="text-lg text-yellow-300 mb-6">
          We couldn’t find that dimension, Morty...
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-green-500 text-purple-900 font-bold
                     shadow-[0_0_10px_#00FF00] border-2 border-yellow-300
                     hover:bg-green-600 hover:scale-105 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

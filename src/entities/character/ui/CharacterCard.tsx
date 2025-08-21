import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/config';
import { CharacterType } from '@/shared/model';

export function CharacterCard({
  id,
  name,
  image,
  status,
  species,
}: CharacterType) {
  return (
    <Link
      href={`${ROUTES.character}/${id}`}
      className="bg-yellow-100 border-4 border-purple-600 rounded-xl shadow-[4px_4px_0_0_#000] hover:scale-105 transition p-4 flex flex-col items-center"
    >
      <Image
        width={200}
        height={200}
        src={image}
        alt={name}
        className="w-40 h-40 rounded-lg border-4 border-green-400 shadow-[3px_3px_0_0_#000] mb-3"
      />
      <h2 className="text-lg font-extrabold text-purple-800 text-center">
        {name}
      </h2>
      <p className="text-black font-semibold">{species}</p>
      <span
        className={`mt-2 px-2 py-1 text-sm font-bold rounded-full border-2 shadow-[2px_2px_0_0_#000] ${
          status === 'Alive'
            ? 'bg-green-300 border-green-600'
            : status === 'Dead'
              ? 'bg-red-300 border-red-600'
              : 'bg-gray-300 border-gray-600'
        }`}
      >
        {status}
      </span>
    </Link>
  );
}

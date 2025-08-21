import Link from 'next/link';

import { ROUTES } from '@/shared/config';
import { EpisodeType } from '@/shared/model';

export function EpisodeCard({ id, name, episode, air_date }: EpisodeType) {
  return (
    <Link
      href={`${ROUTES.episode}/${id}`}
      className="bg-green-200 border-4 border-purple-600 rounded-xl shadow-[4px_4px_0_0_#000] hover:scale-105 transition p-4 flex flex-col gap-2"
    >
      <h2 className="text-xl font-extrabold text-purple-900">{name}</h2>
      <p className="font-bold text-black">
        Episode: <span className="text-purple-700">{episode}</span>
      </p>
      <p className="text-sm text-gray-800">
        Air date: <span className="font-semibold">{air_date}</span>
      </p>
    </Link>
  );
}

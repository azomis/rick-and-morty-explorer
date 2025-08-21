import Link from 'next/link';

import { ROUTES } from '@/shared/config';
import { LocationType } from '@/shared/model';
export function LocationCard({ id, name, type, dimension }: LocationType) {
  return (
    <Link
      href={`${ROUTES.location}/${id}`}
      className="bg-yellow-100 border-4 border-green-500 rounded-xl shadow-[4px_4px_0_0_#000] hover:scale-105 transition p-4 flex flex-col gap-2"
    >
      <h2 className="text-xl font-extrabold text-green-800">{name}</h2>
      <p className="font-bold text-black">
        Type: <span className="text-purple-700">{type}</span>
      </p>
      <p className="text-sm text-gray-800">
        Dimension: <span className="font-semibold">{dimension}</span>
      </p>
    </Link>
  );
}

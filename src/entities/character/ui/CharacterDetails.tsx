import Image from 'next/image';

import { CharacterType } from '@/shared/model';
export function CharacterDetails({ character }: { character: CharacterType }) {
  const { name, image, species, gender, status, origin, location } = character;

  return (
    <div className="bg-yellow-100 border-4 border-purple-600 rounded-2xl shadow-[6px_6px_0_0_#000] p-6 flex flex-col md:flex-row gap-6">
      <Image
        width={200}
        height={200}
        src={image}
        alt={name}
        className="w-60 h-60 rounded-xl border-4 border-green-400 shadow-[4px_4px_0_0_#000]"
      />
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-extrabold text-purple-900">{name}</h1>
        <p>
          <span className="font-bold">Species:</span> {species}
        </p>
        <p>
          <span className="font-bold">Gender:</span> {gender}
        </p>
        <p>
          <span className="font-bold">Status:</span> {status}
        </p>
        <p>
          <span className="font-bold">Origin:</span> {origin.name}
        </p>
        <p>
          <span className="font-bold">Location:</span> {location.name}
        </p>
      </div>
    </div>
  );
}

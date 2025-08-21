import { LocationType } from '@/shared/model';

export function LocationDetails({ location }: { location: LocationType }) {
  return (
    <div className="flex flex-col items-center gap-6 p-8 min-h-screen">
      <h1 className="text-4xl font-extrabold text-pink-900 drop-shadow-[3px_3px_0px_#000]">
        {location.name}
      </h1>
      <div className="bg-pink-100 border-4 border-green-600 rounded-xl shadow-[6px_6px_0_0_#000] p-6 w-full max-w-md">
        <p>
          <b>Type:</b> {location.type}
        </p>
        <p>
          <b>Dimension:</b> {location.dimension}
        </p>
        <p>
          <b>Residents:</b> {location.residents.length}
        </p>
      </div>
    </div>
  );
}

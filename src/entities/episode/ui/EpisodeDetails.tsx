import { EpisodeType } from '@/shared/model';

export function EpisodeDetails({ episode }: { episode: EpisodeType }) {
  return (
    <div className="flex flex-col items-center gap-6 p-8 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-900 drop-shadow-[3px_3px_0px_#000]">
        {episode.name}
      </h1>
      <div className="bg-green-100 border-4 border-blue-600 rounded-xl shadow-[6px_6px_0_0_#000] p-6 w-full max-w-md">
        <p>
          <b>Air Date:</b> {episode.air_date}
        </p>
        <p>
          <b>Episode Code:</b> {episode.episode}
        </p>
        <p>
          <b>Characters:</b> {episode.characters?.length}
        </p>
      </div>
    </div>
  );
}

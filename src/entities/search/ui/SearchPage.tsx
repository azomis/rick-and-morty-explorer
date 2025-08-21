import { CharacterCard } from '@/entities/character/ui';
import { EpisodeCard } from '@/entities/episode/ui';
import { LocationCard } from '@/entities/location/ui';
import {
  ApiResponseType,
  CharacterType,
  EpisodeType,
  LocationType,
  RequestType,
} from '@/shared/model';
import { Button, NotFoundMessage, Pagination, SearchInput } from '@/shared/ui';

interface SearchPageProps {
  name?: string;
  data?: ApiResponseType<CharacterType | EpisodeType | LocationType>;
  type?: RequestType;
  page?: number;
}

export function SearchPage({ name, data, type, page = 1 }: SearchPageProps) {
  const isNotEmpty = !!data?.results;

  return (
    <div className="flex flex-col items-center gap-8 min-h-screen">
      <h1 className="text-4xl font-extrabold text-purple-900 drop-shadow-[3px_3px_0px_#000]">
        Rick & Morty Search
      </h1>

      <form className="flex flex-col items-center gap-4 w-full max-w-lg bg-yellow-100 border-4 border-purple-600 rounded-xl shadow-[6px_6px_0_0_#000] p-6">
        <SearchInput
          name="name"
          placeholder="Enter name..."
          defaultValue={name || ''}
        />
        <Button type="submit" className="mt-4">
          Search 🚀
        </Button>
      </form>

      {isNotEmpty ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {data?.results?.map((item) => {
            if (type === 'character') {
              const character = item as CharacterType;
              return <CharacterCard key={character.id} {...character} />;
            }
            if (type === 'location') {
              const location = item as LocationType;
              return <LocationCard key={location.id} {...location} />;
            }
            if (type === 'episode') {
              const episode = item as EpisodeType;
              return <EpisodeCard key={episode.id} {...episode} />;
            }
            return null;
          })}
        </div>
      ) : (
        <NotFoundMessage query={name} />
      )}

      <Pagination currentPage={page} totalPages={data?.info.pages || 1} />
    </div>
  );
}

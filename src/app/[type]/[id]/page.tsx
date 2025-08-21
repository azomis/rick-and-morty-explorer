import { getCharacter } from '@/entities/character/model';
import { CharacterDetails } from '@/entities/character/ui';
import { getEpisode } from '@/entities/episode/model';
import { EpisodeDetails } from '@/entities/episode/ui';
import { getLocation } from '@/entities/location/model';
import { LocationDetails } from '@/entities/location/ui';
import { RequestType } from '@/shared/model';
import { NotFoundMessage } from '@/shared/ui';

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string; type: RequestType }>;
}) {
  try {
    const { type, id } = await params;

    switch (type) {
      case 'character': {
        const character = await getCharacter(id);
        if (!character) {
          return <NotFoundMessage />;
        }
        return <CharacterDetails character={character} />;
      }
      case 'location': {
        const location = await getLocation(id);
        if (!location) {
          return <NotFoundMessage />;
        }
        return <LocationDetails location={location} />;
      }
      case 'episode': {
        const episode = await getEpisode(id);
        if (!episode) {
          return <NotFoundMessage />;
        }
        return <EpisodeDetails episode={episode} />;
      }
      default:
        return <NotFoundMessage />;
    }
  } catch (error) {
    console.error('Error loading page:', error);
    return <NotFoundMessage />;
  }
}

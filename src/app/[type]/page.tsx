import { getCharacters } from '@/entities/character/model';
import { getEpisodes } from '@/entities/episode/model';
import { getLocations } from '@/entities/location/model';
import { SearchPage } from '@/entities/search/ui';
import { RequestType } from '@/shared/model';
import { NotFoundMessage } from '@/shared/ui';

export default async function SearchTypePage({
  params,
  searchParams,
}: {
  params: Promise<{ type?: RequestType }>;
  searchParams: Promise<{ name?: string; page?: string }>;
}) {
  try {
    const { type = 'character' } = await params;
    const { name, page = '1' } = await searchParams;

    let data = null;

    switch (type) {
      case 'character':
        data = await getCharacters(name, page);
        break;
      case 'location':
        data = await getLocations(name, page);
        break;
      case 'episode':
        data = await getEpisodes(name, page);
        break;
      default:
        data = await getCharacters(name, page);
    }

    return (
      <SearchPage page={parseInt(page)} type={type} data={data} name={name} />
    );
  } catch (error) {
    console.error('Error loading page:', error);
    return <NotFoundMessage />;
  }
}

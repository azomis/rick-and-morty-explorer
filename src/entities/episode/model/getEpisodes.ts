import { rickAndMortyFetch } from '@/shared/api/rickAndMortyApi';
import { RM_API_ENDPOINTS } from '@/shared/config';
import { buildQueryString } from '@/shared/lib';
import { ApiResponseType, EpisodeType } from '@/shared/model';

export async function getEpisodes(name?: string, page?: string) {
  const query = buildQueryString({ name, page });
  const data = await rickAndMortyFetch<ApiResponseType<EpisodeType>>(
    `${RM_API_ENDPOINTS.episode}${query}`,
  );
  return data;
}

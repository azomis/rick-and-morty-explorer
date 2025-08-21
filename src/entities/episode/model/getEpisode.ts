import { rickAndMortyFetch } from '@/shared/api/rickAndMortyApi';
import { RM_API_ENDPOINTS } from '@/shared/config';
import { EpisodeType } from '@/shared/model';

export async function getEpisode(id: string) {
  return rickAndMortyFetch<EpisodeType>(`${RM_API_ENDPOINTS.episode}/${id}`);
}

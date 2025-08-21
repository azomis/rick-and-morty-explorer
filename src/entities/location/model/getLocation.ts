import { rickAndMortyFetch } from '@/shared/api/rickAndMortyApi';
import { RM_API_ENDPOINTS } from '@/shared/config';
import { LocationType } from '@/shared/model';

export async function getLocation(id: string) {
  return rickAndMortyFetch<LocationType>(`${RM_API_ENDPOINTS.location}/${id}`);
}

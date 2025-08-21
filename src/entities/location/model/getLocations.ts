import { rickAndMortyFetch } from '@/shared/api/rickAndMortyApi';
import { RM_API_ENDPOINTS } from '@/shared/config';
import { buildQueryString } from '@/shared/lib';
import { ApiResponseType, LocationType } from '@/shared/model';

export async function getLocations(name?: string, page?: string) {
  const query = buildQueryString({ name, page });
  const data = await rickAndMortyFetch<ApiResponseType<LocationType>>(
    `${RM_API_ENDPOINTS.location}${query}`,
  );
  return data;
}

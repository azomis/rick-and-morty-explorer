import { rickAndMortyFetch } from '@/shared/api/rickAndMortyApi';
import { RM_API_ENDPOINTS } from '@/shared/config';
import { buildQueryString } from '@/shared/lib';
import { ApiResponseType, CharacterType } from '@/shared/model';

export async function getCharacters(name?: string, page?: string) {
  const query = buildQueryString({ name, page });
  const data = await rickAndMortyFetch<ApiResponseType<CharacterType>>(
    `${RM_API_ENDPOINTS.character}${query}`,
  );
  return data;
}

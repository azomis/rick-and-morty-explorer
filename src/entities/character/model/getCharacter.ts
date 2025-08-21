import { rickAndMortyFetch } from '@/shared/api/rickAndMortyApi';
import { RM_API_ENDPOINTS } from '@/shared/config';
import { CharacterType } from '@/shared/model';

export async function getCharacter(id: string) {
  return rickAndMortyFetch<CharacterType>(
    `${RM_API_ENDPOINTS.character}/${id}`,
  );
}

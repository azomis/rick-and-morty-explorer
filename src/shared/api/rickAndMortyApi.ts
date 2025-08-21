const BASE_URL = 'https://rickandmortyapi.com/api';

export async function rickAndMortyFetch<T>(
  endpoint: string,
): Promise<T & { error?: string }> {
  const res = await fetch(`${BASE_URL}${endpoint}`, { cache: 'no-store' });

  if (res.status == 500) throw new Error('API error');
  return res.json();
}

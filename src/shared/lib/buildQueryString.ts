export function buildQueryString(params: { name?: string; page?: string }) {
  const searchParams = new URLSearchParams();
  const parsedPage = parseInt(params.page || '1');

  if (params.name) searchParams.set('name', params.name);
  if (parsedPage && parsedPage > 1)
    searchParams.set('page', parsedPage.toString());

  return searchParams.toString() ? `?${searchParams.toString()}` : '';
}

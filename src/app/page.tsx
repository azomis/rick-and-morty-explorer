import { redirect } from 'next/navigation';

import { ROUTES } from '@/shared/config';

export default async function HomePage() {
  redirect(ROUTES.character);
}

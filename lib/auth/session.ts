import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/config';

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user;
}
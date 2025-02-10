import NextAuth from 'next-auth';

import { authConfig } from '@/app/(auth)/auth.config.ts';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/', '/:id', '/api/:path*', '/login', '/register'],
};

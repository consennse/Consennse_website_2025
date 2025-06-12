import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';
import { NextResponse } from 'next/server';

export function middleware(request) {
  // 1. Run i18nRouter
  let response = i18nRouter(request, i18nConfig);

  // If i18nRouter doesn't return a response, create one
  if (!response) {
    response = NextResponse.next();
  }

  // 2. Get country from geo data (Vercel Edge only)
  const country = request.geo?.country || 'DEFAULT';

  // 3. Set country as a cookie (for client-side reading)
  response.cookies.set('country', country, {
    path: '/',
    httpOnly: false,
  });

  return response;
}

// Apply middleware to all routes except APIs and static files
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};

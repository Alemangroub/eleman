import { defineMiddleware } from 'astro/middleware';

function isAllowedDevOrigin(origin: string) {
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin);
}

function applySecurityHeaders(response: Response) {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  if (import.meta.env.PROD) {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
}

export const onRequest = defineMiddleware(async (context, next) => {
  const requestOrigin = context.request.headers.get('origin');
  const allowOrigin = import.meta.env.DEV && requestOrigin && isAllowedDevOrigin(requestOrigin)
    ? requestOrigin
    : '';

  if (context.request.method === 'OPTIONS' && context.url.pathname.startsWith('/api/')) {
    const response = new Response(null, {
      status: 204,
      headers: allowOrigin
        ? {
            'Access-Control-Allow-Origin': allowOrigin,
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Vary': 'Origin',
          }
        : {},
    });

    applySecurityHeaders(response);
    return response;
  }

  const response = await next();
  applySecurityHeaders(response);

  if (context.url.pathname.startsWith('/api/') && allowOrigin) {
    response.headers.set('Access-Control-Allow-Origin', allowOrigin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Vary', 'Origin');
  }

  return response;
});

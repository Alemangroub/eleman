import { defineMiddleware } from 'astro/middleware';

// This middleware intercepts requests to add CORS headers for all API routes.
export const onRequest = defineMiddleware(async (context, next) => {
  // Handle preflight (OPTIONS) requests specifically for API routes.
  if (context.request.method === 'OPTIONS' && context.url.pathname.startsWith('/api/')) {
    // For OPTIONS, we return a new response with only the CORS headers.
    return new Response(null, {
      status: 204, // No Content
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow any origin for simplicity. For production, you might restrict this.
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Specify allowed headers.
      },
    });
  }

  // Proceed with the request to get the actual response.
  const response = await next();

  // For all other API requests, add CORS headers to the *outgoing* response.
  if (context.url.pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  return response;
});

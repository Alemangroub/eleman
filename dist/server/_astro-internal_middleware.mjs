import { d as defineMiddleware, s as sequence } from './chunks/index_B8LsqGvl.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CLMAZxBx.mjs';
import 'piccolore';
import './chunks/astro/server_D9q-hNhU.mjs';
import 'clsx';

function applySecurityHeaders(response) {
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  {
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
}
const onRequest$1 = defineMiddleware(async (context, next) => {
  context.request.headers.get("origin");
  const allowOrigin = "";
  if (context.request.method === "OPTIONS" && context.url.pathname.startsWith("/api/")) {
    const response2 = new Response(null, {
      status: 204,
      headers: {}
    });
    applySecurityHeaders(response2);
    return response2;
  }
  const response = await next();
  applySecurityHeaders(response);
  if (context.url.pathname.startsWith("/api/") && allowOrigin) ;
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };

import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware((context, next) => {
  // your middleware logic here
  return next();
});
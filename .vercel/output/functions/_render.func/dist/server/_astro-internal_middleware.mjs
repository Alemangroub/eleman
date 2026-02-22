import { d as defineMiddleware, s as sequence } from './chunks/index_BMuPCgUe.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BBK4sVBU.mjs';
import 'piccolore';
import './chunks/astro/server_XmWuuq3N.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware((context, next) => {
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };

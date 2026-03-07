import { d as defineMiddleware, s as sequence } from './chunks/index_CZXm8dXt.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_VFsaVhmm.mjs';
import 'piccolore';
import './chunks/astro/server_4YXjuf9l.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware((context, next) => {
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };

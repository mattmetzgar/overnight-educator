globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_RFujInWg.mjs';
import './chunks/astro/server_D5C8kL_B.mjs';
import { s as sequence } from './chunks/index_CXR3iuzx.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };

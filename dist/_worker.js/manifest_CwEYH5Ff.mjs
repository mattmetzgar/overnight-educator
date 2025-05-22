globalThis.process ??= {}; globalThis.process.env ??= {};
import { l as decodeKey } from './chunks/astro/server_D5C8kL_B.mjs';
import './chunks/astro-designed-error-pages_RFujInWg.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BS1uKNho.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Adamu/Desktop/fiverr%20repository/overnight-educator/","cacheDir":"file:///C:/Users/Adamu/Desktop/fiverr%20repository/overnight-educator/node_modules/.astro/","outDir":"file:///C:/Users/Adamu/Desktop/fiverr%20repository/overnight-educator/dist/","srcDir":"file:///C:/Users/Adamu/Desktop/fiverr%20repository/overnight-educator/src/","publicDir":"file:///C:/Users/Adamu/Desktop/fiverr%20repository/overnight-educator/public/","buildClientDir":"file:///C:/Users/Adamu/Desktop/fiverr%20repository/overnight-educator/dist/","buildServerDir":"file:///C:/Users/Adamu/Desktop/fiverr%20repository/overnight-educator/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"events/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/events","isIndex":false,"type":"page","pattern":"^\\/events\\/?$","segments":[[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/events.astro","pathname":"/events","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"resources/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resources","isIndex":true,"type":"page","pattern":"^\\/resources\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources/index.astro","pathname":"/resources","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://overnight.education","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Adamu/Desktop/fiverr repository/overnight-educator/src/pages/resources/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Adamu/Desktop/fiverr repository/overnight-educator/src/pages/resources/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Adamu/Desktop/fiverr repository/overnight-educator/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Adamu/Desktop/fiverr repository/overnight-educator/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/Adamu/Desktop/fiverr repository/overnight-educator/src/pages/events.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/resources/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/resources/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Adamu/Desktop/fiverr repository/overnight-educator/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/events@_@astro":"pages/events.astro.mjs","\u0000@astro-page:src/pages/resources/index@_@astro":"pages/resources.astro.mjs","\u0000@astro-page:src/pages/resources/[...slug]@_@astro":"pages/resources/_---slug_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CwEYH5Ff.mjs","C:/Users/Adamu/Desktop/fiverr repository/overnight-educator/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","C:\\Users\\Adamu\\Desktop\\fiverr repository\\overnight-educator\\.astro\\content-assets.mjs":"chunks/content-assets_XqCgPAV2.mjs","C:\\Users\\Adamu\\Desktop\\fiverr repository\\overnight-educator\\.astro\\content-modules.mjs":"chunks/content-modules_Bvq7llv8.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_B8rt14-H.mjs","C:/Users/Adamu/Desktop/fiverr repository/overnight-educator/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BjzLVnVM.mjs","C:/Users/Adamu/Desktop/fiverr repository/overnight-educator/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts":"_astro/BaseHead.astro_astro_type_script_index_0_lang.DS5mLSIg.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.D45S-AR_.css","/aiteachingcycle.png","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon.png","/metzgar-photo-uncc-2025.jpg","/OvernightAIEducator_MM.png","/WebsiteLogo-Overnight.png","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/_astro/BaseHead.astro_astro_type_script_index_0_lang.DS5mLSIg.js","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/chunks/astro-designed-error-pages_RFujInWg.mjs","/_worker.js/chunks/astro_D_Et3AoE.mjs","/_worker.js/chunks/BaseLayout_CPi8GkdE.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/consts_BqNEvNgA.mjs","/_worker.js/chunks/content-assets_XqCgPAV2.mjs","/_worker.js/chunks/content-modules_Bvq7llv8.mjs","/_worker.js/chunks/Footer_BXGUg6-t.mjs","/_worker.js/chunks/FormattedDate_DqHoBTfp.mjs","/_worker.js/chunks/index_CXR3iuzx.mjs","/_worker.js/chunks/noop-middleware_BS1uKNho.mjs","/_worker.js/chunks/parse_EttCPxrw.mjs","/_worker.js/chunks/path_C-ZOwaTP.mjs","/_worker.js/chunks/sharp_BjzLVnVM.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_CC3TO3lU.mjs","/_worker.js/chunks/_astro_assets_Ak8NN9cZ.mjs","/_worker.js/chunks/_astro_content_D40Vvo4z.mjs","/_worker.js/chunks/_astro_data-layer-content_B8rt14-H.mjs","/_worker.js/pages/about.astro.mjs","/_worker.js/pages/events.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/resources.astro.mjs","/_worker.js/pages/rss.xml.astro.mjs","/_worker.js/_astro/about.D45S-AR_.css","/_worker.js/chunks/astro/server_D5C8kL_B.mjs","/_worker.js/pages/resources/_---slug_.astro.mjs","/about/index.html","/events/index.html","/resources/index.html","/rss.xml","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"n7hvGz7P0oeRCfvNY47Jm0A1N8wyY9ITfYC6T1s8zik=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };

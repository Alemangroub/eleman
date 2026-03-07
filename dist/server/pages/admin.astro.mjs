/* empty css                                 */
import { e as createComponent } from '../chunks/astro/server_4YXjuf9l.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return new Response(null, {
    status: 301,
    // 301 Moved Permanently
    headers: {
      "Location": "/crs"
    }
  });
}, "/home/user/eleman-company/src/pages/admin.astro", void 0);

const $$file = "/home/user/eleman-company/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

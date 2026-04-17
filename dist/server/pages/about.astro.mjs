/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D9q-hNhU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DB-3ZIKO.mjs';
import { $ as $$TopBar } from '../chunks/TopBar_D-6X39D4.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_DwwQezhF.mjs';
import { $ as $$InfoSection } from '../chunks/InfoSection_C-9sfrRx.mjs';
import { $ as $$FloatingButton } from '../chunks/FloatingButton_D8Sj4jEu.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0646\u0627 - \u0634\u0631\u0643\u0629 \u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0644\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopBar", $$TopBar, {})} ${renderComponent($$result2, "Header", $$Header, { "showMenu": true })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "InfoSection", $$InfoSection, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "FloatingButton", $$FloatingButton, {})} ` })}`;
}, "/home/user/Eman-Project/src/pages/about.astro", void 0);

const $$file = "/home/user/Eman-Project/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

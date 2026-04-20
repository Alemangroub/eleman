/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D9q-hNhU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_YA1LhvQq.mjs';
import { $ as $$TopBar } from '../chunks/TopBar_DOuvakAw.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_DKtJ1RGl.mjs';
import { $ as $$InfoSection } from '../chunks/InfoSection_Vm_m5ZID.mjs';
import { $ as $$FloatingButton } from '../chunks/FloatingButton_C_jNSweE.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0646\u0627 - \u0634\u0631\u0643\u0629 \u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0644\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopBar", $$TopBar, {})} ${renderComponent($$result2, "Header", $$Header, { "showMenu": true })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "InfoSection", $$InfoSection, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "FloatingButton", $$FloatingButton, {})} ` })}`;
}, "C:/Users/ENJAZ/Desktop/eleman/src/pages/about.astro", void 0);

const $$file = "C:/Users/ENJAZ/Desktop/eleman/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

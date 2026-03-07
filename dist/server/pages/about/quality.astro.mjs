/* empty css                                    */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_4YXjuf9l.mjs';
import 'piccolore';
import { $ as $$InfoPageLayout } from '../../chunks/InfoPageLayout_CF_nJcwp.mjs';
import { i as info } from '../../chunks/info_z3mEWYcI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Quality = createComponent(($$result, $$props, $$slots) => {
  const cardData = info.cards[1];
  return renderTemplate`${renderComponent($$result, "InfoPageLayout", $$InfoPageLayout, { "frontmatter": cardData })}`;
}, "/home/user/eleman-company/src/pages/about/quality.astro", void 0);

const $$file = "/home/user/eleman-company/src/pages/about/quality.astro";
const $$url = "/about/quality";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Quality,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

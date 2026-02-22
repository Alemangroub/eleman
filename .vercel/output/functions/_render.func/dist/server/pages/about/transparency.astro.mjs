/* empty css                                         */
import { f as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$InfoPageLayout } from '../../chunks/InfoPageLayout_DtFXceMQ.mjs';
import { i as info } from '../../chunks/info_z3mEWYcI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Transparency = createComponent(($$result, $$props, $$slots) => {
  const cardData = info.cards[3];
  return renderTemplate`${renderComponent($$result, "InfoPageLayout", $$InfoPageLayout, { "frontmatter": cardData })}`;
}, "/home/user/bobobo/src/pages/about/transparency.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/about/transparency.astro";
const $$url = "/about/transparency";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Transparency,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

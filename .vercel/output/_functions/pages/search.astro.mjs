/* empty css                                      */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, o as Fragment, h as addAttribute } from '../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BDfkJrDu.mjs';
import { s as services, a as achievements } from '../chunks/achievements_Z_B-657g.mjs';
import { i as info } from '../chunks/info_z3mEWYcI.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.elemancompany.net");
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("q")?.toLowerCase() || "";
  let searchResults = [];
  if (query) {
    const filteredServices = services.filter(
      (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
    ).map((item) => ({ ...item, type: "\u062E\u062F\u0645\u0629", url: `/services/${item.slug}` }));
    const filteredAchievements = achievements.filter(
      (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
    ).map((item) => ({ ...item, type: "\u0625\u0646\u062C\u0627\u0632", url: "/#achievements" }));
    const filteredInfo = info.cards.filter(
      (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query) || Array.isArray(item.detailedDescription) && item.detailedDescription.some((p) => p.toLowerCase().includes(query))
    ).map((item) => ({ ...item, type: "\u0645\u0639\u0644\u0648\u0645\u0629", url: `/about/${item.slug}` }));
    searchResults = [...filteredServices, ...filteredAchievements, ...filteredInfo];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B \u0639\u0646: ${query}`, "data-astro-cid-ipsxrsrh": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "showMenu": true, "data-astro-cid-ipsxrsrh": true })} ${maybeRenderHead()}<main class="search-results-main" data-astro-cid-ipsxrsrh> <div class="container" data-astro-cid-ipsxrsrh> ${query ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-ipsxrsrh": true }, { "default": ($$result3) => renderTemplate` <h1 class="search-title" data-astro-cid-ipsxrsrh>نتائج البحث عن: <span class="query-term" data-astro-cid-ipsxrsrh>"${query}"</span></h1> ${searchResults.length > 0 ? renderTemplate`<div class="results-grid" data-astro-cid-ipsxrsrh> ${searchResults.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="result-card" data-astro-cid-ipsxrsrh> <span class="result-type" data-astro-cid-ipsxrsrh>${item.type}</span> <h3 class="result-title" data-astro-cid-ipsxrsrh>${item.title}</h3> <p class="result-description" data-astro-cid-ipsxrsrh>${item.description}</p> </a>`)} </div>` : renderTemplate`<p class="search-info" data-astro-cid-ipsxrsrh>لم يتم العثور على نتائج تطابق بحثك. حاول استخدام كلمات أخرى.</p>`}<a href="/" class="back-button" data-astro-cid-ipsxrsrh>العودة إلى الرئيسية</a> ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-ipsxrsrh": true }, { "default": ($$result3) => renderTemplate` <h1 class="search-title" data-astro-cid-ipsxrsrh>الرجاء إدخال مصطلح للبحث</h1> <p class="search-info" data-astro-cid-ipsxrsrh>يبدو أنك وصلت إلى هذه الصفحة بدون تحديد ما تبحث عنه.</p> <a href="/" class="back-button" data-astro-cid-ipsxrsrh>العودة إلى الرئيسية</a> ` })}`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ipsxrsrh": true })} ` })} `;
}, "/home/user/bobobo/src/pages/search.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Search,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

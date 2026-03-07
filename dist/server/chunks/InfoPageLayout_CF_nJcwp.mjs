import { e as createComponent, g as addAttribute, l as renderHead, k as renderComponent, u as unescapeHTML, n as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_4YXjuf9l.mjs';
import 'piccolore';
import { $ as $$Header, a as $$Footer } from './Footer_vSpQzKqV.mjs';
import { $ as $$FloatingButton } from './FloatingButton_Dc2eHFJr.mjs';
/* empty css                              */

const $$Astro = createAstro();
const $$InfoPageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoPageLayout;
  const { title, image, icon, detailedDescription } = Astro2.props;
  return renderTemplate`<html lang="ar" dir="ltr" data-astro-cid-iqcc23os> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} - شركة الإيمان للتطوير العقاري</title><meta name="description"${addAttribute(detailedDescription[0], "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=Cairo:wght@400;700;900&family=Kalam&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-iqcc23os> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-iqcc23os": true })} <main class="info-page" data-astro-cid-iqcc23os> <div class="page-header" data-astro-cid-iqcc23os> <div class="header-image-container" data-astro-cid-iqcc23os> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="header-image" data-astro-cid-iqcc23os> <div class="header-overlay" data-astro-cid-iqcc23os></div> </div> <div class="header-content" data-astro-cid-iqcc23os> <div class="icon-wrapper" data-astro-cid-iqcc23os>${unescapeHTML(icon)}</div> <h1 class="page-title" data-astro-cid-iqcc23os>${title}</h1> </div> </div> <div class="page-content" data-astro-cid-iqcc23os> <div class="main-content" data-astro-cid-iqcc23os> ${renderSlot($$result, $$slots["default"])} </div> <aside class="sidebar" data-astro-cid-iqcc23os> <div class="detailed-description" data-astro-cid-iqcc23os> <h3 data-astro-cid-iqcc23os>وصف تفصيلي</h3> ${detailedDescription.map((p) => renderTemplate`<p data-astro-cid-iqcc23os>${p}</p>`)} </div> <div class="cta-card" data-astro-cid-iqcc23os> <h4 data-astro-cid-iqcc23os>هل لديك استفسار؟</h4> <p data-astro-cid-iqcc23os>تواصل معنا الآن للحصول على استشارة مجانية حول مشاريعنا وفرص الاستثمار المتاحة.</p> <a href="/contact" class="cta-button" data-astro-cid-iqcc23os>تواصل معنا</a> </div> </aside> </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-iqcc23os": true })} ${renderComponent($$result, "FloatingButton", $$FloatingButton, { "data-astro-cid-iqcc23os": true })} </body></html>`;
}, "/home/user/eleman-company/src/layouts/InfoPageLayout.astro", void 0);

export { $$InfoPageLayout as $ };

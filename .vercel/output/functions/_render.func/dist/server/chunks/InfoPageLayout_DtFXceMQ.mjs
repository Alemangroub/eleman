import { e as createAstro, f as createComponent, h as addAttribute, l as renderHead, k as renderComponent, u as unescapeHTML, r as renderTemplate } from './astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Header, a as $$Footer } from './Footer_BDfkJrDu.mjs';
/* empty css                              */

const $$Astro = createAstro("https://www.elemancompany.net");
const $$InfoPageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoPageLayout;
  const { frontmatter } = Astro2.props;
  const { title, detailedDescription, image, icon } = frontmatter;
  return renderTemplate`<html lang="ar" dir="rtl" data-astro-cid-iqcc23os> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} - شركة الإيمان للتطوير العقاري</title><meta name="description"${addAttribute(detailedDescription[0], "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=Cairo:wght@400;700;900&family=Kalam&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-iqcc23os> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-iqcc23os": true })} <main class="info-page" data-astro-cid-iqcc23os> <div class="page-header" data-astro-cid-iqcc23os> <div class="header-image-container" data-astro-cid-iqcc23os> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="header-image" data-astro-cid-iqcc23os> <div class="header-overlay" data-astro-cid-iqcc23os></div> </div> <div class="header-content" data-astro-cid-iqcc23os> <div class="icon-wrapper" data-astro-cid-iqcc23os>${unescapeHTML(icon)}</div> <h1 class="page-title" data-astro-cid-iqcc23os>${title}</h1> </div> </div> <div class="page-content-wrapper" data-astro-cid-iqcc23os> <div class="page-content" data-astro-cid-iqcc23os> ${detailedDescription.map((paragraph) => renderTemplate`<p data-astro-cid-iqcc23os>${paragraph}</p>`)} </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-iqcc23os": true })}  </body> </html>`;
}, "/home/user/bobobo/src/layouts/InfoPageLayout.astro", void 0);

export { $$InfoPageLayout as $ };

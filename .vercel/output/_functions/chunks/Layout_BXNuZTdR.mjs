import { e as createAstro, f as createComponent, r as renderTemplate, q as renderSlot, l as renderHead, h as addAttribute } from './astro/server_XmWuuq3N.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.elemancompany.net");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, showGlowEffect = false } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="ar" dir="rtl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/logo.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Kalam:wght@300;400;700&display=swap" rel="stylesheet"><meta name="generator"', '><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><title>', "</title>", '</head> <body> <!-- Frame Elements --> <div class="frame frame-left"></div> <div class="frame frame-right"></div> ', " <script>\n            // This script ensures that the search input toggles visibility without submitting the form.\n            if (!document.body.dataset.globalListenerAttached) {\n                document.body.dataset.globalListenerAttached = 'true';\n\n                document.addEventListener('click', function(e) {\n                    const searchIcon = e.target.closest('#search-icon');\n\n                    if (!searchIcon) {\n                        return;\n                    }\n\n                    e.preventDefault();\n\n                    const searchInput = document.getElementById('search-input');\n                    const searchForm = document.getElementById('search-form');\n\n                    if (!searchInput || !searchForm) {\n                        return;\n                    }\n                    \n                    searchInput.classList.toggle('active');\n\n                    if (searchInput.classList.contains('active')) {\n                        searchInput.focus();\n                    }\n                });\n\n                const searchForm = document.getElementById('search-form');\n                if (searchForm) {\n                    searchForm.addEventListener('submit', function(e) {\n                        const searchInput = document.getElementById('search-input');\n                        if (searchInput && searchInput.value.trim() === '') {\n                            e.preventDefault(); // Prevent submission if the input is empty\n                        }\n                    });\n                }\n            }\n        <\/script> </body> </html> "])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/user/bobobo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

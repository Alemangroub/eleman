/* empty css                                 */
import { e as createComponent, r as renderTemplate, am as defineScriptVars, m as maybeRenderHead, h as createAstro, g as addAttribute, u as unescapeHTML, k as renderComponent } from '../chunks/astro/server_4YXjuf9l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C7k-ksFB.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_vSpQzKqV.mjs';
import { $ as $$FloatingButton } from '../chunks/FloatingButton_Dc2eHFJr.mjs';
import { $ as $$TopBar } from '../chunks/TopBar_Jt1YRuXK.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Services } from '../chunks/Services_BhC8ALGN.mjs';
import { $ as $$Achievements } from '../chunks/Achievements_BAHo6SIl.mjs';
import { $ as $$InfoSection } from '../chunks/InfoSection_ClasS5mg.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, subtitle } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="hero" data-astro-cid-bbe6dxrz> <div class="hero-overlay" data-astro-cid-bbe6dxrz></div> <div class="hero-content" data-astro-cid-bbe6dxrz> <h1 id="hero-title" class="typing-effect" data-astro-cid-bbe6dxrz></h1> <p id="hero-subtitle" class="typing-effect" data-astro-cid-bbe6dxrz></p> </div> </section> <script>(function(){', "\n    const titleElement = document.getElementById('hero-title');\n    const subtitleElement = document.getElementById('hero-subtitle');\n\n    function typeWriter(element, text, onComplete) {\n        let i = 0;\n        element.innerHTML = '';\n        element.classList.add('typing');\n        \n        function type() {\n            if (i < text.length) {\n                element.innerHTML += text.charAt(i);\n                i++;\n                setTimeout(type, 50);\n            } else {\n                element.classList.remove('typing');\n                if (onComplete) {\n                    onComplete();\n                }\n            }\n        }\n        type();\n    }\n\n    document.addEventListener('DOMContentLoaded', () => {\n        setTimeout(() => {\n            typeWriter(titleElement, title, () => {\n                subtitleElement.style.opacity = '1';\n                setTimeout(() => {\n                    typeWriter(subtitleElement, subtitle);\n                }, 200);\n            });\n        }, 500);\n    });\n})();<\/script> "])), maybeRenderHead(), defineScriptVars({ title, subtitle }));
}, "/home/user/eleman-company/src/components/Hero.astro", void 0);

const contactData = [
	{
		title: "العنوان",
		content: "<a href='https://maps.app.goo.gl/h6cQtSGcUV5NZfFj7' target='_blank' rel='noopener noreferrer'>محافظة سوهاج مركز طما طريق اسيوط سوهاج اعلي بنك القاهره</a>",
		icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' /><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' /></svg>"
	},
	{
		title: "الهاتف",
		content: "<a href='tel:01112006333' dir='ltr'>0111 200 6333</a>",
		icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z' /></svg>"
	},
	{
		title: "البريد الإلكتروني",
		content: "<a href='mailto:info@elemancompany.net'>info@elemancompany.net</a>",
		icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' /></svg>"
	}
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactUs;
  const backgroundImage = "/14346016_ml-1024x680-1.jpg";
  const { isTitleLink = false } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<section id="contact-us" class="contact-section"', ' data-astro-cid-ypgb7zfc> <div class="section-overlay" data-astro-cid-ypgb7zfc></div> <div class="container" data-astro-cid-ypgb7zfc> <div class="contact-header" data-astro-cid-ypgb7zfc> ', ' <p class="section-subtitle" data-astro-cid-ypgb7zfc>\n\u0646\u062D\u0646 \u0647\u0646\u0627 \u0644\u0645\u0633\u0627\u0639\u062F\u062A\u0643. \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0623\u0648 \u062A\u0641\u0636\u0644 \u0628\u0632\u064A\u0627\u0631\u062A\u0646\u0627.\n</p> </div> <div class="cards-grid" data-astro-cid-ypgb7zfc> ', " </div> </div> </section> <script>\n    document.addEventListener('DOMContentLoaded', () => {\n        const contactCards = document.querySelectorAll('.contact-card');\n        if (contactCards.length === 0) return;\n\n        const observer = new IntersectionObserver((entries, obs) => {\n            entries.forEach(entry => {\n                if (entry.isIntersecting) {\n                    const card = entry.target;\n                    const index = card.getAttribute('data-index');\n                    card.style.transitionDelay = `${index * 150}ms`;\n                    card.classList.add('is-visible');\n                    obs.unobserve(card);\n                }\n            });\n        }, { threshold: 0.1 });\n\n        contactCards.forEach(card => {\n            observer.observe(card);\n        });\n    });\n<\/script> "], ["", '<section id="contact-us" class="contact-section"', ' data-astro-cid-ypgb7zfc> <div class="section-overlay" data-astro-cid-ypgb7zfc></div> <div class="container" data-astro-cid-ypgb7zfc> <div class="contact-header" data-astro-cid-ypgb7zfc> ', ' <p class="section-subtitle" data-astro-cid-ypgb7zfc>\n\u0646\u062D\u0646 \u0647\u0646\u0627 \u0644\u0645\u0633\u0627\u0639\u062F\u062A\u0643. \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0623\u0648 \u062A\u0641\u0636\u0644 \u0628\u0632\u064A\u0627\u0631\u062A\u0646\u0627.\n</p> </div> <div class="cards-grid" data-astro-cid-ypgb7zfc> ', " </div> </div> </section> <script>\n    document.addEventListener('DOMContentLoaded', () => {\n        const contactCards = document.querySelectorAll('.contact-card');\n        if (contactCards.length === 0) return;\n\n        const observer = new IntersectionObserver((entries, obs) => {\n            entries.forEach(entry => {\n                if (entry.isIntersecting) {\n                    const card = entry.target;\n                    const index = card.getAttribute('data-index');\n                    card.style.transitionDelay = \\`\\${index * 150}ms\\`;\n                    card.classList.add('is-visible');\n                    obs.unobserve(card);\n                }\n            });\n        }, { threshold: 0.1 });\n\n        contactCards.forEach(card => {\n            observer.observe(card);\n        });\n    });\n<\/script> "])), maybeRenderHead(), addAttribute(`background-image: url(${backgroundImage})`, "style"), isTitleLink ? renderTemplate`<a href="/contact" class="title-link" data-astro-cid-ypgb7zfc> <h2 class="section-title" data-astro-cid-ypgb7zfc>تواصل معنا</h2> </a>` : renderTemplate`<h2 class="section-title" data-astro-cid-ypgb7zfc>تواصل معنا</h2>`, contactData.map((card, index) => renderTemplate`<div class="contact-card"${addAttribute(index, "data-index")} data-astro-cid-ypgb7zfc> <div class="card-content" data-astro-cid-ypgb7zfc> ${card.icon && renderTemplate`<div class="card-icon" data-astro-cid-ypgb7zfc>${unescapeHTML(card.icon)}</div>`} <h4 class="card-title" data-astro-cid-ypgb7zfc>${card.title}</h4> <p class="card-description" data-astro-cid-ypgb7zfc>${unescapeHTML(card.content)}</p> </div> </div>`));
}, "/home/user/eleman-company/src/components/ContactUs.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0634\u0631\u0643\u0629 \u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0644\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopBar", $$TopBar, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Header", $$Header, { "showMenu": true, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u0623\u0647\u0644\u0627\u064B \u0628\u0643\u0645 \u0641\u064A \u0634\u0631\u0643\u0629 \u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0644\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0648\u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A", "subtitle": "\u0647\u0646\u062F\u0633\u0629 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631\u060C \u0648\u0641\u0646 \u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0641\u064A \u0642\u0644\u0628 \u0635\u0639\u064A\u062F \u0645\u0635\u0631.", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Services", $$Services, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Achievements", $$Achievements, { "isTitleLink": true, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "InfoSection", $$InfoSection, { "isTitleLink": true, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ContactUs", $$ContactUs, { "isTitleLink": true, "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FloatingButton", $$FloatingButton, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/home/user/eleman-company/src/pages/index.astro", void 0);

const $$file = "/home/user/eleman-company/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

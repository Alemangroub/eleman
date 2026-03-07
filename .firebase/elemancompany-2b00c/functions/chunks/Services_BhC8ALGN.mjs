import { e as createComponent, r as renderTemplate, g as addAttribute, m as maybeRenderHead } from './astro/server_4YXjuf9l.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      "slug": "residential-development",
      "title": "\u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0633\u0643\u0646\u064A",
      "image": "/residential-development-2.jpg"
    },
    {
      "slug": "commercial-projects",
      "title": "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629",
      "image": "/commercial-projects.webp"
    },
    {
      "slug": "project-management",
      "title": "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
      "image": "/project-management.jpg"
    },
    {
      "slug": "real-estate-investment",
      "title": "\u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u064A",
      "image": "/real-estate-investment.webp"
    }
  ];
  return renderTemplate(_a || (_a = __template(["", '<section id="services" class="services" data-astro-cid-g5jplrhu> <div class="container" data-astro-cid-g5jplrhu> <div class="section-header" data-astro-cid-g5jplrhu> <a href="/services" class="section-title-link" data-astro-cid-g5jplrhu> <h2 class="section-title" data-astro-cid-g5jplrhu>\u062E\u062F\u0645\u0627\u062A\u0646\u0627</h2> </a> <p class="section-subtitle" data-astro-cid-g5jplrhu>\u0646\u0642\u062F\u0645 \u062D\u0644\u0648\u0644\u0627\u064B \u0639\u0642\u0627\u0631\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u062A\u0644\u0628\u064A \u062A\u0637\u0644\u0639\u0627\u062A\u0643\u0645 \u0648\u062A\u0635\u0646\u0639 \u0642\u064A\u0645\u0629 \u062D\u0642\u064A\u0642\u064A\u0629 \u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631\u0627\u062A\u0643\u0645. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0623\u064A \u062E\u062F\u0645\u0629 \u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064A\u062F.</p> </div> <div class="services-grid" data-astro-cid-g5jplrhu> ', " </div> </div> </section> <script>\n    document.addEventListener('DOMContentLoaded', () => {\n        const cards = document.querySelectorAll('.service-card-link');\n\n        const observer = new IntersectionObserver((entries, observer) => {\n            entries.forEach(entry => {\n                if (entry.isIntersecting) {\n                    const card = entry.target;\n                    const index = card.getAttribute('data-index');\n                    card.style.transitionDelay = `${index * 200}ms`;\n                    card.classList.add('is-visible');\n                    observer.unobserve(card);\n                }\n            });\n        }, { threshold: 0.1 });\n\n        cards.forEach(card => {\n            observer.observe(card);\n        });\n    });\n<\/script> "], ["", '<section id="services" class="services" data-astro-cid-g5jplrhu> <div class="container" data-astro-cid-g5jplrhu> <div class="section-header" data-astro-cid-g5jplrhu> <a href="/services" class="section-title-link" data-astro-cid-g5jplrhu> <h2 class="section-title" data-astro-cid-g5jplrhu>\u062E\u062F\u0645\u0627\u062A\u0646\u0627</h2> </a> <p class="section-subtitle" data-astro-cid-g5jplrhu>\u0646\u0642\u062F\u0645 \u062D\u0644\u0648\u0644\u0627\u064B \u0639\u0642\u0627\u0631\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u062A\u0644\u0628\u064A \u062A\u0637\u0644\u0639\u0627\u062A\u0643\u0645 \u0648\u062A\u0635\u0646\u0639 \u0642\u064A\u0645\u0629 \u062D\u0642\u064A\u0642\u064A\u0629 \u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631\u0627\u062A\u0643\u0645. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0623\u064A \u062E\u062F\u0645\u0629 \u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064A\u062F.</p> </div> <div class="services-grid" data-astro-cid-g5jplrhu> ', " </div> </div> </section> <script>\n    document.addEventListener('DOMContentLoaded', () => {\n        const cards = document.querySelectorAll('.service-card-link');\n\n        const observer = new IntersectionObserver((entries, observer) => {\n            entries.forEach(entry => {\n                if (entry.isIntersecting) {\n                    const card = entry.target;\n                    const index = card.getAttribute('data-index');\n                    card.style.transitionDelay = \\`\\${index * 200}ms\\`;\n                    card.classList.add('is-visible');\n                    observer.unobserve(card);\n                }\n            });\n        }, { threshold: 0.1 });\n\n        cards.forEach(card => {\n            observer.observe(card);\n        });\n    });\n<\/script> "])), maybeRenderHead(), services.map((service, index) => renderTemplate`<a${addAttribute(`/services/${service.slug}`, "href")} class="service-card-link"${addAttribute(index, "data-index")} data-astro-cid-g5jplrhu> <article class="service-card" data-astro-cid-g5jplrhu> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="service-image" data-astro-cid-g5jplrhu> <div class="card-overlay" data-astro-cid-g5jplrhu></div> <h3 class="service-title" data-astro-cid-g5jplrhu>${service.title}</h3> </article> </a>`));
}, "/home/user/eleman-company/src/components/Services.astro", void 0);

export { $$Services as $ };

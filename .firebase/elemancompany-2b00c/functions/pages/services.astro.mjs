/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_4YXjuf9l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C7k-ksFB.mjs';
import { $ as $$TopBar } from '../chunks/TopBar_Jt1YRuXK.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_vSpQzKqV.mjs';
import { $ as $$Services$1 } from '../chunks/Services_BhC8ALGN.mjs';
import 'clsx';
/* empty css                                    */
import { $ as $$FloatingButton } from '../chunks/FloatingButton_Dc2eHFJr.mjs';
export { renderers } from '../renderers.mjs';

const $$OurApproach = createComponent(($$result, $$props, $$slots) => {
  const qualityIcon = `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'> <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z' /> </svg>`;
  const innovationIcon = `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'> <path stroke-linecap='round' stroke-linejoin='round' d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.528l-.259-1.035a3.375 3.375 0 00-2.455-2.456L13.15 16l1.035-.259a3.375 3.375 0 002.456-2.456l.259-1.035.259 1.035a3.375 3.375 0 002.456 2.456l1.035.259-1.035.259a3.375 3.375 0 00-2.456 2.456l-.259 1.035z' /> </svg>`;
  const transparencyIcon = `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'> <path stroke-linecap='round' stroke-linejoin='round' d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' /> </svg>`;
  const principles = [
    {
      icon: qualityIcon,
      title: "\u0627\u0644\u062C\u0648\u062F\u0629 \u0647\u064A \u0623\u0633\u0627\u0633 \u0639\u0645\u0644\u0646\u0627",
      text: "\u0627\u0644\u062C\u0648\u062F\u0629 \u0641\u064A \u0634\u0631\u0643\u0629 \u0627\u0644\u0625\u064A\u0645\u0627\u0646 \u0644\u064A\u0633\u062A \u0645\u062C\u0631\u062F \u0634\u0639\u0627\u0631\u060C \u0628\u0644 \u0647\u064A \u062D\u062C\u0631 \u0627\u0644\u0632\u0627\u0648\u064A\u0629 \u0641\u064A \u0643\u0644 \u0645\u0627 \u0646\u0642\u0648\u0645 \u0628\u0647. \u064A\u0645\u062A\u062F \u0647\u0630\u0627 \u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645 \u0645\u0646 \u0645\u0631\u0627\u062D\u0644 \u0627\u0644\u062A\u062E\u0637\u064A\u0637 \u0648\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0623\u0648\u0644\u064A\u0629\u060C \u0645\u0631\u0648\u0631\u064B\u0627 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 \u0623\u062C\u0648\u062F \u0623\u0646\u0648\u0627\u0639 \u0645\u0648\u0627\u062F \u0627\u0644\u0628\u0646\u0627\u0621 \u0648\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u060C \u0648\u0635\u0648\u0644\u064B\u0627 \u0625\u0644\u0649 \u0623\u062F\u0642 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0641\u064A \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0648\u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A."
    },
    {
      icon: innovationIcon,
      title: "\u0627\u0628\u062A\u0643\u0627\u0631 \u064A\u0635\u0646\u0639 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644",
      text: "\u0641\u064A \u0639\u0627\u0644\u0645 \u064A\u062A\u0637\u0648\u0631 \u0628\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u060C \u0646\u0631\u0649 \u0641\u064A \u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0645\u062D\u0631\u0643\u064B\u0627 \u0623\u0633\u0627\u0633\u064A\u064B\u0627 \u0644\u0644\u062A\u0645\u064A\u0632. \u0646\u0633\u0639\u0649 \u062F\u0627\u0626\u0645\u064B\u0627 \u0644\u062A\u0637\u0628\u064A\u0642 \u0623\u062D\u062F\u062B \u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0648\u0627\u0644\u062A\u0635\u0627\u0645\u064A\u0645 \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0636\u064A\u0641 \u0642\u064A\u0645\u0629 \u062D\u0642\u064A\u0642\u064A\u0629 \u0644\u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627\u060C \u0648 \u0646\u0642\u062F\u0645 \u062D\u0644\u0648\u0644\u0627\u064B \u0630\u0643\u064A\u0629 \u0644\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0648\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0648\u0627\u062F \u0628\u0646\u0627\u0621 \u0635\u062F\u064A\u0642\u0629 \u0644\u0644\u0628\u064A\u0626\u0629."
    },
    {
      icon: transparencyIcon,
      title: "\u0634\u0641\u0627\u0641\u064A\u0629 \u062A\u0628\u0646\u064A \u0627\u0644\u062B\u0642\u0629",
      text: "\u0646\u0624\u0645\u0646 \u0628\u0623\u0646 \u0627\u0644\u0639\u0644\u0627\u0642\u0629 \u0645\u0639 \u0639\u0645\u0644\u0627\u0626\u0646\u0627 \u0647\u064A \u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0637\u0648\u064A\u0644 \u0627\u0644\u0623\u0645\u062F\u060C \u0648\u0623\u0633\u0627\u0633 \u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0647\u0648 \u0627\u0644\u062B\u0642\u0629. \u0644\u0630\u0644\u0643\u060C \u0646\u0636\u0639 \u0627\u0644\u0634\u0641\u0627\u0641\u064A\u0629 \u0641\u064A \u0635\u0645\u064A\u0645 \u062C\u0645\u064A\u0639 \u062A\u0639\u0627\u0645\u0644\u0627\u062A\u0646\u0627\u060C \u0648\u0646\u062D\u0631\u0635 \u0639\u0644\u0649 \u062A\u0632\u0648\u064A\u062F \u0639\u0645\u0644\u0627\u0626\u0646\u0627 \u0628\u0643\u0627\u0641\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0648\u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A\u0629 \u0628\u0648\u0636\u0648\u062D \u0643\u0627\u0645\u0644."
    }
  ];
  const planningIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> </svg>`;
  const designIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24a5.25 5.25 0 017.42 0L21 9.75M11.42 15.17L5.25 21" /> </svg>`;
  const constructionIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25z" /> </svg>`;
  const deliveryIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /> </svg>`;
  const workflow = [
    {
      icon: planningIcon,
      title: "1. \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0639 \u0648\u0627\u0644\u062A\u062E\u0637\u064A\u0637",
      text: "\u0646\u0628\u062F\u0623 \u0628\u062C\u0644\u0633\u0629 \u0627\u0633\u062A\u0634\u0627\u0631\u064A\u0629 \u0644\u0641\u0647\u0645 \u0631\u0624\u064A\u062A\u0643\u060C \u0645\u062A\u0637\u0644\u0628\u0627\u062A\u0643\u060C \u0648\u0645\u064A\u0632\u0627\u0646\u064A\u062A\u0643. \u0646\u0636\u0639 \u0645\u0639\u064B\u0627 \u0623\u0633\u0627\u0633\u064B\u0627 \u0645\u062A\u064A\u0646\u064B\u0627 \u0648\u062E\u0637\u0629 \u0639\u0645\u0644 \u0648\u0627\u0636\u062D\u0629 \u0644\u0645\u0634\u0631\u0648\u0639\u0643."
    },
    {
      icon: designIcon,
      title: "2. \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u0644\u0625\u0628\u062F\u0627\u0639",
      text: "\u064A\u0642\u0648\u0645 \u0641\u0631\u064A\u0642\u0646\u0627 \u0645\u0646 \u0627\u0644\u0645\u0635\u0645\u0645\u064A\u0646 \u0648\u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0628\u062A\u062D\u0648\u064A\u0644 \u0623\u0641\u0643\u0627\u0631\u0643 \u0625\u0644\u0649 \u0645\u062E\u0637\u0637\u0627\u062A \u0648\u062A\u0635\u0627\u0645\u064A\u0645 \u0628\u0635\u0631\u064A\u0629 \u0645\u0628\u062A\u0643\u0631\u0629\u060C \u0645\u0639 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649 \u0627\u0644\u062C\u0645\u0627\u0644 \u0627\u0644\u0648\u0638\u064A\u0641\u064A \u0648\u0627\u0644\u0627\u0633\u062A\u063A\u0644\u0627\u0644 \u0627\u0644\u0623\u0645\u062B\u0644 \u0644\u0644\u0645\u0633\u0627\u062D\u0627\u062A."
    },
    {
      icon: constructionIcon,
      title: "3. \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0648\u0627\u0644\u0628\u0646\u0627\u0621",
      text: "\u0628\u0625\u0634\u0631\u0627\u0641 \u0647\u0646\u062F\u0633\u064A \u062F\u0642\u064A\u0642\u060C \u0646\u0628\u062F\u0623 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0628\u0646\u0627\u0621 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0623\u062C\u0648\u062F \u0627\u0644\u0645\u0648\u0627\u062F \u0648\u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0633\u0627\u0644\u064A\u0628\u060C \u0645\u0639 \u0625\u0637\u0644\u0627\u0639\u0643 \u0627\u0644\u0645\u0633\u062A\u0645\u0631 \u0639\u0644\u0649 \u062A\u0642\u062F\u0645 \u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644."
    },
    {
      icon: deliveryIcon,
      title: "4. \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0648\u0627\u0644\u062F\u0639\u0645",
      text: "\u0646\u0633\u0644\u0645\u0643 \u0645\u0641\u062A\u0627\u062D \u0645\u0634\u0631\u0648\u0639\u0643 \u062C\u0627\u0647\u0632\u064B\u0627 \u0643\u0645\u0627 \u062A\u062E\u064A\u0644\u062A\u0647\u060C \u0645\u0639 \u0636\u0645\u0627\u0646\u0627\u062A\u0646\u0627 \u0644\u0644\u062C\u0648\u062F\u0629. \u0648\u0646\u0628\u0642\u0649 \u0639\u0644\u0649 \u062A\u0648\u0627\u0635\u0644 \u0644\u062A\u0642\u062F\u064A\u0645 \u0623\u064A \u062F\u0639\u0645 \u0642\u062F \u062A\u062D\u062A\u0627\u062C\u0647 \u0628\u0639\u062F \u0627\u0644\u062A\u0633\u0644\u064A\u0645."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="our-principles" data-astro-cid-dinuvir6> <div class="container" data-astro-cid-dinuvir6> <div class="section-header" data-astro-cid-dinuvir6> <h2 class="section-title" data-astro-cid-dinuvir6>منهجيتنا في تقديم القيمة</h2> <p class="section-subtitle" data-astro-cid-dinuvir6>نحن لا نبني عقارات فحسب، بل نبني ثقة وعلاقات تمتد للمستقبل. إليك كيف نضمن التميز في كل خدمة نقدمها.</p> </div> <div class="principles-timeline" data-astro-cid-dinuvir6> ${principles.map((principle, index) => renderTemplate`<div class="principle-step" data-astro-cid-dinuvir6> <div class="principle-step-icon-wrapper" data-astro-cid-dinuvir6> <div class="principle-step-icon" data-astro-cid-dinuvir6>${unescapeHTML(principle.icon)}</div> ${index < principles.length - 1 && renderTemplate`<div class="principle-step-connector" data-astro-cid-dinuvir6></div>`} </div> <div class="principle-step-content" data-astro-cid-dinuvir6> <h3 class="principle-step-title" data-astro-cid-dinuvir6>${principle.title}</h3> <p class="principle-step-text" data-astro-cid-dinuvir6>${principle.text}</p> </div> </div>`)} </div> </div> </section> <section class="how-we-work" data-astro-cid-dinuvir6> <div class="container" data-astro-cid-dinuvir6> <div class="section-header" data-astro-cid-dinuvir6> <h2 class="section-title" data-astro-cid-dinuvir6>رحلة مشروعك معنا</h2> <p class="section-subtitle" data-astro-cid-dinuvir6>نؤمن بالشفافية والوضوح. إليك كيف نحول فكرتك إلى واقع ملموس عبر أربع مراحل أساسية.</p> </div> <div class="workflow-timeline" data-astro-cid-dinuvir6> ${workflow.map((step, index) => renderTemplate`<div class="workflow-step" data-astro-cid-dinuvir6> <div class="step-icon-wrapper" data-astro-cid-dinuvir6> <div class="step-icon" data-astro-cid-dinuvir6>${unescapeHTML(step.icon)}</div> ${index < workflow.length - 1 && renderTemplate`<div class="step-connector" data-astro-cid-dinuvir6></div>`} </div> <div class="step-content" data-astro-cid-dinuvir6> <h3 class="step-title" data-astro-cid-dinuvir6>${step.title}</h3> <p class="step-text" data-astro-cid-dinuvir6>${step.text}</p> </div> </div>`)} </div> <div class="cta-container" data-astro-cid-dinuvir6> <a href="/contact" class="cta-button" data-astro-cid-dinuvir6>ابدأ رحلتك معنا</a> </div> </div> </section> `;
}, "/home/user/eleman-company/src/components/OurApproach.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u062E\u062F\u0645\u0627\u062A\u0646\u0627 - \u0634\u0631\u0643\u0629 \u0627\u0644\u0625\u064A\u0645\u0627\u0646", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopBar", $$TopBar, { "data-astro-cid-ucd2ps2b": true })} ${renderComponent($$result2, "Header", $$Header, { "showMenu": true, "data-astro-cid-ucd2ps2b": true })} ${maybeRenderHead()}<main class="services-page" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "Services", $$Services$1, { "data-astro-cid-ucd2ps2b": true })} ${renderComponent($$result2, "OurApproach", $$OurApproach, { "data-astro-cid-ucd2ps2b": true })} <!-- <-- Add the new component here --> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ucd2ps2b": true })} ${renderComponent($$result2, "FloatingButton", $$FloatingButton, { "data-astro-cid-ucd2ps2b": true })} ` })} `;
}, "/home/user/eleman-company/src/pages/services.astro", void 0);

const $$file = "/home/user/eleman-company/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

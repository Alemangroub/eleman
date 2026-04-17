/* empty css                                    */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_D9q-hNhU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DB-3ZIKO.mjs';
import { $ as $$TopBar } from '../../chunks/TopBar_D-6X39D4.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_DwwQezhF.mjs';
export { renderers } from '../../renderers.mjs';

const $$ProjectManagement = createComponent(($$result, $$props, $$slots) => {
  const service = {
    title: "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
    image: "/project-management.jpg",
    description: "\u0646\u062F\u064A\u0631 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0639\u0642\u0627\u0631\u064A\u0629 \u0628\u0643\u0641\u0627\u0621\u0629 \u0648\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629\u060C \u0628\u062F\u0621\u064B\u0627 \u0645\u0646 \u0627\u0644\u062A\u062E\u0637\u064A\u0637 \u0648\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0648\u0645\u0631\u0648\u0631\u064B\u0627 \u0628\u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u062D\u062A\u0649 \u0627\u0644\u062A\u0633\u0644\u064A\u0645.",
    detailedDescription: `\u0625\u0646 \u0646\u062C\u0627\u062D \u0623\u064A \u0645\u0634\u0631\u0648\u0639 \u0639\u0642\u0627\u0631\u064A \u0644\u0627 \u064A\u0639\u062A\u0645\u062F \u0641\u0642\u0637 \u0639\u0644\u0649 \u062C\u0648\u062F\u0629 \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u0644\u0628\u0646\u0627\u0621\u060C \u0628\u0644 \u0628\u0634\u0643\u0644 \u062D\u0627\u0633\u0645 \u0639\u0644\u0649 \u0643\u0641\u0627\u0621\u0629 \u0625\u062F\u0627\u0631\u062A\u0647. \u0641\u064A \u0634\u0631\u0643\u0629 \u0627\u0644\u0625\u064A\u0645\u0627\u0646\u060C \u0646\u0642\u062F\u0645 \u062E\u062F\u0645\u0629 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0643\u062D\u0644 \u0645\u062A\u0643\u0627\u0645\u0644 \u064A\u0636\u0645\u0646 \u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644 \u0628\u0633\u0644\u0627\u0633\u0629 \u0645\u0646 \u0627\u0644\u0641\u0643\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u064A\u0629 \u062D\u062A\u0649 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u060C \u0645\u062D\u0642\u0642\u064A\u0646 \u0623\u0647\u062F\u0627\u0641 \u0639\u0645\u0644\u0627\u0626\u0646\u0627 \u0628\u062F\u0642\u0629 \u0648\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629.

**\u0645\u0646\u0647\u062C\u064A\u062A\u0646\u0627 \u0641\u064A \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639:**
- **\u0627\u0644\u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u062F\u0642\u064A\u0642:** \u0646\u0628\u062F\u0623 \u0628\u0648\u0636\u0639 \u062E\u0637\u0629 \u0639\u0645\u0644 \u0645\u0641\u0635\u0644\u0629 \u062A\u0634\u0645\u0644 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0623\u0647\u062F\u0627\u0641\u060C \u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629\u060C \u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A\u060C \u0648\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0645\u0647\u0627\u0645\u060C \u0645\u0639 \u062F\u0631\u0627\u0633\u0629 \u0648\u0627\u0641\u064A\u0629 \u0644\u0643\u0644 \u0627\u0644\u0645\u062E\u0627\u0637\u0631 \u0627\u0644\u0645\u062D\u062A\u0645\u0644\u0629 \u0648\u0643\u064A\u0641\u064A\u0629 \u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639\u0647\u0627.
- **\u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0648\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629:** \u064A\u062A\u0648\u0644\u0649 \u0645\u062F\u064A\u0631\u0648 \u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627 \u0645\u0647\u0645\u0629 \u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0628\u064A\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0637\u0631\u0627\u0641 \u0627\u0644\u0645\u0639\u0646\u064A\u0629 (\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u064A\u064A\u0646\u060C \u0627\u0644\u0645\u0642\u0627\u0648\u0644\u064A\u0646\u060C \u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646) \u0644\u0636\u0645\u0627\u0646 \u062A\u062F\u0641\u0642 \u0627\u0644\u0639\u0645\u0644 \u0628\u0633\u0644\u0627\u0633\u0629 \u0648\u062A\u062C\u0646\u0628 \u0623\u064A \u062A\u0623\u062E\u064A\u0631 \u0623\u0648 \u062A\u0639\u0627\u0631\u0636.
- **\u0627\u0644\u0631\u0642\u0627\u0628\u0629 \u0639\u0644\u0649 \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u062A\u0643\u0644\u0641\u0629:** \u0646\u0637\u0628\u0642 \u0646\u0638\u0627\u0645 \u0631\u0642\u0627\u0628\u0629 \u0635\u0627\u0631\u0645 \u0639\u0644\u0649 \u062C\u0648\u062F\u0629 \u0627\u0644\u0645\u0648\u0627\u062F \u0648\u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u0646\u0641\u0630\u0629 \u0641\u064A \u0643\u0644 \u0645\u0631\u062D\u0644\u0629\u060C \u0645\u0639 \u0645\u062A\u0627\u0628\u0639\u0629 \u062F\u0642\u064A\u0642\u0629 \u0644\u0644\u0645\u0635\u0627\u0631\u064A\u0641 \u0644\u0636\u0645\u0627\u0646 \u0639\u062F\u0645 \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629.
- **\u062A\u0642\u0627\u0631\u064A\u0631 \u0634\u0641\u0627\u0641\u0629:** \u0646\u0632\u0648\u062F \u0639\u0645\u0644\u0627\u0626\u0646\u0627 \u0628\u062A\u0642\u0627\u0631\u064A\u0631 \u062F\u0648\u0631\u064A\u0629 \u0634\u0641\u0627\u0641\u0629 \u062A\u0648\u0636\u062D \u062A\u0642\u062F\u0645 \u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644\u060C \u0627\u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0645\u0627\u0644\u064A\u060C \u0648\u0623\u064A \u0645\u0633\u062A\u062C\u062F\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u060C \u0644\u064A\u0643\u0648\u0646\u0648\u0627 \u062F\u0627\u0626\u0645\u064B\u0627 \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639 \u0643\u0627\u0645\u0644 \u0628\u0643\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644.`
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": service.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopBar", $$TopBar, {})} ${renderComponent($$result2, "Header", $$Header, { "showMenu": true })} ${maybeRenderHead()}<main class="service-detail-page"> <article class="service-content-container"> <header class="service-header"> <div class="header-image-container"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="header-image"> <div class="header-overlay"></div> </div> <div class="header-text"> <h1 class="service-main-title">${service.title}</h1> <p class="service-intro-description">${service.description}</p> </div> </header> <section class="service-detailed-info"> <div class="detailed-description-wrapper"> <h2 class="details-section-title">تفاصيل الخدمة</h2> <p class="detailed-text">${service.detailedDescription}</p> </div> </section> <div class="back-to-home-link-wrapper"> <a href="/" class="back-to-home-link">العودة إلى الرئيسية</a> </div> </article> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} <style>
  .service-detail-page {
    background-color: #f9f9f9;
    direction: rtl;
    font-family: 'Cairo', sans-serif;
  }

  .service-content-container {
    max-width: 900px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0 5px 25px rgba(0,0,0,0.07);
    border-radius: 12px;
    overflow: hidden;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  .service-header {
    position: relative;
    color: white;
    text-align: right;
  }

  .header-image-container {
    height: 400px;
    overflow: hidden;
  }

  .header-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 20%, transparent 60%);
  }

  .header-text {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 40px;
    z-index: 1;
    width: 100%;
  }

  .service-main-title {
    font-size: 2.8rem;
    font-weight: 800;
    margin: 0 0 10px 0;
    line-height: 1.3;
  }

  .service-intro-description {
    font-family: 'Almarai', sans-serif;
    font-size: 1.2rem;
    max-width: 70%;
    opacity: 0.9;
  }

  .service-detailed-info {
    padding: 50px 40px;
  }

  .details-section-title {
      font-size: 2rem;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 25px;
      padding-bottom: 15px;
      border-bottom: 3px solid #007bff;
      display: inline-block;
  }

  .detailed-text {
    font-family: 'Almarai', sans-serif;
    font-size: 1.15rem;
    line-height: 2;
    color: #333;
    white-space: pre-line;
  }

  .back-to-home-link-wrapper {
    text-align: center;
    padding: 30px 40px;
    background-color: #f9f9f9;
    border-top: 1px solid #e7e7e7;
  }

  .back-to-home-link {
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 12px 30px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .back-to-home-link:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .header-text {
        padding: 25px;
    }
    .service-main-title {
        font-size: 2.2rem;
    }
    .service-intro-description {
        font-size: 1rem;
        max-width: 90%;
    }
    .service-detailed-info {
        padding: 40px 25px;
    }
    .details-section-title {
        font-size: 1.8rem;
    }
  }
</style>`;
}, "/home/user/Eman-Project/src/pages/services/project-management.astro", void 0);

const $$file = "/home/user/Eman-Project/src/pages/services/project-management.astro";
const $$url = "/services/project-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProjectManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

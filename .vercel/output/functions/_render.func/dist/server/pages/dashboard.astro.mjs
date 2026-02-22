/* empty css                                      */
import { e as createAstro, f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BXNuZTdR.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.elemancompany.net");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 \u0627\u0644\u0645\u0634\u0631\u0641" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="supervisor-dashboard-page"> <!-- Auth Loading State --> <div id="auth-loading-message"><p>جارٍ التحقق من صلاحيات الدخول...</p></div> <!-- Main Dashboard Content (hidden by default) --> <div id="dashboard-content" style="display: none;"> <header class="dashboard-header"> <div> <h1>لوحة تحكم المشرف</h1> <p>مرحباً بك، <span id="user-name-placeholder"></span>! هذه هي المشاريع المسؤولة عنها.</p> </div> <button id="logout-button" class="btn btn-logout">تسجيل الخروج</button> </header> <div id="projects-list" class="projects-container"></div> <div id="no-projects-message" class="info-message" style="display: none;"><p>لم يتم تعيين أي مشاريع لك حتى الآن.</p></div> </div> </main> ` })} ${renderScript($$result, "/home/user/bobobo/src/pages/dashboard/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/bobobo/src/pages/dashboard/index.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

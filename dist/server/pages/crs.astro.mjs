/* empty css                                 */
import { e as createComponent, k as renderComponent, ak as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D9q-hNhU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_YA1LhvQq.mjs';
import { $ as $$AdminLogin } from '../chunks/AdminLogin_BglGCU2H.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Crs = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645", "data-astro-cid-2o6s4z5u": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="admin-page" data-astro-cid-2o6s4z5u> <div id="auth-loading-message" class="auth-container" data-astro-cid-2o6s4z5u> <p data-astro-cid-2o6s4z5u>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;" data-astro-cid-2o6s4z5u> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, { "data-astro-cid-2o6s4z5u": true })} </div> <div id="admin-dashboard-container" style="display: none;" data-astro-cid-2o6s4z5u> <button id="logout-button" class="btn btn-logout" data-astro-cid-2o6s4z5u>تسجيل الخروج</button> <div class="container" data-astro-cid-2o6s4z5u> <div class="dashboard-header" data-astro-cid-2o6s4z5u> <h1 data-astro-cid-2o6s4z5u>مرحباً بك في لوحة التحكم</h1> <p id="welcome-message" data-astro-cid-2o6s4z5u>مرحباً بك في لوحة التحكم، من هنا يمكنك إدارة كل محتوى الموقع بسهولة وأمان.</p> </div> <div class="grid-container" data-astro-cid-2o6s4z5u> <a href="/crs/projects" class="card-link" data-astro-cid-2o6s4z5u><div class="card" data-astro-cid-2o6s4z5u><h3 data-astro-cid-2o6s4z5u>إدارة المشاريع</h3><p data-astro-cid-2o6s4z5u>إضافة مشاريع جديدة وتعيين المشرفين والمهندسين المسؤولين عنها.</p></div></a> <a href="/crs/users" class="card-link" data-astro-cid-2o6s4z5u><div class="card" data-astro-cid-2o6s4z5u><h3 data-astro-cid-2o6s4z5u>إدارة المستخدمين</h3><p data-astro-cid-2o6s4z5u>إضافة وتعديل وحذف المستخدمين وتعيين صلاحياتهم.</p></div></a> </div> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs.astro", void 0);

const $$file = "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs.astro";
const $$url = "/crs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Crs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                      */
import { f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../chunks/AdminLogin_BifDDabA.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645", "data-astro-cid-2zp6q64z": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="admin-page" data-astro-cid-2zp6q64z> <div id="auth-loading-message" class="auth-container" data-astro-cid-2zp6q64z> <p data-astro-cid-2zp6q64z>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;" data-astro-cid-2zp6q64z> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, { "data-astro-cid-2zp6q64z": true })} </div> <div id="admin-dashboard-container" style="display: none;" data-astro-cid-2zp6q64z> <button id="logout-button" class="btn btn-logout" data-astro-cid-2zp6q64z>تسجيل الخروج</button> <div class="container" data-astro-cid-2zp6q64z> <div class="dashboard-header" data-astro-cid-2zp6q64z> <h1 data-astro-cid-2zp6q64z>مرحباً بك في لوحة التحكم</h1> <p data-astro-cid-2zp6q64z>من هنا يمكنك إدارة محتوى الموقع بسهولة وأمان.</p> </div> <div class="grid-container" data-astro-cid-2zp6q64z> <a href="/admin/projects" class="card-link" data-astro-cid-2zp6q64z><div class="card" data-astro-cid-2zp6q64z><h3 data-astro-cid-2zp6q64z>إدارة المشاريع</h3><p data-astro-cid-2zp6q64z>إضافة مشاريع جديدة وتعيين المشرفين والمهندسين المسؤولين عنها.</p></div></a> <a href="/admin/users" class="card-link" data-astro-cid-2zp6q64z><div class="card" data-astro-cid-2zp6q64z><h3 data-astro-cid-2zp6q64z>إدارة المستخدمين</h3><p data-astro-cid-2zp6q64z>إضافة وتعديل وحذف المستخدمين وتعيين صلاحياتهم.</p></div></a> </div> </div> </div> </main> ` })} ${renderScript($$result, "/home/user/bobobo/src/pages/admin.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/bobobo/src/pages/admin.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

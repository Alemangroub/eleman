/* empty css                                         */
import { f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../chunks/AdminLogin_BifDDabA.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$AddProject = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F", "data-astro-cid-2f6ll4nj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container" data-astro-cid-2f6ll4nj> <p data-astro-cid-2f6ll4nj>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;" data-astro-cid-2f6ll4nj> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, { "data-astro-cid-2f6ll4nj": true })} </div> <main id="page-content" class="add-project-page" style="display: none;" data-astro-cid-2f6ll4nj> <div class="container" data-astro-cid-2f6ll4nj> <div class="page-header" data-astro-cid-2f6ll4nj> <h1 data-astro-cid-2f6ll4nj>إضافة مشروع جديد</h1> <div class="header-actions" data-astro-cid-2f6ll4nj> <a href="/admin/projects" class="btn btn-secondary" data-astro-cid-2f6ll4nj>إلغاء</a> <button id="logout-button" class="btn btn-danger" data-astro-cid-2f6ll4nj>تسجيل الخروج</button> </div> </div> <form class="project-form" id="add-project-form" data-astro-cid-2f6ll4nj> <!-- Project Details --> <div class="form-group" data-astro-cid-2f6ll4nj> <label for="projectName" data-astro-cid-2f6ll4nj>اسم المشروع</label> <input type="text" id="projectName" name="projectName" required data-astro-cid-2f6ll4nj> </div> <div class="form-group" data-astro-cid-2f6ll4nj> <label for="projectAddress" data-astro-cid-2f6ll4nj>العنوان</label> <input type="text" id="projectAddress" name="projectAddress" required data-astro-cid-2f6ll4nj> </div> <hr class="divider" data-astro-cid-2f6ll4nj> <!-- Static Supervisors --> <div class="person-group" data-astro-cid-2f6ll4nj> <div class="form-group" data-astro-cid-2f6ll4nj> <label for="supervisor1Name" data-astro-cid-2f6ll4nj>اسم المشرف</label> <select id="supervisor1Name" name="personName" class="supervisor-select" required data-astro-cid-2f6ll4nj> <option value="" disabled selected data-astro-cid-2f6ll4nj>جار التحميل...</option> </select> </div> </div> <!-- Dynamic Supervisors Container --> <div id="additional-persons-container" data-astro-cid-2f6ll4nj></div> <!-- Add Button --> <div class="add-person-action" data-astro-cid-2f6ll4nj> <button type="button" id="add-person-btn" class="btn btn-add" data-astro-cid-2f6ll4nj>+ إضافة مشرف آخر</button> </div> <!-- Form Actions --> <div class="form-actions" data-astro-cid-2f6ll4nj> <button type="submit" id="submit-btn" class="btn btn-primary" data-astro-cid-2f6ll4nj>حفظ المشروع</button> </div> </form> </div> </main> ` })} ${renderScript($$result, "/home/user/bobobo/src/pages/admin/add-project.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/bobobo/src/pages/admin/add-project.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/add-project.astro";
const $$url = "/admin/add-project";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AddProject,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

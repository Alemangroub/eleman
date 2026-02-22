/* empty css                                         */
import { f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../chunks/AdminLogin_BifDDabA.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u0627\u062A" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" class="projects-admin-page" style="display: none;"> <div class="container"> <!-- Page Header --> <div class="page-header"> <h1>إدارة المشروعات</h1> <div class="header-actions"> <a href="/admin/add-project" class="btn btn-primary">+ إضافة مشروع جديد</a> <a href="/admin/archived-projects" class="btn btn-secondary">المشاريع المؤرشفة</a> <button id="logout-button" class="btn btn-danger">تسجيل الخروج</button> </div> </div> <!-- Projects Table --> <div class="projects-list-container"> <h2>قائمة المشاريع</h2> <div class="table-wrapper"> <table id="projects-table"> <thead> <tr> <th>اسم المشروع</th> <th>العنوان</th> <th>المشرفون</th> <th>الإجراءات</th> </tr> </thead> <tbody id="projects-list"> <!-- Rows are dynamically inserted here --> </tbody> </table> </div> <p id="no-projects-message">جاري تحميل المشاريع...</p> </div> </div> <!-- Archive Confirmation Modal --> <div id="archive-modal" class="modal-overlay"> <div class="modal-box"> <h3>تأكيد الأرشفة</h3> <p>هل أنت متأكد من أنك تريد أرشفة هذا المشروع؟</p> <div class="modal-actions"> <button id="cancel-archive-btn" class="btn btn-secondary">إلغاء</button> <button id="confirm-archive-btn" class="btn btn-warning">تأكيد الأرشفة</button> </div> </div> </div> <!-- Edit Project Modal --> <div id="edit-modal" class="modal-overlay"> <div class="modal-box"> <h3>تعديل المشروع</h3> <form id="edit-form"> <div class="form-group"> <label for="edit-project-name">اسم المشروع</label> <input type="text" id="edit-project-name" required> </div> <div class="form-group"> <label for="edit-project-address">عنوان المشروع</label> <input type="text" id="edit-project-address"> </div> <!-- Supervisors Management --> <div class="form-group"> <label>المشرفون الحاليون</label> <div id="current-supervisors-list" class="supervisors-list"> <!-- Current supervisors will be listed here --> </div> </div> <div class="form-group"> <label for="add-supervisor-select">إضافة مشرف جديد</label> <div class="add-supervisor-wrapper"> <select id="add-supervisor-select"> <!-- Available supervisors will be loaded here --> </select> <button type="button" id="add-supervisor-btn" class="btn btn-primary btn-small">إضافة</button> </div> </div> <div class="modal-actions"> <button type="button" id="cancel-edit-btn" class="btn btn-secondary">إلغاء</button> <button type="submit" class="btn btn-primary">حفظ التغييرات</button> </div> </form> </div> </div> </main> ` })}  ${renderScript($$result, "/home/user/bobobo/src/pages/admin/projects.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/bobobo/src/pages/admin/projects.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/projects.astro";
const $$url = "/admin/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

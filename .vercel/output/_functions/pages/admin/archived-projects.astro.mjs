/* empty css                                         */
import { f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../chunks/AdminLogin_BifDDabA.mjs';
/* empty css                                                */
export { renderers } from '../../renderers.mjs';

const $$ArchivedProjects = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0645\u0624\u0631\u0634\u0641\u0629" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" class="projects-admin-page" style="display: none;"> <div class="container"> <!-- Page Header --> <div class="page-header"> <h1>المشاريع المؤرشفة</h1> <div class="header-actions"> <a href="/admin/projects" class="btn btn-primary">&larr; العودة إلى المشاريع النشطة</a> <button id="logout-button" class="btn btn-danger">تسجيل الخروج</button> </div> </div> <!-- Projects Table --> <div class="projects-list-container"> <h2>قائمة المشاريع المؤرشفة</h2> <div class="table-wrapper"> <table id="projects-table"> <thead> <tr> <th>اسم المشروع</th> <th>العنوان</th> <th>المشرفون</th> <th>الإجراءات</th> </tr> </thead> <tbody id="projects-list"> <!-- Rows are dynamically inserted here --> </tbody> </table> </div> <p id="no-projects-message">جاري تحميل المشاريع المؤرشفة...</p> </div> </div> <!-- Delete Confirmation Modal --> <div id="delete-modal" class="modal-overlay"> <div class="modal-box"> <h3>تأكيد الحذف</h3> <p>هل أنت متأكد من أنك تريد حذف هذا المشروع؟ لا يمكن التراجع عن هذا الإجراء.</p> <div class="modal-actions"> <button id="cancel-delete-btn" class="btn btn-secondary">إلغاء</button> <button id="confirm-delete-btn" class="btn btn-danger">تأكيد الحذف</button> </div> </div> </div> <!-- Unarchive Confirmation Modal --> <div id="unarchive-modal" class="modal-overlay"> <div class="modal-box"> <h3>تأكيد إلغاء الأرشفة</h3> <p>هل أنت متأكد من أنك تريد استعادة هذا المشروع إلى قائمة المشاريع النشطة؟</p> <div class="modal-actions"> <button id="cancel-unarchive-btn" class="btn btn-secondary">إلغاء</button> <button id="confirm-unarchive-btn" class="btn btn-success">تأكيد الاستعادة</button> </div> </div> </div> </main> ` })}  ${renderScript($$result, "/home/user/bobobo/src/pages/admin/archived-projects.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/bobobo/src/pages/admin/archived-projects.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/archived-projects.astro";
const $$url = "/admin/archived-projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ArchivedProjects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

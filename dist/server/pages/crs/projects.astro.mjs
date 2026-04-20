/* empty css                                    */
import { e as createComponent, k as renderComponent, ak as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D9q-hNhU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_YA1LhvQq.mjs';
import { $ as $$AdminLogin } from '../../chunks/AdminLogin_BglGCU2H.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u0627\u062A" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" class="projects-admin-page" style="display: none;"> <div class="container"> <!-- Page Header --> <div class="page-header"> <div class="header-side left"> <div class="dropdown"> <button class="btn-icon dropdown-toggle" aria-label="خيارات إضافية"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg> </button> <div class="dropdown-menu"> <a href="/crs/add-project" class="dropdown-item">+ إضافة مشروع جديد</a> <button id="installments-notification-btn" class="dropdown-item">
تنبيهات الأقساط
<span id="notification-badge" class="notification-badge" style="display: none;"></span> </button> <a href="/crs/archived-projects" class="dropdown-item">المشاريع المؤرشفة</a> </div> </div> </div> <h1 class="page-title">إدارة المشروعات</h1> <div class="header-side right"> <a href="/dashboard" class="btn btn-secondary">لوحة التحكم</a> <button id="logout-button" class="btn btn-danger">تسجيل الخروج</button> </div> </div> <!-- Search Input --> <div class="search-container"> <input type="text" id="search-input" placeholder="ابحث باسم المشروع..."> </div> <!-- Projects Table --> <div class="projects-list-container"> <h2>قائمة المشاريع</h2> <div class="table-wrapper"> <table id="projects-table"> <thead> <tr> <th>اسم المشروع</th> <th>العنوان</th> <th>المشرفون</th> <th>الإجراءات</th> </tr> </thead> <tbody id="projects-list"> <!-- Rows are dynamically inserted here --> </tbody> </table> </div> <p id="no-projects-message">جاري تحميل المشاريع...</p> </div> </div> <!-- Installments Notifications Modal --> <div id="installments-modal" class="modal-overlay"> <div class="modal-box large"> <h3>تنبيهات الأقساط</h3> <div id="installments-notification-content"> <!-- Notifications will be loaded here --> </div> <div class="modal-actions"> <button id="close-installments-modal-btn" class="btn btn-secondary">إغلاق</button> </div> </div> </div> <!-- Archive Confirmation Modal --> <div id="archive-modal" class="modal-overlay"> <div class="modal-box"> <h3>تأكيد الأرشفة</h3> <p>هل أنت متأكد من أنك تريد أرشفة هذا المشروع؟</p> <div class="modal-actions"> <button id="cancel-archive-btn" class="btn btn-secondary">إلغاء</button> <button id="confirm-archive-btn" class="btn btn-warning">تأكيد الأرشفة</button> </div> </div> </div> <!-- Edit Project Modal --> <div id="edit-modal" class="modal-overlay"> <div class="modal-box"> <h3>تعديل المشروع</h3> <form id="edit-form"> <div class="form-group"> <label for="edit-project-name">اسم المشروع</label> <input type="text" id="edit-project-name" required> </div> <div class="form-group"> <label for="edit-project-address">عنوان المشروع</label> <input type="text" id="edit-project-address"> </div> <!-- Supervisors Management --> <div class="form-group"> <label>المشرفون الحاليون</label> <div id="current-supervisors-list" class="supervisors-list"> <!-- Current supervisors will be listed here --> </div> </div> <div class="form-group"> <label for="add-supervisor-select">إضافة مشرف جديد</label> <div class="add-supervisor-wrapper"> <select id="add-supervisor-select"> <!-- Available supervisors will be loaded here --> </select> <button type="button" id="add-supervisor-btn" class="btn btn-primary btn-small">إضافة</button> </div> </div> <div class="modal-actions"> <button type="button" id="cancel-edit-btn" class="btn btn-secondary">إلغاء</button> <button type="submit" class="btn btn-primary">حفظ التغييرات</button> </div> </form> </div> </div> </main> ` })}  ${renderScript($$result, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects.astro", void 0);

const $$file = "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects.astro";
const $$url = "/crs/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

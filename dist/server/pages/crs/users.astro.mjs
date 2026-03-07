/* empty css                                    */
import { e as createComponent, k as renderComponent, o as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_4YXjuf9l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C7k-ksFB.mjs';
import { $ as $$AdminLogin } from '../../chunks/AdminLogin_3aSuLz0Y.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Users = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" class="user-admin-page" style="display: none;"> <div class="container"> <!-- Page Header --> <div class="page-header"> <h1>إدارة المستخدمين</h1> <div class="header-actions"> <a href="/crs/projects" class="btn btn-secondary">العودة للوحة التحكم</a> <button id="logout-button" class="btn btn-danger">تسجيل الخروج</button> </div> </div> <!-- Add User Form --> <div class="form-container card"> <h2>إضافة مستخدم جديد</h2> <form id="add-user-form"> <div class="form-group"> <label for="user-name">اسم المستخدم الكامل</label> <input type="text" id="user-name" placeholder="مثال: محمد أحمد" required> </div> <div class="form-row"> <div class="form-group"> <label for="user-email">البريد الإلكتروني</label> <input type="email" id="user-email" placeholder="example@domain.com" required> </div> <div class="form-group"> <label for="user-password">كلمة السر</label> <input type="password" id="user-password" placeholder="•••••••• (6 حروف على الأقل)" required minlength="6"> </div> </div> <div class="form-group"> <label for="user-role">صلاحية المستخدم</label> <select id="user-role" required> <option value="" disabled selected>اختر صلاحية...</option> <option value="admin">مسؤول (Admin)</option> <option value="supervisor">مشرف (Supervisor)</option> </select> </div> <button type="submit" id="add-user-btn" class="btn btn-primary">إضافة المستخدم</button> <p id="add-user-feedback" class="feedback-message"></p> </form> </div> <!-- Users List --> <div class="users-list-container"> <h2>قائمة المستخدمين</h2> <div id="users-list" class="users-grid"></div> <p id="no-users-message" class="info-message">جاري تحميل المستخدمين...</p> </div> </div> <!-- Edit User Modal --> <div id="edit-user-modal" class="modal-overlay" style="display: none;"> <div class="modal-content"> <h4>تعديل بيانات المستخدم</h4> <form id="edit-user-form"> <input type="hidden" id="edit-user-id"> <div class="form-group"> <label for="edit-user-name">اسم المستخدم الكامل</label> <input type="text" id="edit-user-name" required> </div> <div class="form-group"> <label for="edit-user-email">البريد الإلكتروني</label> <input type="email" id="edit-user-email" required> </div> <div class="form-group"> <label for="edit-user-role">صلاحية المستخدم</label> <select id="edit-user-role" required> <option value="admin">مسؤول (Admin)</option> <option value="supervisor">مشرف (Supervisor)</option> </select> </div> <div class="form-group"> <label for="edit-user-password">كلمة سر جديدة (اختياري)</label> <input type="password" id="edit-user-password" placeholder="اتركها فارغة لعدم التغيير" minlength="6"> </div> <p id="edit-user-feedback" class="feedback-message"></p> <div class="modal-actions"> <button type="button" id="edit-modal-cancel-btn" class="btn btn-secondary">إلغاء</button> <button type="submit" id="edit-modal-save-btn" class="btn btn-primary">حفظ التعديلات</button> </div> </form> </div> </div> <!-- Delete Confirmation Modal --> <div id="delete-confirm-modal" class="modal-overlay" style="display: none;"> <div class="modal-content"> <h4>تأكيد الحذف</h4> <p id="modal-text">هل أنت متأكد من حذف هذا المستخدم نهائياً؟ هذا الإجراء لا يمكن التراجع عنه.</p> <div class="modal-actions"> <button id="modal-cancel-btn" class="btn btn-secondary">إلغاء</button> <button id="modal-confirm-btn" class="btn btn-danger">تأكيد الحذف</button> </div> </div> </div> </main> ` })}  ${renderScript($$result, "/home/user/eleman-company/src/pages/crs/users.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/eleman-company/src/pages/crs/users.astro", void 0);

const $$file = "/home/user/eleman-company/src/pages/crs/users.astro";
const $$url = "/crs/users";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Users,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

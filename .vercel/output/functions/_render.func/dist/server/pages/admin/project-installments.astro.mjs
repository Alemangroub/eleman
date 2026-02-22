/* empty css                                         */
import { f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../chunks/AdminLogin_BifDDabA.mjs';
/* empty css                                                   */
export { renderers } from '../../renderers.mjs';

const $$ProjectInstallments = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0639\u0642\u0648\u062F \u0627\u0644\u0645\u0634\u0631\u0648\u0639" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" style="display: none;"> <div class="dashboard-container"> <div class="dashboard-header"> <h1 id="project-name">عقود المشروع: </h1> <div class="header-actions"> <a id="add-contract-btn" href="#" class="btn btn-primary">+ إضافة عقد جديد</a> <a id="notifications-btn" href="#" class="btn btn-info">تنبيهات الأقساط <span class="notification-badge" style="display: none;"></span></a> <a href="/admin/projects" class="btn btn-secondary">العودة للمشاريع</a> </div> </div> <!-- Summary Dashboard --> <div class="summary-dashboard"> <div class="stat-card"> <h4>إجمالي عدد العقود</h4> <p id="summary-total-contracts">0</p> </div> <div class="stat-card"> <h4>إجمالي مبلغ الأقساط</h4> <p id="summary-total-amount">0 ج.م.</p> </div> <div class="stat-card"> <h4>إجمالي المدفوع</h4> <p id="summary-total-paid">0 ج.م.</p> </div> </div> <div id="contracts-list" class="contracts-list-container"> <!-- Contract list items will be dynamically inserted here --> </div> <div id="loader">جاري تحميل البيانات...</div> <p id="no-contracts-message" style="display: none;">لا توجد عقود لهذا المشروع بعد.</p> <div id="error-display" style="display: none;"> <h1>حدث خطأ</h1> <p id="error-message"></p> <a href="/admin/projects" class="btn btn-primary">العودة إلى لوحة التحكم</a> </div> </div> </main> ` })}  ${renderScript($$result, "/home/user/bobobo/src/pages/admin/project-installments.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/bobobo/src/pages/admin/project-installments.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/project-installments.astro";
const $$url = "/admin/project-installments";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ProjectInstallments,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                         */
import { f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../chunks/AdminLogin_BifDDabA.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const $$Notifications = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0623\u0642\u0633\u0627\u0637" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" style="display: none;"> <div class="notifications-container"> <div class="notifications-header"> <h1 id="project-name-header">تنبيهات الأقساط للمشروع</h1> <a id="back-link" href="#" class="btn btn-secondary">العودة للعقود</a> </div> <div id="loader">جاري تحميل التنبيهات...</div> <div id="error-display" class="message-card" style="display: none;"></div> <div id="notifications-content" style="display: none;"> <!-- Overdue Installments --> <div class="notification-section"> <h2>أقساط متأخرة</h2> <div id="overdue-installments-list" class="installments-list"> <!-- Overdue items will be inserted here --> </div> <p id="no-overdue-message" class="empty-message" style="display: none;">لا توجد أقساط متأخرة حاليًا.</p> </div> <!-- Upcoming Installments --> <div class="notification-section"> <h2>أقساط تستحق خلال 7 أيام</h2> <div id="upcoming-installments-list" class="installments-list"> <!-- Upcoming items will be inserted here --> </div> <p id="no-upcoming-message" class="empty-message" style="display: none;">لا توجد أقساط تستحق قريبًا.</p> </div> </div> </div> </main> ` })}  ${renderScript($$result, "/home/user/bobobo/src/pages/admin/notifications.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/bobobo/src/pages/admin/notifications.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/notifications.astro";
const $$url = "/admin/notifications";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Notifications,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

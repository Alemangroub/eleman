/* empty css                                         */
import { f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../chunks/AdminLogin_BifDDabA.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const $$EditContract = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0639\u0642\u062F" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" style="display: none;"> <div class="form-container"> <h1 id="form-header">تعديل بيانات العقد</h1> <p id="form-subheader"></p> <div id="loader">جاري تحميل بيانات العقد...</div> <div id="error-display" class="message-card" style="display: none;"></div> <form id="edit-contract-form" style="display: none;"> <div class="form-grid"> <div class="form-group"> <label for="customer-name">اسم العميل</label> <input type="text" id="customer-name" name="customerName" required> </div> <div class="form-group"> <label for="customer-phone">رقم هاتف العميل</label> <input type="tel" id="customer-phone" name="customerPhone" required> </div> <div class="form-group"> <label for="total-amount">المبلغ الإجمالي للعقد (ج.م)</label> <input type="number" id="total-amount" name="totalAmount" required step="0.01"> </div> <div class="form-group"> <label for="unit-type">نوع الوحدة</label> <select id="unit-type" name="unitType" required> <option value="apartment">شقة</option> <option value="shop">محل</option> <option value="basement">بدروم</option> <option value="other">أخرى</option> </select> </div> <div class="form-group full-width"> <label for="unit-location">موقع/رقم الوحدة</label> <input type="text" id="unit-location" name="unitLocation" required> </div> </div> <div class="form-buttons"> <button type="submit" id="submit-btn" class="btn btn-primary">حفظ التعديلات</button> <a id="cancel-btn" href="#" class="btn btn-secondary">إلغاء</a> </div> </form> </div> </main> ` })}  ${renderScript($$result, "/home/user/bobobo/src/pages/admin/edit-contract.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/bobobo/src/pages/admin/edit-contract.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/edit-contract.astro";
const $$url = "/admin/edit-contract";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$EditContract,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                         */
import { f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../chunks/AdminLogin_BifDDabA.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$AddContract = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0625\u0636\u0627\u0641\u0629 \u0639\u0642\u062F \u062C\u062F\u064A\u062F" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" style="display: none;"> <div class="form-container"> <h1 id="form-header">إضافة عقد جديد</h1> <p id="form-subheader">املأ البيانات التالية لإنشاء العقد والأقساط الخاصة به.</p> <form id="add-contract-form"> <div class="simple-form-grid"> <div class="form-group"> <label for="customer-name">اسم العميل</label> <input type="text" id="customer-name" name="customerName" required> </div> <div class="form-group"> <label for="customer-phone">رقم هاتف العميل</label> <input type="tel" id="customer-phone" name="customerPhone" required> </div> <div class="form-group"> <label for="unit-type">نوع الوحدة</label> <select id="unit-type" name="unitType" required> <option value="apartment">شقة</option> <option value="shop">محل</option> <option value="basement">بدروم</option> <option value="other">أخرى</option> </select> </div> <div class="form-group"> <label for="unit-location">موقع/رقم الوحدة</label> <input type="text" id="unit-location" name="unitLocation" required> </div> <div class="form-group"> <label for="total-amount">المبلغ الإجمالي للعقد (ج.م)</label> <input type="text" inputmode="numeric" id="total-amount" name="totalAmount" required> </div> <div class="form-group"> <label for="down-payment">المبلغ المدفوع مقدمًا (ج.م)</label> <input type="text" inputmode="numeric" id="down-payment" name="downPayment" value="0"> </div> <div class="form-group"> <label for="remaining-amount">المبلغ المتبقي (ج.م)</label> <input type="text" id="remaining-amount" readonly> </div> <div class="form-group"> <label for="number-of-installments">عدد الأقساط</label> <select id="number-of-installments" name="numberOfInstallments" required> <option value="" disabled selected>اختر عدد الأقساط</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> </select> </div> </div> <div id="dynamic-installments-container" class="installments-container"></div> <div class="form-buttons"> <button type="submit" id="submit-btn" class="btn btn-primary">إنشاء العقد</button> <a id="cancel-btn" href="#" class="btn btn-secondary">إلغاء</a> </div> </form> </div> </main> ` })}  ${renderScript($$result, "/home/user/bobobo/src/pages/admin/add-contract.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/bobobo/src/pages/admin/add-contract.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/add-contract.astro";
const $$url = "/admin/add-contract";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AddContract,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

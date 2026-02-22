/* empty css                                         */
import { f as createComponent, m as maybeRenderHead, n as renderScript, r as renderTemplate, k as renderComponent } from '../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../chunks/AdminLogin_BifDDabA.mjs';
import 'clsx';
/* empty css                                               */
export { renderers } from '../../renderers.mjs';

const $$ConfirmModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="confirm-modal-backdrop" class="modal-backdrop" style="display: none;" data-astro-cid-wrxj4czz> <div id="confirm-modal" class="modal-content" data-astro-cid-wrxj4czz> <p id="confirm-modal-message" data-astro-cid-wrxj4czz></p> <div class="modal-buttons" data-astro-cid-wrxj4czz> <button id="confirm-modal-cancel" class="btn btn-secondary" data-astro-cid-wrxj4czz>إلغاء</button> <button id="confirm-modal-confirm" class="btn btn-danger" data-astro-cid-wrxj4czz>تأكيد</button> </div> </div> </div>  ${renderScript($$result, "/home/user/bobobo/src/components/ConfirmModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/bobobo/src/components/ConfirmModal.astro", void 0);

const $$PartialPaymentModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="partial-payment-modal" class="modal-overlay" style="display: none;" data-astro-cid-yso4qmde> <div class="modal-content" data-astro-cid-yso4qmde> <h3 id="partial-payment-title" data-astro-cid-yso4qmde>تسجيل دفعة جزئية</h3> <p data-astro-cid-yso4qmde>القسط الأصلي: <span id="original-amount-display" data-astro-cid-yso4qmde></span></p> <div class="form-group" data-astro-cid-yso4qmde> <label for="partial-amount-input" data-astro-cid-yso4qmde>المبلغ المدفوع</label> <input type="number" id="partial-amount-input" placeholder="أدخل المبلغ المدفوع هنا" data-astro-cid-yso4qmde> </div> <div class="modal-buttons" data-astro-cid-yso4qmde> <button id="confirm-partial-payment-btn" class="btn btn-success" data-astro-cid-yso4qmde>تأكيد الدفع</button> <button id="cancel-partial-payment-btn" class="btn btn-secondary" data-astro-cid-yso4qmde>إلغاء</button> </div> </div> </div>  ${renderScript($$result, "/home/user/bobobo/src/components/PartialPaymentModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/bobobo/src/components/PartialPaymentModal.astro", void 0);

const $$ContractDetails = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0639\u0642\u062F" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" style="display: none;"> <div class="details-container"> <div class="details-header"> <h1 id="customer-name-header">تفاصيل العقد</h1> <div class="header-buttons"> <button id="print-btn" class="btn btn-info">طباعة</button> <button id="export-pdf-btn" class="btn btn-info">تصدير PDF</button> <button id="export-excel-btn" class="btn btn-info">تصدير Excel</button> <a id="edit-contract-btn" href="#" class="btn btn-warning">تعديل العقد</a> <button id="delete-contract-btn" class="btn btn-danger">حذف العقد</button> <a id="back-link" href="#" class="btn btn-secondary">&larr; العودة لقائمة العقود</a> </div> </div> <div id="loader">جاري تحميل البيانات...</div> <div id="error-display" class="message-card" style="display: none;"> <h1>حدث خطأ</h1> <p id="error-message"></p> </div> <div id="contract-details-content" style="display: none;"> <!-- Financial Summary --> <div class="summary-dashboard"> <div class="stat-card"> <h4>المبلغ الإجمالي للعقد</h4> <p id="total-amount">0 ج.م.</p> </div> <div class="stat-card"> <h4 class="paid">إجمالي المدفوع</h4> <p id="total-paid" class="paid">0 ج.م.</p> </div> <div class="stat-card"> <h4 class="remaining">المبلغ المتبقي</h4> <p id="total-remaining" class="remaining">0 ج.م.</p> </div> </div> <!-- Customer and Unit Info --> <div class="info-grid"> <div class="info-card"> <h3>بيانات العميل</h3> <p><strong>الاسم:</strong> <span id="info-customer-name">-</span></p> <p><strong>رقم الهاتف:</strong> <span id="info-customer-phone">-</span></p> </div> <div class="info-card"> <h3>بيانات الوحدة</h3> <p><strong>نوع الوحدة:</strong> <span id="info-unit-type">-</span></p> <p><strong>موقع/رقم الوحدة:</strong> <span id="info-unit-location">-</span></p> </div> </div> <!-- Installments Section --> <div class="installments-section"> <h3>جدول الأقساط</h3> <div class="table-responsive-wrapper"> <table id="installments-table" class="is-responsive"> <thead> <tr> <th>م.</th> <th>مبلغ القسط</th> <th>تاريخ الاستحقاق</th> <th>الحالة</th> <th>تاريخ الدفع</th> <th>بيان القسط</th> <th>إجراءات</th> </tr> </thead> <tbody> <!-- Rows will be inserted here dynamically --> </tbody> </table> </div> <p id="no-installments-message" class="message-card" style="display: none;">لا توجد أقساط مسجلة لهذا العقد.</p> </div> </div> </div> </main> ${renderComponent($$result2, "ConfirmModal", $$ConfirmModal, {})} ${renderComponent($$result2, "PartialPaymentModal", $$PartialPaymentModal, {})} ` })}  ${renderScript($$result, "/home/user/bobobo/src/pages/admin/contract-details.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/bobobo/src/pages/admin/contract-details.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/contract-details.astro";
const $$url = "/admin/contract-details";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContractDetails,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

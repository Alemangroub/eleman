/* empty css                                               */
import { e as createAstro, f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../../../chunks/AdminLogin_BifDDabA.mjs';
import { d as db } from '../../../../chunks/admin_CBgMA4DX.mjs';
import { Timestamp } from 'firebase-admin/firestore';
/* empty css                                          */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://www.elemancompany.net");
const prerender = false;
const $$Items = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Items;
  const csrfToken = Astro2.locals.csrfToken;
  const { id } = Astro2.params;
  let project = null;
  let items = [];
  let error = null;
  let success = null;
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const name = formData.get("name");
      const personName = formData.get("personName");
      const quantity = parseFloat(formData.get("quantity"));
      const unitPrice = parseFloat(formData.get("unitPrice"));
      const itemDate = formData.get("itemDate");
      const notes = formData.get("notes");
      if (!name || !personName || isNaN(quantity) || isNaN(unitPrice) || !itemDate) {
        throw new Error("\u064A\u0631\u062C\u0649 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0648\u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0635\u062D\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A.");
      }
      const totalPrice = quantity * unitPrice;
      const createdAt = Timestamp.fromDate(new Date(itemDate));
      await db.collection("projects").doc(id).collection("items").add({
        name,
        personName,
        quantity,
        unitPrice,
        totalPrice,
        notes,
        createdAt
      });
      return Astro2.redirect(`/admin/projects/${id}/items?success=true`);
    } catch (err) {
      console.error("Error adding item:", err);
      error = err.message;
    }
  }
  if (Astro2.url.searchParams.get("success") === "true") {
    success = "\u062A\u0645\u062A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u0646\u062F \u0628\u0646\u062C\u0627\u062D!";
  }
  try {
    const projectDoc = await db.collection("projects").doc(id).get();
    if (projectDoc.exists) {
      project = { id: projectDoc.id, name: projectDoc.data().projectName };
      const itemsSnapshot = await db.collection("projects").doc(id).collection("items").orderBy("createdAt", "desc").get();
      items = itemsSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt.toDate().toLocaleDateString("en-CA")
        };
      });
    } else {
      return Astro2.redirect("/404");
    }
  } catch (err) {
    console.error("Error fetching project data in items.astro:", err);
    error = "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639.";
  }
  const grandTotal = items.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
  [...new Set(items.map((item) => item.name))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u0628\u0646\u0648\u062F \u0627\u0644\u0645\u0634\u0631\u0648\u0639: ${project ? project.name : ""}`, "data-astro-cid-ptxhbxgx": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container" data-astro-cid-ptxhbxgx> <p data-astro-cid-ptxhbxgx>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;" data-astro-cid-ptxhbxgx> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, { "data-astro-cid-ptxhbxgx": true })} </div> <main id="page-content" style="display: none;" data-astro-cid-ptxhbxgx> <div class="container" data-astro-cid-ptxhbxgx> <header class="page-header" data-astro-cid-ptxhbxgx> <div data-astro-cid-ptxhbxgx> <h1 data-astro-cid-ptxhbxgx>بنود المشروع: ${project ? project.name : "..."}</h1> <p class="page-subtitle" data-astro-cid-ptxhbxgx>هنا يمكنك عرض وإدارة بنود المشروع.</p> </div> <div class="header-actions" data-astro-cid-ptxhbxgx> <button id="toggle-form-btn" class="btn btn-primary" data-astro-cid-ptxhbxgx>+ إضافة بند جديد</button> <a${addAttribute(`/admin/projects/${id}`, "href")} class="back-link" data-astro-cid-ptxhbxgx>&larr; العودة للتفاصيل</a> <button id="logout-button" class="btn-logout" data-astro-cid-ptxhbxgx>تسجيل الخروج</button> </div> </header> ${success && renderTemplate`<p class="success-message" data-astro-cid-ptxhbxgx>${success}</p>`} ${error && renderTemplate`<p class="error-message" data-astro-cid-ptxhbxgx>${error}</p>`} <div id="add-item-form" style="display: none;" class="form-container" data-astro-cid-ptxhbxgx> <h2 data-astro-cid-ptxhbxgx>نموذج إضافة بند جديد</h2> <form method="POST" data-astro-cid-ptxhbxgx> <input type="hidden" name="csrf_token"${addAttribute(csrfToken, "value")} data-astro-cid-ptxhbxgx> <input type="hidden" id="name" name="name" data-astro-cid-ptxhbxgx> <div class="form-grid" data-astro-cid-ptxhbxgx> <div class="form-group" data-astro-cid-ptxhbxgx> <label for="itemDate" data-astro-cid-ptxhbxgx>التاريخ</label> <input type="date" id="itemDate" name="itemDate" required data-astro-cid-ptxhbxgx> </div> <div class="form-group" data-astro-cid-ptxhbxgx> <label for="personName" data-astro-cid-ptxhbxgx>اسم الشخص/الجهة</label> <input type="text" id="personName" name="personName" required placeholder="ادخل اسم المقاول أو المورد" data-astro-cid-ptxhbxgx> </div> <div class="form-group" data-astro-cid-ptxhbxgx> <label for="main-category" data-astro-cid-ptxhbxgx>الفئة الرئيسية (لتحديد اسم البند)</label> <select id="main-category" required data-astro-cid-ptxhbxgx> <option value="" disabled selected data-astro-cid-ptxhbxgx>-- اختر فئة --</option> <option value="بند العماله" data-astro-cid-ptxhbxgx>بند العماله</option> <option value="بند المقاول" data-astro-cid-ptxhbxgx>بند المقاول</option> <option value="بند الخرسانه" data-astro-cid-ptxhbxgx>بند الخرسانه</option> <option value="بند المباني" data-astro-cid-ptxhbxgx>بند المباني</option> <option value="بند الكهرباء" data-astro-cid-ptxhbxgx>بند الكهرباء</option> <option value="بند السباكه" data-astro-cid-ptxhbxgx>بند السباكه</option> <option value="بند المحاره" data-astro-cid-ptxhbxgx>بند المحاره</option> <option value="بند الرخام" data-astro-cid-ptxhbxgx>بند الرخام</option> <option value="بند الدهانات" data-astro-cid-ptxhbxgx>بند الدهانات</option> <option value="بند تشطيبات الكهرباء" data-astro-cid-ptxhbxgx>بند تشطيبات الكهرباء</option> <option value="بند المجلس" data-astro-cid-ptxhbxgx>بند المجلس</option> <option value="بند الحفر" data-astro-cid-ptxhbxgx>بند الحفر</option> <option value="بند الهدم" data-astro-cid-ptxhbxgx>بند الهدم</option> <option value="اخرى" data-astro-cid-ptxhbxgx>اخرى</option> </select> </div> <div class="form-group" id="sub-category-group" style="display: none;" data-astro-cid-ptxhbxgx> <label for="sub-category" data-astro-cid-ptxhbxgx>البند الفرعي</label> <select id="sub-category" data-astro-cid-ptxhbxgx></select> </div> <div class="form-group" id="other-name-group" style="display: none;" data-astro-cid-ptxhbxgx> <label for="other-name" data-astro-cid-ptxhbxgx>اسم البند (آخر)</label> <input type="text" id="other-name" name="other-name" placeholder="ادخل اسم البند الجديد" data-astro-cid-ptxhbxgx> </div> <div class="form-group" data-astro-cid-ptxhbxgx> <label for="quantity" data-astro-cid-ptxhbxgx>الكمية</label> <input type="number" id="quantity" name="quantity" step="0.01" required data-astro-cid-ptxhbxgx> </div> <div class="form-group" data-astro-cid-ptxhbxgx> <label for="unitPrice" data-astro-cid-ptxhbxgx>سعر الوحدة</label> <input type="number" id="unitPrice" name="unitPrice" step="0.01" required data-astro-cid-ptxhbxgx> </div> <div class="form-group" data-astro-cid-ptxhbxgx> <label for="totalPrice" data-astro-cid-ptxhbxgx>الإجمالي</label> <input type="number" id="totalPrice" name="totalPrice" step="0.01" disabled data-astro-cid-ptxhbxgx> </div> <div class="form-group form-group-full-width" data-astro-cid-ptxhbxgx> <label for="notes" data-astro-cid-ptxhbxgx>ملاحظات</label> <textarea id="notes" name="notes" rows="3" placeholder="أضف ملاحظات..." data-astro-cid-ptxhbxgx></textarea> </div> </div> <div class="form-actions" data-astro-cid-ptxhbxgx> <button type="submit" class="btn btn-primary" data-astro-cid-ptxhbxgx>حفظ البند</button> <button type="button" id="cancel-btn" class="btn btn-secondary" data-astro-cid-ptxhbxgx>إلغاء</button> </div> </form> </div> <div class="content-area" id="items-content-area" data-astro-cid-ptxhbxgx> <div class="table-header" data-astro-cid-ptxhbxgx> <div class="table-controls-left" data-astro-cid-ptxhbxgx> <h2 class="table-title" data-astro-cid-ptxhbxgx>قائمة البنود الحالية</h2> <div class="filter-container" data-astro-cid-ptxhbxgx> <div class="form-group" data-astro-cid-ptxhbxgx> <label for="main-category-filter" data-astro-cid-ptxhbxgx>الفئة الرئيسية:</label> <select id="main-category-filter" data-astro-cid-ptxhbxgx> <option value="" disabled selected data-astro-cid-ptxhbxgx>-- اختر فئة --</option> <option value="all" data-astro-cid-ptxhbxgx>عرض الكل</option> </select> </div> <div class="form-group" id="sub-category-filter-group" style="display: none;" data-astro-cid-ptxhbxgx> <label for="sub-category-filter" data-astro-cid-ptxhbxgx>البند الفرعي:</label> <select id="sub-category-filter" data-astro-cid-ptxhbxgx></select> </div> </div> </div> <div class="table-controls-right totals-container" data-astro-cid-ptxhbxgx> <div class="total-box" data-astro-cid-ptxhbxgx> <span class="total-label" data-astro-cid-ptxhbxgx>إجمالي البنود المفلترة:</span> <span id="filtered-total" class="total-value" data-astro-cid-ptxhbxgx>0.00 ج.م</span> </div> <div class="total-box grand-total-box" data-astro-cid-ptxhbxgx> <span class="total-label" data-astro-cid-ptxhbxgx>إجمالي كل البنود:</span> <span id="grand-total" class="total-value" data-astro-cid-ptxhbxgx>${grandTotal.toFixed(2)} ج.م</span> </div> </div> </div> <div id="table-container" style="display: none;" data-astro-cid-ptxhbxgx> ${items.length > 0 ? renderTemplate`<div class="table-wrapper" data-astro-cid-ptxhbxgx> <table class="items-table" data-astro-cid-ptxhbxgx> <thead data-astro-cid-ptxhbxgx> <tr data-astro-cid-ptxhbxgx> <th data-astro-cid-ptxhbxgx>التاريخ</th> <th data-astro-cid-ptxhbxgx>اسم البند</th> <th data-astro-cid-ptxhbxgx>اسم الشخص/الجهة</th> <th data-astro-cid-ptxhbxgx>الكمية</th> <th data-astro-cid-ptxhbxgx>سعر الوحدة</th> <th data-astro-cid-ptxhbxgx>الإجمالي</th> <th data-astro-cid-ptxhbxgx>ملاحظات</th> <th data-astro-cid-ptxhbxgx>إجراءات</th> </tr> </thead> <tbody id="items-table-body" data-astro-cid-ptxhbxgx> ${items.map((item) => renderTemplate`<tr class="item-row"${addAttribute(item.id, "data-item-id")}${addAttribute(item.name, "data-item-name")}${addAttribute(project.id, "data-project-id")}${addAttribute(`item-row-${item.id}`, "id")}${addAttribute(item.totalPrice, "data-total-price")} data-astro-cid-ptxhbxgx> <td data-label="التاريخ" data-field="createdAt" data-astro-cid-ptxhbxgx>${item.createdAt}</td> <td data-label="اسم البند" data-field="name" data-astro-cid-ptxhbxgx>${item.name}</td> <td data-label="اسم الشخص/الجهة" data-field="personName" data-astro-cid-ptxhbxgx>${item.personName || "-"}</td> <td data-label="الكمية" data-field="quantity" data-astro-cid-ptxhbxgx>${item.quantity}</td> <td data-label="سعر الوحدة" data-field="unitPrice" data-astro-cid-ptxhbxgx>${item.unitPrice.toFixed(2)}</td> <td data-label="الإجمالي" data-field="totalPrice" data-astro-cid-ptxhbxgx>${item.totalPrice.toFixed(2)}</td> <td data-label="ملاحظات" data-field="notes" data-astro-cid-ptxhbxgx>${item.notes || "-"}</td> <td data-label="إجراءات" class="actions-cell" data-astro-cid-ptxhbxgx> <div class="action-buttons-view" data-astro-cid-ptxhbxgx> <button class="btn-action btn-edit" data-astro-cid-ptxhbxgx>تعديل</button> <button class="btn-action btn-delete"${addAttribute(id, "data-project-id")}${addAttribute(item.id, "data-item-id")} data-astro-cid-ptxhbxgx>حذف</button> <button class="btn-action btn-print" data-astro-cid-ptxhbxgx>طباعة</button> <button class="btn-action btn-pdf" data-astro-cid-ptxhbxgx>تصدير PDF</button> <button class="btn-action btn-excel" data-astro-cid-ptxhbxgx>تصدير Excel</button> </div> <div class="action-buttons-edit" style="display: none;" data-astro-cid-ptxhbxgx> <button class="btn-action btn-save" data-astro-cid-ptxhbxgx>حفظ</button> <button class="btn-action btn-cancel" data-astro-cid-ptxhbxgx>إلغاء</button> </div> </td> </tr>`)} </tbody> </table> </div>` : renderTemplate`<p class="no-items-message" data-astro-cid-ptxhbxgx>لا توجد بنود حالياً في هذا المشروع.</p>`} </div> <p id="initial-message" class="no-items-message" data-astro-cid-ptxhbxgx>الرجاء اختيار فئة رئيسية من القائمة أعلاه لعرض البيانات.</p> </div> </div> <div id="delete-confirm-modal" class="modal-overlay" style="display: none;" data-astro-cid-ptxhbxgx> <div class="modal-content" data-astro-cid-ptxhbxgx> <h4 data-astro-cid-ptxhbxgx>تأكيد الحذف</h4> <p data-astro-cid-ptxhbxgx>هل أنت متأكد من رغبتك في حذف هذا البند؟ لا يمكن التراجع عن هذا الإجراء.</p> <div class="modal-actions" data-astro-cid-ptxhbxgx> <button id="delete-modal-cancel-btn" class="btn btn-secondary" data-astro-cid-ptxhbxgx>إلغاء</button> <button id="delete-modal-confirm-btn" class="btn btn-danger" data-astro-cid-ptxhbxgx>تأكيد الحذف</button> </div> </div> </div> <div id="save-confirm-modal" class="modal-overlay" style="display: none;" data-astro-cid-ptxhbxgx> <div class="modal-content" data-astro-cid-ptxhbxgx> <h4 data-astro-cid-ptxhbxgx>تأكيد الحفظ</h4> <p data-astro-cid-ptxhbxgx>هل أنت متأكد من رغبتك في حفظ التعديلات؟</p> <div class="modal-actions" data-astro-cid-ptxhbxgx> <button id="save-modal-cancel-btn" class="btn btn-secondary" data-astro-cid-ptxhbxgx>إلغاء</button> <button id="save-modal-confirm-btn" class="btn btn-primary" data-astro-cid-ptxhbxgx>تأكيد الحفظ</button> </div> </div> </div> </main> ` })} ${renderScript($$result, "/home/user/bobobo/src/pages/admin/projects/[id]/items.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/bobobo/src/pages/admin/projects/[id]/items.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/projects/[id]/items.astro";
const $$url = "/admin/projects/[id]/items";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Items,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

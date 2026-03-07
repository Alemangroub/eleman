/* empty css                                          */
import { e as createComponent, k as renderComponent, o as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, p as Fragment } from '../../../../chunks/astro/server_4YXjuf9l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_C7k-ksFB.mjs';
import { $ as $$AdminLogin } from '../../../../chunks/AdminLogin_3aSuLz0Y.mjs';
import { d as db } from '../../../../chunks/admin_B4VhlVdo.mjs';
/* empty css                                                    */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$ExpenseReports = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExpenseReports;
  const { id } = Astro2.params;
  let project = null;
  let expenseReports = [];
  let feedback = { message: "", type: "" };
  if (id) {
    try {
      const unreadReportsRef = db.collection("daily_expenses").where("projectId", "==", id).where("isRead", "==", false);
      const unreadReportsSnapshot = await unreadReportsRef.get();
      if (!unreadReportsSnapshot.empty) {
        const batch = db.batch();
        unreadReportsSnapshot.docs.forEach((doc) => {
          batch.update(doc.ref, { isRead: true });
        });
        await batch.commit();
      }
    } catch (e) {
      console.error("Error marking reports as read:", e);
    }
  }
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const reportIdToUpdate = formData.get("reportId")?.toString();
      if (!reportIdToUpdate) throw new Error("Report ID is missing.");
      const notes = formData.get("notes")?.toString() || "";
      const newItems = [];
      let totalAmount = 0;
      for (const key of formData.keys()) {
        if (key.startsWith("items[") && key.endsWith("][name]")) {
          const index = key.match(/\d+/)[0];
          const name = formData.get(`items[${index}][name]`)?.toString();
          const amount = parseFloat(formData.get(`items[${index}][amount]`)?.toString() || "0");
          if (name && amount > 0) {
            newItems.push({ name, amount });
            totalAmount += amount;
          }
        }
      }
      await db.collection("daily_expenses").doc(reportIdToUpdate).update({
        notes,
        items: newItems,
        totalAmount
      });
      return Astro2.redirect(`/crs/projects/${id}/expense-reports?feedback=updated`);
    } catch (error) {
      console.error("Error updating report:", error);
      return Astro2.redirect(`/crs/projects/${id}/expense-reports?feedback=update_error`);
    }
  }
  const reportIdToDelete = Astro2.url.searchParams.get("delete");
  if (reportIdToDelete) {
    try {
      await db.collection("daily_expenses").doc(reportIdToDelete).delete();
      return Astro2.redirect(`/crs/projects/${id}/expense-reports?feedback=deleted`);
    } catch (error) {
      return Astro2.redirect(`/crs/projects/${id}/expense-reports?feedback=error`);
    }
  }
  const feedbackParam = Astro2.url.searchParams.get("feedback");
  if (feedbackParam === "deleted") feedback = { message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0628\u0646\u062C\u0627\u062D.", type: "success" };
  if (feedbackParam === "updated") feedback = { message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0628\u0646\u062C\u0627\u062D.", type: "success" };
  if (feedbackParam === "error") feedback = { message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062D\u0630\u0641.", type: "error" };
  if (feedbackParam === "update_error") feedback = { message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u062D\u062F\u064A\u062B.", type: "error" };
  const formatTimestamp = (timestamp) => {
    if (!timestamp || !timestamp.toDate) return "\u062A\u0627\u0631\u064A\u062E \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631";
    return timestamp.toDate().toLocaleDateString("ar-EG", { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit" });
  };
  try {
    const projectDoc = await db.collection("projects").doc(id).get();
    if (!projectDoc.exists) return Astro2.redirect("/404");
    project = { id: projectDoc.id, ...projectDoc.data() };
    const expenseReportsSnapshot = await db.collection("daily_expenses").where("projectId", "==", id).get();
    expenseReports = expenseReportsSnapshot.docs.map((doc) => {
      const data = doc.data();
      let expenseItems = Array.isArray(data.items) ? data.items : [];
      const calculatedTotal = expenseItems.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
      return {
        id: doc.id,
        ...data,
        expenseItems,
        totalAmount: calculatedTotal,
        createdAtFormatted: formatTimestamp(data.createdAt)
      };
    }).sort((a, b) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0));
  } catch (error) {
    console.error("Error fetching data:", error);
    project = { projectName: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" };
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A: ${project?.projectName}`, "data-astro-cid-7s7drfzv": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container" data-astro-cid-7s7drfzv><p data-astro-cid-7s7drfzv>جارٍ التحقق من صلاحيات الدخول...</p></div> <div id="admin-login-container" class="auth-container" style="display: none;" data-astro-cid-7s7drfzv>${renderComponent($$result2, "AdminLogin", $$AdminLogin, { "data-astro-cid-7s7drfzv": true })}</div> <main id="page-content" class="reports-display-page" style="display: none;" data-astro-cid-7s7drfzv> <div class="container" data-astro-cid-7s7drfzv> <header class="page-header" data-astro-cid-7s7drfzv> <div data-astro-cid-7s7drfzv> <h1 data-astro-cid-7s7drfzv>تقارير مصروفات مشروع: ${project.projectName}</h1> <p class="page-subtitle" data-astro-cid-7s7drfzv>عرض وتعديل وحذف تقارير المصروفات مباشرة.</p> </div> <div data-astro-cid-7s7drfzv> <a${addAttribute(`/crs/projects/${id}`, "href")} class="back-link" data-astro-cid-7s7drfzv>&larr; العودة للتفاصيل</a> <button id="logout-button" class="btn-logout" data-astro-cid-7s7drfzv>تسجيل الخروج</button> </div> </header> ${feedback.message && renderTemplate`<div${addAttribute(`feedback-banner ${feedback.type}`, "class")} data-astro-cid-7s7drfzv>${feedback.message}</div>`} <section class="reports-section" data-astro-cid-7s7drfzv> ${expenseReports.length === 0 ? renderTemplate`<div class="no-items-card" data-astro-cid-7s7drfzv><p data-astro-cid-7s7drfzv>لا توجد تقارير مصروفات لهذا المشروع بعد.</p></div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-7s7drfzv": true }, { "default": async ($$result3) => renderTemplate` <div class="controls-and-summary" data-astro-cid-7s7drfzv> <div class="filter-controls" data-astro-cid-7s7drfzv> <label for="item-filter" data-astro-cid-7s7drfzv>فلترة حسب البند:</label> <select id="item-filter" data-astro-cid-7s7drfzv> <option value="all" data-astro-cid-7s7drfzv>عرض الكل</option> </select> </div> <div class="summary-boxes" data-astro-cid-7s7drfzv> <div class="summary-box filtered-total" data-astro-cid-7s7drfzv> <span class="summary-label" data-astro-cid-7s7drfzv>إجمالي البند المحدد</span> <span id="filtered-total" class="summary-value" data-astro-cid-7s7drfzv>0.00 ج.م</span> </div> <div class="summary-box grand-total" data-astro-cid-7s7drfzv> <span class="summary-label" data-astro-cid-7s7drfzv>الإجمالي الكلي للمشروع</span> <span id="grand-total" class="summary-value" data-astro-cid-7s7drfzv>0.00 ج.م</span> </div> </div> </div> <div class="list-container" data-astro-cid-7s7drfzv> <p id="no-filter-results" style="display: none; text-align: center; padding: 2rem;" data-astro-cid-7s7drfzv>لا توجد مصروفات تطابق هذا البند.</p> ${expenseReports.map((report) => renderTemplate`<article class="card expense-report-card"${addAttribute(report.id, "data-report-id")}${addAttribute(report.totalAmount, "data-total")} data-astro-cid-7s7drfzv> <div class="card-header" data-astro-cid-7s7drfzv><span data-astro-cid-7s7drfzv>بواسطة: ${report.supervisorName || "\u0645\u0634\u0631\u0641 \u063A\u064A\u0631 \u0645\u062D\u062F\u062F"}</span><time data-astro-cid-7s7drfzv>${report.createdAtFormatted}</time></div> <div class="card-content view-mode" data-astro-cid-7s7drfzv> <div class="card-body" data-astro-cid-7s7drfzv> <div class="expense-details" data-astro-cid-7s7drfzv> <h4 data-astro-cid-7s7drfzv>تفاصيل المصروفات:</h4> <ul class="expense-list" data-astro-cid-7s7drfzv> ${report.expenseItems && report.expenseItems.filter((item) => item.amount > 0).map((item) => renderTemplate`<li${addAttribute(item.name, "data-name")}${addAttribute(item.amount, "data-amount")} data-astro-cid-7s7drfzv> <span class="expense-name" data-astro-cid-7s7drfzv>${item.name}</span> <span class="expense-amount" data-astro-cid-7s7drfzv>${(item.amount || 0).toLocaleString("ar-EG")} ج.م</span> </li>`)} </ul> <div class="total-amount" data-astro-cid-7s7drfzv> <strong data-astro-cid-7s7drfzv>الإجمالي:</strong> <span data-astro-cid-7s7drfzv>${(report.totalAmount || 0).toLocaleString("ar-EG", { style: "currency", currency: "EGP" })}</span> </div> </div> ${report.notes && renderTemplate`<div class="notes-section" data-astro-cid-7s7drfzv><h4 data-astro-cid-7s7drfzv>ملاحظات:</h4><p data-astro-cid-7s7drfzv>${report.notes}</p></div>`} ${report.imageUrls && report.imageUrls.length > 0 && renderTemplate`<div class="attachments" data-astro-cid-7s7drfzv> <h3 class="attachments-title" data-astro-cid-7s7drfzv>المرفقات:</h3> <div class="image-gallery" data-astro-cid-7s7drfzv> ${report.imageUrls.map((url) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="image-thumbnail" data-astro-cid-7s7drfzv><img${addAttribute(url, "src")} alt="صورة مرفقة" loading="lazy" data-astro-cid-7s7drfzv></a>`)} </div> </div>`} </div> <div class="card-footer" data-astro-cid-7s7drfzv> <button type="button" class="action-btn edit-btn-toggle" data-astro-cid-7s7drfzv>تعديل</button> <button type="button" class="action-btn delete-btn"${addAttribute(`/crs/projects/${id}/expense-reports?delete=${report.id}`, "data-delete-url")} data-astro-cid-7s7drfzv>حذف</button> </div> </div> <div class="card-content edit-mode" style="display: none;" data-astro-cid-7s7drfzv> <form method="POST" class="edit-form" data-astro-cid-7s7drfzv> <input type="hidden" name="reportId"${addAttribute(report.id, "value")} data-astro-cid-7s7drfzv> <div class="edit-form-body" data-astro-cid-7s7drfzv> <h4 data-astro-cid-7s7drfzv>تعديل بنود المصروفات:</h4> <div class="edit-grid"${addAttribute(`edit-items-${report.id}`, "id")} data-astro-cid-7s7drfzv> ${report.expenseItems.map((item, index) => renderTemplate`<div class="input-group-wrapper" data-astro-cid-7s7drfzv> <div class="input-group" data-astro-cid-7s7drfzv><label${addAttribute(`item-name-${report.id}-${index}`, "for")} data-astro-cid-7s7drfzv>اسم البند</label><input type="text"${addAttribute(`item-name-${report.id}-${index}`, "id")}${addAttribute(`items[${index}][name]`, "name")}${addAttribute(item.name, "value")} data-astro-cid-7s7drfzv></div> <div class="input-group" data-astro-cid-7s7drfzv><label${addAttribute(`item-amount-${report.id}-${index}`, "for")} data-astro-cid-7s7drfzv>المبلغ</label><input type="number" step="0.01"${addAttribute(`item-amount-${report.id}-${index}`, "id")}${addAttribute(`items[${index}][amount]`, "name")}${addAttribute(item.amount, "value")} class="item-amount-input" data-astro-cid-7s7drfzv></div> </div>`)} </div> <div class="input-group" data-astro-cid-7s7drfzv><label${addAttribute(`notes-${report.id}`, "for")} data-astro-cid-7s7drfzv>ملاحظات</label><textarea${addAttribute(`notes-${report.id}`, "id")} name="notes" class="notes-input" data-astro-cid-7s7drfzv>${report.notes}</textarea></div> <div class="total-recalc" data-astro-cid-7s7drfzv><strong data-astro-cid-7s7drfzv>الإجمالي الجديد:</strong><span${addAttribute(`total-recalc-${report.id}`, "id")} data-astro-cid-7s7drfzv>${(report.totalAmount || 0).toLocaleString("ar-EG", { style: "currency", currency: "EGP" })}</span></div> </div> <div class="card-footer" data-astro-cid-7s7drfzv><button type="button" class="action-btn cancel-btn-toggle" data-astro-cid-7s7drfzv>إلغاء</button><button type="submit" class="action-btn save-btn" data-astro-cid-7s7drfzv>حفظ التعديلات</button></div> </form> </div> </article>`)} </div> ` })}`} </section> </div> <div id="delete-modal" class="modal-overlay" data-astro-cid-7s7drfzv><div class="modal-content" data-astro-cid-7s7drfzv><p data-astro-cid-7s7drfzv>هل أنت متأكد أنك تريد حذف هذا التقرير؟</p><div class="modal-actions" data-astro-cid-7s7drfzv><button id="cancel-delete-btn" class="action-btn cancel-btn-toggle" data-astro-cid-7s7drfzv>إلغاء</button><a id="confirm-delete-btn" href="#" class="action-btn delete-btn" data-astro-cid-7s7drfzv>نعم، حذف</a></div></div></div> </main> ` })} ${renderScript($$result, "/home/user/eleman-company/src/pages/crs/projects/[id]/expense-reports.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/eleman-company/src/pages/crs/projects/[id]/expense-reports.astro", void 0);

const $$file = "/home/user/eleman-company/src/pages/crs/projects/[id]/expense-reports.astro";
const $$url = "/crs/projects/[id]/expense-reports";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ExpenseReports,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

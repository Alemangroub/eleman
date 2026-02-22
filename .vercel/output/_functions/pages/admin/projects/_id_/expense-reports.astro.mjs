/* empty css                                               */
import { e as createAstro, f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../../../chunks/AdminLogin_BifDDabA.mjs';
import { d as db } from '../../../../chunks/admin_CBgMA4DX.mjs';
/* empty css                                                    */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://www.elemancompany.net");
const $$ExpenseReports = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExpenseReports;
  const { id } = Astro2.params;
  let project = null;
  let expenseReports = [];
  let feedback = { message: "", type: "" };
  if (id) {
    const unreadReportsRef = db.collection("daily_expenses").where("projectId", "==", id).where("isRead", "==", false);
    const unreadReportsSnapshot = await unreadReportsRef.get();
    if (!unreadReportsSnapshot.empty) {
      const batch = db.batch();
      unreadReportsSnapshot.docs.forEach((doc) => {
        batch.update(doc.ref, { isRead: true });
      });
      await batch.commit();
    }
  }
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const reportIdToUpdate = formData.get("reportId")?.toString();
      if (!reportIdToUpdate) throw new Error("Report ID is missing.");
      const notes = formData.get("notes")?.toString();
      let totalAmount = 0;
      const expenses = {};
      for (const [key, value] of formData.entries()) {
        if (key.startsWith("expenses[") && key.endsWith("]")) {
          const expenseKey = key.substring(9, key.length - 1);
          const amount = parseFloat(value?.toString() || "0");
          expenses[expenseKey] = amount;
          totalAmount += amount;
        }
      }
      await db.collection("daily_expenses").doc(reportIdToUpdate).update({
        notes,
        expenses,
        totalAmount
      });
      return Astro2.redirect(`/admin/projects/${id}/expense-reports?feedback=updated`);
    } catch (error) {
      console.error("Error updating report:", error);
      return Astro2.redirect(`/admin/projects/${id}/expense-reports?feedback=update_error`);
    }
  }
  const reportIdToDelete = Astro2.url.searchParams.get("delete");
  if (reportIdToDelete) {
    try {
      await db.collection("daily_expenses").doc(reportIdToDelete).delete();
      return Astro2.redirect(`/admin/projects/${id}/expense-reports?feedback=deleted`);
    } catch (error) {
      return Astro2.redirect(`/admin/projects/${id}/expense-reports?feedback=error`);
    }
  }
  const feedbackParam = Astro2.url.searchParams.get("feedback");
  if (feedbackParam === "deleted") feedback = { message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0628\u0646\u062C\u0627\u062D.", type: "success" };
  if (feedbackParam === "updated") feedback = { message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0628\u0646\u062C\u0627\u062D.", type: "success" };
  if (feedbackParam === "error") feedback = { message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062D\u0630\u0641.", type: "error" };
  if (feedbackParam === "update_error") feedback = { message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u062D\u062F\u064A\u062B.", type: "error" };
  const expenseNameMapping = {
    "buffet_hospitality": "\u0628\u0648\u0641\u064A\u0647 \u0648\u0636\u064A\u0627\u0641\u0647",
    "bricks": "\u0637\u0648\u0628",
    "sand": "\u0631\u0645\u0644\u0647",
    "cement": "\u0627\u0633\u0645\u0646\u062A",
    "steel": "\u062D\u062F\u064A\u062F",
    "labor": "\u0639\u0645\u0627\u0644",
    "other": "\u0623\u062E\u0631\u0649"
  };
  const expenseKeys = ["buffet_hospitality", "bricks", "sand", "cement", "steel", "labor", "other"];
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
      const expensesData = data.expenses || {};
      const expenseItems = Object.entries(expensesData).map(([key, value]) => ({
        name: expenseNameMapping[key] || key,
        amount: value
      }));
      return { id: doc.id, ...data, expenses: expensesData, expenseItems, createdAtFormatted: formatTimestamp(data.createdAt) };
    }).sort((a, b) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0));
  } catch (error) {
    console.error("Error fetching data:", error);
    project = { projectName: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" };
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A: ${project?.projectName}`, "data-astro-cid-27xd4zxk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container" data-astro-cid-27xd4zxk> <p data-astro-cid-27xd4zxk>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;" data-astro-cid-27xd4zxk> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, { "data-astro-cid-27xd4zxk": true })} </div> <main id="page-content" class="reports-display-page" style="display: none;" data-astro-cid-27xd4zxk> <div class="container" data-astro-cid-27xd4zxk> <header class="page-header" data-astro-cid-27xd4zxk> <div data-astro-cid-27xd4zxk> <h1 data-astro-cid-27xd4zxk>تقارير مصروفات مشروع: ${project.projectName}</h1> <p class="page-subtitle" data-astro-cid-27xd4zxk>عرض وتعديل وحذف تقارير المصروفات مباشرة.</p> </div> <div data-astro-cid-27xd4zxk> <a${addAttribute(`/admin/projects/${id}`, "href")} class="back-link" data-astro-cid-27xd4zxk>&larr; العودة للتفاصيل</a> <button id="logout-button" class="btn-logout" data-astro-cid-27xd4zxk>تسجيل الخروج</button> </div> </header> ${feedback.message && renderTemplate`<div${addAttribute(`feedback-banner ${feedback.type}`, "class")} data-astro-cid-27xd4zxk>${feedback.message}</div>`} <section class="reports-section" data-astro-cid-27xd4zxk> ${expenseReports.length === 0 ? renderTemplate`<div class="no-items-card" data-astro-cid-27xd4zxk><p data-astro-cid-27xd4zxk>لا توجد تقارير مصروفات لهذا المشروع بعد.</p></div>` : renderTemplate`<div class="list-container" data-astro-cid-27xd4zxk> ${expenseReports.map((report) => renderTemplate`<article class="card expense-report-card"${addAttribute(report.id, "data-report-id")} data-astro-cid-27xd4zxk> <div class="card-header" data-astro-cid-27xd4zxk><span data-astro-cid-27xd4zxk>بواسطة: ${report.supervisorName}</span><time data-astro-cid-27xd4zxk>${report.createdAtFormatted}</time></div> <!-- View Mode --> <div class="card-content view-mode" data-astro-cid-27xd4zxk> <div class="card-body" data-astro-cid-27xd4zxk> <div class="expense-details" data-astro-cid-27xd4zxk> <h4 data-astro-cid-27xd4zxk>تفاصيل المصروفات:</h4> <ul class="expense-list" data-astro-cid-27xd4zxk> ${report.expenseItems.filter((item) => item.amount > 0).map((item) => renderTemplate`<li data-astro-cid-27xd4zxk><span class="expense-name" data-astro-cid-27xd4zxk>${item.name}</span><span class="expense-amount" data-astro-cid-27xd4zxk>${item.amount.toLocaleString("ar-EG")} ج.م</span></li>`)} </ul> <div class="total-amount" data-astro-cid-27xd4zxk> <strong data-astro-cid-27xd4zxk>الإجمالي:</strong> <span data-astro-cid-27xd4zxk>${report.totalAmount.toLocaleString("ar-EG", { style: "currency", currency: "EGP" })}</span> </div> </div> ${report.notes && renderTemplate`<div class="notes-section" data-astro-cid-27xd4zxk><h4 data-astro-cid-27xd4zxk>ملاحظات:</h4><p data-astro-cid-27xd4zxk>${report.notes}</p></div>`} ${report.imageUrls && report.imageUrls.length > 0 && renderTemplate`<div class="attachments" data-astro-cid-27xd4zxk> <h3 class="attachments-title" data-astro-cid-27xd4zxk>المرفقات:</h3> <div class="image-gallery" data-astro-cid-27xd4zxk> ${report.imageUrls.map((url) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="image-thumbnail" data-astro-cid-27xd4zxk> <img${addAttribute(url, "src")} alt="صورة مرفقة" loading="lazy" data-astro-cid-27xd4zxk> </a>`)} </div> </div>`} </div> <div class="card-footer" data-astro-cid-27xd4zxk> <button type="button" class="action-btn edit-btn-toggle" data-astro-cid-27xd4zxk>تعديل</button> <button type="button" class="action-btn delete-btn"${addAttribute(`/admin/projects/${id}/expense-reports?delete=${report.id}`, "data-delete-url")} data-astro-cid-27xd4zxk>حذف</button> </div> </div> <!-- Edit Mode (Hidden by default) --> <form method="POST" class="card-content edit-mode" style="display: none;" data-astro-cid-27xd4zxk> <div class="card-body edit-form-body" data-astro-cid-27xd4zxk> <input type="hidden" name="reportId"${addAttribute(report.id, "value")} data-astro-cid-27xd4zxk> <h4 data-astro-cid-27xd4zxk>تعديل المصروفات:</h4> <div class="edit-grid" data-astro-cid-27xd4zxk> ${expenseKeys.map((key) => renderTemplate`<div class="input-group" data-astro-cid-27xd4zxk> <label${addAttribute(`expense_${key}_${report.id}`, "for")} data-astro-cid-27xd4zxk>${expenseNameMapping[key]}</label> <input type="number"${addAttribute(`expense_${key}_${report.id}`, "id")}${addAttribute(`expenses[${key}]`, "name")}${addAttribute(report.expenses[key] || 0, "value")} class="expense-input" step="0.01" min="0" data-astro-cid-27xd4zxk> </div>`)} </div> <div class="total-recalc" data-astro-cid-27xd4zxk> <strong data-astro-cid-27xd4zxk>الإجمالي:</strong> <span class="total-display" data-astro-cid-27xd4zxk>${report.totalAmount.toLocaleString("ar-EG")} ج.م</span> </div> <h4 data-astro-cid-27xd4zxk>تعديل الملاحظات:</h4> <textarea name="notes" class="notes-input" data-astro-cid-27xd4zxk>${report.notes || ""}</textarea> </div> <div class="card-footer" data-astro-cid-27xd4zxk> <button type="button" class="action-btn cancel-btn-toggle" data-astro-cid-27xd4zxk>إلغاء</button> <button type="submit" class="action-btn save-btn" data-astro-cid-27xd4zxk>حفظ التعديلات</button> </div> </form> </article>`)} </div>`} </section> </div> <div id="delete-modal" class="modal-overlay" data-astro-cid-27xd4zxk> <div class="modal-content" data-astro-cid-27xd4zxk> <p data-astro-cid-27xd4zxk>هل أنت متأكد أنك تريد حذف هذا التقرير؟</p> <div class="modal-actions" data-astro-cid-27xd4zxk> <button id="cancel-delete-btn" class="action-btn cancel-btn-toggle" data-astro-cid-27xd4zxk>إلغاء</button> <a id="confirm-delete-btn" href="#" class="action-btn delete-btn" data-astro-cid-27xd4zxk>نعم، حذف</a> </div> </div> </div> </main> ` })} ${renderScript($$result, "/home/user/bobobo/src/pages/admin/projects/[id]/expense-reports.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/bobobo/src/pages/admin/projects/[id]/expense-reports.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/projects/[id]/expense-reports.astro";
const $$url = "/admin/projects/[id]/expense-reports";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ExpenseReports,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

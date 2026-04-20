/* empty css                                          */
import { e as createComponent, k as renderComponent, ak as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../../../chunks/astro/server_D9q-hNhU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_YA1LhvQq.mjs';
import { $ as $$AdminLogin } from '../../../../chunks/AdminLogin_BglGCU2H.mjs';
import { p as prisma } from '../../../../chunks/prisma_DflsjPUV.mjs';
/* empty css                                                    */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$ExpenseReports = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExpenseReports;
  const { id } = Astro2.params;
  if (!id) return Astro2.redirect("/404");
  let project = null;
  let expenseReports = [];
  let feedback = { message: "", type: "" };
  try {
    const projectDoc = await prisma.project.findUnique({ where: { id } });
    if (!projectDoc) return Astro2.redirect("/404");
    project = projectDoc;
    const url = new URL(Astro2.request.url);
    const deleteId = url.searchParams.get("delete");
    if (deleteId) {
      await prisma.dailyExpense.delete({ where: { id: deleteId } });
      return Astro2.redirect(`/crs/projects/${id}/expense-reports?feedback=deleted`);
    }
    if (Astro2.request.method === "POST") {
      const formData = await Astro2.request.formData();
      const reportId = formData.get("reportId")?.toString();
      const notes = formData.get("notes")?.toString() || "";
      let items = [];
      let total = 0;
      for (let i = 0; formData.has(`items[${i}][name]`); i++) {
        const name = formData.get(`items[${i}][name]`)?.toString();
        const amount = parseFloat(formData.get(`items[${i}][amount]`)?.toString() || "0");
        if (name && amount >= 0) {
          items.push({ name, amount });
          total += amount;
        }
      }
      await prisma.dailyExpense.update({
        where: { id: reportId },
        data: { notes, items, totalAmount: total }
      });
      return Astro2.redirect(`/crs/projects/${id}/expense-reports?feedback=updated`);
    }
    const fb = url.searchParams.get("feedback");
    if (fb === "deleted") feedback = { message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u062A\u0642\u0631\u064A\u0631.", type: "success" };
    if (fb === "updated") feedback = { message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0642\u0631\u064A\u0631.", type: "success" };
    expenseReports = await prisma.dailyExpense.findMany({
      where: { projectId: id },
      orderBy: { createdAt: "desc" }
    });
  } catch (e) {
    console.error(e);
  }
  const formatDate = (d) => new Date(d).toLocaleDateString("ar-EG", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A: ${project?.projectName}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"><p>جارٍ التحقق...</p></div> <div id="admin-login-container" class="auth-container" style="display: none;">${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})}</div> <main id="page-content" style="display: none;"> <div class="container"> <header class="page-header"> <div> <h1>مصروفات مشروع: ${project?.projectName}</h1> <p>عرض وتحليل المصروفات اليومية.</p> </div> <div class="header-actions"> <a${addAttribute(`/crs/projects/${id}`, "href")} class="btn btn-secondary">العودة</a> <button id="logout-button" class="btn btn-danger">خروج</button> </div> </header> ${feedback.message && renderTemplate`<div${addAttribute(`alert ${feedback.type}`, "class")}>${feedback.message}</div>`} <section class="controls-card"> <div class="filter-group"> <label>فلترة حسب البند:</label> <select id="item-filter"> <option value="all">الكل</option> </select> </div> <div class="summary-group"> <div class="stat"><span>إجمالي الفلتر:</span><strong id="filtered-total">0 ج.م</strong></div> <div class="stat"><span>الإجمالي الكلي:</span><strong id="grand-total">0 ج.م</strong></div> </div> </section> <div class="reports-list"> ${expenseReports.map((report) => renderTemplate`<article class="report-card"${addAttribute(report.id, "data-id")}${addAttribute(report.totalAmount, "data-total")}> <div class="card-meta"> <span>${report.supervisorName}</span> <time>${formatDate(report.createdAt)}</time> </div> <div class="view-mode"> <ul class="items-list"> ${(report.items || []).map((item) => renderTemplate`<li${addAttribute(item.name, "data-name")}${addAttribute(item.amount, "data-amount")}> <span>${item.name}</span> <strong>${item.amount.toLocaleString("ar-EG")} ج.م</strong> </li>`)} </ul> <div class="card-total">الإجمالي: ${report.totalAmount.toLocaleString("ar-EG")} ج.م</div> ${report.notes && renderTemplate`<p class="notes">ملاحظات: ${report.notes}</p>`} <div class="card-actions"> <button class="btn-action btn-edit-report"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> تعديل</button> <button class="btn-action btn-delete-report"${addAttribute(report.id, "data-id")}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> حذف</button> </div> </div> <form method="POST" class="edit-mode" style="display: none;"> <input type="hidden" name="reportId"${addAttribute(report.id, "value")}> <div class="edit-items"> ${(report.items || []).map((item, idx) => renderTemplate`<div class="edit-row"> <input type="text"${addAttribute(`items[${idx}][name]`, "name")}${addAttribute(item.name, "value")}> <input type="number"${addAttribute(`items[${idx}][amount]`, "name")}${addAttribute(item.amount, "value")} class="amount-input"> </div>`)} </div> <textarea name="notes" placeholder="ملاحظات">${report.notes}</textarea> <div class="edit-actions"> <button type="button" class="btn-action btn-cancel-edit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> إلغاء</button> <button type="submit" class="btn-action btn-save-edit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> حفظ التعديلات</button> </div> </form> </article>`)} </div> </div> <!-- Delete Confirmation Modal --> <div id="delete-modal" class="modal-overlay"> <div class="modal-box"> <h3>تأكيد الحذف</h3> <p>هل أنت متأكد أنك تريد حذف هذا التقرير؟ لا يمكن التراجع عن هذا الإجراء.</p> <div class="modal-actions"> <button id="cancel-delete" class="btn-action btn-cancel-edit">إلغاء</button> <button id="confirm-delete" class="btn-action btn-confirm-delete">نعم، حذف</button> </div> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects/[id]/expense-reports.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects/[id]/expense-reports.astro", void 0);

const $$file = "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects/[id]/expense-reports.astro";
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

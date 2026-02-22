/* empty css                                               */
import { e as createAstro, f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../../../chunks/AdminLogin_BifDDabA.mjs';
import { d as db } from '../../../../chunks/admin_CBgMA4DX.mjs';
/* empty css                                                  */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://www.elemancompany.net");
const $$DailyReports = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DailyReports;
  const { id } = Astro2.params;
  let project = null;
  let dailyReports = [];
  let feedback = { message: "", type: "" };
  if (id) {
    const unreadReportsRef = db.collection("daily_reports").where("projectId", "==", id).where("isRead", "==", false);
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
      const reportText = formData.get("reportText")?.toString();
      const notes = formData.get("notes")?.toString();
      await db.collection("daily_reports").doc(reportIdToUpdate).update({
        report: reportText,
        notes
      });
      return Astro2.redirect(`/admin/projects/${id}/daily-reports?feedback=updated`);
    } catch (error) {
      console.error("Error updating daily report:", error);
      return Astro2.redirect(`/admin/projects/${id}/daily-reports?feedback=update_error`);
    }
  }
  const reportIdToDelete = Astro2.url.searchParams.get("delete");
  if (reportIdToDelete) {
    try {
      await db.collection("daily_reports").doc(reportIdToDelete).delete();
      return Astro2.redirect(`/admin/projects/${id}/daily-reports?feedback=deleted`);
    } catch (error) {
      console.error("Error deleting daily report:", error);
      return Astro2.redirect(`/admin/projects/${id}/daily-reports?feedback=error`);
    }
  }
  const feedbackParam = Astro2.url.searchParams.get("feedback");
  if (feedbackParam === "deleted") feedback = { message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u064A\u0648\u0645\u064A \u0628\u0646\u062C\u0627\u062D.", type: "success" };
  if (feedbackParam === "updated") feedback = { message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u064A\u0648\u0645\u064A \u0628\u0646\u062C\u0627\u062D.", type: "success" };
  if (feedbackParam === "error") feedback = { message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062D\u0630\u0641 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u064A\u0648\u0645\u064A.", type: "error" };
  if (feedbackParam === "update_error") feedback = { message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u064A\u0648\u0645\u064A.", type: "error" };
  const formatTimestamp = (timestamp) => {
    if (!timestamp || !timestamp.toDate) return "\u062A\u0627\u0631\u064A\u062E \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631";
    return timestamp.toDate().toLocaleDateString("ar-EG", { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit" });
  };
  try {
    const projectDoc = await db.collection("projects").doc(id).get();
    if (!projectDoc.exists) return Astro2.redirect("/404");
    project = { id: projectDoc.id, ...projectDoc.data() };
    const dailyReportsSnapshot = await db.collection("daily_reports").where("projectId", "==", id).get();
    dailyReports = dailyReportsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data(), createdAtFormatted: formatTimestamp(doc.data().createdAt) })).sort((a, b) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0));
  } catch (error) {
    console.error("Error fetching daily reports:", error);
    project = { projectName: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" };
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u064A\u0648\u0645\u064A\u0629: ${project?.projectName}`, "data-astro-cid-kbpdlldy": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container" data-astro-cid-kbpdlldy> <p data-astro-cid-kbpdlldy>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;" data-astro-cid-kbpdlldy> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, { "data-astro-cid-kbpdlldy": true })} </div> <main id="page-content" class="reports-display-page" style="display: none;" data-astro-cid-kbpdlldy> <div class="container" data-astro-cid-kbpdlldy> <header class="page-header" data-astro-cid-kbpdlldy> <div data-astro-cid-kbpdlldy> <h1 data-astro-cid-kbpdlldy>التقارير اليومية لمشروع: ${project.projectName}</h1> <p class="page-subtitle" data-astro-cid-kbpdlldy>عرض وتعديل وحذف التقارير اليومية مباشرة.</p> </div> <div data-astro-cid-kbpdlldy> <a${addAttribute(`/admin/projects/${id}`, "href")} class="back-link" data-astro-cid-kbpdlldy>&larr; العودة للتفاصيل</a> <button id="logout-button" class="btn-logout" data-astro-cid-kbpdlldy>تسجيل الخروج</button> </div> </header> ${feedback.message && renderTemplate`<div${addAttribute(`feedback-banner ${feedback.type}`, "class")} data-astro-cid-kbpdlldy>${feedback.message}</div>`} <section class="reports-section" data-astro-cid-kbpdlldy> ${dailyReports.length === 0 ? renderTemplate`<div class="no-items-card" data-astro-cid-kbpdlldy><p data-astro-cid-kbpdlldy>لا توجد تقارير يومية لهذا المشروع بعد.</p></div>` : renderTemplate`<div class="list-container" data-astro-cid-kbpdlldy> ${dailyReports.map((report) => renderTemplate`<article class="card daily-report-card"${addAttribute(report.id, "data-report-id")} data-astro-cid-kbpdlldy> <div class="card-header" data-astro-cid-kbpdlldy><span data-astro-cid-kbpdlldy>بواسطة: ${report.supervisorName}</span><time data-astro-cid-kbpdlldy>${report.createdAtFormatted}</time></div> <!-- View Mode --> <div class="card-content view-mode" data-astro-cid-kbpdlldy> <div class="card-body" data-astro-cid-kbpdlldy> <div class="report-text-section" data-astro-cid-kbpdlldy><h4 data-astro-cid-kbpdlldy>تفاصيل التقرير:</h4><p data-astro-cid-kbpdlldy>${report.report}</p></div> ${report.notes && renderTemplate`<div class="notes-section" data-astro-cid-kbpdlldy><h4 data-astro-cid-kbpdlldy>ملاحظات:</h4><p data-astro-cid-kbpdlldy>${report.notes}</p></div>`} ${report.imageUrls && report.imageUrls.length > 0 && renderTemplate`<div class="attachments" data-astro-cid-kbpdlldy> <h3 class="attachments-title" data-astro-cid-kbpdlldy>الصور المرفقة:</h3> <div class="image-gallery" data-astro-cid-kbpdlldy> ${report.imageUrls.map((url) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="image-thumbnail" data-astro-cid-kbpdlldy> <img${addAttribute(url, "src")} alt="صورة مرفقة" loading="lazy" data-astro-cid-kbpdlldy> </a>`)} </div> </div>`} </div> <div class="card-footer" data-astro-cid-kbpdlldy> <button type="button" class="action-btn edit-btn-toggle" data-astro-cid-kbpdlldy>تعديل</button> <button type="button" class="action-btn delete-btn"${addAttribute(`/admin/projects/${id}/daily-reports?delete=${report.id}`, "data-delete-url")} data-astro-cid-kbpdlldy>حذف</button> </div> </div> <!-- Edit Mode (Hidden by default) --> <form method="POST" class="card-content edit-mode" style="display: none;" data-astro-cid-kbpdlldy> <div class="card-body edit-form-body" data-astro-cid-kbpdlldy> <input type="hidden" name="reportId"${addAttribute(report.id, "value")} data-astro-cid-kbpdlldy> <h4 data-astro-cid-kbpdlldy>تعديل التقرير:</h4> <textarea name="reportText" class="report-input" data-astro-cid-kbpdlldy>${report.report || ""}</textarea> <h4 data-astro-cid-kbpdlldy>تعديل الملاحظات:</h4> <textarea name="notes" class="notes-input" data-astro-cid-kbpdlldy>${report.notes || ""}</textarea> </div> <div class="card-footer" data-astro-cid-kbpdlldy> <button type="button" class="action-btn cancel-btn-toggle" data-astro-cid-kbpdlldy>إلغاء</button> <button type="submit" class="action-btn save-btn" data-astro-cid-kbpdlldy>حفظ التعديلات</button> </div> </form> </article>`)} </div>`} </section> </div> <div id="delete-modal" class="modal-overlay" data-astro-cid-kbpdlldy> <div class="modal-content" data-astro-cid-kbpdlldy> <p data-astro-cid-kbpdlldy>هل أنت متأكد أنك تريد حذف هذا التقرير؟</p> <div class="modal-actions" data-astro-cid-kbpdlldy> <button id="cancel-delete-btn" class="action-btn cancel-btn-toggle" data-astro-cid-kbpdlldy>إلغاء</button> <a id="confirm-delete-btn" href="#" class="action-btn delete-btn" data-astro-cid-kbpdlldy>نعم، حذف</a> </div> </div> </div> </main> ` })} ${renderScript($$result, "/home/user/bobobo/src/pages/admin/projects/[id]/daily-reports.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/bobobo/src/pages/admin/projects/[id]/daily-reports.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/projects/[id]/daily-reports.astro";
const $$url = "/admin/projects/[id]/daily-reports";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$DailyReports,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

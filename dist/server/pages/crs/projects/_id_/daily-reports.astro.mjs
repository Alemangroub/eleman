/* empty css                                          */
import { e as createComponent, k as renderComponent, o as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../../../chunks/astro/server_4YXjuf9l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_C7k-ksFB.mjs';
import { $ as $$AdminLogin } from '../../../../chunks/AdminLogin_3aSuLz0Y.mjs';
import { d as db } from '../../../../chunks/admin_xQC5N2Tr.mjs';
/* empty css                                                  */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
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
        reportText,
        // Correct field name
        notes
      });
      return Astro2.redirect(`/crs/projects/${id}/daily-reports?feedback=updated`);
    } catch (error) {
      console.error("Error updating daily report:", error);
      return Astro2.redirect(`/crs/projects/${id}/daily-reports?feedback=update_error`);
    }
  }
  const reportIdToDelete = Astro2.url.searchParams.get("delete");
  if (reportIdToDelete) {
    try {
      await db.collection("daily_reports").doc(reportIdToDelete).delete();
      return Astro2.redirect(`/crs/projects/${id}/daily-reports?feedback=deleted`);
    } catch (error) {
      console.error("Error deleting daily report:", error);
      return Astro2.redirect(`/crs/projects/${id}/daily-reports?feedback=error`);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u064A\u0648\u0645\u064A\u0629: ${project?.projectName}`, "data-astro-cid-d5zinvpq": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container" data-astro-cid-d5zinvpq> <p data-astro-cid-d5zinvpq>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;" data-astro-cid-d5zinvpq> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, { "data-astro-cid-d5zinvpq": true })} </div> <main id="page-content" class="reports-display-page" style="display: none;" data-astro-cid-d5zinvpq> <div class="container" data-astro-cid-d5zinvpq> <header class="page-header" data-astro-cid-d5zinvpq> <div data-astro-cid-d5zinvpq> <h1 data-astro-cid-d5zinvpq>التقارير اليومية لمشروع: ${project.projectName}</h1> <p class="page-subtitle" data-astro-cid-d5zinvpq>عرض وتعديل وحذف التقارير اليومية مباشرة.</p> </div> <div data-astro-cid-d5zinvpq> <a${addAttribute(`/crs/projects/${id}`, "href")} class="back-link" data-astro-cid-d5zinvpq>&larr; العودة للتفاصيل</a> <button id="logout-button" class="btn-logout" data-astro-cid-d5zinvpq>تسجيل الخروج</button> </div> </header> ${feedback.message && renderTemplate`<div${addAttribute(`feedback-banner ${feedback.type}`, "class")} data-astro-cid-d5zinvpq>${feedback.message}</div>`} <section class="reports-section" data-astro-cid-d5zinvpq> ${dailyReports.length === 0 ? renderTemplate`<div class="no-items-card" data-astro-cid-d5zinvpq><p data-astro-cid-d5zinvpq>لا توجد تقارير يومية لهذا المشروع بعد.</p></div>` : renderTemplate`<div class="list-container" data-astro-cid-d5zinvpq> ${dailyReports.map((report) => renderTemplate`<article class="card daily-report-card"${addAttribute(report.id, "data-report-id")} data-astro-cid-d5zinvpq> <div class="card-header" data-astro-cid-d5zinvpq><span data-astro-cid-d5zinvpq>بواسطة: ${report.supervisorName}</span><time data-astro-cid-d5zinvpq>${report.createdAtFormatted}</time></div> <div class="card-content view-mode" data-astro-cid-d5zinvpq> <div class="card-body" data-astro-cid-d5zinvpq> <div class="report-text-section" data-astro-cid-d5zinvpq><h4 data-astro-cid-d5zinvpq>تفاصيل التقرير:</h4><p data-astro-cid-d5zinvpq>${report.reportText}</p></div> ${report.notes && renderTemplate`<div class="notes-section" data-astro-cid-d5zinvpq><h4 data-astro-cid-d5zinvpq>ملاحظات:</h4><p data-astro-cid-d5zinvpq>${report.notes}</p></div>`} ${report.imageUrls && report.imageUrls.length > 0 && renderTemplate`<div class="attachments" data-astro-cid-d5zinvpq> <h3 class="attachments-title" data-astro-cid-d5zinvpq>الصور المرفقة:</h3> <div class="image-gallery" data-astro-cid-d5zinvpq> ${report.imageUrls.map((url) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="image-thumbnail" data-astro-cid-d5zinvpq> <img${addAttribute(url, "src")} alt="صورة مرفقة" loading="lazy" data-astro-cid-d5zinvpq> </a>`)} </div> </div>`} </div> <div class="card-footer" data-astro-cid-d5zinvpq> <button type="button" class="action-btn edit-btn-toggle" data-astro-cid-d5zinvpq>تعديل</button> <button type="button" class="action-btn delete-btn"${addAttribute(`/crs/projects/${id}/daily-reports?delete=${report.id}`, "data-delete-url")} data-astro-cid-d5zinvpq>حذف</button> </div> </div> <form method="POST" class="card-content edit-mode" style="display: none;" data-astro-cid-d5zinvpq> <div class="card-body edit-form-body" data-astro-cid-d5zinvpq> <input type="hidden" name="reportId"${addAttribute(report.id, "value")} data-astro-cid-d5zinvpq> <h4 data-astro-cid-d5zinvpq>تعديل التقرير:</h4> <textarea name="reportText" class="report-input" data-astro-cid-d5zinvpq>${report.reportText || ""}</textarea> <h4 data-astro-cid-d5zinvpq>تعديل الملاحظات:</h4> <textarea name="notes" class="notes-input" data-astro-cid-d5zinvpq>${report.notes || ""}</textarea> </div> <div class="card-footer" data-astro-cid-d5zinvpq> <button type="button" class="action-btn cancel-btn-toggle" data-astro-cid-d5zinvpq>إلغاء</button> <button type="submit" class="action-btn save-btn" data-astro-cid-d5zinvpq>حفظ التعديلات</button> </div> </form> </article>`)} </div>`} </section> </div> <div id="delete-modal" class="modal-overlay" data-astro-cid-d5zinvpq> <div class="modal-content" data-astro-cid-d5zinvpq> <p data-astro-cid-d5zinvpq>هل أنت متأكد أنك تريد حذف هذا التقرير؟</p> <div class="modal-actions" data-astro-cid-d5zinvpq> <button id="cancel-delete-btn" class="action-btn cancel-btn-toggle" data-astro-cid-d5zinvpq>إلغاء</button> <a id="confirm-delete-btn" href="#" class="action-btn delete-btn" data-astro-cid-d5zinvpq>نعم، حذف</a> </div> </div> </div> </main> ` })} ${renderScript($$result, "/home/user/eleman-company/src/pages/crs/projects/[id]/daily-reports.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/eleman-company/src/pages/crs/projects/[id]/daily-reports.astro", void 0);

const $$file = "/home/user/eleman-company/src/pages/crs/projects/[id]/daily-reports.astro";
const $$url = "/crs/projects/[id]/daily-reports";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$DailyReports,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

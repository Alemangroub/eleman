/* empty css                                            */
import { e as createAstro, f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead, o as Fragment, h as addAttribute } from '../../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../../chunks/AdminLogin_BifDDabA.mjs';
import { d as db } from '../../../chunks/admin_CBgMA4DX.mjs';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.elemancompany.net");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let project = null;
  let unreadExpenseReports = 0;
  let unreadDailyReports = 0;
  try {
    const projectDoc = await db.collection("projects").doc(id).get();
    if (projectDoc.exists) {
      const projectData = projectDoc.data();
      let supervisorNames = [];
      if (Array.isArray(projectData.supervisorIds) && projectData.supervisorIds.length > 0) {
        const supervisorDocs = await Promise.all(projectData.supervisorIds.map((sid) => db.collection("users").doc(sid).get()));
        supervisorNames = supervisorDocs.map((doc) => doc.exists ? doc.data().name : "\u0645\u0634\u0631\u0641 \u0645\u062D\u0630\u0648\u0641");
      }
      const expenseReportsSnapshot = await db.collection("daily_expenses").where("projectId", "==", id).where("isRead", "==", false).get();
      unreadExpenseReports = expenseReportsSnapshot.size;
      const dailyReportsSnapshot = await db.collection("daily_reports").where("projectId", "==", id).where("isRead", "==", false).get();
      unreadDailyReports = dailyReportsSnapshot.size;
      project = {
        id: projectDoc.id,
        projectName: projectData.projectName || "\u0627\u0633\u0645 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631",
        projectAddress: projectData.projectAddress || "\u0639\u0646\u0648\u0627\u0646 \u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
        supervisors: supervisorNames
      };
    } else {
      return Astro2.redirect("/404");
    }
  } catch (error) {
    console.error("Error fetching project data in [id].astro:", error);
    project = null;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u062A\u0641\u0627\u0635\u064A\u0644 \u0645\u0634\u0631\u0648\u0639: ${project ? project.projectName : "\u062E\u0637\u0623"}`, "data-astro-cid-2cdpo7kl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container" data-astro-cid-2cdpo7kl> <p data-astro-cid-2cdpo7kl>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;" data-astro-cid-2cdpo7kl> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, { "data-astro-cid-2cdpo7kl": true })} </div> <main id="page-content" class="project-details-page" style="display: none;" data-astro-cid-2cdpo7kl> <div class="container" data-astro-cid-2cdpo7kl> ${project ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-2cdpo7kl": true }, { "default": async ($$result3) => renderTemplate` <header class="page-header" data-astro-cid-2cdpo7kl> <div data-astro-cid-2cdpo7kl> <h1 data-astro-cid-2cdpo7kl>تفاصيل المشروع</h1> <p class="page-subtitle" data-astro-cid-2cdpo7kl>اختر نوع التقارير التي تود عرضها لهذا المشروع.</p> </div> <div data-astro-cid-2cdpo7kl> <a href="/admin/projects" class="back-link" data-astro-cid-2cdpo7kl>&larr; العودة إلى المشاريع</a> <button id="logout-button" class="btn-logout" data-astro-cid-2cdpo7kl>تسجيل الخروج</button> </div> </header> <section class="project-info-card" data-astro-cid-2cdpo7kl> <div class="info-item" data-astro-cid-2cdpo7kl> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-file-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2cdpo7kl><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-2cdpo7kl></path><path d="M14 3v4a1 1 0 0 0 1 1h4" data-astro-cid-2cdpo7kl></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" data-astro-cid-2cdpo7kl></path><line x1="9" y1="9" x2="10" y2="9" data-astro-cid-2cdpo7kl></line><line x1="9" y1="13" x2="15" y2="13" data-astro-cid-2cdpo7kl></line><line x1="9" y1="17" x2="15" y2="17" data-astro-cid-2cdpo7kl></line></svg> <div data-astro-cid-2cdpo7kl><strong data-astro-cid-2cdpo7kl>اسم المشروع:</strong><span data-astro-cid-2cdpo7kl>${project.projectName}</span></div> </div> <div class="info-item" data-astro-cid-2cdpo7kl> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2cdpo7kl><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-2cdpo7kl></path><circle cx="12" cy="11" r="3" data-astro-cid-2cdpo7kl></circle><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" data-astro-cid-2cdpo7kl></path></svg> <div data-astro-cid-2cdpo7kl><strong data-astro-cid-2cdpo7kl>الموقع:</strong><span data-astro-cid-2cdpo7kl>${project.projectAddress}</span></div> </div> <div class="info-item" data-astro-cid-2cdpo7kl> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2cdpo7kl><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-2cdpo7kl></path><circle cx="9" cy="7" r="4" data-astro-cid-2cdpo7kl></circle><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" data-astro-cid-2cdpo7kl></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-2cdpo7kl></path><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" data-astro-cid-2cdpo7kl></path></svg> <div data-astro-cid-2cdpo7kl><strong data-astro-cid-2cdpo7kl>المشرفون:</strong><span data-astro-cid-2cdpo7kl>${project.supervisors ? project.supervisors.join(", ") : "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u062A\u0639\u064A\u064A\u0646"}</span></div> </div> </section> <section class="report-links-section" data-astro-cid-2cdpo7kl> <a${addAttribute(`/admin/projects/${id}/expense-reports`, "href")} class="report-link-card" data-astro-cid-2cdpo7kl> ${unreadExpenseReports > 0 && renderTemplate`<div class="notification-badge" data-astro-cid-2cdpo7kl> <span class="dot" data-astro-cid-2cdpo7kl></span> <span class="text" data-astro-cid-2cdpo7kl>جديد</span> </div>`} <div class="card-icon expense-icon" data-astro-cid-2cdpo7kl> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-receipt-2" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2cdpo7kl><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-2cdpo7kl></path><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" data-astro-cid-2cdpo7kl></path><path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1.5a1.5 1.5 0 0 1 0 3h-2.5" data-astro-cid-2cdpo7kl></path><path d="M12 17v.01" data-astro-cid-2cdpo7kl></path></svg> </div> <div class="card-content" data-astro-cid-2cdpo7kl> <h3 data-astro-cid-2cdpo7kl>عرض تقارير المصروفات</h3> <p data-astro-cid-2cdpo7kl>سجل كامل لجميع المصروفات اليومية والفواتير المرفقة.</p> </div> </a> <a${addAttribute(`/admin/projects/${id}/daily-reports`, "href")} class="report-link-card" data-astro-cid-2cdpo7kl> ${unreadDailyReports > 0 && renderTemplate`<div class="notification-badge" data-astro-cid-2cdpo7kl> <span class="dot" data-astro-cid-2cdpo7kl></span> <span class="text" data-astro-cid-2cdpo7kl>جديد</span> </div>`} <div class="card-icon daily-icon" data-astro-cid-2cdpo7kl> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-clipboard-text" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2cdpo7kl><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-2cdpo7kl></path><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" data-astro-cid-2cdpo7kl></path><rect x="9" y="3" width="6" height="4" rx="2" data-astro-cid-2cdpo7kl></rect><path d="M9 12h6" data-astro-cid-2cdpo7kl></path><path d="M9 16h6" data-astro-cid-2cdpo7kl></path></svg> </div> <div class="card-content" data-astro-cid-2cdpo7kl> <h3 data-astro-cid-2cdpo7kl>عرض التقارير اليومية</h3> <p data-astro-cid-2cdpo7kl>سجل يوضح سير العمل اليومي والملاحظات والمرفقات.</p> </div> </a> <a${addAttribute(`/admin/projects/${id}/items`, "href")} class="report-link-card" data-astro-cid-2cdpo7kl> <div class="card-icon items-icon" data-astro-cid-2cdpo7kl> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-list-details" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2cdpo7kl> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-2cdpo7kl></path> <path d="M13 5h8" data-astro-cid-2cdpo7kl></path> <path d="M13 9h5" data-astro-cid-2cdpo7kl></path> <path d="M13 15h8" data-astro-cid-2cdpo7kl></path> <path d="M13 19h5" data-astro-cid-2cdpo7kl></path> <rect x="3" y="4" width="6" height="6" rx="1" data-astro-cid-2cdpo7kl></rect> <rect x="3" y="14" width="6" height="6" rx="1" data-astro-cid-2cdpo7kl></rect> </svg> </div> <div class="card-content" data-astro-cid-2cdpo7kl> <h3 data-astro-cid-2cdpo7kl>البنود</h3> <p data-astro-cid-2cdpo7kl>عرض وإدارة بنود المشروع.</p> </div> </a> <a${addAttribute(`/admin/projects/${id}/suppliers`, "href")} class="report-link-card" data-astro-cid-2cdpo7kl> <div class="card-icon suppliers-icon" data-astro-cid-2cdpo7kl> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-truck-delivery" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2cdpo7kl> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-2cdpo7kl></path> <circle cx="7" cy="17" r="2" data-astro-cid-2cdpo7kl></circle> <circle cx="17" cy="17" r="2" data-astro-cid-2cdpo7kl></circle> <path d="M5 17h-2v-4.42a2.27 2.27 0 0 1 .64 -1.58l3.16 -3.8a1.87 1.87 0 0 1 3.2 0l3 3.8" data-astro-cid-2cdpo7kl></path> <path d="M9 17h6" data-astro-cid-2cdpo7kl></path> <path d="M13 6h4l3 5v6h-2" data-astro-cid-2cdpo7kl></path> </svg> </div> <div class="card-content" data-astro-cid-2cdpo7kl> <h3 data-astro-cid-2cdpo7kl>الموردين</h3> <p data-astro-cid-2cdpo7kl>عرض وإدارة موردي المشروع.</p> </div> </a> </section> ` })}` : renderTemplate`<div class="error-card" data-astro-cid-2cdpo7kl> <h2 data-astro-cid-2cdpo7kl>خطأ في تحميل البيانات</h2> <p data-astro-cid-2cdpo7kl>حدث خطأ حرج أثناء محاولة تحميل تفاصيل المشروع. برجاء المحاولة مرة أخرى لاحقاً.</p> <a href="/admin/projects" class="back-link" data-astro-cid-2cdpo7kl>العودة إلى قائمة المشاريع</a> </div>`} </div> </main> ` })} ${renderScript($$result, "/home/user/bobobo/src/pages/admin/projects/[id].astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/bobobo/src/pages/admin/projects/[id].astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/projects/[id].astro";
const $$url = "/admin/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

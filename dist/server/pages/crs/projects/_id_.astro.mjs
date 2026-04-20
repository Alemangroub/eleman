/* empty css                                       */
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, al as Fragment, g as addAttribute, ak as renderScript } from '../../../chunks/astro/server_D9q-hNhU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_YA1LhvQq.mjs';
import { $ as $$AdminLogin } from '../../../chunks/AdminLogin_BglGCU2H.mjs';
import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  let project = null;
  let unreadExpenseReports = 0;
  let unreadDailyReports = 0;
  try {
    const projectDoc = await prisma.project.findUnique({
      where: { id },
      include: {
        supervisors: {
          include: {
            user: true
          }
        }
      }
    });
    if (projectDoc) {
      const supervisorNames = projectDoc.supervisors.map((s) => s.user.name || "\u0645\u0634\u0631\u0641 \u0628\u062F\u0648\u0646 \u0627\u0633\u0645");
      unreadExpenseReports = await prisma.dailyExpense.count({
        where: {
          projectId: id,
          isRead: false
        }
      });
      unreadDailyReports = await prisma.dailyReport.count({
        where: {
          projectId: id,
          isRead: false
        }
      });
      project = {
        id: projectDoc.id,
        projectName: projectDoc.projectName || "\u0627\u0633\u0645 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631",
        projectAddress: projectDoc.projectAddress || "\u0639\u0646\u0648\u0627\u0646 \u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
        supervisors: supervisorNames
      };
    } else {
      return Astro2.redirect("/404");
    }
  } catch (error) {
    console.error("Error fetching project data in [id].astro:", error);
    project = null;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u062A\u0641\u0627\u0635\u064A\u0644 \u0645\u0634\u0631\u0648\u0639: ${project ? project.projectName : "\u062E\u0637\u0623"}`, "data-astro-cid-jotvweq6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container" data-astro-cid-jotvweq6> <p data-astro-cid-jotvweq6>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;" data-astro-cid-jotvweq6> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, { "data-astro-cid-jotvweq6": true })} </div> <main id="page-content" class="project-details-page" style="display: none;" data-astro-cid-jotvweq6> <div class="container" data-astro-cid-jotvweq6> ${project ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-jotvweq6": true }, { "default": async ($$result3) => renderTemplate` <header class="page-header" data-astro-cid-jotvweq6> <div data-astro-cid-jotvweq6> <h1 data-astro-cid-jotvweq6>تفاصيل المشروع</h1> <p class="page-subtitle" data-astro-cid-jotvweq6>اختر نوع التقارير التي تود عرضها لهذا المشروع.</p> </div> <div data-astro-cid-jotvweq6> <a href="/crs/projects" class="back-link" data-astro-cid-jotvweq6>&larr; العودة إلى المشاريع</a> <button id="logout-button" class="btn-logout" data-astro-cid-jotvweq6>تسجيل الخروج</button> </div> </header> <section class="project-info-card" data-astro-cid-jotvweq6> <div class="info-item" data-astro-cid-jotvweq6> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-file-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jotvweq6><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-jotvweq6></path><path d="M14 3v4a1 1 0 0 0 1 1h4" data-astro-cid-jotvweq6></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" data-astro-cid-jotvweq6></path><line x1="9" y1="9" x2="10" y2="9" data-astro-cid-jotvweq6></line><line x1="9" y1="13" x2="15" y2="13" data-astro-cid-jotvweq6></line><line x1="9" y1="17" x2="15" y2="17" data-astro-cid-jotvweq6></line></svg> <div data-astro-cid-jotvweq6><strong data-astro-cid-jotvweq6>اسم المشروع:</strong><span data-astro-cid-jotvweq6>${project.projectName}</span></div> </div> <div class="info-item" data-astro-cid-jotvweq6> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jotvweq6><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-jotvweq6></path><circle cx="12" cy="11" r="3" data-astro-cid-jotvweq6></circle><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" data-astro-cid-jotvweq6></path></svg> <div data-astro-cid-jotvweq6><strong data-astro-cid-jotvweq6>الموقع:</strong><span data-astro-cid-jotvweq6>${project.projectAddress}</span></div> </div> <div class="info-item" data-astro-cid-jotvweq6> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jotvweq6><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-jotvweq6></path><circle cx="9" cy="7" r="4" data-astro-cid-jotvweq6></circle><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" data-astro-cid-jotvweq6></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-jotvweq6></path><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" data-astro-cid-jotvweq6></path></svg> <div data-astro-cid-jotvweq6><strong data-astro-cid-jotvweq6>المشرفون:</strong><span data-astro-cid-jotvweq6>${project.supervisors && project.supervisors.length > 0 ? project.supervisors.join(", ") : "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u062A\u0639\u064A\u064A\u0646"}</span></div> </div> </section> <section class="report-links-section" data-astro-cid-jotvweq6> <a${addAttribute(`/crs/projects/${id}/remains`, "href")} class="report-link-card" data-astro-cid-jotvweq6> <div class="card-icon remains-icon" data-astro-cid-jotvweq6> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-package" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jotvweq6><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-jotvweq6></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" data-astro-cid-jotvweq6></polyline><line x1="12" y1="12" x2="20" y2="7.5" data-astro-cid-jotvweq6></line><line x1="12" y1="12" x2="4" y2="7.5" data-astro-cid-jotvweq6></line><line x1="12" y1="12" x2="12" y2="21" data-astro-cid-jotvweq6></line><line x1="12" y1="3" x2="8" y2="5.25" data-astro-cid-jotvweq6></line><line x1="16" y1="5.25" x2="12" y2="3" data-astro-cid-jotvweq6></line></svg> </div> <div class="card-content" data-astro-cid-jotvweq6> <h3 data-astro-cid-jotvweq6>البواقي</h3> <p data-astro-cid-jotvweq6>سجل يوضح المواد المتبقية في الموقع.</p> </div> </a> <a${addAttribute(`/crs/projects/${id}/expense-reports`, "href")} class="report-link-card" data-astro-cid-jotvweq6> ${unreadExpenseReports > 0 && renderTemplate`<div class="notification-badge" data-astro-cid-jotvweq6> <span class="dot" data-astro-cid-jotvweq6></span> <span class="text" data-astro-cid-jotvweq6>تقرير جديد</span> </div>`} <div class="card-icon expense-icon" data-astro-cid-jotvweq6> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-receipt-2" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jotvweq6><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-jotvweq6></path><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" data-astro-cid-jotvweq6></path><path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1.5a1.5 1.5 0 0 1 0 3h-2.5" data-astro-cid-jotvweq6></path><path d="M12 17v.01" data-astro-cid-jotvweq6></path></svg> </div> <div class="card-content" data-astro-cid-jotvweq6> <h3 data-astro-cid-jotvweq6>عرض تقارير المصروفات</h3> <p data-astro-cid-jotvweq6>سجل كامل لجميع المصروفات اليومية والفواتير المرفقة.</p> </div> </a> <a${addAttribute(`/crs/projects/${id}/daily-reports`, "href")} class="report-link-card" data-astro-cid-jotvweq6> ${unreadDailyReports > 0 && renderTemplate`<div class="notification-badge" data-astro-cid-jotvweq6> <span class="dot" data-astro-cid-jotvweq6></span> <span class="text" data-astro-cid-jotvweq6>تقرير جديد</span> </div>`} <div class="card-icon daily-icon" data-astro-cid-jotvweq6> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-clipboard-text" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jotvweq6><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-jotvweq6></path><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" data-astro-cid-jotvweq6></path><rect x="9" y="3" width="6" height="4" rx="2" data-astro-cid-jotvweq6></rect><path d="M9 12h6" data-astro-cid-jotvweq6></path><path d="M9 16h6" data-astro-cid-jotvweq6></path></svg> </div> <div class="card-content" data-astro-cid-jotvweq6> <h3 data-astro-cid-jotvweq6>عرض التقارير اليومية</h3> <p data-astro-cid-jotvweq6>سجل يوضح سير العمل اليومي والملاحظات والمرفقات.</p> </div> </a> <a${addAttribute(`/crs/projects/${id}/items`, "href")} class="report-link-card" data-astro-cid-jotvweq6> <div class="card-icon items-icon" data-astro-cid-jotvweq6> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-list-details" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jotvweq6> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-jotvweq6></path> <path d="M13 5h8" data-astro-cid-jotvweq6></path> <path d="M13 9h5" data-astro-cid-jotvweq6></path> <path d="M13 15h8" data-astro-cid-jotvweq6></path> <path d="M13 19h5" data-astro-cid-jotvweq6></path> <rect x="3" y="4" width="6" height="6" rx="1" data-astro-cid-jotvweq6></rect> <rect x="3" y="14" width="6" height="6" rx="1" data-astro-cid-jotvweq6></rect> </svg> </div> <div class="card-content" data-astro-cid-jotvweq6> <h3 data-astro-cid-jotvweq6>البنود</h3> <p data-astro-cid-jotvweq6>عرض وإدارة بنود المشروع.</p> </div> </a> <a${addAttribute(`/crs/projects/${id}/suppliers`, "href")} class="report-link-card" data-astro-cid-jotvweq6> <div class="card-icon suppliers-icon" data-astro-cid-jotvweq6> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-truck-delivery" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jotvweq6> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-jotvweq6></path> <circle cx="7" cy="17" r="2" data-astro-cid-jotvweq6></circle> <circle cx="17" cy="17" r="2" data-astro-cid-jotvweq6></circle> <path d="M5 17h-2v-4.42a2.27 2.27 0 0 1 .64 -1.58l3.16 -3.8a1.87 1.87 0 0 1 3.2 0l3 3.8" data-astro-cid-jotvweq6></path> <path d="M9 17h6" data-astro-cid-jotvweq6></path> <path d="M13 6h4l3 5v6h-2" data-astro-cid-jotvweq6></path> </svg> </div> <div class="card-content" data-astro-cid-jotvweq6> <h3 data-astro-cid-jotvweq6>الموردين</h3> <p data-astro-cid-jotvweq6>عرض وإدارة موردي المشروع.</p> </div> </a> <a${addAttribute(`/crs/projects/${id}/agreements`, "href")} class="report-link-card" data-astro-cid-jotvweq6> <div class="card-icon agreements-icon" data-astro-cid-jotvweq6> <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-handshake" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-jotvweq6> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-jotvweq6></path> <path d="M10 16.5l-3 -3.5l-2 2" data-astro-cid-jotvweq6></path> <path d="M14 13.5l4 -4.5l2 2" data-astro-cid-jotvweq6></path> <path d="M10 13l-1.5 1.5" data-astro-cid-jotvweq6></path> <path d="M14 17l1.5 -1.5" data-astro-cid-jotvweq6></path> <path d="M3 21l3.333 -10.667a2 2 0 0 1 1.95 -1.333h5.434a2 2 0 0 1 1.95 1.333l3.333 10.667" data-astro-cid-jotvweq6></path> </svg> </div> <div class="card-content" data-astro-cid-jotvweq6> <h3 data-astro-cid-jotvweq6>اللي وصل المقاول</h3> <p data-astro-cid-jotvweq6>عرض وإدارة اللي وصل المقاول.</p> </div> </a> </section> ` })}` : renderTemplate`<div class="error-card" data-astro-cid-jotvweq6> <h2 data-astro-cid-jotvweq6>خطأ في تحميل البيانات</h2> <p data-astro-cid-jotvweq6>حدث خطأ حرج أثناء محاولة تحميل تفاصيل المشروع. برجاء المحاولة مرة أخرى لاحقاً.</p> <a href="/crs/projects" class="back-link" data-astro-cid-jotvweq6>العودة إلى قائمة المشاريع</a> </div>`} </div> </main> ${renderScript($$result2, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects/[id].astro", void 0);

const $$file = "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects/[id].astro";
const $$url = "/crs/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

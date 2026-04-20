/* empty css                                          */
import { e as createComponent, k as renderComponent, ak as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, al as Fragment } from '../../../../chunks/astro/server_D9q-hNhU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_YA1LhvQq.mjs';
import { $ as $$AdminLogin } from '../../../../chunks/AdminLogin_BglGCU2H.mjs';
import { p as prisma } from '../../../../chunks/prisma_DflsjPUV.mjs';
/* empty css                                               */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Agreements = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Agreements;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  let project = null;
  try {
    const projectDoc = await prisma.project.findUnique({
      where: { id }
    });
    if (projectDoc) {
      project = {
        id: projectDoc.id,
        projectName: projectDoc.projectName || "\u0627\u0633\u0645 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"
      };
    } else {
      return Astro2.redirect("/404");
    }
  } catch (error) {
    console.error("Error fetching project data in agreements.astro:", error);
    project = null;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u0627\u0644\u0644\u064A \u0648\u0635\u0644 \u0627\u0644\u0645\u0642\u0627\u0648\u0644: ${project ? project.projectName : ""}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" class="agreements-admin-page" style="display: none;"${addAttribute(project?.id, "data-project-id")}${addAttribute(project?.projectName, "data-project-name")}> <div class="container"> ${project ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <header class="page-header"> <div> <h1>اللي وصل المقاول: ${project.projectName}</h1> <p class="page-subtitle">هنا يمكنك عرض وإدارة مستحقات المقاول والمدفوعات.</p> </div> <div class="header-actions"> <button id="add-agreement-btn" class="btn btn-primary">+ إضافة دفعة جديدة</button> <a${addAttribute(`/crs/projects/${id}`, "href")} class="btn btn-secondary">&larr; العودة للتفاصيل</a> </div> </header> <div class="agreements-list-container"> <div class="list-controls"> <div class="filter-group"> <label for="floor-filter">تصفية حسب الدور:</label> <select id="floor-filter"> <option value="all">عرض الكل</option> <option value="basement">بدروم</option><option value="ground">ارضي</option><option value="1">الدور 1</option><option value="2">الدور 2</option><option value="3">الدور 3</option><option value="4">الدور 4</option><option value="5">الدور 5</option><option value="6">الدور 6</option><option value="7">الدور 7</option><option value="8">الدور 8</option><option value="9">الدور 9</option><option value="10">الدور 10</option><option value="11">الدور 11</option><option value="12">الدور 12</option><option value="13">الدور 13</option><option value="14">الدور 14</option><option value="15">الدور 15</option> </select> </div> </div> <div class="totals-summary-container"> <div id="floor-total-box" class="total-box" style="display: none;"> <span class="total-label">إجمالي الدور المحدد</span> <span id="floor-total" class="total-value">0.00 ج.م</span> </div> <div class="total-box grand-total-box"> <span class="total-label">الإجمالي الكلي</span> <span id="grand-agreements-total" class="total-value">0.00 ج.م</span> </div> </div> <div id="agreements-grid" class="agreements-grid"> <!-- Agreement cards are injected by JS --> </div> <p id="no-agreements-message" style="display: none;">لم يتم إضافة أي دفعات لهذا المشروع بعد.</p> </div> ` })}` : renderTemplate`<div class="error-card"> <h2>خطأ في تحميل البيانات</h2> <p>حدث خطأ حرج أثناء محاولة تحميل تفاصيل المشروع. برجاء المحاولة مرة أخرى لاحقاً.</p> <a href="/crs/projects" class="back-link">العودة إلى قائمة المشاريع</a> </div>`} </div> </main>  <div id="agreement-modal" class="modal-overlay"> <div class="modal-box"> <h3 id="modal-title">إضافة دفعة جديدة</h3> <form id="agreement-form"> <div class="form-group"> <label for="agreement-floor">الدور</label> <select id="agreement-floor" required> <option value="" disabled selected>اختر الدور</option> <option value="basement">بدروم</option><option value="ground">ارضي</option><option value="1">الدور 1</option><option value="2">الدور 2</option><option value="3">الدور 3</option><option value="4">الدور 4</option><option value="5">الدور 5</option><option value="6">الدور 6</option><option value="7">الدور 7</option><option value="8">الدور 8</option><option value="9">الدور 9</option><option value="10">الدور 10</option><option value="11">الدور 11</option><option value="12">الدور 12</option><option value="13">الدور 13</option><option value="14">الدور 14</option><option value="15">الدور 15</option> </select> </div> <div class="form-group"> <label for="date">التاريخ</label> <input type="date" id="date" required> </div> <div class="form-group"> <label for="agreement-total">الإجمالي</label> <input type="number" id="agreement-total" required step="any"> </div> <div class="form-group"> <label for="agreement-details">تفاصيل الدفعة</label> <textarea id="agreement-details" rows="4"></textarea> </div> <div class="modal-actions"> <button type="button" id="cancel-agreement-btn" class="btn btn-secondary">إلغاء</button> <button type="submit" class="btn btn-primary">حفظ</button> </div> </form> </div> </div>  <div id="delete-modal" class="modal-overlay"> <div class="modal-box"> <h3>تأكيد الحذف</h3> <p>هل أنت متأكد من أنك تريد حذف هذه الدفعة؟</p> <div class="modal-actions"> <button id="cancel-delete-btn" class="btn btn-secondary">إلغاء</button> <button id="confirm-delete-btn" class="btn btn-danger">تأكيد الحذف</button> </div> </div> </div> ` })}  ${renderScript($$result, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects/[id]/agreements.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects/[id]/agreements.astro", void 0);

const $$file = "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/projects/[id]/agreements.astro";
const $$url = "/crs/projects/[id]/agreements";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Agreements,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

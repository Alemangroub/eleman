/* empty css                                          */
import { e as createComponent, k as renderComponent, o as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, p as Fragment } from '../../../../chunks/astro/server_4YXjuf9l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_C7k-ksFB.mjs';
import { $ as $$AdminLogin } from '../../../../chunks/AdminLogin_3aSuLz0Y.mjs';
import { d as db } from '../../../../chunks/admin_xQC5N2Tr.mjs';
/* empty css                                               */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Agreements = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Agreements;
  const { id } = Astro2.params;
  let project = null;
  try {
    const projectDoc = await db.collection("projects").doc(id).get();
    if (projectDoc.exists) {
      const projectData = projectDoc.data();
      project = {
        id: projectDoc.id,
        projectName: projectData.projectName || "\u0627\u0633\u0645 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"
      };
    } else {
      return Astro2.redirect("/404");
    }
  } catch (error) {
    console.error("Error fetching project data in agreements.astro:", error);
    project = null;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u0627\u062A\u0641\u0627\u0642\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639: ${project ? project.projectName : ""}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" class="agreements-admin-page" style="display: none;"${addAttribute(project?.id, "data-project-id")}${addAttribute(project?.projectName, "data-project-name")}> <div class="container"> ${project ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <header class="page-header"> <div> <h1>اتفاقات المشروع: ${project.projectName}</h1> <p class="page-subtitle">هنا يمكنك عرض وإدارة اتفاقات المشروع.</p> </div> <div class="header-actions"> <button id="add-agreement-btn" class="btn btn-primary">+ إضافة اتفاق جديد</button> <a${addAttribute(`/crs/projects/${id}`, "href")} class="btn btn-secondary">&larr; العودة للتفاصيل</a> </div> </header> <div class="agreements-list-container"> <div class="list-controls"> <div class="filter-group"> <label for="category-filter">تصفية حسب البند الرئيسي:</label> <select id="category-filter"> <option value="" disabled selected>-- اختر بندًا لعرضه --</option> <option value="all">عرض الكل</option> <option value="المقاول">المقاول</option> <option value="المباني">المباني</option> <option value="الكهرباء">الكهرباء</option> <option value="السباكه">السباكه</option> <option value="المحاره">المحاره</option> <option value="الرخام">الرخام</option> <option value="الدهانات">الدهانات</option> <option value="اخري">اخري</option> </select> </div> <div class="filter-group" id="subtype-filter-group" style="display: none;"> <label for="subtype-filter">تصفية حسب البند الفرعي:</label> <select id="subtype-filter"> <option value="all">كل بنود المقاول</option> <option value="لبشه مسلحه">لبشه مسلحه</option> <option value="لبشه عاديه">لبشه عاديه</option> </select> </div> </div> <div class="totals-summary-container"> <div class="total-box"> <span class="total-label">إجمالي المعروض</span> <span id="filtered-agreements-total" class="total-value">0.00 ج.م</span> </div> <div class="total-box grand-total-box"> <span class="total-label">الإجمالي الكلي</span> <span id="grand-agreements-total" class="total-value">0.00 ج.م</span> </div> </div> <div id="agreements-grid" class="agreements-grid"> <!-- Agreement cards are injected by JS --> </div> <p id="no-agreements-message" style="display: none;">لم يتم إضافة أي اتفاقات لهذا المشروع بعد.</p> </div> ` })}` : renderTemplate`<div class="error-card"> <h2>خطأ في تحميل البيانات</h2> <p>حدث خطأ حرج أثناء محاولة تحميل تفاصيل المشروع. برجاء المحاولة مرة أخرى لاحقاً.</p> <a href="/crs/projects" class="back-link">العودة إلى قائمة المشاريع</a> </div>`} </div> </main>  <div id="agreement-modal" class="modal-overlay"> <div class="modal-box"> <h3 id="modal-title">إضافة اتفاق جديد</h3> <form id="agreement-form"> <div class="form-group"> <label for="agreement-title">بند الاتفاق</label> <select id="agreement-title" required> <option value="" disabled selected>اختر بند الاتفاق</option> <option value="المقاول">المقاول</option> <option value="المباني">المباني</option> <option value="الكهرباء">الكهرباء</option> <option value="السباكه">السباكه</option> <option value="المحاره">المحاره</option> <option value="الرخام">الرخام</option> <option value="الدهانات">الدهانات</option> <option value="اخري">اخري</option> </select> </div> <div class="form-group" id="other-title-group" style="display: none;"> <label for="other-agreement-title">بند آخر (اذكره)</label> <input type="text" id="other-agreement-title"> </div> <div class="form-group" id="contractor-subtype-group" style="display: none;"> <label for="contractor-subtype">نوع البند الفرعي</label> <select id="contractor-subtype"> <option value="" disabled selected>اختر النوع</option> <option value="لبشه مسلحه">لبشه مسلحه</option> <option value="لبشه عاديه">لبشه عاديه</option> </select> </div> <div class="form-group"> <label for="agreed-with">اسم المتفق معه</label> <input type="text" id="agreed-with" required> </div> <div class="form-group"> <label for="date">التاريخ</label> <input type="date" id="date" required> </div> <div id="contractor-fields" class="dynamic-fields" style="display: none;"> <div class="form-grid"> <div class="form-group"> <label for="area">المساحة (م²)</label> <input type="number" id="area" step="any"> </div> <div class="form-group"> <label for="price-per-meter">سعر المتر</label> <input type="number" id="price-per-meter" step="any"> </div> </div> </div> <div id="generic-fields" class="dynamic-fields" style="display: none;"> <div class="form-grid"> <div class="form-group"> <label for="quantity">الكمية</label> <input type="number" id="quantity" step="any"> </div> <div class="form-group"> <label for="price">السعر</label> <input type="number" id="price" step="any"> </div> </div> </div> <div class="form-group"> <label for="agreement-total">الإجمالي</label> <input type="number" id="agreement-total" required step="any"> </div> <div class="form-group"> <label for="agreement-details">تفاصيل الاتفاق</label> <textarea id="agreement-details" rows="4"></textarea> </div> <div class="form-group"> <label for="agreement-notes">ملاحظات</label> <textarea id="agreement-notes" rows="3"></textarea> </div> <div class="modal-actions"> <button type="button" id="cancel-agreement-btn" class="btn btn-secondary">إلغاء</button> <button type="submit" class="btn btn-primary">حفظ</button> </div> </form> </div> </div> <div id="delete-modal" class="modal-overlay"> <div class="modal-box"> <h3>تأكيد الحذف</h3> <p>هل أنت متأكد من أنك تريد حذف هذا الاتفاق؟</p> <div class="modal-actions"> <button id="cancel-delete-btn" class="btn btn-secondary">إلغاء</button> <button id="confirm-delete-btn" class="btn btn-danger">تأكيد الحذف</button> </div> </div> </div> ` })} ${renderScript($$result, "/home/user/eleman-company/src/pages/crs/projects/[id]/agreements.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/eleman-company/src/pages/crs/projects/[id]/agreements.astro", void 0);

const $$file = "/home/user/eleman-company/src/pages/crs/projects/[id]/agreements.astro";
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

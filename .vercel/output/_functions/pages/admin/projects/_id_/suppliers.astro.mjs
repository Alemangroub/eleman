/* empty css                                               */
import { e as createAstro, f as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute, o as Fragment } from '../../../../chunks/astro/server_XmWuuq3N.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_BXNuZTdR.mjs';
import { $ as $$AdminLogin } from '../../../../chunks/AdminLogin_BifDDabA.mjs';
import { d as db } from '../../../../chunks/admin_CBgMA4DX.mjs';
/* empty css                                              */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://www.elemancompany.net");
const prerender = false;
const $$Suppliers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Suppliers;
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
    console.error("Error fetching project data in suppliers.astro:", error);
    project = null;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u0648\u0627\u0631\u062F\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639: ${project ? project.projectName : ""}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" class="imports-admin-page" style="display: none;"${addAttribute(project?.id, "data-project-id")}${addAttribute(project?.projectName, "data-project-name")}> <div class="container"> ${project ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <header class="page-header"> <div> <h1>واردات المشروع: ${project.projectName}</h1> <p class="page-subtitle">هنا يمكنك عرض وإدارة واردات ومشتريات المشروع.</p> </div> <div class="header-actions"> <button id="add-import-btn" class="btn btn-primary">+ إضافة وارد جديد</button> <a${addAttribute(`/admin/projects/${id}`, "href")} class="btn btn-secondary">&larr; العودة للتفاصيل</a> </div> </header>  <div class="imports-list-container"> <div class="list-header"> <div class="title-and-summaries"> <h2>قائمة الواردات</h2> <div class="summaries-inline"> <div class="summary-card-inline" id="grand-total-card"> <h5>الإجمالي الكلي</h5> <p id="grand-total-amount">0.00</p> </div> <div class="summary-card-inline" id="filtered-total-card" style="display: none;"> <h5 id="filtered-total-label">إجمالي الصنف</h5> <p id="filtered-total-amount">0.00</p> </div> </div> </div> <div class="controls-container"> <div class="filter-container"> <label for="category-filter">فلترة حسب الصنف:</label> <select id="category-filter"> <option value="none" selected>-- اختر صنفًا --</option> <option value="all">عرض الكل</option> <option value="حديد">حديد</option> <option value="اسمنت">اسمنت</option> <option value="رمله">رمله</option> <option value="زلط">زلط</option> <option value="طوب">طوب</option> <option value="كهرباء">كهرباء</option> <option value="سباكة">سباكة</option> <option value="رخام">رخام</option> <option value="دهانات">دهانات</option> <option value="اخري">أصناف أخرى</option> </select> </div> <div class="export-buttons"> <button id="print-btn" class="btn btn-secondary">طباعة</button> <button id="export-pdf-btn" class="btn btn-primary">تصدير PDF</button> <button id="export-excel-btn" class="btn btn-secondary">تصدير Excel</button> </div> </div> </div> <div class="table-wrapper" style="display: none;"> <table id="imports-table"> <thead> <tr> <th>الصنف</th> <th>الكمية</th> <th>سعر الوحدة</th> <th>السعر الإجمالي</th> <th>المورد</th> <th>التاريخ</th> <th class="actions-header">الإجراءات</th> </tr> </thead> <tbody id="imports-list"></tbody> </table> </div> <p id="no-imports-message">يرجى اختيار صنف لعرض الواردات.</p> </div> ` })}` : renderTemplate`<div class="error-card"> <h2>خطأ في تحميل البيانات</h2> <p>حدث خطأ حرج أثناء محاولة تحميل تفاصيل المشروع. برجاء المحاولة مرة أخرى لاحقاً.</p> <a href="/admin/projects" class="back-link">العودة إلى قائمة المشاريع</a> </div>`} </div> </main>  <div id="import-modal" class="modal-overlay"> <div class="modal-box"> <h3 id="modal-title">إضافة وارد جديد</h3> <form id="import-form"> <div class="form-group"> <label for="item-category">الصنف</label> <select id="item-category" required> <option value="" disabled selected>-- اختر الصنف --</option> <option value="حديد">حديد</option> <option value="اسمنت">اسمنت</option> <option value="رمله">رمله</option> <option value="زلط">زلط</option> <option value="طوب">طوب</option> <option value="كهرباء">كهرباء</option> <option value="سباكة">سباكة</option> <option value="رخام">رخام</option> <option value="دهانات">دهانات</option> <option value="اخري">اخري</option> </select> </div> <div class="form-group" id="other-item-name-group" style="display: none;"> <label for="item-name">اسم الصنف (آخر)</label> <input type="text" id="item-name"> </div> <div class="form-grid"> <div class="form-group"> <label for="item-quantity">الكمية</label> <input type="number" id="item-quantity" required> </div> <div class="form-group"> <label for="item-unit-price">سعر الوحدة</label> <input type="number" id="item-unit-price" step="0.01" required> </div> <div class="form-group"> <label for="item-price">السعر الإجمالي</label> <input type="number" id="item-price" step="0.01" required readonly> </div> </div> <div class="form-group"> <label for="item-supplier">المورد</label> <input type="text" id="item-supplier"> </div> <div class="form-group"> <label for="import-date">تاريخ التوريد</label> <input type="date" id="import-date" required> </div> <div class="form-group"> <label for="item-notes">ملاحظات</label> <textarea id="item-notes" rows="3"></textarea> </div> <div class="modal-actions"> <button type="button" id="cancel-import-btn" class="btn btn-secondary">إلغاء</button> <button type="submit" class="btn btn-primary">حفظ</button> </div> </form> </div> </div>  <div id="delete-modal" class="modal-overlay"> <div class="modal-box"> <h3>تأكيد الحذف</h3> <p>هل أنت متأكد من أنك تريد حذف هذا الصنف؟</p> <div class="modal-actions"> <button id="cancel-delete-btn" class="btn btn-secondary">إلغاء</button> <button id="confirm-delete-btn" class="btn btn-danger">تأكيد الحذف</button> </div> </div> </div> ` })} ${renderScript($$result, "/home/user/bobobo/src/pages/admin/projects/[id]/suppliers.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/bobobo/src/pages/admin/projects/[id]/suppliers.astro", void 0);

const $$file = "/home/user/bobobo/src/pages/admin/projects/[id]/suppliers.astro";
const $$url = "/admin/projects/[id]/suppliers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Suppliers,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

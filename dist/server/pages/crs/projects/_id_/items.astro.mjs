/* empty css                                          */
import { e as createComponent, k as renderComponent, ak as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../../../chunks/astro/server_D9q-hNhU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../../chunks/Layout_DB-3ZIKO.mjs';
import { $ as $$AdminLogin } from '../../../../chunks/AdminLogin_DNkKqBsj.mjs';
import { p as prisma } from '../../../../chunks/prisma_DflsjPUV.mjs';
/* empty css                                          */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Items = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Items;
  const { id } = Astro2.params;
  if (!id) return Astro2.redirect("/404");
  let project = null;
  try {
    const p = await prisma.project.findUnique({ where: { id } });
    if (!p) return Astro2.redirect("/404");
    project = { id: p.id, name: p.projectName };
  } catch (err) {
    console.error("Error:", err);
  }
  const floorOptions = [
    { value: "-1", label: "\u0627\u0644\u0628\u062F\u0631\u0648\u0645" },
    { value: "0", label: "\u0627\u0631\u0636\u064A" },
    { value: "1", label: "\u0627\u0644\u0627\u0648\u0644" },
    { value: "2", label: "\u0627\u0644\u062B\u0627\u0646\u064A" },
    { value: "3", label: "\u0627\u0644\u062B\u0627\u0644\u062B" },
    { value: "4", label: "\u0627\u0644\u0631\u0627\u0628\u0639" },
    { value: "5", label: "\u0627\u0644\u062E\u0627\u0645\u0633" },
    { value: "6", label: "\u0627\u0644\u0633\u0627\u062F\u0633" },
    { value: "7", label: "\u0627\u0644\u0633\u0627\u0628\u0639" },
    { value: "8", label: "\u0627\u0644\u062B\u0627\u0645\u0646" },
    { value: "9", label: "\u0627\u0644\u062A\u0627\u0633\u0639" },
    { value: "10", label: "\u0627\u0644\u0639\u0627\u0634\u0631" },
    { value: "11", label: "\u0627\u0644\u062D\u0627\u062F\u064A \u0639\u0634\u0631" },
    { value: "12", label: "\u0627\u0644\u062B\u0627\u0646\u064A \u0639\u0634\u0631" },
    { value: "13", label: "\u0627\u0644\u062B\u0627\u0644\u062B \u0639\u0634\u0631" },
    { value: "14", label: "\u0627\u0644\u0631\u0627\u0628\u0639 \u0639\u0634\u0631" },
    { value: "15", label: "\u0627\u0644\u062E\u0627\u0645\u0633 \u0639\u0634\u0631" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `\u0628\u0646\u0648\u062F \u0627\u0644\u0645\u0634\u0631\u0648\u0639: ${project?.name}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"><p>جارٍ التحقق من صلاحيات الدخول...</p></div> <div id="admin-login-container" class="auth-container" style="display: none;">${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})}</div> <main id="page-content" style="display: none;"${addAttribute(id, "data-project-id")}> <div class="container"> <header class="page-header"> <div> <h1>بنود المشروع: ${project?.name}</h1> <p class="page-subtitle">هنا يمكنك عرض وإدارة بنود المشروع.</p> </div> <div class="header-actions"> <button id="toggle-form-btn" class="btn btn-primary"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> <span>إضافة بند جديد</span> </button> <a${addAttribute(`/crs/projects/${id}`, "href")} class="btn btn-secondary"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> <span>العودة للتفاصيل</span> </a> <button id="logout-button" class="btn btn-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> <span>تسجيل الخروج</span> </button> </div> </header> <!-- Add Item Form --> <div id="add-item-form-container" style="display: none;" class="form-container"> <h2>نموذج إضافة بند جديد</h2> <form id="add-item-form"> <input type="hidden" id="name" name="name"> <div class="form-grid"> <div class="form-group"> <label for="floor">الدور</label> <select id="floor" name="floor" required> <option value="" disabled selected>-- اختر الدور --</option> ${floorOptions.map((f) => renderTemplate`<option${addAttribute(f.value, "value")}>${f.label}</option>`)} </select> </div> <div class="form-group"> <label for="itemDate">التاريخ</label> <input type="date" id="itemDate" name="itemDate" required> </div> <div class="form-group" id="specific-name-group" style="display: none;"> <label for="specificName">الاسم</label> <input type="text" id="specificName" name="specificName" placeholder="ادخل الاسم المحدد"> </div> <div class="form-group"> <label for="main-category">الفئة الرئيسية (لتحديد اسم البند)</label> <select id="main-category" required> <option value="" disabled selected>-- اختر فئة --</option> <option value="بند العماله">بند العماله</option> <option value="بند المجلس">بند المجلس</option> <option value="بند الهدم">بند الهدم</option> <option value="بند الخرسانه">بند الخرسانه</option> <option value="بند المقاول">بند المقاول</option> <option value="بند المباني">بند المباني</option> <option value="بند الكهرباء">بند الكهرباء</option> <option value="بند السباكه">بند السباكه</option> <option value="بند التشطيب">بند التشطيب</option> <option value="بند عمولات المبيعات للسماسره">بند عمولات المبيعات للسماسره</option> <option value="بند الضرائب">بند الضرائب</option> <option value="بند التشوين">بند التشوين</option> <option value="اخرى">اخرى</option> </select> </div> <div class="form-group" id="sub-category-group" style="display: none;"> <label for="sub-category">البند الفرعي</label> <select id="sub-category"></select> </div> <div class="form-group" id="other-name-group" style="display: none;"> <label for="other-name">اسم البند (آخر)</label> <input type="text" id="other-name" name="other-name" placeholder="ادخل اسم البند الجديد"> </div> <div class="form-group contractor-field" id="price-per-meter-group" style="display: none;"> <label for="pricePerMeter">سعر المتر</label> <input type="number" id="pricePerMeter" name="pricePerMeter" step="0.01"> </div> <div class="form-group contractor-field" id="area-group" style="display: none;"> <label for="area">المساحة</label> <input type="number" id="area" name="area" step="0.01"> </div> <div class="form-group calculation-field" id="quantity-group" style="display: none;"> <label for="quantity">الكمية</label> <input type="number" id="quantity" name="quantity" step="0.01"> </div> <div class="form-group calculation-field" id="price-per-unit-group" style="display: none;"> <label for="pricePerUnit">سعر الوحدة</label> <input type="number" id="pricePerUnit" name="pricePerUnit" step="0.01"> </div> <div class="form-group"> <label for="totalPrice">الإجمالي</label> <input type="number" id="totalPrice" name="totalPrice" step="0.01" required> </div> <div class="form-group form-group-full-width"> <label for="notes">التفاصيل</label> <textarea id="notes" name="notes" rows="3" placeholder="أضف تفاصيل..."></textarea> </div> </div> <div class="form-actions"> <button type="submit" class="btn btn-primary">حفظ البند</button> <button type="button" id="cancel-btn" class="btn btn-secondary">إلغاء</button> </div> </form> </div> <!-- Items List --> <div class="content-area" id="items-content-area"> <div class="table-header"> <div class="table-controls-left"> <div class="table-title-row"> <h2 class="table-title">قائمة البنود الحالية</h2> <div class="global-export-buttons"> <button id="print-all-btn" class="btn-global-export btn-print-all" title="طباعة الكل"><span class="material-icons">print</span> طباعة</button> <button id="excel-all-btn" class="btn-global-export btn-excel-all" title="تصدير Excel"><span class="material-icons">table_chart</span> Excel</button> </div> </div> <div class="filter-container"> <div class="form-group"> <label for="floor-filter">الدور:</label> <select id="floor-filter"> <option value="" selected>-- اختر دور --</option> <option value="all">الكل</option> ${floorOptions.map((f) => renderTemplate`<option${addAttribute(f.value, "value")}>${f.label}</option>`)} </select> </div> <div class="form-group"> <label for="main-category-filter">الفئة الرئيسية:</label> <select id="main-category-filter"> <option value="" selected>-- اختر بند --</option> <option value="all">عرض الكل</option> </select> </div> <div class="form-group" id="sub-category-filter-group" style="display: none;"> <label for="sub-category-filter">البند الفرعي:</label> <select id="sub-category-filter"></select> </div> </div> </div> <div class="table-controls-right totals-container"> <div class="total-box" id="floor-total-box" style="display: none;"> <span id="floor-total-label" class="total-label">إجمالي الدور المحدد:</span> <span id="floor-total-value" class="total-value">0.00 ج.م</span> </div> <div class="total-box"> <span class="total-label">إجمالي البنود المفلترة:</span> <span id="filtered-total" class="total-value">0.00 ج.م</span> </div> <div class="total-box grand-total-box"> <span class="total-label">إجمالي كل البنود:</span> <span id="grand-total" class="total-value">0.00 ج.م</span> </div> </div> </div> <div id="table-container"> <div class="table-wrapper"> <table class="items-table"> <thead> <tr> <th>التاريخ</th> <th>الدور</th> <th class="col-specificName">الاسم</th> <th>اسم البند</th> <th class="col-pricePerMeter">سعر المتر</th> <th class="col-area">المساحة</th> <th class="col-quantity">الكمية</th> <th class="col-unit">الوحدة</th> <th class="col-pricePerUnit">سعر الوحدة</th> <th>الإجمالي</th> <th>التفاصيل</th> <th>إجراءات</th> </tr> </thead> <tbody id="items-table-body"></tbody> </table> <p id="no-items-message" class="no-items-message" style="display: none;">لا توجد بنود تطابق معايير البحث الحالية.</p> </div> </div> </div> </div> <!-- Delete Modal --> <div id="delete-confirm-modal" class="modal-overlay" style="display: none;"> <div class="modal-content"> <h4>تأكيد الحذف</h4> <p>هل أنت متأكد من رغبتك في حذف هذا البند؟ لا يمكن التراجع عن هذا الإجراء.</p> <div class="modal-actions"> <button id="delete-modal-cancel-btn" class="btn btn-secondary">إلغاء</button> <button id="delete-modal-confirm-btn" class="btn btn-danger">تأكيد الحذف</button> </div> </div> </div> <!-- Save Modal --> <div id="save-confirm-modal" class="modal-overlay" style="display: none;"> <div class="modal-content"> <h4>تأكيد الحفظ</h4> <p>هل أنت متأكد من رغبتك في حفظ التعديلات؟</p> <div class="modal-actions"> <button id="save-modal-cancel-btn" class="btn btn-secondary">إلغاء</button> <button id="save-modal-confirm-btn" class="btn btn-primary">تأكيد الحفظ</button> </div> </div> </div> </main> ` })} ${renderScript($$result, "/home/user/Eman-Project/src/pages/crs/projects/[id]/items.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/Eman-Project/src/pages/crs/projects/[id]/items.astro", void 0);

const $$file = "/home/user/Eman-Project/src/pages/crs/projects/[id]/items.astro";
const $$url = "/crs/projects/[id]/items";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Items,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

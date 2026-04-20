/* empty css                                    */
import { e as createComponent, k as renderComponent, ak as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D9q-hNhU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_YA1LhvQq.mjs';
import { $ as $$AdminLogin } from '../../chunks/AdminLogin_BglGCU2H.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$AddProject = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="auth-loading-message" class="auth-container"> <p>جارٍ التحقق من صلاحيات الدخول...</p> </div> <div id="admin-login-container" class="auth-container" style="display: none;"> ${renderComponent($$result2, "AdminLogin", $$AdminLogin, {})} </div> <main id="page-content" class="add-project-page" style="display: none;"> <div class="container"> <div class="page-header"> <h1>إضافة مشروع جديد</h1> <div class="header-actions"> <a href="/crs/projects" class="btn btn-secondary">إلغاء</a> <button id="logout-button" class="btn btn-danger">تسجيل الخروج</button> </div> </div> <form class="project-form" id="add-project-form"> <!-- Project Details --> <div class="form-group"> <label for="projectName">اسم المشروع</label> <input type="text" id="projectName" name="projectName" required> </div> <div class="form-group"> <label for="projectAddress">العنوان</label> <input type="text" id="projectAddress" name="projectAddress" required> </div> <hr class="divider"> <!-- Supervisors Section --> <div class="form-group"> <label for="supervisor-select">المشرفون</label> <div id="supervisor-tags-container"></div> <select id="supervisor-select" class="supervisor-select"> <option value="" disabled selected>اختر مشرفًا لإضافته...</option> </select> </div> <!-- Form Actions --> <div class="form-actions"> <button type="submit" id="submit-btn" class="btn btn-primary">حفظ المشروع</button> </div> </form> </div> </main> ` })} ${renderScript($$result, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/add-project.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/add-project.astro", void 0);

const $$file = "C:/Users/ENJAZ/Desktop/eleman/src/pages/crs/add-project.astro";
const $$url = "/crs/add-project";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AddProject,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

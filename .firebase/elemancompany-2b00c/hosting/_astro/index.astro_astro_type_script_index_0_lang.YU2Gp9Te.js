import{e as g,c as u,a as p,y as h,o as L,g as x,d as w,b as S,z as B,A as P,B as k,C as A,q as M,f as R,h as T,s as _}from"./client.BvQm8nKw.js";function j(){let i={uid:null,name:""};const q=document.getElementById("auth-loading-message"),f=document.getElementById("dashboard-content"),E=document.getElementById("user-name-placeholder"),d=document.getElementById("projects-list"),v=document.getElementById("no-projects-message"),y=document.getElementById("logout-button");if(!f||!d)return;d.addEventListener("click",async t=>{const e=t.target,o=e.closest(".project-group");if(o&&(e.matches(".btn-toggle-expense")&&(o.querySelector(".expense-card").style.display="block",o.querySelector(".report-card").style.display="none"),e.matches(".btn-toggle-report")&&(o.querySelector(".expense-card").style.display="none",o.querySelector(".report-card").style.display="block"),e.matches(".btn-cancel-expense")&&(o.querySelector(".expense-card").style.display="none"),e.matches(".btn-cancel-report")&&(o.querySelector(".report-card").style.display="none"),e.matches(".btn-save-expense-item"))){const s=e.closest("form.expense-form");if(!s)return;const l=s.dataset.projectId;e.disabled=!0,e.textContent="جارٍ الحفظ...",s.querySelectorAll(".error-message").forEach(r=>r.textContent="");try{const r=s.querySelector(".item-name-select");let n=r.value;if(n==="اخري"&&(n=s.querySelector(".other-item-name").value.trim(),!n))throw{field:".other-item-name",message:"يرجى إدخال اسم البند."};if(!n)throw{field:".item-name-select",message:"يرجى اختيار بند."};const a=s.querySelector(".item-amount"),c=parseFloat(a.value);if(isNaN(c)||c<=0)throw{field:".item-amount",message:"يرجى إدخال مبلغ صحيح."};const m=s.querySelector(".expense-notes").value.trim(),N=s.querySelector(".expense-images").files,C=await b(N,l,"daily_expenses");await g(u(p,"daily_expenses"),{projectId:l,supervisorId:i.uid,supervisorName:i.name,items:[{name:n,amount:c}],totalAmount:c,notes:m,imageUrls:C,isRead:!1,createdAt:h()}),alert("تم ارسال المصروف بنجاح"),s.reset(),r.dispatchEvent(new Event("change"))}catch(r){if(console.error("Expense Item Save Error:",r),typeof r=="object"&&r.field){const n=s.querySelector(r.field);if(n){const a=n.closest(".form-group").querySelector(".error-message");a&&(a.textContent=r.message),n.focus()}}else alert(r.message||"حدث خطأ غير متوقع أثناء حفظ البند.")}finally{e.disabled=!1,e.textContent="حفظ البند"}}}),d.addEventListener("submit",async t=>{if(t.preventDefault(),t.target.matches(".report-form")){const e=t.target,o=e.dataset.projectId,s=e.querySelector('button[type="submit"]');s.disabled=!0,s.textContent="جارٍ الحفظ...";try{await I(e,o),alert("تم حفظ التقرير بنجاح!"),window.location.reload()}catch(l){console.error("Daily Report Submission Error:",l),alert(l.message||"حدث خطأ أثناء حفظ التقرير. يرجى المحاولة مرة أخرى."),s.disabled=!1,s.textContent="حفظ التقرير"}}}),d.addEventListener("change",t=>{const e=t.target;if(e.matches(".item-name-select")){const o=e.closest("form"),s=o.querySelector(".other-item-name-group");s.style.display=e.value==="اخري"?"block":"none",e.value!=="اخري"&&(o.querySelector(".other-item-name").value="")}}),L(S,async t=>{if(t){const e=await x(w(p,"users",t.uid));e.exists()&&e.data().role==="supervisor"?(i.uid=t.uid,i.name=e.data().name||"المشرف",E.textContent=i.name,await $(i.uid),q.style.display="none",f.style.display="block"):window.location.href="/crs"}else window.location.href="/crs"});async function b(t,e,o){if(!t||t.length===0)return[];const s=Array.from(t).map(l=>{const r=B(P,`${o}/${e}/${Date.now()}_${l.name}`),n=k(r,l);return new Promise((a,c)=>{n.on("state_changed",()=>{},m=>c(m),()=>A(n.snapshot.ref).then(a))})});return Promise.all(s)}async function I(t,e){const o=t.querySelector(".report-text").value;if(!o.trim())throw new Error("نص التقرير مطلوب للحفظ.");const s=t.querySelector(".report-images").files,l=await b(s,e,"daily_reports");await g(u(p,"daily_reports"),{projectId:e,supervisorId:i.uid,supervisorName:i.name,reportText:o,imageUrls:l,isRead:!1,createdAt:h()})}async function $(t){try{const e=M(u(p,"projects"),R("supervisorIds","array-contains",t)),s=(await T(e)).docs.map(a=>({id:a.id,...a.data()}));if(s.length===0){v.style.display="block",d.innerHTML="";return}const l=await Promise.all(s.flatMap(a=>a.supervisorIds||[]).map(a=>x(w(p,"users",a)))),r=new Map(l.filter(a=>a.exists()).map(a=>[a.id,a.data().name||"اسم غير معروف"])),n=s.map(a=>({...a,supervisorNames:(a.supervisorIds||[]).map(c=>r.get(c)||"اسم غير معروف")}));v.style.display="none",d.innerHTML=n.map(D).join("")}catch(e){console.error("Error fetching supervisor projects:",e),d.innerHTML='<p class="error-message">حدث خطأ أثناء تحميل المشاريع.</p>'}}function D(t){const e=t.supervisorNames.join(", ");return`
          <div class="project-group" data-project-group-id="${t.id}">
              <div class="project-card">
                  <div class="card-details">
                      <div class="card-item"><span class="item-label">اسم المشروع</span><p class="item-value">${t.projectName}</p></div>
                      <div class="card-item"><span class="item-label">عنوان المشروع</span><p class="item-value">${t.projectAddress||"غير محدد"}</p></div>
                      <div class="card-item"><span class="item-label">المشرفون</span><p class="item-value">${e}</p></div>
                  </div>
                  <div class="card-actions">
                      <button class="btn btn-action btn-toggle-expense">مصروفات يومية</button>
                      <button class="btn btn-action btn-toggle-report">تقرير يومي</button>
                      <a href="/crs/projects/${t.id}/remains" class="btn btn-action btn-leftovers-link">عرض البواقي</a>
                  </div>
              </div>
              
              <div class="form-card expense-card" style="display: none;">
                   <form class="expense-form" data-project-id="${t.id}" onsubmit="return false;"> <header class="form-card-header"><h2>إضافة مصروفات يومية لمشروع: ${t.projectName}</h2></header>
                      <p class="form-description">كل بند يتم إضافته يُحفظ كتقرير منفصل.</p>
                      
                      <div class="expense-item-adder">
                            <div class="form-group item-name-group">
                                <label>البنود</label>
                                <select class="item-name-select">
                                    <option value="" disabled selected>-- اختر بند --</option>
                                    <option value="عمال">عمال</option>
                                    <option value="مصروفات نثريه">مصروفات نثريه</option>
                                    <option value="حديد">حديد</option>
                                    <option value="اسمنت">اسمنت</option>
                                    <option value="طوب">طوب</option>
                                    <option value="رمله">رمله</option>
                                    <option value="زلط">زلط</option>
                                    <option value="اخري">اخري</option>
                                </select>
                                <small class="error-message"></small>
                            </div>
                            <div class="form-group other-item-name-group" style="display: none;">
                                <label>اسم البند (آخر)</label>
                                <input type="text" class="other-item-name" placeholder="ادخل اسم البند">
                                <small class="error-message"></small>
                            </div>
                            <div class="form-group">
                                <label>المبلغ (ج.م)</label>
                                <input type="number" class="item-amount" placeholder="0.00">
                                <small class="error-message"></small>
                            </div>
                            <div class="form-group notes-group">
                                <label>ملاحظات (اختياري)</label>
                                <textarea class="expense-notes" rows="2"></textarea>
                            </div>
                            <div class="form-group attachments-group">
                                <label>إرفاق صور (اختياري)</label>
                                <input type="file" class="expense-images" multiple accept="image/*">
                            </div>
                      </div>

                      <div class="form-actions">
                        <button type="button" class="btn btn-submit btn-save-expense-item">حفظ البند</button>
                        <button type="button" class="btn btn-cancel-expense">إغلاق</button>
                      </div>
                  </form>
              </div>

              <div class="form-card report-card" style="display: none;">
                  <form class="report-form" data-project-id="${t.id}">
                      <header class="form-card-header"><h2>إضافة تقرير يومي لمشروع: ${t.projectName}</h2></header>
                      <div class="form-group"><label>نص التقرير</label><textarea class="report-text" rows="6" required placeholder="اكتب هنا تفاصيل سير العمل، المشاكل، التقدم المحرز..."></textarea></div>
                      <div class="form-group"><label>إرفاق صور (اختياري)</label><input type="file" class="report-images" multiple accept="image/*"></div>
                      <div class="form-actions"><button type="submit" class="btn btn-submit">حفظ التقرير</button><button type="button" class="btn-cancel-report">إلغاء</button></div>
                  </form>
              </div>
          </div>
        `}y&&y.addEventListener("click",async()=>{try{await _(S),window.location.href="/crs"}catch(t){console.error("Logout Error:",t)}})}j();document.addEventListener("astro:after-swap",j);

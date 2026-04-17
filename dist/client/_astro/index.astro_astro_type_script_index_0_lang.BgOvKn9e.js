import{c as b,l as v}from"./auth.CLSDVgx0.js";let l={id:null,name:""};async function f(){const t=document.getElementById("auth-loading-message"),e=document.getElementById("dashboard-content"),s=document.getElementById("user-name-placeholder");document.getElementById("projects-list"),document.getElementById("no-projects-message");const n=document.getElementById("logout-button"),a=await b();t&&(t.style.display="none"),a&&a.role==="supervisor"?(l.id=a.userId,l.name=a.name||"المشرف",s&&(s.textContent=l.name),e&&(e.style.display="block"),await h(l.id),n&&n.addEventListener("click",async()=>{await v(),window.location.href="/crs"})):window.location.href="/crs"}async function h(t){const e=document.getElementById("projects-list"),s=document.getElementById("no-projects-message");try{const a=await(await fetch(`/api/projects?supervisorId=${t}`)).json();if(a.length===0){s&&(s.style.display="block"),e&&(e.innerHTML="");return}s&&(s.style.display="none"),e&&(e.innerHTML=a.map(g).join("")),x()}catch(n){console.error("Error fetching projects:",n)}}function g(t){const e=t.supervisors?t.supervisors.map(s=>s.name).join(", "):"-";return`
        <div class="project-group" data-id="${t.id}">
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
                 <form class="expense-form" data-project-id="${t.id}">
                    <header class="form-card-header"><h2>إضافة مصروفات يومية لمشروع: ${t.projectName}</h2></header>
                    <div class="expense-item-adder">
                          <div class="form-group">
                              <label>البنود</label>
                              <select class="item-name-select" required>
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
                          </div>
                          <div class="form-group other-item-name-group" style="display: none;">
                              <label>اسم البند (آخر)</label>
                              <input type="text" class="other-item-name" placeholder="ادخل اسم البند">
                          </div>
                          <div class="form-group">
                              <label>المبلغ (ج.م)</label>
                              <input type="number" class="item-amount" placeholder="0.00" required step="0.01">
                          </div>
                          <div class="form-group notes-group">
                              <label>ملاحظات (اختياري)</label>
                              <textarea class="expense-notes" rows="2"></textarea>
                          </div>
                    </div>
                    <div class="form-actions">
                      <button type="submit" class="btn btn-submit">حفظ البند</button>
                      <button type="button" class="btn btn-cancel-expense">إغلاق</button>
                    </div>
                </form>
            </div>

            <div class="form-card report-card" style="display: none;">
                <form class="report-form" data-project-id="${t.id}">
                    <header class="form-card-header"><h2>إضافة تقرير يومي لمشروع: ${t.projectName}</h2></header>
                    <div class="form-group"><label>نص التقرير</label><textarea class="report-text" rows="6" required placeholder="اكتب هنا تفاصيل سير العمل..."></textarea></div>
                    <div class="form-actions"><button type="submit" class="btn btn-submit">حفظ التقرير</button><button type="button" class="btn-cancel-report">إلغاء</button></div>
                </form>
            </div>
        </div>
      `}function x(){document.querySelectorAll(".project-group").forEach(e=>{const s=e.querySelector(".expense-card"),n=e.querySelector(".report-card");e.querySelector(".btn-toggle-expense")?.addEventListener("click",()=>{s.style.display=s.style.display==="none"?"block":"none",n.style.display="none"}),e.querySelector(".btn-toggle-report")?.addEventListener("click",()=>{n.style.display=n.style.display==="none"?"block":"none",s.style.display="none"}),e.querySelector(".btn-cancel-expense")?.addEventListener("click",()=>s.style.display="none"),e.querySelector(".btn-cancel-report")?.addEventListener("click",()=>n.style.display="none");const a=e.querySelector(".item-name-select"),u=e.querySelector(".other-item-name-group");a?.addEventListener("change",()=>{u.style.display=a.value==="اخري"?"block":"none"}),e.querySelector(".expense-form")?.addEventListener("submit",async i=>{i.preventDefault();const o=i.target,r=o.querySelector(".btn-submit"),p=o.dataset.projectId;let c=o.querySelector(".item-name-select").value;c==="اخري"&&(c=o.querySelector(".other-item-name").value);const d=parseFloat(o.querySelector(".item-amount").value),m=o.querySelector(".expense-notes").value;r.disabled=!0,r.textContent="جارٍ الحفظ...";try{(await fetch("/api/dashboard/expenses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectId:p,supervisorName:l.name,items:[{name:c,amount:d}],totalAmount:d,notes:m})})).ok&&(alert("تم الحفظ بنجاح"),o.reset(),s.style.display="none")}catch{alert("خطأ في الاتصال")}finally{r.disabled=!1,r.textContent="حفظ البند"}}),e.querySelector(".report-form")?.addEventListener("submit",async i=>{i.preventDefault();const o=i.target,r=o.querySelector(".btn-submit"),p=o.dataset.projectId,c=o.querySelector(".report-text").value;r.disabled=!0,r.textContent="جارٍ الحفظ...";try{(await fetch("/api/dashboard/reports",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectId:p,supervisorName:l.name,content:c})})).ok&&(alert("تم الحفظ بنجاح"),o.reset(),n.style.display="none")}catch{alert("خطأ في الاتصال")}finally{r.disabled=!1,r.textContent="حفظ التقرير"}})})}document.addEventListener("DOMContentLoaded",f);

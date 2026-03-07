import { e as createComponent, m as maybeRenderHead, r as renderTemplate, g as addAttribute, o as renderScript, h as createAstro } from './astro/server_4YXjuf9l.mjs';
import 'piccolore';
import 'clsx';
import { a as achievements } from './achievements_5on8DSSQ.mjs';
/* empty css                                */

const $$Astro = createAstro();
const $$Achievements = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Achievements;
  const { isTitleLink = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="achievements" class="achievements" data-astro-cid-4vgjzdbk> <div class="achievements-overlay" data-astro-cid-4vgjzdbk></div> <div class="container" data-astro-cid-4vgjzdbk> <div class="section-header" data-astro-cid-4vgjzdbk> ${isTitleLink ? renderTemplate`<a href="/achievements" class="section-title-link" data-astro-cid-4vgjzdbk> <h2 class="section-title" data-astro-cid-4vgjzdbk>إنجازاتنا في أرقام</h2> </a>` : renderTemplate`<h2 class="section-title" data-astro-cid-4vgjzdbk>إنجازاتنا في أرقام</h2>`} <p class="section-subtitle" data-astro-cid-4vgjzdbk>نفخر بما حققناه، والأرقام هي خير دليل على التزامنا بالتميز والجودة.</p> </div> <div class="achievements-grid" data-astro-cid-4vgjzdbk> ${achievements.map((item) => renderTemplate`<div class="achievement-item" data-astro-cid-4vgjzdbk> <div class="achievement-circle" data-astro-cid-4vgjzdbk> <span class="achievement-value"${addAttribute(item.value.replace("+", ""), "data-target-value")} data-astro-cid-4vgjzdbk>0</span> </div> <h3 class="achievement-title" data-astro-cid-4vgjzdbk>${item.title}</h3> <p class="achievement-description" data-astro-cid-4vgjzdbk>${item.description}</p> </div>`)} </div> </div> </section> ${renderScript($$result, "/home/user/eleman-company/src/components/Achievements.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/eleman-company/src/components/Achievements.astro", void 0);

export { $$Achievements as $ };

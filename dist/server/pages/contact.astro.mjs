/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_D9q-hNhU.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_YA1LhvQq.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_DKtJ1RGl.mjs';
import { $ as $$TopBar } from '../chunks/TopBar_DOuvakAw.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contactInfo = {
    address: "\u0645\u062D\u0627\u0641\u0638\u0629 \u0633\u0648\u0647\u0627\u062C - \u0645\u0631\u0643\u0632 \u0637\u0645\u0627 - \u0637\u0631\u064A\u0642 \u0623\u0633\u064A\u0648\u0637 \u0633\u0648\u0647\u0627\u062C - \u0623\u0639\u0644\u0649 \u0628\u0646\u0643 \u0627\u0644\u0642\u0627\u0647\u0631\u0629",
    addressLink: "https://maps.app.goo.gl/Gug3Z6UsNur9r2kRA",
    phone: "+20 111 200 6333",
    email: "info@elemancompany.net",
    whatsapp: "201112006333",
    workingHours: "\u0627\u0644\u0633\u0628\u062A - \u0627\u0644\u062E\u0645\u064A\u0633: 11:00 \u0635\u0628\u0627\u062D\u064B\u0627 - 12:00 \u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644"
  };
  return renderTemplate`<!-- Font Awesome for Icons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">${renderComponent($$result, "Layout", $$Layout, { "title": "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 - \u0634\u0631\u0643\u0629 \u0627\u0644\u0625\u064A\u0645\u0627\u0646", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TopBar", $$TopBar, { "data-astro-cid-uw5kdbxl": true })}${renderComponent($$result2, "Header", $$Header, { "showMenu": true, "data-astro-cid-uw5kdbxl": true })}${maybeRenderHead()}<main class="contact-page" data-astro-cid-uw5kdbxl><div class="container" data-astro-cid-uw5kdbxl><h1 data-astro-cid-uw5kdbxl>تواصل معنا</h1><p class="intro-text" data-astro-cid-uw5kdbxl>نحن هنا للاستماع إليك. سواء كان لديك استفسار عن مشاريعنا، أو ترغب في بدء استثمار جديد، فريقنا جاهز لمساعدتك.</p><div class="contact-grid" data-astro-cid-uw5kdbxl><!-- All info cards --><div class="info-item" data-astro-cid-uw5kdbxl><div class="item-header" data-astro-cid-uw5kdbxl><span class="icon" data-astro-cid-uw5kdbxl><i class="fas fa-phone-alt" data-astro-cid-uw5kdbxl></i></span><h2 data-astro-cid-uw5kdbxl>عبر الهاتف</h2></div><p data-astro-cid-uw5kdbxl>يمكنك الاتصال بنا مباشرة خلال ساعات العمل الرسمية.</p><a${addAttribute(`tel:${contactInfo.phone}`, "href")} class="contact-link" data-astro-cid-uw5kdbxl>${contactInfo.phone}</a></div><div class="info-item" data-astro-cid-uw5kdbxl><div class="item-header" data-astro-cid-uw5kdbxl><span class="icon" data-astro-cid-uw5kdbxl><i class="fas fa-envelope" data-astro-cid-uw5kdbxl></i></span><h2 data-astro-cid-uw5kdbxl>عبر البريد الإلكتروني</h2></div><p data-astro-cid-uw5kdbxl>أرسل لنا استفساراتك، وسنقوم بالرد عليك في أقرب وقت ممكن.</p><a${addAttribute(`mailto:${contactInfo.email}`, "href")} class="contact-link" data-astro-cid-uw5kdbxl>${contactInfo.email}</a></div><div class="info-item" data-astro-cid-uw5kdbxl><div class="item-header" data-astro-cid-uw5kdbxl><span class="icon" data-astro-cid-uw5kdbxl><i class="fab fa-whatsapp" data-astro-cid-uw5kdbxl></i></span><h2 data-astro-cid-uw5kdbxl>عبر واتساب</h2></div><p data-astro-cid-uw5kdbxl>تواصل معنا بسرعة وسهولة عبر تطبيق واتساب.</p><a${addAttribute(`https://wa.me/${contactInfo.whatsapp}`, "href")} class="contact-link" target="_blank" data-astro-cid-uw5kdbxl>${contactInfo.phone}</a></div><div class="info-item" data-astro-cid-uw5kdbxl><div class="item-header" data-astro-cid-uw5kdbxl><span class="icon" data-astro-cid-uw5kdbxl><i class="fas fa-map-marker-alt" data-astro-cid-uw5kdbxl></i></span><h2 data-astro-cid-uw5kdbxl>مقر الشركة</h2></div><p data-astro-cid-uw5kdbxl>شرفنا بزيارتك في مقرنا الرئيسي لمناقشة كل التفاصيل. انقر على العنوان لعرضه على الخريطة.</p><a${addAttribute(contactInfo.addressLink, "href")} target="_blank" class="address-link" data-astro-cid-uw5kdbxl><p class="address" data-astro-cid-uw5kdbxl>${contactInfo.address}</p></a></div></div><!-- Working Hours Section --><div class="working-hours" data-astro-cid-uw5kdbxl><span class="icon" data-astro-cid-uw5kdbxl><i class="fas fa-clock" data-astro-cid-uw5kdbxl></i></span><h3 data-astro-cid-uw5kdbxl>ساعات العمل</h3><p data-astro-cid-uw5kdbxl>${contactInfo.workingHours}</p></div><!-- Why Contact Us Section --><div class="why-contact-us-section" data-astro-cid-uw5kdbxl><h2 data-astro-cid-uw5kdbxl>لماذا تتواصل معنا؟</h2><p data-astro-cid-uw5kdbxl>في شركة الإيمان، نعتبر كل عميل شريكًا في النجاح. تواصلك معنا هو الخطوة الأولى نحو تحقيق أهدافك العقارية، سواء كنت تبحث عن منزل أحلامك أو فرصة استثمارية مضمونة. فريقنا المتخصص جاهز ليقدم لك استشارة متكاملة، ويجيب على كافة استفساراتك بشفافية واحترافية، ويرافقك في كل خطوة من رحلتك معنا.</p><p data-astro-cid-uw5kdbxl>نحن لا نبيع عقارات فقط، بل نبني علاقات ثقة طويلة الأمد. ندعوك للتواصل معنا اليوم لاستكشاف كيف يمكننا مساعدتك في بناء مستقبل آمن ومزدهر. سواء كان لديك استفسار بسيط أو مشروع كبير، صوتك يهمنا.</p></div><!-- Google Maps Section --><div class="map-section" data-astro-cid-uw5kdbxl><h2 data-astro-cid-uw5kdbxl>موقعنا على الخريطة</h2><div class="map-container" data-astro-cid-uw5kdbxl><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.200155694245!2d31.43763837551271!3d26.91137027667472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144f06df7a002a29%3A0x5a18118084a44696!2sBanque%20Du%20Caire!5e0!3m2!1sar!2seg" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-uw5kdbxl></iframe></div></div></div></main>${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-uw5kdbxl": true })}` })}`;
}, "C:/Users/ENJAZ/Desktop/eleman/src/pages/contact.astro", void 0);

const $$file = "C:/Users/ENJAZ/Desktop/eleman/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

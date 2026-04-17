import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import bcrypt from 'bcryptjs';
export { renderers } from '../../../renderers.mjs';

async function GET() {
  try {
    if (true) {
      return new Response(JSON.stringify({ error: "غير مسموح" }), { status: 403 });
    }
    const adminCount = await prisma.user.count({ where: { role: "admin" } });
    if (adminCount === 0) {
      const hashedPassword = await bcrypt.hash("elemancompanyid111", 10);
      const admin = await prisma.user.create({
        data: {
          name: "مدير النظام",
          email: "id1@elemancompany.net",
          password: hashedPassword,
          role: "admin"
        }
      });
      return new Response(JSON.stringify({
        success: true,
        message: "تم إنشاء حساب المدير بنجاح!",
        credentials: { email: "id1@elemancompany.net", password: "elemancompanyid111" }
      }), { status: 201 });
    }
    return new Response(JSON.stringify({ message: "يوجد مدير بالفعل في النظام." }), { status: 200 });
  } catch (error) {
    console.error("Seed error:", error);
    return new Response(JSON.stringify({ error: "حدث خطأ في تهيئة المدير" }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

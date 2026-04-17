import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import bcrypt from 'bcryptjs';
export { renderers } from '../../../renderers.mjs';

async function POST() {
  try {
    if (true) {
      return new Response(JSON.stringify({ error: "غير مسموح" }), { status: 403 });
    }
    await prisma.user.deleteMany({});
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
      message: "تم إعادة تعيين حساب المدير بنجاح!",
      credentials: {
        email: "id1@elemancompany.net",
        password: "elemancompanyid111"
      }
    }), { status: 200 });
  } catch (error) {
    console.error("Reset admin error:", error);
    return new Response(JSON.stringify({
      error: "حدث خطأ في إعادة تعيين المدير"
    }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

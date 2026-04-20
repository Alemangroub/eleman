import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import bcrypt from 'bcryptjs';
import { r as requireAdmin, v as validateEmail, e as validateRole } from '../../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { name, email, password, role } = await request.json();
        const normalizedName = typeof name === "string" ? name.trim() : "";
        const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

        if (!normalizedName || !normalizedEmail || !password || !role) {
            return new Response(JSON.stringify({ error: "جميع الحقول مطلوبة" }), { status: 400 });
        }

        if (!validateEmail(normalizedEmail)) {
            return new Response(JSON.stringify({ error: "البريد الإلكتروني غير صالح" }), { status: 400 });
        }

        if (!validateRole(role)) {
            return new Response(JSON.stringify({ error: "صلاحية المستخدم غير صالحة" }), { status: 400 });
        }

        if (typeof password !== "string" || password.length < 6) {
            return new Response(JSON.stringify({ error: "كلمة المرور يجب ألا تقل عن 6 أحرف" }), { status: 400 });
        }

        const existing = await prisma.user.findUnique({ where: { email: normalizedEmail } });
        if (existing) {
            return new Response(JSON.stringify({ error: "هذا البريد الإلكتروني مستخدم بالفعل." }), { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { name: normalizedName, email: normalizedEmail, password: hashedPassword, role }
        });

        return new Response(JSON.stringify({ success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role } }), { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

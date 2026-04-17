import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import bcrypt from 'bcryptjs';
import { r as requireAdmin, v as validateEmail, e as validateRole } from '../../../chunks/server-auth_CR4aO5JM.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { id, name, email, role, password } = await request.json();

        if (!id) {
            return new Response(JSON.stringify({ error: "User ID is required" }), { status: 400 });
        }

        const updateData = {};
        if (typeof name === "string" && name.trim()) {
            updateData.name = name.trim();
        }
        if (typeof email === "string" && email.trim()) {
            const normalizedEmail = email.trim().toLowerCase();
            if (!validateEmail(normalizedEmail)) {
                return new Response(JSON.stringify({ error: "البريد الإلكتروني غير صالح" }), { status: 400 });
            }
            updateData.email = normalizedEmail;
        }
        if (role) {
            if (!validateRole(role)) {
                return new Response(JSON.stringify({ error: "صلاحية المستخدم غير صالحة" }), { status: 400 });
            }
            updateData.role = role;
        }
        if (password) {
            if (typeof password !== "string" || password.length < 6) {
                return new Response(JSON.stringify({ error: "كلمة المرور يجب ألا تقل عن 6 أحرف" }), { status: 400 });
            }
            updateData.password = await bcrypt.hash(password, 10);
        }

        if (Object.keys(updateData).length === 0) {
            return new Response(JSON.stringify({ error: "لا توجد بيانات صالحة للتحديث" }), { status: 400 });
        }

        const user = await prisma.user.update({
            where: { id },
            data: updateData
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

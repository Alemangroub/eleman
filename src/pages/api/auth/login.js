import prisma from "../../../lib/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-for-dev-only";

export async function POST({ request }) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return new Response(JSON.stringify({ error: "الإيميل والباسورد مطلوبين" }), { status: 400 });
        }

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !user.password) {
            return new Response(JSON.stringify({ error: "بيانات الدخول غير صحيحة" }), { status: 401 });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return new Response(JSON.stringify({ error: "بيانات الدخول غير صحيحة" }), { status: 401 });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role, name: user.name },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        const headers = new Headers();
        headers.append("Set-Cookie", `auth_token=${token}; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60}; SameSite=Lax`);

        return new Response(JSON.stringify({
            success: true,
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        }), { status: 200, headers });

    } catch (error) {
        console.error("Login error:", error);
        return new Response(JSON.stringify({ error: "حدث خطأ في السيرفر" }), { status: 500 });
    }
}

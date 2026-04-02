import prisma from "../../../lib/prisma.js";
import bcrypt from "bcryptjs";

export async function POST({ request }) {
    try {
        const { name, email, password, role } = await request.json();

        if (!name || !email || !password || !role) {
            return new Response(JSON.stringify({ error: "جميع الحقول مطلوبة" }), { status: 400 });
        }

        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            return new Response(JSON.stringify({ error: "هذا البريد الإلكتروني مستخدم بالفعل." }), { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword, role }
        });

        return new Response(JSON.stringify({ success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role } }), { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

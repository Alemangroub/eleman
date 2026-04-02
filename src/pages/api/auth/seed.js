import prisma from "../../../lib/prisma.js";
import bcrypt from "bcryptjs";

// Auto-seed an admin user if none exists
export async function GET() {
    try {
        const adminCount = await prisma.user.count({ where: { role: 'admin' } });
        
        if (adminCount === 0) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            const admin = await prisma.user.create({
                data: {
                    name: 'مدير النظام',
                    email: 'admin@eleman.com',
                    password: hashedPassword,
                    role: 'admin'
                }
            });
            return new Response(JSON.stringify({
                success: true,
                message: 'تم إنشاء حساب المدير بنجاح!',
                credentials: { email: 'admin@eleman.com', password: 'admin123' }
            }), { status: 201 });
        }

        return new Response(JSON.stringify({ message: 'يوجد مدير بالفعل في النظام.' }), { status: 200 });
    } catch (error) {
        console.error("Seed error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

import prisma from "../../../lib/prisma.js";
import bcrypt from "bcryptjs";

export async function POST() {
    try {
        if (!import.meta.env.DEV) {
            return new Response(JSON.stringify({ error: "غير مسموح" }), { status: 403 });
        }

        await prisma.user.deleteMany({});
        const hashedPassword = await bcrypt.hash('elemancompanyid111', 10);
        const admin = await prisma.user.create({
            data: {
                name: 'مدير النظام',
                email: 'id1@elemancompany.net',
                password: hashedPassword,
                role: 'admin'
            }
        });
        
        return new Response(JSON.stringify({
            success: true,
            message: 'تم إعادة تعيين حساب المدير بنجاح!',
            credentials: { 
                email: 'id1@elemancompany.net', 
                password: 'elemancompanyid111' 
            }
        }), { status: 200 });
        
    } catch (error) {
        console.error("Reset admin error:", error);
        return new Response(JSON.stringify({ 
            error: "حدث خطأ في إعادة تعيين المدير"
        }), { status: 500 });
    }
}

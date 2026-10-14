import prisma from "../../../lib/prisma.js";
import { requireProjectAccess } from "../../../lib/server-auth.js";

export async function POST({ request }) {
    try {
        const data = await request.json();

        if (!data.projectId || !data.items || !Array.isArray(data.items)) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const { errorResponse, user } = await requireProjectAccess(request, data.projectId);
        if (errorResponse) {
            return errorResponse;
        }

        const newExpense = await prisma.dailyExpense.create({
            data: {
                projectId: data.projectId,
                supervisorName: user?.name || data.supervisorName || "مشرف غير معروف",
                notes: data.notes || "",
                totalAmount: data.totalAmount || 0,
                items: data.items,
                imageUrls: data.imageUrls || [],
            }
        });

        return new Response(JSON.stringify(newExpense), { 
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error creating daily expense:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

import prisma from "../../../lib/prisma.js";

export async function POST({ request }) {
    try {
        const data = await request.json();

        if (!data.projectId || !data.items || !Array.isArray(data.items)) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const newExpense = await prisma.dailyExpense.create({
            data: {
                projectId: data.projectId,
                supervisorName: data.supervisorName || "مشرف غير معروف",
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

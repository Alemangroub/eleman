import prisma from "../../../lib/prisma.js";

export async function POST({ request }) {
    try {
        const data = await request.json();

        if (!data.projectId || !data.content) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const newReport = await prisma.dailyReport.create({
            data: {
                projectId: data.projectId,
                supervisorName: data.supervisorName || "مشرف غير معروف",
                content: data.content,
                notes: data.notes || "",
                imageUrls: data.imageUrls || [],
            }
        });

        return new Response(JSON.stringify(newReport), { 
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error creating daily report:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

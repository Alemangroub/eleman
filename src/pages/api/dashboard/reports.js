import prisma from "../../../lib/prisma.js";
import { requireProjectAccess } from "../../../lib/server-auth.js";

export async function POST({ request }) {
    try {
        const data = await request.json();

        if (!data.projectId || !data.content) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const { errorResponse, user } = await requireProjectAccess(request, data.projectId);
        if (errorResponse) {
            return errorResponse;
        }

        const newReport = await prisma.dailyReport.create({
            data: {
                projectId: data.projectId,
                supervisorName: user?.name || data.supervisorName || "مشرف غير معروف",
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

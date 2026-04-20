import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { b as requireProjectAccess } from '../../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

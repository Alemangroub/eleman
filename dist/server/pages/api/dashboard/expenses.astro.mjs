import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { b as requireProjectAccess } from '../../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

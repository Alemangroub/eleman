import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { b as requireProjectAccess } from '../../../chunks/server-auth_CR4aO5JM.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
    try {
        const { projectId, customerName, ids } = await request.json();

        if (!projectId && !customerName && !ids) {
            return new Response(JSON.stringify({ error: "No filter provided" }), { status: 400 });
        }

        if (!projectId && ids && Array.isArray(ids)) {
            return new Response(JSON.stringify({ error: "Project ID is required for bulk deletion" }), { status: 400 });
        }

        if (projectId) {
            const { errorResponse } = await requireProjectAccess(request, projectId);
            if (errorResponse) {
                return errorResponse;
            }
        }

        const whereClause = {};
        if (ids && Array.isArray(ids)) {
            whereClause.id = { in: ids };
        } else if (projectId && customerName) {
            whereClause.projectId = projectId;
            whereClause.customerName = customerName;
        }

        const result = await prisma.installment.deleteMany({
            where: whereClause
        });

        return new Response(JSON.stringify(result), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error bulk deleting installments:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

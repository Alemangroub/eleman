import { p as prisma } from '../../chunks/prisma_DflsjPUV.mjs';
import { b as requireProjectAccess } from '../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../renderers.mjs';

async function GET({ request, url }) {
    const projectId = url.searchParams.get('projectId');
    const customerName = url.searchParams.get('customerName');

    if (!projectId) {
        return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
    }

    try {
        const { errorResponse } = await requireProjectAccess(request, projectId);
        if (errorResponse) {
            return errorResponse;
        }

        const whereClause = { projectId: projectId };
        if (customerName) {
            whereClause.customerName = customerName;
        }

        const installments = await prisma.installment.findMany({
            where: whereClause,
            orderBy: { dueDate: 'asc' }
        });

        return new Response(JSON.stringify(installments), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error fetching installments:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

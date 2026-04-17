import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { b as requireProjectAccess } from '../../../chunks/server-auth_CR4aO5JM.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
    try {
        const { projectId, customerName, totalAmount } = await request.json();

        if (!projectId || !customerName || totalAmount === undefined) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const { errorResponse } = await requireProjectAccess(request, projectId);
        if (errorResponse) {
            return errorResponse;
        }

        const result = await prisma.installment.updateMany({
            where: {
                projectId: projectId,
                customerName: customerName
            },
            data: {
                totalAmount: totalAmount
            }
        });

        return new Response(JSON.stringify(result), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error bulk updating installments:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

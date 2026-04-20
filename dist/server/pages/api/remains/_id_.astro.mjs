import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { r as requireAdmin } from '../../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function PUT({ params, request }) {
    const { id } = params;
    try {
        const data = await request.json();
        const { subType, quantity, notes } = data;

        const updatedLog = await prisma.remainsLog.update({
            where: { id: id },
            data: {
                subType,
                quantity: parseFloat(quantity),
                notes
            }
        });

        return new Response(JSON.stringify(updatedLog), { status: 200 });
    } catch (error) {
        console.error("Error updating remains log:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

async function POST({ params, request }) {
    const { id } = params;
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        await prisma.remainsLog.delete({
            where: { id: id }
        });
        return new Response(JSON.stringify({ message: "Log deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting remains log:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    PUT,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

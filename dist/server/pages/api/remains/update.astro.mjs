import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { r as requireAdmin } from '../../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { id, subType, quantity, notes } = await request.json();

        if (!id) {
            return new Response(JSON.stringify({ error: "Log ID is required" }), { status: 400 });
        }

        const updatedLog = await prisma.remainsLog.update({
            where: { id },
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

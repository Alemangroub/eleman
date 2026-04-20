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

        const { itemId } = await request.json();

        if (!itemId) {
            return new Response(JSON.stringify({ error: "Item ID is required" }), { status: 400 });
        }

        await prisma.item.delete({ where: { id: itemId } });
        return new Response(JSON.stringify({ message: "Item deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting item:", error);
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

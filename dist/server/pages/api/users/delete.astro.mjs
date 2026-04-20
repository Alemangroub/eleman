import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { r as requireAdmin } from '../../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
    try {
        const { errorResponse, user } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { id } = await request.json();

        if (!id) {
            return new Response(JSON.stringify({ error: "User ID is required" }), { status: 400 });
        }

        if (id === user.userId) {
            return new Response(JSON.stringify({ error: "لا يمكن حذف المستخدم الحالي" }), { status: 400 });
        }

        await prisma.projectSupervisor.deleteMany({ where: { userId: id } });
        await prisma.user.delete({ where: { id } });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Error deleting user:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

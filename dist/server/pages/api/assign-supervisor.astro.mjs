import { p as prisma } from '../../chunks/prisma_DflsjPUV.mjs';
import { r as requireAdmin } from '../../chunks/server-auth_CR4aO5JM.mjs';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { projectId, supervisorId } = await request.json();

        if (!projectId || !supervisorId) {
            return new Response(JSON.stringify({ error: "Incomplete data provided. Missing projectId or supervisorId." }), { status: 400 });
        }

        await prisma.projectSupervisor.upsert({
            where: {
                projectId_userId: {
                    projectId: projectId,
                    userId: supervisorId
                }
            },
            update: {},
            create: {
                projectId: projectId,
                userId: supervisorId
            }
        });

        return new Response(JSON.stringify({ message: "Supervisor assigned successfully!" }), { status: 200 });

    } catch (error) {
        console.error("API Error during supervisor assignment:", error);
        return new Response(JSON.stringify({ 
            error: "An internal error occurred during the assignment process."
        }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

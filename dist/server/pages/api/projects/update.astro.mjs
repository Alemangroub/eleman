import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { r as requireAdmin } from '../../../chunks/server-auth_CR4aO5JM.mjs';
export { renderers } from '../../../renderers.mjs';

async function PATCH({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { id, projectName, projectAddress, archived, supervisorIds } = await request.json();
        
        if (!id) {
            return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
        }

        const updateData = {};
        if (typeof projectName === "string") updateData.projectName = projectName.trim();
        if (typeof projectAddress === "string") updateData.projectAddress = projectAddress.trim();
        if (archived !== undefined) updateData.archived = archived;
        
        if (Array.isArray(supervisorIds)) {
            updateData.supervisors = {
                deleteMany: {},
                create: supervisorIds.map(sid => ({
                    userId: sid
                }))
            };
        }

        const updatedProject = await prisma.project.update({
            where: { id: id },
            data: updateData
        });

        return new Response(JSON.stringify({ success: true, project: updatedProject }), { status: 200 });
    } catch (error) {
        console.error("Error updating project:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

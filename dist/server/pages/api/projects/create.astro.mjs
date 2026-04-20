import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { r as requireAdmin } from '../../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { projectName, projectAddress, supervisorIds } = await request.json();
        const normalizedProjectName = typeof projectName === "string" ? projectName.trim() : "";
        const normalizedProjectAddress = typeof projectAddress === "string" ? projectAddress.trim() : "";

        if (!normalizedProjectName || !normalizedProjectAddress) {
            return new Response(JSON.stringify({ error: "Project name and address are required" }), { status: 400 });
        }

        const newProject = await prisma.project.create({
            data: {
                projectName: normalizedProjectName,
                projectAddress: normalizedProjectAddress,
                supervisors: {
                    create: (Array.isArray(supervisorIds) ? supervisorIds : []).map(sid => ({
                        userId: sid
                    }))
                }
            }
        });

        return new Response(JSON.stringify({ success: true, project: newProject }), { status: 201 });

    } catch (error) {
        console.error("Error creating project:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

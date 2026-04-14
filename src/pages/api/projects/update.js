import prisma from "../../../lib/prisma.js";
import { requireAdmin } from "../../../lib/server-auth.js";

export async function PATCH({ request }) {
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

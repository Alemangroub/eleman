import prisma from "../../../lib/prisma.js";

export async function PATCH({ request }) {
    try {
        const { id, projectName, projectAddress, archived, supervisorIds } = await request.json();
        
        if (!id) {
            return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
        }

        const updateData = {};
        if (projectName !== undefined) updateData.projectName = projectName;
        if (projectAddress !== undefined) updateData.projectAddress = projectAddress;
        if (archived !== undefined) updateData.archived = archived;
        
        // Handle supervisor bulk sync if provided
        if (Array.isArray(supervisorIds)) {
            updateData.supervisors = {
                deleteMany: {}, // Clear existing
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

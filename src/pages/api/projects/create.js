import prisma from "../../../lib/prisma.js";

export async function POST({ request }) {
    try {
        const { projectName, projectAddress, supervisorIds } = await request.json();

        if (!projectName || !projectAddress) {
            return new Response(JSON.stringify({ error: "Project name and address are required" }), { status: 400 });
        }

        const newProject = await prisma.project.create({
            data: {
                projectName,
                projectAddress,
                supervisors: {
                    create: (supervisorIds || []).map(sid => ({
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

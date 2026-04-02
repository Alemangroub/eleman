
import prisma from '../../lib/prisma';

export async function POST({ request }) {
    try {
        const { projectId, supervisorId } = await request.json();

        if (!projectId || !supervisorId) {
            return new Response(JSON.stringify({ error: "Incomplete data provided. Missing projectId or supervisorId." }), { status: 400 });
        }

        // Ensure the supervisor exists and is assigned to the project.
        // Using upsert to avoid errors if already assigned.
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
            error: "An internal error occurred during the assignment process.", 
            details: error.message 
        }), { status: 500 });
    }
}

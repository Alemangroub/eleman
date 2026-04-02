
import prisma from '../../lib/prisma';

export async function POST({ request }) {
    if (request.headers.get("Content-Type") !== "application/json") {
        return new Response(JSON.stringify({ error: "Content-Type must be application/json" }), { status: 415 });
    }

    try {
        const { projectId, supervisorId } = await request.json();

        if (!projectId || !supervisorId) {
            return new Response(JSON.stringify({ error: "Project ID and Supervisor ID are required" }), { status: 400 });
        }

        // Atomically remove the supervisor assignment.
        await prisma.projectSupervisor.delete({
            where: {
                projectId_userId: {
                    projectId: projectId,
                    userId: supervisorId
                }
            }
        });

        return new Response(JSON.stringify({ message: "Supervisor removed successfully" }), { status: 200 });

    } catch (error) {
        console.error("Error removing supervisor:", error);
        return new Response(JSON.stringify({ 
            error: "An internal server error occurred.", 
            details: error.message 
        }), { status: 500 });
    }
}


import prisma from '../../lib/prisma';
import { requireAdmin } from '../../lib/server-auth.js';

export async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { projectId, supervisorId } = await request.json();

        if (!projectId || !supervisorId) {
            return new Response(JSON.stringify({ error: "Project ID and Supervisor ID are required" }), { status: 400 });
        }

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
            error: "An internal server error occurred."
        }), { status: 500 });
    }
}

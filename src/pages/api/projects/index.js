import prisma from "../../../lib/prisma.js";
import { requireAuthenticatedUser } from "../../../lib/server-auth.js";

export async function GET({ request, url }) {
    const archived = url.searchParams.get('archived') === 'true';
    const supervisorId = url.searchParams.get('supervisorId');
    try {
        const { errorResponse, user } = requireAuthenticatedUser(request);
        if (errorResponse) {
            return errorResponse;
        }

        const where = { archived: archived };

        const effectiveSupervisorId = user.role === 'admin'
            ? supervisorId
            : user.role === 'supervisor'
                ? user.userId
                : null;

        if (effectiveSupervisorId) {
            where.supervisors = {
                some: { userId: effectiveSupervisorId }
            };
        } else if (user.role !== 'admin') {
            return new Response(JSON.stringify({ error: "غير مسموح" }), { status: 403 });
        }

        const projects = await prisma.project.findMany({
            where: where,
            include: {
                supervisors: {
                    include: {
                        user: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        const formattedProjects = projects.map(p => ({
            id: p.id,
            projectName: p.projectName,
            projectAddress: p.projectAddress,
            archived: p.archived,
            supervisors: p.supervisors.map(ps => ({
                id: ps.user.id,
                name: ps.user.name
            }))
        }));

        return new Response(JSON.stringify(formattedProjects), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

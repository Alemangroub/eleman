import prisma from "../../../lib/prisma.js";

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            where: { archived: false },
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

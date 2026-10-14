
import prisma from "../../../lib/prisma.js";

export const prerender = false;

export async function GET({ url }) {
    const projectId = url.searchParams.get('projectId');
    const material = url.searchParams.get('material');
    
    if (!projectId) {
        return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
    }

    try {
        const where = { projectId: projectId };
        if (material) where.material = material;
        
        const logs = await prisma.remainsLog.findMany({
            where: where,
            orderBy: { createdAt: 'desc' }
        });
        
        // Get unique supervisor IDs and fetch their names
        const supervisorIds = [...new Set(logs.map(l => l.supervisorId).filter(Boolean))];
        const supervisors = supervisorIds.length > 0 ? await prisma.user.findMany({
            where: { id: { in: supervisorIds } },
            select: { id: true, name: true }
        }) : [];
        const supervisorMap = Object.fromEntries(supervisors.map(s => [s.id, s.name]));
        
        const formattedLogs = logs.map(log => ({
            ...log,
            supervisorName: log.supervisorName || supervisorMap[log.supervisorId] || log.supervisorId || 'غير معروف'
        }));
        
        return new Response(JSON.stringify(formattedLogs), { status: 200 });
    } catch (error) {
        console.error("Error fetching remains logs:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

export async function POST({ request }) {
    try {
        const data = await request.json();
        const { projectId, material, subType, quantity, notes, supervisorId, supervisorName } = data;

        if (!projectId || !material) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const newLog = await prisma.remainsLog.create({
            data: {
                projectId,
                material,
                subType,
                quantity: parseFloat(quantity),
                notes,
                supervisorId,
                supervisorName
            }
        });

        return new Response(JSON.stringify(newLog), { status: 201 });
    } catch (error) {
        console.error("Error creating remains log:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

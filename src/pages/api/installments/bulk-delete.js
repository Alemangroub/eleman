import prisma from "../../../lib/prisma.js";

export async function POST({ request }) {
    try {
        const { projectId, customerName, ids } = await request.json();

        if (!projectId && !customerName && !ids) {
            return new Response(JSON.stringify({ error: "No filter provided" }), { status: 400 });
        }

        const whereClause = {};
        if (ids && Array.isArray(ids)) {
            whereClause.id = { in: ids };
        } else if (projectId && customerName) {
            whereClause.projectId = projectId;
            whereClause.customerName = customerName;
        }

        const result = await prisma.installment.deleteMany({
            where: whereClause
        });

        return new Response(JSON.stringify(result), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error bulk deleting installments:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

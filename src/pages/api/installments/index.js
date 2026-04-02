import prisma from "../../../lib/prisma.js";

export async function GET({ url }) {
    const projectId = url.searchParams.get('projectId');
    const customerName = url.searchParams.get('customerName');

    if (!projectId) {
        return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
    }

    try {
        const whereClause = { projectId: projectId };
        if (customerName) {
            whereClause.customerName = customerName;
        }

        const installments = await prisma.installment.findMany({
            where: whereClause,
            orderBy: { dueDate: 'asc' }
        });

        return new Response(JSON.stringify(installments), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error fetching installments:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

import prisma from "../../../lib/prisma.js";

export async function POST({ request }) {
    try {
        const { projectId, customerName, totalAmount } = await request.json();

        if (!projectId || !customerName || totalAmount === undefined) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const result = await prisma.installment.updateMany({
            where: {
                projectId: projectId,
                customerName: customerName
            },
            data: {
                totalAmount: totalAmount
            }
        });

        return new Response(JSON.stringify(result), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error bulk updating installments:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

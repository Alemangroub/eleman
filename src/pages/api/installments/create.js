import prisma from "../../../lib/prisma.js";

export async function POST({ request }) {
    try {
        const data = await request.json();

        if (!data.projectId || !data.customerName || !data.installmentAmount || !data.dueDate) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const newInstallment = await prisma.installment.create({
            data: {
                projectId: data.projectId,
                customerName: data.customerName,
                customerPhone: data.customerPhone,
                unitType: data.unitType,
                unitLocation: data.unitLocation,
                totalAmount: data.totalAmount,
                installmentAmount: data.installmentAmount,
                dueDate: new Date(data.dueDate),
                status: data.status || 'pending',
                installmentName: data.installmentName || 'قسط',
                paymentDate: data.paymentDate ? new Date(data.paymentDate) : null
            }
        });

        return new Response(JSON.stringify(newInstallment), { 
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error creating installment:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

import prisma from "../../../lib/prisma.js";

export async function POST({ request }) {
    try {
        const data = await request.json();

        if (!Array.isArray(data.installments) || data.installments.length === 0) {
            return new Response(JSON.stringify({ error: "Invalid installments data" }), { status: 400 });
        }

        // Create multiple installments in one transaction
        const createdInstallments = await prisma.$transaction(
            data.installments.map(installment => prisma.installment.create({
                data: {
                    projectId: installment.projectId,
                    customerName: installment.customerName,
                    customerPhone: installment.customerPhone,
                    unitType: installment.unitType,
                    unitLocation: installment.unitLocation,
                    totalAmount: parseFloat(installment.totalAmount),
                    installmentAmount: parseFloat(installment.installmentAmount),
                    dueDate: new Date(installment.dueDate),
                    status: installment.status || 'pending',
                    paidDate: installment.paymentDate ? new Date(installment.paymentDate) : null
                }
            }))
        );

        return new Response(JSON.stringify({ success: true, count: createdInstallments.length }), { 
            status: 201 
        });
    } catch (error) {
        console.error("Error bulk creating installments:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), { status: 500 });
    }
}

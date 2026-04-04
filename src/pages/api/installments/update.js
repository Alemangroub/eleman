import prisma from "../../../lib/prisma.js";

export async function PATCH({ request }) {
    try {
        const { id, status, installmentAmount, dueDate, totalAmount, paidDate } = await request.json();

        if (!id) {
            return new Response(JSON.stringify({ error: "Installment ID is required" }), { status: 400 });
        }

        const updateData = {};
        if (status !== undefined) updateData.status = status;
        if (installmentAmount !== undefined) updateData.installmentAmount = installmentAmount;
        if (dueDate !== undefined) updateData.dueDate = new Date(dueDate);
        if (totalAmount !== undefined) updateData.totalAmount = totalAmount;
        if (paidDate !== undefined) updateData.paidDate = paidDate ? new Date(paidDate) : null;

        const updatedInstallment = await prisma.installment.update({
            where: { id: id },
            data: updateData
        });

        return new Response(JSON.stringify(updatedInstallment), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error updating installment:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

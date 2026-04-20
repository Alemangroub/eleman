import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { b as requireProjectAccess } from '../../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../../renderers.mjs';

async function PATCH({ request }) {
    try {
        const { id, status, installmentAmount, dueDate, totalAmount, paidDate } = await request.json();

        if (!id) {
            return new Response(JSON.stringify({ error: "Installment ID is required" }), { status: 400 });
        }

        const installment = await prisma.installment.findUnique({
            where: { id },
            select: { projectId: true }
        });

        if (!installment) {
            return new Response(JSON.stringify({ error: "Installment not found" }), { status: 404 });
        }

        const { errorResponse } = await requireProjectAccess(request, installment.projectId);
        if (errorResponse) {
            return errorResponse;
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

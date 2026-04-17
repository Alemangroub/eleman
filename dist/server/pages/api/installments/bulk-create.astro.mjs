import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { b as requireProjectAccess } from '../../../chunks/server-auth_CR4aO5JM.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
    try {
        const data = await request.json();

        if (!Array.isArray(data.installments) || data.installments.length === 0) {
            return new Response(JSON.stringify({ error: "Invalid installments data" }), { status: 400 });
        }

        const projectId = data.installments[0]?.projectId;
        if (!projectId || data.installments.some(installment => installment.projectId !== projectId)) {
            return new Response(JSON.stringify({ error: "Invalid project scope" }), { status: 400 });
        }

        const { errorResponse } = await requireProjectAccess(request, projectId);
        if (errorResponse) {
            return errorResponse;
        }

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
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

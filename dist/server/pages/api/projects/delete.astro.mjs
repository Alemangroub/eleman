import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { r as requireAdmin } from '../../../chunks/server-auth_CR4aO5JM.mjs';
export { renderers } from '../../../renderers.mjs';

async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { id } = await request.json();
        
        if (!id) {
            return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
        }

        await prisma.projectSupervisor.deleteMany({ where: { projectId: id } });
        await prisma.agreement.deleteMany({ where: { projectId: id } });
        await prisma.dailyExpense.deleteMany({ where: { projectId: id } });
        await prisma.dailyReport.deleteMany({ where: { projectId: id } });
        await prisma.expenseReport.deleteMany({ where: { projectId: id } });
        await prisma.installment.deleteMany({ where: { projectId: id } });
        await prisma.item.deleteMany({ where: { projectId: id } });
        await prisma.leftoversReport.deleteMany({ where: { projectId: id } });
        await prisma.projectImport.deleteMany({ where: { projectId: id } });
        await prisma.remainsLog.deleteMany({ where: { projectId: id } });

        await prisma.project.delete({
            where: { id: id }
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Error deleting project:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

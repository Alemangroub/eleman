import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { b as requireProjectAccess, d as requireAuthenticatedUser } from '../../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../../renderers.mjs';

async function GET({ request, url }) {
    const projectId = url.searchParams.get('projectId');
    
    try {
        if (projectId) {
            const { errorResponse } = await requireProjectAccess(request, projectId);
            if (errorResponse) {
                return errorResponse;
            }
        } else {
            const { errorResponse, user } = requireAuthenticatedUser(request);
            if (errorResponse) {
                return errorResponse;
            }

            if (user.role !== 'admin') {
                return new Response(JSON.stringify({ error: "غير مسموح" }), { status: 403 });
            }
        }

        const whereClause = {
            status: 'pending',
        };

        if (projectId) {
            whereClause.projectId = projectId;
        } else {
            whereClause.project = { archived: false };
        }

        const pendingInstallments = await prisma.installment.findMany({
            where: whereClause,
            include: { project: true }
        });

        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);

        const overdue = [];
        const upcoming = [];

        pendingInstallments.forEach(inst => {
            const dueDate = new Date(inst.dueDate);
            dueDate.setHours(0, 0, 0, 0);

            const diffDays = Math.round((dueDate - startOfToday) / (1000 * 60 * 60 * 24));

            const instData = {
                id: inst.id,
                projectId: inst.projectId,
                projectName: inst.project?.projectName || '',
                customerName: inst.customerName,
                customerPhone: inst.customerPhone,
                unitLocation: inst.unitLocation,
                installmentAmount: inst.installmentAmount,
                dueDate: inst.dueDate,
                days: Math.abs(diffDays)
            };

            if (diffDays < 0) {
                overdue.push(instData);
            } else if (diffDays >= 0 && diffDays <= 7) {
                upcoming.push(instData);
            }
        });

        return new Response(JSON.stringify({ 
            overdue, 
            upcoming, 
            count: overdue.length + upcoming.length 
        }), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error("Error fetching installment notifications:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

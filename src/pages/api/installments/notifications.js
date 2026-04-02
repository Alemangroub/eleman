import prisma from "../../../lib/prisma.js";

export async function GET({ url }) {
    const projectId = url.searchParams.get('projectId');
    
    try {
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
                projectName: inst.project.projectName,
                customerName: inst.customerName,
                customerPhone: inst.customerPhone,
                unitLocation: inst.unitLocation,
                installmentAmount: inst.installmentAmount,
                dueDate: inst.dueDate.toISOString()
            };

            if (diffDays < 0) {
                overdue.push({ ...instData, days: Math.abs(diffDays) });
            } else if (diffDays >= 0 && diffDays <= 7) {
                upcoming.push({ ...instData, days: diffDays });
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

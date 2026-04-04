import prisma from "../../../lib/prisma.js";

export async function GET({ url }) {
    const projectId = url.searchParams.get('projectId');
    
    try {
        const whereClause = {
            status: 'pending',
        };

        // Use unitId instead of projectId for the actual database structure
        if (projectId) {
            whereClause.unitId = projectId;
        }

        const pendingInstallments = await prisma.installment.findMany({
            where: whereClause
        });

        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);

        const overdue = [];
        const upcoming = [];

        pendingInstallments.forEach(inst => {
            const dueDate = new Date(inst.dueDate);
            dueDate.setHours(0, 0, 0, 0);

            const daysDiff = Math.floor((dueDate - startOfToday) / (1000 * 60 * 60 * 24));

            if (daysDiff < 0) {
                overdue.push({
                    ...inst,
                    daysOverdue: Math.abs(daysDiff)
                });
            } else if (daysDiff <= 7) {
                upcoming.push({
                    ...inst,
                    daysUntilDue: daysDiff
                });
            }
        });

        return new Response(JSON.stringify({
            overdue,
            upcoming,
            total: overdue.length + upcoming.length
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

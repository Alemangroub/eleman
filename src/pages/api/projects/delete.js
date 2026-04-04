import prisma from "../../../lib/prisma.js";

export async function POST({ request }) {
    try {
        const { id } = await request.json();
        
        if (!id) {
            return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
        }

        // First, delete all related records that exist in the database
        // Use try-catch for each table to handle missing tables/columns
        
        try {
            await prisma.projectSupervisor.deleteMany({
                where: { projectId: id }
            });
        } catch (error) {
            console.log("ProjectSupervisor table doesn't exist or missing projectId column, skipping...");
        }

        try {
            await prisma.dailyExpense.deleteMany({
                where: { projectId: id }
            });
        } catch (error) {
            console.log("DailyExpense table doesn't exist or missing projectId column, skipping...");
        }

        try {
            await prisma.dailyReport.deleteMany({
                where: { projectId: id }
            });
        } catch (error) {
            console.log("DailyReport table doesn't exist or missing projectId column, skipping...");
        }

        try {
            await prisma.installment.deleteMany({
                where: { unitId: id }  // Changed from projectId to unitId
            });
        } catch (error) {
            console.log("Installment table doesn't exist or missing unitId column, skipping...");
        }

        try {
            await prisma.item.deleteMany({
                where: { projectId: id }
            });
        } catch (error) {
            console.log("Item table doesn't exist or missing projectId column, skipping...");
        }

        try {
            await prisma.unit.deleteMany({
                where: { projectId: id }
            });
        } catch (error) {
            console.log("Unit table doesn't exist or missing projectId column, skipping...");
        }

        // Finally, delete the project
        await prisma.project.delete({
            where: { id: id }
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Error deleting project:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), { status: 500 });
    }
}


import prisma from "../../../lib/prisma.js";

export const prerender = false;

export async function GET({ url }) {
    const projectId = url.searchParams.get('projectId');
    
    if (!projectId) {
        return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
    }

    try {
        const imports = await prisma.projectImport.findMany({
            where: { projectId: projectId },
            orderBy: { date: 'desc' }
        });
        return new Response(JSON.stringify(imports), { status: 200 });
    } catch (error) {
        console.error("Error fetching imports:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

export async function POST({ request }) {
    try {
        const data = await request.json();
        const { projectId, name, quantity, unitPrice, price, supplier, date, notes } = data;

        if (!projectId || !name) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const newImport = await prisma.projectImport.create({
            data: {
                projectId,
                name,
                quantity: parseFloat(quantity),
                unitPrice: parseFloat(unitPrice),
                price: parseFloat(price),
                supplier,
                date: new Date(date),
                notes
            }
        });

        return new Response(JSON.stringify(newImport), { status: 201 });
    } catch (error) {
        console.error("Error creating import:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

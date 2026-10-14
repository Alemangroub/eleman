import prisma from "../../../lib/prisma.js";

export const prerender = false;

export async function GET({ url }) {
    const projectId = url.searchParams.get('projectId');
    if (!projectId) {
        return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
    }
    try {
        const items = await prisma.item.findMany({
            where: { projectId },
            orderBy: { createdAt: 'desc' }
        });
        const formatted = items.map(item => ({
            ...item,
            createdAt: item.createdAt.toLocaleDateString('en-CA')
        }));
        return new Response(JSON.stringify(formatted), { status: 200 });
    } catch (error) {
        console.error("Error fetching items:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

export async function POST({ request }) {
    try {
        const data = await request.json();
        const { projectId, name, totalPrice, floor, notes, specificName, pricePerMeter, area, quantity, pricePerUnit, unit, createdAt } = data;

        if (!projectId || !name || totalPrice === undefined || !floor) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const itemData = {
            projectId,
            name,
            totalPrice: parseFloat(totalPrice),
            floor: String(floor),
            notes: notes || null,
            specificName: specificName || null,
            pricePerMeter: pricePerMeter ? parseFloat(pricePerMeter) : null,
            area: area ? parseFloat(area) : null,
            quantity: quantity ? parseFloat(quantity) : null,
            pricePerUnit: pricePerUnit ? parseFloat(pricePerUnit) : null,
            unit: unit || null,
            createdAt: createdAt ? new Date(createdAt) : new Date()
        };

        const newItem = await prisma.item.create({ data: itemData });
        return new Response(JSON.stringify({
            ...newItem,
            createdAt: newItem.createdAt.toLocaleDateString('en-CA')
        }), { status: 201 });
    } catch (error) {
        console.error("Error creating item:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), { status: 500 });
    }
}

import prisma from "../../../lib/prisma.js";
import { requireAdmin } from "../../../lib/server-auth.js";

export const prerender = false;

export async function PUT({ params, request }) {
    const { id } = params;
    try {
        const data = await request.json();
        const updateData = {};

        if (data.name !== undefined) updateData.name = data.name;
        if (data.totalPrice !== undefined) updateData.totalPrice = parseFloat(data.totalPrice);
        if (data.floor !== undefined) updateData.floor = String(data.floor);
        if (data.notes !== undefined) updateData.notes = data.notes || null;
        if (data.specificName !== undefined) updateData.specificName = data.specificName || null;
        if (data.pricePerMeter !== undefined) updateData.pricePerMeter = data.pricePerMeter ? parseFloat(data.pricePerMeter) : null;
        if (data.area !== undefined) updateData.area = data.area ? parseFloat(data.area) : null;
        if (data.quantity !== undefined) updateData.quantity = data.quantity ? parseFloat(data.quantity) : null;
        if (data.pricePerUnit !== undefined) updateData.pricePerUnit = data.pricePerUnit ? parseFloat(data.pricePerUnit) : null;
        if (data.unit !== undefined) updateData.unit = data.unit || null;
        if (data.createdAt !== undefined) updateData.createdAt = new Date(data.createdAt);

        const updatedItem = await prisma.item.update({
            where: { id },
            data: updateData
        });

        return new Response(JSON.stringify({
            ...updatedItem,
            createdAt: updatedItem.createdAt.toLocaleDateString('en-CA')
        }), { status: 200 });
    } catch (error) {
        console.error("Error updating item:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

export async function POST({ params, request }) {
    const { id } = params;
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        await prisma.item.delete({ where: { id } });
        return new Response(JSON.stringify({ message: "Item deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting item:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

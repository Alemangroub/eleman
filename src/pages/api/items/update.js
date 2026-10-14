import prisma from "../../../lib/prisma.js";
import { requireAdmin } from "../../../lib/server-auth.js";

export const prerender = false;

export async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const data = await request.json();
        const { id, name, totalPrice, floor, notes, specificName, pricePerMeter, area, quantity, pricePerUnit, unit, createdAt } = data;

        if (!id) {
            return new Response(JSON.stringify({ error: "Item ID is required" }), { status: 400 });
        }

        const updatedItem = await prisma.item.update({
            where: { id },
            data: {
                name,
                totalPrice: parseFloat(totalPrice),
                floor: String(floor),
                notes,
                specificName,
                pricePerMeter: pricePerMeter ? parseFloat(pricePerMeter) : null,
                area: area ? parseFloat(area) : null,
                quantity: quantity ? parseFloat(quantity) : null,
                pricePerUnit: pricePerUnit ? parseFloat(pricePerUnit) : null,
                unit,
                createdAt: createdAt ? new Date(createdAt) : undefined
            }
        });

        return new Response(JSON.stringify(updatedItem), { status: 200 });
    } catch (error) {
        console.error("Error updating item:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

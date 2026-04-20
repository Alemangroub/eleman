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
        const { id, name, quantity, unitPrice, price, supplier, date, notes } = data;

        if (!id) {
            return new Response(JSON.stringify({ error: "Import ID is required" }), { status: 400 });
        }

        const updatedImport = await prisma.projectImport.update({
            where: { id },
            data: {
                name,
                quantity: parseFloat(quantity),
                unitPrice: parseFloat(unitPrice),
                price: parseFloat(price),
                supplier,
                date: new Date(date),
                notes
            }
        });

        return new Response(JSON.stringify(updatedImport), { status: 200 });
    } catch (error) {
        console.error("Error updating import:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

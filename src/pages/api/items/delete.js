import prisma from "../../../lib/prisma.js";
import { requireAdmin } from "../../../lib/server-auth.js";

export const prerender = false;

export async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { itemId } = await request.json();

        if (!itemId) {
            return new Response(JSON.stringify({ error: "Item ID is required" }), { status: 400 });
        }

        await prisma.item.delete({ where: { id: itemId } });
        return new Response(JSON.stringify({ message: "Item deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting item:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

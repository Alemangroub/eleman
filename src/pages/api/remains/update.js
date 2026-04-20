import prisma from "../../../lib/prisma.js";
import { requireAdmin } from "../../../lib/server-auth.js";

export const prerender = false;

export async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { id, subType, quantity, notes } = await request.json();

        if (!id) {
            return new Response(JSON.stringify({ error: "Log ID is required" }), { status: 400 });
        }

        const updatedLog = await prisma.remainsLog.update({
            where: { id },
            data: {
                subType,
                quantity: parseFloat(quantity),
                notes
            }
        });

        return new Response(JSON.stringify(updatedLog), { status: 200 });
    } catch (error) {
        console.error("Error updating remains log:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

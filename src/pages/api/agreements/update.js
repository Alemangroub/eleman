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
        const { id, floor, date, total, details } = data;

        if (!id) {
            return new Response(JSON.stringify({ error: "Agreement ID is required" }), { status: 400 });
        }

        const updatedAgreement = await prisma.agreement.update({
            where: { id },
            data: {
                floor: String(floor),
                date: new Date(date),
                total: parseFloat(total),
                details
            }
        });

        return new Response(JSON.stringify(updatedAgreement), { status: 200 });
    } catch (error) {
        console.error("Error updating agreement:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

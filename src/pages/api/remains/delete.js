import prisma from "../../../lib/prisma.js";
import { requireAdmin } from "../../../lib/server-auth.js";

export const prerender = false;

export async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const { id } = await request.json();

        if (!id) {
            return new Response(JSON.stringify({ error: "Log ID is required" }), { status: 400 });
        }

        await prisma.remainsLog.delete({ where: { id } });
        return new Response(JSON.stringify({ message: "Log deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting remains log:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

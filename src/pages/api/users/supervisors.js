import prisma from "../../../lib/prisma.js";

export async function GET() {
    try {
        const supervisors = await prisma.user.findMany({
            where: { role: 'supervisor' },
            select: { id: true, name: true }
        });

        return new Response(JSON.stringify(supervisors), { status: 200 });
    } catch (error) {
        console.error("Error fetching supervisors:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

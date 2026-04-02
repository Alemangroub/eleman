import prisma from "../../../lib/prisma.js";

export async function POST({ request }) {
    try {
        const { id } = await request.json();

        if (!id) {
            return new Response(JSON.stringify({ error: "User ID is required" }), { status: 400 });
        }

        // Delete related project supervisor entries first
        await prisma.projectSupervisor.deleteMany({ where: { userId: id } });
        await prisma.user.delete({ where: { id } });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Error deleting user:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

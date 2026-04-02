
import prisma from "../../../lib/prisma.js";

export const prerender = false;

export async function PUT({ params, request }) {
    const { id } = params;
    try {
        const data = await request.json();
        const { name, quantity, unitPrice, price, supplier, date, notes } = data;

        const updatedImport = await prisma.projectImport.update({
            where: { id: id },
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

export async function DELETE({ params }) {
    const { id } = params;
    try {
        await prisma.projectImport.delete({
            where: { id: id }
        });
        return new Response(JSON.stringify({ message: "Import deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting import:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

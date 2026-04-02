
import prisma from "../../../lib/prisma.js";

export const prerender = false;

export async function PUT({ params, request }) {
    const { id } = params;
    if (!id) {
        return new Response(JSON.stringify({ error: "ID is required" }), { status: 400 });
    }

    try {
        const data = await request.json();
        const { 
            title, mainCategory, agreedWith, date, total, 
            details, notes, area, pricePerMeter, quantity, price 
        } = data;

        const updatedAgreement = await prisma.agreement.update({
            where: { id: id },
            data: {
                title,
                mainCategory,
                agreedWith,
                date: date ? new Date(date) : undefined,
                total: total ? parseFloat(total) : undefined,
                details,
                notes,
                area: area ? parseFloat(area) : undefined,
                pricePerMeter: pricePerMeter ? parseFloat(pricePerMeter) : undefined,
                quantity: quantity ? parseFloat(quantity) : undefined,
                price: price ? parseFloat(price) : undefined
            }
        });

        return new Response(JSON.stringify(updatedAgreement), { status: 200 });
    } catch (error) {
        console.error("Error updating agreement:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

export async function DELETE({ params }) {
    const { id } = params;
    if (!id) {
        return new Response(JSON.stringify({ error: "ID is required" }), { status: 400 });
    }

    try {
        await prisma.agreement.delete({
            where: { id: id }
        });
        return new Response(null, { status: 204 });
    } catch (error) {
        console.error("Error deleting agreement:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

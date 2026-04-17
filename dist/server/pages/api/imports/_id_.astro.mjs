import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function PUT({ params, request }) {
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

async function DELETE({ params }) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    DELETE,
    PUT,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

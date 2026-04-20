import { p as prisma } from '../../../chunks/prisma_DflsjPUV.mjs';
import { r as requireAdmin } from '../../../chunks/server-auth_DXOJNl0z.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

async function POST({ request }) {
    try {
        const { errorResponse } = requireAdmin(request);
        if (errorResponse) {
            return errorResponse;
        }

        const data = await request.json();
        const { id, name, totalPrice, floor, notes, specificName, pricePerMeter, area, quantity, pricePerUnit, unit, createdAt } = data;

        if (!id) {
            return new Response(JSON.stringify({ error: "Item ID is required" }), { status: 400 });
        }

        const updatedItem = await prisma.item.update({
            where: { id },
            data: {
                name,
                totalPrice: parseFloat(totalPrice),
                floor: String(floor),
                notes,
                specificName,
                pricePerMeter: pricePerMeter ? parseFloat(pricePerMeter) : null,
                area: area ? parseFloat(area) : null,
                quantity: quantity ? parseFloat(quantity) : null,
                pricePerUnit: pricePerUnit ? parseFloat(pricePerUnit) : null,
                unit,
                createdAt: createdAt ? new Date(createdAt) : undefined
            }
        });

        return new Response(JSON.stringify(updatedItem), { status: 200 });
    } catch (error) {
        console.error("Error updating item:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

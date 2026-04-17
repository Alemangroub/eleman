import { p as prisma } from '../../chunks/prisma_DflsjPUV.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;

async function GET({ url }) {
    const projectId = url.searchParams.get('projectId');
    
    if (!projectId) {
        return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
    }

    try {
        const agreements = await prisma.agreement.findMany({
            where: { projectId: projectId },
            orderBy: { date: 'desc' }
        });
        return new Response(JSON.stringify(agreements), { status: 200 });
    } catch (error) {
        console.error("Error fetching agreements:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

async function POST({ request }) {
    try {
        const data = await request.json();
        const { 
            projectId, title, mainCategory, agreedWith, floor, date, total, 
            details, notes, area, pricePerMeter, quantity, price 
        } = data;

        if (!projectId || !title || !mainCategory) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const newAgreement = await prisma.agreement.create({
            data: {
                projectId,
                title,
                mainCategory,
                agreedWith: agreedWith || null,
                floor: floor || null,
                date: new Date(date),
                total: parseFloat(total),
                details,
                notes,
                area: area ? parseFloat(area) : null,
                pricePerMeter: pricePerMeter ? parseFloat(pricePerMeter) : null,
                quantity: quantity ? parseFloat(quantity) : null,
                price: price ? parseFloat(price) : null
            }
        });

        return new Response(JSON.stringify(newAgreement), { status: 201 });
    } catch (error) {
        console.error("Error creating agreement:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

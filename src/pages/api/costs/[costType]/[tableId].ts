
import { db } from "../../../../../firebase/admin";
import type { APIRoute } from 'astro';

// PUT Method to update a specific table
export const PUT: APIRoute = async ({ params, request }) => {
    const { costType, tableId } = params;

    if (!costType || !tableId) {
        return new Response('Bad Request', { status: 400 });
    }

    try {
        const updates = await request.json();
        await db.collection(`${costType}_tables`).doc(tableId).update(updates);

        return new Response(null, { status: 204 }); // No Content

    } catch (error) {
        console.error(`Failed to update table ${tableId}:`, error);
        return new Response('Internal Server Error', { status: 500 });
    }
};

// DELETE Method to delete a specific table
export const DELETE: APIRoute = async ({ params }) => {
    const { costType, tableId } = params;

    if (!costType || !tableId) {
        return new Response('Bad Request', { status: 400 });
    }

    try {
        await db.collection(`${costType}_tables`).doc(tableId).delete();
        return new Response(null, { status: 204 }); // No Content

    } catch (error) {
        console.error(`Failed to delete table ${tableId}:`, error);
        return new Response('Internal Server Error', { status: 500 });
    }
};

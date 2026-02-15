
import { db } from "../../../../firebase/admin";
import type { APIRoute } from 'astro';

// GET Method to fetch all tables for a specific cost type and project
export const GET: APIRoute = async ({ params, request }) => {
    const { costType } = params;
    const url = new URL(request.url);
    const projectId = url.searchParams.get('projectId');

    if (!costType || !projectId) {
        return new Response('Bad Request: Missing costType or projectId', { status: 400 });
    }

    try {
        const tablesSnapshot = await db.collection(`${costType}_tables`).where('projectId', '==', projectId).get();
        const tables = tablesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return new Response(JSON.stringify(tables), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error(`Failed to fetch tables for ${costType}:`, error);
        return new Response('Internal Server Error', { status: 500 });
    }
};

// POST Method to create a new table for a specific cost type and project
export const POST: APIRoute = async ({ params, request }) => {
    const { costType } = params;
    
    if (!costType) {
        return new Response('Bad Request: Missing costType', { status: 400 });
    }

    try {
        const { name, projectId } = await request.json();
        if (!name || !projectId) {
            return new Response('Bad Request: Missing name or projectId in body', { status: 400 });
        }

        const newTableRef = await db.collection(`${costType}_tables`).add({
            name,
            projectId,
            rows: []
        });

        const newTable = {
             id: newTableRef.id,
             name,
             projectId,
             rows: []
        };

        return new Response(JSON.stringify(newTable), {
            status: 201, // Created
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error(`Failed to create table in ${costType}:`, error);
        return new Response('Internal Server Error', { status: 500 });
    }
};

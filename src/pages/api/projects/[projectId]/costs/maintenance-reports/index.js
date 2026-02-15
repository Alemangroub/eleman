
import { db } from "../../../../../../firebase/admin";

// GET: /api/projects/{projectId}/costs/maintenance-reports
export const GET = async ({ params }) => {
    const { projectId } = params;
    try {
        const tablesSnapshot = await db.collection('maintenance_reports_tables')
            .where('projectId', '==', projectId)
            .orderBy('createdAt', 'asc')
            .get();
        
        const tables = tablesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return new Response(JSON.stringify(tables), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error fetching maintenance reports tables:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch data" }), { status: 500 });
    }
};

// POST: /api/projects/{projectId}/costs/maintenance-reports
export const POST = async ({ request, params }) => {
    const { projectId } = params;
    try {
        const { name } = await request.json();
        if (!name) {
            return new Response(JSON.stringify({ error: "Table name is required" }), { status: 400 });
        }

        const newTable = {
            projectId,
            name,
            rows: [],
            createdAt: new Date()
        };

        const docRef = await db.collection('maintenance_reports_tables').add(newTable);
        const createdTable = { id: docRef.id, ...newTable };
        
        delete createdTable.createdAt;

        return new Response(JSON.stringify(createdTable), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error("Error creating maintenance reports table:", error);
        return new Response(JSON.stringify({ error: "Failed to create table" }), { status: 500 });
    }
};

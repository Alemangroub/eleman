
import { db } from "../../../../../../firebase/admin";

// PUT: /api/projects/{projectId}/costs/electricity-wages/{tableId}
export const PUT = async ({ params, request }) => {
    const { tableId } = params;
    try {
        const updates = await request.json();
        await db.collection('electricity_wages_tables').doc(tableId).update({
            ...updates,
            updatedAt: new Date()
        });
        return new Response(JSON.stringify({ message: "Table updated successfully" }), { status: 200 });
    } catch (error) {
        console.error(`Error updating table ${tableId}:`, error);
        return new Response(JSON.stringify({ error: "Failed to update table" }), { status: 500 });
    }
};


// DELETE: /api/projects/{projectId}/costs/electricity-wages/{tableId}
export const DELETE = async ({ params }) => {
    const { tableId } = params;
    try {
        await db.collection('electricity_wages_tables').doc(tableId).delete();
        return new Response(JSON.stringify({ message: "Table deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error(`Error deleting table ${tableId}:`, error);
        return new Response(JSON.stringify({ error: "Failed to delete table" }), { status: 500 });
    }
};

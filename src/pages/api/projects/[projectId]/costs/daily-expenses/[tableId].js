
import { db } from "../../../../../../firebase/admin";

// PUT: /api/projects/{projectId}/costs/daily-expenses/{tableId}
// Updates a specific daily expense table (e.g., its name or rows)
export const PUT = async ({ params, request }) => {
    const { tableId } = params;
    try {
        const updates = await request.json();

        // You might want to add validation for the updates object here

        await db.collection('daily_expenses_tables').doc(tableId).update({
            ...updates,
            updatedAt: new Date() // Keep track of updates
        });

        return new Response(JSON.stringify({ message: "Table updated successfully" }), {
            status: 200
        });

    } catch (error) {
        console.error(`Error updating table ${tableId}:`, error);
        return new Response(JSON.stringify({ error: "Failed to update table" }), { status: 500 });
    }
};


// DELETE: /api/projects/{projectId}/costs/daily-expenses/{tableId}
// Deletes a specific daily expense table
export const DELETE = async ({ params }) => {
    const { tableId } = params;
    try {
        await db.collection('daily_expenses_tables').doc(tableId).delete();

        return new Response(JSON.stringify({ message: "Table deleted successfully" }), {
            status: 200
        });

    } catch (error) {
        console.error(`Error deleting table ${tableId}:`, error);
        return new Response(JSON.stringify({ error: "Failed to delete table" }), { status: 500 });
    }
};

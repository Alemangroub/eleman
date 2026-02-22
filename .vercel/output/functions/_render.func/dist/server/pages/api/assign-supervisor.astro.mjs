import { d as db } from '../../chunks/admin_CBgMA4DX.mjs';
import admin from 'firebase-admin';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
    // CRITICAL CHECK: If the db connection failed during startup, refuse to proceed.
    if (!db) {
        console.error("❌ API Error: Cannot process request because the database connection (db) is null.");
        return new Response(JSON.stringify({
            message: "Server configuration error.",
            error: "The database connection is not available. Check the server logs for Firebase initialization errors."
        }), { status: 500 });
    }

    try {
        const { projectId, supervisorId, supervisorName } = await request.json();

        if (!projectId || !supervisorId || !supervisorName) {
            return new Response(JSON.stringify({ message: "Incomplete data provided.", error: "Missing projectId, supervisorId, or supervisorName." }), { status: 400 });
        }

        const projectRef = db.collection("projects").doc(projectId);

        // The robust `set` with `merge` operation.
        await projectRef.set({
            supervisors: admin.firestore.FieldValue.arrayUnion({
                id: supervisorId,
                name: supervisorName,
            })
        }, { merge: true });

        // On success, return a clear success message.
        return new Response(JSON.stringify({ message: "Supervisor assigned successfully!" }), { status: 200 });

    } catch (error) {
        console.error("API Error during supervisor assignment:", error);
        return new Response(JSON.stringify({ 
            message: "An internal error occurred during the assignment process.",
            error: error.message 
        }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

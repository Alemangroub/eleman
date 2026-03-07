import { g as getAdminDb } from '../../chunks/server_4KkNjuaU.mjs';
import { FieldValue } from 'firebase-admin/firestore';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
    try {
        const adminDb = getAdminDb();
        const { projectId, supervisorId } = await request.json();

        if (!projectId || !supervisorId) {
            return new Response(JSON.stringify({ error: "Incomplete data provided. Missing projectId or supervisorId." }), { status: 400 });
        }

        const projectRef = adminDb.collection("projects").doc(projectId);
        
        // Atomically add the new supervisor ID to the `supervisorIds` array.
        await projectRef.update({
            supervisorIds: FieldValue.arrayUnion(supervisorId)
        });

        return new Response(JSON.stringify({ message: "Supervisor assigned successfully!" }), { status: 200 });

    } catch (error) {
        console.error("API Error during supervisor assignment:", error);
         let errorMessage = "An internal error occurred during the assignment process.";
         if (error.message.includes('Firebase Admin SDK is not available')) {
            errorMessage = 'Firebase Admin SDK initialization failed on the server. Check environment variables.';
        }
        return new Response(JSON.stringify({ 
            error: errorMessage, 
            details: error.message 
        }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

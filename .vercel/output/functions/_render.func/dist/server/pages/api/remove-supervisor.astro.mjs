import { d as db } from '../../chunks/admin_CBgMA4DX.mjs';
import admin from 'firebase-admin';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
    if (request.headers.get("Content-Type") !== "application/json") {
        return new Response(JSON.stringify({ message: "Content-Type must be application/json" }), { status: 400 });
    }

    try {
        const { projectId, supervisorId } = await request.json();

        if (!projectId || !supervisorId) {
            return new Response(JSON.stringify({ message: "Project ID and Supervisor ID are required" }), { status: 400 });
        }

        const projectRef = db.collection("projects").doc(projectId);
        const supervisorRef = db.collection("users").doc(supervisorId);

        const supervisorDoc = await supervisorRef.get();
        if (!supervisorDoc.exists) {
             return new Response(JSON.stringify({ message: "Supervisor not found" }), { status: 404 });
        }

        const supervisorData = supervisorDoc.data();

        // Use the imported 'admin' object to access FieldValue
        await projectRef.update({
            supervisors: admin.firestore.FieldValue.arrayRemove({
                id: supervisorId,
                name: supervisorData.name, 
            }),
        });

        return new Response(JSON.stringify({ message: "Supervisor removed successfully" }), { status: 200 });

    } catch (error) {
        console.error("Error removing supervisor:", error);
        return new Response(JSON.stringify({ message: "An internal server error occurred" }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

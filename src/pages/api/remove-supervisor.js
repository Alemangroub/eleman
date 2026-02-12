import { db, admin } from "../../firebase/admin.js"; // CORRECTED: Import 'admin' from the local Firebase admin setup

export async function POST({ request }) {
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

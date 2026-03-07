import { g as getAdminDb } from '../../../chunks/server_4KkNjuaU.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;

// This is an API route in Astro, designed to run securely on the server.
// It receives a project ID, fetches its details from Firestore using the Admin SDK,
// and returns the data as JSON. This is the secure way to expose sensitive data to the client.

async function GET({ params }) {
    const { id } = params;

    if (!id) {
        return new Response(JSON.stringify({ error: "Project ID is required" }), { status: 400 });
    }

    try {
        const adminDb = getAdminDb();
        const projectDoc = await adminDb.collection('projects').doc(id).get();

        if (!projectDoc.exists) {
            return new Response(JSON.stringify({ error: "Project not found" }), { status: 404 });
        }

        const projectData = projectDoc.data();

        // Fetch related data concurrently for better performance.
        const [supervisorsSnap, expensesSnap, dailyReportsSnap, leftoversSnap] = await Promise.all([
            Promise.all((projectData.supervisorIds || []).map(sid => adminDb.collection('users').doc(sid).get())),
            adminDb.collection('daily_expenses').where('projectId', '==', id).where('isRead', '==', false).get(),
            adminDb.collection('daily_reports').where('projectId', '==', id).where('isRead', '==', false).get(),
            adminDb.collection('leftovers_reports').where('projectId', '==', id).where('isRead', '==', false).get()
        ]);

        const supervisorNames = supervisorsSnap.map(doc => doc.exists ? doc.data().name : 'مشرف محذوف');

        const projectDetails = { 
            id: projectDoc.id, 
            projectName: projectData.projectName || 'اسم غير متوفر',
            projectAddress: projectData.projectAddress || 'عنوان غير محدد',
            supervisors: supervisorNames,
            unreadExpenseReports: expensesSnap.size,
            unreadDailyReports: dailyReportsSnap.size,
            unreadLeftoversReports: leftoversSnap.size,
        };

        return new Response(JSON.stringify(projectDetails), { 
            status: 200, 
            headers: { "Content-Type": "application/json" } 
        });

    } catch (error) {
        console.error("API Route Error fetching project details:", error);
        let errorMessage = "Internal Server Error";
        if (error.message.includes('Firebase Admin SDK is not available')) {
            errorMessage = 'Firebase Admin SDK initialization failed on the server. Check environment variables.';
        }
        return new Response(JSON.stringify({ error: errorMessage, details: error.message }), { status: 500 });
    }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

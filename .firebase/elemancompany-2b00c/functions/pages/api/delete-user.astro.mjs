import { a as getAdminAuth, g as getAdminDb } from '../../chunks/server_4KkNjuaU.mjs';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  console.log('[api/delete-user] Received request');

  const adminAuth = getAdminAuth();
  const adminDb = getAdminDb();

  if (!adminAuth || !adminDb) {
    const errorMessage = 'Firebase Admin SDK initialization failed on the server. Check environment variables.';
    console.error('[api/delete-user] FATAL: ', errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
      console.error('[api/delete-user] Unauthorized: No Authorization header');
      return new Response(JSON.stringify({ error: 'Unauthorized: No Authorization header provided' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }

    const idToken = authHeader.split('Bearer ')[1];
    if (!idToken) {
      console.error('[api/delete-user] Unauthorized: No token in header');
      return new Response(JSON.stringify({ error: 'Unauthorized: No token provided' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }

    let decodedToken;
    try {
      decodedToken = await adminAuth.verifyIdToken(idToken);
      console.log(`[api/delete-user] Request authenticated for admin UID: ${decodedToken.uid}`);
    } catch (error) {
      console.error('[api/delete-user] Token verification failed:', JSON.stringify(error, null, 2));
      return new Response(JSON.stringify({ error: 'Unauthorized: Invalid token' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }

    const adminDocRef = adminDb.collection('users').doc(decodedToken.uid);
    const adminDoc = await adminDocRef.get();

    if (!adminDoc.exists || adminDoc.data().role !== 'admin') {
      console.error(`[api/delete-user] Forbidden: User ${decodedToken.uid} is not an admin.`);
      return new Response(JSON.stringify({ error: 'Forbidden: User is not an admin' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
    }

    const { uid } = await request.json();
    if (!uid) {
      console.error('[api/delete-user] Bad Request: UID is required');
      return new Response(JSON.stringify({ error: 'Bad Request: UID is required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    console.log(`[api/delete-user] Attempting to delete user UID: ${uid}`);
    
    if (decodedToken.uid === uid) {
      console.error(`[api/delete-user] Forbidden: Admin ${uid} cannot delete their own account.`);
      return new Response(JSON.stringify({ error: 'Forbidden: Admins cannot delete their own account' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
    }

    // Step 1: Delete from Firebase Authentication
    console.log(`[api/delete-user] Step 1: Deleting user ${uid} from Firebase Authentication.`);
    await adminAuth.deleteUser(uid);
    console.log(`[api/delete-user] Step 1 SUCCESS: User ${uid} deleted from Authentication.`);

    // Step 2: Delete from Firestore
    console.log(`[api/delete-user] Step 2: Deleting user ${uid} from Firestore collection 'users'.`);
    await adminDb.collection('users').doc(uid).delete();
    console.log(`[api/delete-user] Step 2 SUCCESS: User ${uid} deleted from Firestore.`);

    console.log(`[api/delete-user] Successfully deleted user ${uid}.`);
    return new Response(JSON.stringify({ message: 'User deleted successfully' }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    // This is the crucial part. We log the full error object.
    console.error('[api/delete-user] CRITICAL ERROR during user deletion process. Full error object:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    
    const errorMessage = 'Internal Server Error: Could not delete user.';
    return new Response(JSON.stringify({ 
      error: errorMessage, 
      details: error.message,
      code: error.code 
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

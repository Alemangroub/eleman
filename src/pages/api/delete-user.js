
import { getAdminAuth, getAdminDb } from '../../firebase/server.js';

export async function POST({ request }) {
  const adminAuth = getAdminAuth();
  const adminDb = getAdminDb();

  if (!adminAuth || !adminDb) {
    const errorMessage = 'Firebase Admin SDK initialization failed on the server. Check environment variables.';
    console.error('[api/delete-user]', errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
        return new Response(JSON.stringify({ error: 'Unauthorized: No Authorization header provided' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }

    const idToken = authHeader.split('Bearer ')[1];
    if (!idToken) {
      return new Response(JSON.stringify({ error: 'Unauthorized: No token provided' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }

    let decodedToken;
    try {
      decodedToken = await adminAuth.verifyIdToken(idToken);
    } catch (error) {
      console.error('[api/delete-user] Token verification failed:', error.message);
      return new Response(JSON.stringify({ error: 'Unauthorized: Invalid token' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }

    const adminDocRef = adminDb.collection('users').doc(decodedToken.uid);
    const adminDoc = await adminDocRef.get();

    if (!adminDoc.exists || adminDoc.data().role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Forbidden: User is not an admin' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
    }

    const { uid } = await request.json();
    if (!uid) {
      return new Response(JSON.stringify({ error: 'Bad Request: UID is required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    
    if (decodedToken.uid === uid) {
      return new Response(JSON.stringify({ error: 'Forbidden: Admins cannot delete their own account' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
    }

    await adminAuth.deleteUser(uid);
    await adminDb.collection('users').doc(uid).delete();

    return new Response(JSON.stringify({ message: 'User deleted successfully' }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    console.error('Error deleting user:', error);
    let errorMessage = 'Internal Server Error: Could not delete user.';
    if (error.code === 'auth/user-not-found') {
      errorMessage = 'User not found in Authentication. They may have already been deleted.';
    }

    return new Response(JSON.stringify({ error: errorMessage, details: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { b as app } from '../../chunks/server_4KkNjuaU.mjs';
export { renderers } from '../../renderers.mjs';

const auth = getAuth(app);
const db = getFirestore(app);
const POST = async ({ request, redirect }) => {
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response(
      JSON.stringify({ error: "Unauthorized: No token provided." }),
      { status: 401 }
    );
  }
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const adminDoc = await db.collection("users").doc(decodedToken.uid).get();
    if (!adminDoc.exists || adminDoc.data()?.role !== "admin") {
      return new Response(
        JSON.stringify({ error: "Unauthorized: Not an admin." }),
        { status: 403 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Unauthorized: Invalid token." }),
      { status: 401 }
    );
  }
  const { uid, name, email, role, password } = await request.json();
  if (!uid || !name || !email || !role) {
    return new Response(
      JSON.stringify({ error: "Missing required fields." }),
      { status: 400 }
    );
  }
  try {
    const authUpdates = {};
    if (email) authUpdates.email = email;
    if (password) authUpdates.password = password;
    if (Object.keys(authUpdates).length > 0) {
      await auth.updateUser(uid, authUpdates);
    }
    const firestoreUpdates = {
      name,
      email,
      role
    };
    await db.collection("users").doc(uid).update(firestoreUpdates);
    await auth.setCustomUserClaims(uid, { role });
    return new Response(JSON.stringify({ message: "User updated successfully" }), {
      status: 200
    });
  } catch (error) {
    console.error("Error updating user:", error);
    let errorMessage = "An unexpected error occurred.";
    if (error.code === "auth/email-already-exists") {
      errorMessage = "This email address is already in use by another account.";
    } else if (error.code === "auth/user-not-found") {
      errorMessage = "User not found. They may have been deleted.";
    }
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

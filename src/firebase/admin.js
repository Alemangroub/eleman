
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

let db = null;
let auth = null;
let initializationError = null;

console.log("ℹ️ [server/firebase/admin.js] Attempting to initialize Firebase Admin SDK...");

try {
  // In an Astro environment, server-side environment variables are accessed via `import.meta.env`.
  const serviceAccountConfig = import.meta.env.FIREBASE_ADMIN_SDK_CONFIG;

  if (!serviceAccountConfig) {
    throw new Error("FATAL: The FIREBASE_ADMIN_SDK_CONFIG environment variable is not set. This is required for server-side operations.");
  }

  const serviceAccount = JSON.parse(serviceAccountConfig);
  
  // Explicitly provide the projectId to ensure the SDK connects to the correct project,
  // especially in environments where the default project might not be correctly inferred.
  const projectId = "elemancompany-2b00c";

  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: projectId, // This ensures connection to the correct database region.
    });
    console.log(`✅ [server/firebase/admin.js] Firebase Admin SDK initialized for project: ${projectId}`);
  } else {
    console.log("✅ [server/firebase/admin.js] Firebase Admin SDK was already initialized.");
  }
  
  db = getFirestore();
  auth = getAuth();

} catch (error) {
  if (error instanceof SyntaxError) {
    initializationError = "FATAL: Failed to parse FIREBASE_ADMIN_SDK_CONFIG. Ensure it is a valid, unescaped JSON string.";
  } else {
    initializationError = error.message;
  }
  console.error("❌ [server/firebase/admin.js] Firebase admin initialization failed:", initializationError);
  db = null; 
  auth = null;
}

// Export the initialized services and any error that occurred.
export { db, auth, admin, initializationError };

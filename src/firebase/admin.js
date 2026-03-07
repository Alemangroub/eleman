
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

let db = null;
let auth = null;
let initializationError = null;

console.log("ℹ️ [server/firebase/admin.js] Attempting to initialize Firebase Admin SDK...");

try {
  // In a server environment like App Hosting, Node.js `process.env` is used to get runtime environment variables.
  const serviceAccountConfig = process.env.FIREBASE_ADMIN_SDK_CONFIG;

  if (!serviceAccountConfig) {
    throw new Error("FATAL: The FIREBASE_ADMIN_SDK_CONFIG environment variable is not set. This is required for server-side operations.");
  }

  // The service account is passed as a JSON string, so we need to parse it.
  const serviceAccount = JSON.parse(serviceAccountConfig);

  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    console.log("✅ [server/firebase/admin.js] Firebase Admin SDK initialized successfully.");
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

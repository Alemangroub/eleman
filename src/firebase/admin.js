
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

let db = null;
let auth = null;
let initializationError = null;

console.log("ℹ️ Attempting to initialize Firebase Admin SDK in admin.js...");

try {
  const serviceAccount = {
    projectId: import.meta.env.FIREBASE_PROJECT_ID,
    clientEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
    privateKey: import.meta.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  };

  if (!serviceAccount.projectId || !serviceAccount.clientEmail || !serviceAccount.privateKey) {
    throw new Error("Firebase credentials are not fully available in the environment.");
  }

  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    console.log("✅ Central Firebase Admin SDK initialized successfully.");
  }
  
  db = getFirestore();
  auth = getAuth();

} catch (error) {
  initializationError = error.message;
  console.error("❌ FATAL: Firebase admin initialization failed in admin.js:", initializationError);
  db = null; 
  auth = null;
}

// Export db, auth, admin, and the error message
export { db, auth, admin, initializationError };


import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

let db = null;
let initializationError = null;

console.log("ℹ️ Attempting to initialize Firebase Admin SDK in admin.js...");

try {
  const serviceAccount = {
    projectId: import.meta.env.FIREBASE_PROJECT_ID,
    clientEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
    privateKey: import.meta.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  };

  // Check for the presence of credentials before trying to initialize.
  if (!serviceAccount.projectId || !serviceAccount.clientEmail || !serviceAccount.privateKey) {
    throw new Error("Firebase credentials are not fully available in the environment.");
  }

  // Initialize only if no apps are present.
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    console.log("✅ Central Firebase Admin SDK initialized successfully.");
  }
  
  // If we reach here, an app exists (either newly created or existing).
  // It is now safe to get the Firestore instance.
  db = getFirestore();

} catch (error) {
  // If any part of the initialization fails, log the error and ensure db is null.
  initializationError = error.message;
  console.error("❌ FATAL: Firebase admin initialization failed in admin.js:", initializationError);
  db = null; 
}

// Export the db instance (which could be null) and the error message.
// This module will NO LONGER CRASH the server on failure.
export { db, initializationError };

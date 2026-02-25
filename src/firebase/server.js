
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// IMPORTANT: This file uses Astro's import.meta.env to access environment variables.
// This is the recommended way for Astro projects to ensure variables are available
// both during build and in the server-side runtime environment.

function getInitializedApp() {
    // If an app is already initialized, return it to prevent re-initialization.
    if (getApps().length > 0) {
        return getApps()[0];
    }

    // Read credentials from Astro's environment variables
    const serviceAccount = {
      projectId: import.meta.env.FIREBASE_PROJECT_ID,
      clientEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
      // The private key from environment variables often has escaped newlines.
      // We need to replace them with actual newline characters.
      privateKey: import.meta.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    };

    // Verify that all required credentials are present.
    if (!serviceAccount.projectId || !serviceAccount.clientEmail || !serviceAccount.privateKey) {
        console.error(
            '\n❌ [server.js] FIREBASE ADMIN SDK INITIALIZATION FAILED ❌\n' +
            'One or more required environment variables are missing.\n' +
            'Please ensure FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY are set in your deployment environment.\n'
        );
        // Return null if setup is incomplete to avoid crashing the server.
        return null;
    }

    try {
        // Initialize the Firebase Admin SDK with the credentials.
        console.log('[server.js] Initializing Firebase Admin SDK...');
        const app = initializeApp({
            credential: cert(serviceAccount)
        });
        console.log('✅ [server.js] Firebase Admin SDK initialized successfully.');
        return app;
    } catch (error) {
        console.error('❌ [server.js] Firebase Admin SDK initialization threw an error:', error);
        return null;
    }
}

// Export a function to get the authentication service.
// It throws a clear error if initialization failed.
export function getAdminAuth() {
    const app = getInitializedApp();
    if (!app) {
        throw new Error('Firebase Admin SDK is not available. Check server logs for initialization errors.');
    }
    return getAuth(app);
}

// Export a function to get the Firestore database service.
// It also throws a clear error if initialization failed.
export function getAdminDb() {
    const app = getInitializedApp();
    if (!app) {
        throw new Error('Firebase Admin SDK is not available. Check server logs for initialization errors.');
    }
    return getFirestore(app);
}

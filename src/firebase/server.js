import 'dotenv/config';
import admin from 'firebase-admin';

// This function ensures the admin app is initialized only once.
const getAdminApp = () => {
  // If the app is already initialized, return the existing instance.
  if (admin.apps.length > 0) {
    return admin.apps[0];
  }

  // If not initialized, initialize it now based on the environment.
  if (process.env.NODE_ENV === 'production') {
    // On App Hosting (production), GOOGLE_APPLICATION_CREDENTIALS is set automatically.
    admin.initializeApp();
  } else {
    // In local development, check for the service account key.
    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

    if (!serviceAccountKey) {
      // If the key is missing, throw a clear error.
      throw new Error(
        '[SERVER-SIDE ERROR] The FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set. ' +
        'Please ensure that your .env file exists in the project root and contains the correct service account JSON key. The server cannot start without it.'
      );
    }

    try {
      const serviceAccount = JSON.parse(serviceAccountKey);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } catch (e) {
      // If the key is not valid JSON, throw a clear error.
      throw new Error(`[SERVER-SIDE ERROR] Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY. Is it a valid JSON? Parse Error: ${e.message}`);
    }
  }

  // Return the newly initialized app.
  return admin.app();
};

// Export functions that provide the auth and firestore services on demand.
export const getAdminAuth = () => getAdminApp().auth();
export const getAdminDb = () => getAdminApp().firestore();

// Export the classic, namespaced Timestamp constructor.
export const Timestamp = admin.firestore.Timestamp;

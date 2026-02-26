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
    // The Admin SDK automatically detects and uses it.
    admin.initializeApp();
  } else {
    // In local development, Astro automatically loads .env files.
    // We retrieve the service account key from the environment variables.
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  // Return the newly initialized app.
  return admin.app();
};

// Export functions that provide the auth and firestore services on demand.
export const getAdminAuth = () => getAdminApp().auth();
export const getAdminDb = () => getAdminApp().firestore();

// Export the classic, namespaced Timestamp constructor.
// It's safe to access this before initializeApp() is called.
export const Timestamp = admin.firestore.Timestamp;
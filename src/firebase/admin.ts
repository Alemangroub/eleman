import pkg from 'firebase-admin';

try {
  if (!pkg.apps.length) {
    // Read the single environment variable for the service account config.
    const serviceAccountString = import.meta.env.FIREBASE_ADMIN_SDK_CONFIG;

    if (!serviceAccountString) {
      throw new Error('The FIREBASE_ADMIN_SDK_CONFIG environment variable is not set.');
    }

    // Parse the JSON string from the environment variable.
    const serviceAccount = JSON.parse(serviceAccountString);

    // Initialize the app with the parsed credentials.
    pkg.initializeApp({
      credential: pkg.credential.cert(serviceAccount),
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
    });

    console.log("Firebase Admin SDK initialized successfully.");
  } else {
    console.log("Firebase Admin SDK already initialized.");
  }
} catch (err: any) {
  console.error(
    '\n🚨 Firebase Admin SDK initialization failed! 🚨\n' +
    'This could be due to a missing or malformed FIREBASE_ADMIN_SDK_CONFIG environment variable in your .env file.\n' +
    'Please ensure the variable is set correctly and is a valid JSON string.\n' +
    'Remember to restart the development server after any changes to the .env file.\n' +
    'Error details:', err.message
  );
}

export const db = pkg.firestore();
export const auth = pkg.auth();

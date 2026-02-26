import pkg from 'firebase-admin';

try {
  if (!pkg.apps.length) {
    const projectId = import.meta.env.FIREBASE_PROJECT_ID;
    const clientEmail = import.meta.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = import.meta.env.FIREBASE_PRIVATE_KEY;

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error('Firebase Admin SDK environment variables are not set. Please check FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in your .env file.');
    }

    const serviceAccount = {
      projectId: projectId,
      clientEmail: clientEmail,
      privateKey: privateKey.replace(/\\n/g, '\n'),
    };

    pkg.initializeApp({
      credential: pkg.credential.cert(serviceAccount),
      databaseURL: `https://${projectId}.firebaseio.com`,
    });

    console.log("Firebase Admin SDK initialized successfully (multi-variable).");
  } else {
    console.log("Firebase Admin SDK already initialized.");
  }
} catch (err: any) {
  console.error(
    '\n🚨 Firebase Admin SDK initialization failed! 🚨\n' +
    'Please ensure the FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY environment variables are set correctly in your .env file.\n' +
    'The private key should have its newlines escaped (e.g., -----BEGIN...\\nMIIC...\\n...-----).\n' +
    'Remember to restart the development server after any changes to the .env file.\n' +
    'Error details:', err.message
  );
}

export const db = pkg.firestore();
export const auth = pkg.auth();

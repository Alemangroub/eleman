import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

let db = null;
let auth = null;
let initializationError = null;
console.log("ℹ️ Attempting to initialize Firebase Admin SDK in admin.js...");
try {
  const serviceAccount = {
    projectId: "elemancompany-2b00c",
    clientEmail: "firebase-adminsdk-fbsvc@elemancompany-2b00c.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9mR3lx3vbVtSj\n1c9XbWJoFuyBtUH7pSLW3oqOFpGFhUuDzjjhpmXJhXIO5L1sJtey+l8+PU9Gtd2J\nONMHNrGkWIgotngI0PE6zuCqJRP8LMrLqfiw8ilbkzfIu7ZsgBEnMdFnCFa27FMg\n3G0gSb6vqgZvSIyMiCGciseJysIzWihp7NWfzdi3B6w6Zu27k/o3nB/r87wMfE0u\nXOcrAUcVeR1vYGwPwQkW09vNSQqQbVjf0IXegnnlloErD9w9brDAVoSzRzR3UgXa\nj1ohZNpwp6u1PWRfH586BftK1QesF0fU3vajvBVyg2j1wPJv8WZ53T3zzhRbSQgF\ng52Euf8vAgMBAAECggEAALtSDEowTPfDm1MetKmZ6NbJz08y/Ou1l1rXzVXd9lZQ\nSYJv4Z59bMpSRLm7abQVh73M6ZXv/QfNXgEjERLYm2D7O9RrTpqL1O6gv8URk+QS\nXSXbSMeJ58BbV9RWxhxIImE7oEzQJyWTV7LEXnp1z3AswuWdkT9HQDcy5haY4WqQ\nKg7LevQenqxRb6PEJJ9m8i3UIZewg68OqV1DUTX8AvzgodLihPym3iwQltqAOr6q\nx6YXteAn0H91cwJfbbv4xmV+rfE23KIYp83QfcsSvUvUTDainAtrZY4gAAbBfo1u\nqonXlod/PWcMUQVCev+klJtckDlH4nSP9aeX5zC6yQKBgQD0sVELyHpnS49qbicd\n+UYAnjfuEoQJpKJICypYDAdPYL8HP6B/C5ZDA24x7PuJnarYMqQPmbjxL5L1txdw\nT327BRkdxjkpStvVwPP+wt9CAGhNcIMT58YGrUqYh/TPahmldyO9Zps93skqhyS1\nEbptBYocQqqhbnQ54HNtU4Z0SQKBgQDGXAntz1g2a1DRRpYQSYZL3LXKw0c/Xc1h\nUmks+DWs+uTWN8HkU3Jr4k3UnQxs9nqwEnHdLZJAjIdSTJrJ81HTvbbITM9YLbup\nS/SPdTrO7+zIkpYObC/eRMaJJEnlPTifk4LZbqMi3dQe/HM/NAN9791n8xXkaF3R\n5sNHeTfntwKBgQCkKkamsiU1IiOhEzAZUwFdLsl1Z2TAl3zs+ti447EP12eydES4\nl8yDP0zyH/2OkYJqtGcPtGG5JuLhCaqnBh3jmIMGT9RP2NJusZrBhHqG7IEN23uF\nok1gc2kFtslPUu7L7YfD7ZAfzVWHu82r0a4SsNG9LhkOX22I2wZ2BcDCSQKBgQC6\nMf8n+a/mNUpBh66pTzr+zwjecfvZIWX+autLSRqpa0GPS/t3JlWLq3w/jcPyLFPy\nHv4/Dd3xNXh46muKEhrHVZfT4TXoodU8D45bc0FmqpRrmh29IBS24Xwzk5rB0nvq\nXv8+trnvqqbJB1PvChYVCymbv/TW2JjoxWKdHs45dQKBgH+F7ODS+u/MHngjC3DG\n9G4/9r1MhlXPv8zZKiGR+R6Y+t+5Hl5dMwJ7k0ex/6hNqvL/filIFwecsaLpTuCn\nwY8G5Ts9cjREHYScfhmf1AHtUllJDqNfZ/nwO97c3f9BqYjCrNQwdiRKCLBSrxrO\nzOyIkiHTxLC4fcLTIjLtRyOC\n-----END PRIVATE KEY-----"?.replace(/\\n/g, "\n")
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

export { auth as a, db as d };

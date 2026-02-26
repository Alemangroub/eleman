
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
const serviceAccount = JSON.parse(readFileSync('./serviceAccountKey.json', 'utf8'));

function getInitializedApp() {
    if (getApps().length > 0) {
        return getApps()[0];
    }

    try {
        console.log('[server.js] Initializing Firebase Admin SDK from service account file...');
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

export function getAdminAuth() {
    const app = getInitializedApp();
    if (!app) {
        return null;
    }
    return getAuth(app);
}

export function getAdminDb() {
    const app = getInitializedApp();
    if (!app) {
        return null;
    }
    return getFirestore(app);
}

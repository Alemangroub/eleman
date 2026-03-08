
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Correct and verified Firebase configuration for the web app.
const firebaseConfig = {
    apiKey: "AIzaSyD7osMO_to93py_ypU3EiZn7AjSvNCADdM",
    authDomain: "elemancompany-2b00c.firebaseapp.com",
    projectId: "elemancompany-2b00c",
    storageBucket: "elemancompany-2b00c.firebasestorage.app",
    messagingSenderId: "842755919578",
    appId: "1:842755919578:web:0423c8f54f46ea3e6f5fe3",
    measurementId: "G-QF3C2TBTBS"
};

let app;

// Prevent Firebase from being initialized multiple times
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    console.log("✅ [client/firebase/client.js] Firebase initialized for the first time.");
} else {
    app = getApp();
    console.log("✅ [client/firebase/client.js] Firebase was already initialized.");
}

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };

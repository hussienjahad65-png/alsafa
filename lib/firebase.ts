
declare const firebase: any;

const firebaseConfig = {
  apiKey: "AIzaSyDUp28Dp3KbLecICFLgfuyzmMqu9LyR8qA",
  authDomain: "alsafa-1e7ea.firebaseapp.com",
  databaseURL: "https://alsafa-1e7ea-default-rtdb.firebaseio.com",
  projectId: "alsafa-1e7ea",
  storageBucket: "alsafa-1e7ea.firebasestorage.app",
  messagingSenderId: "526010460072",
  appId: "1:526010460072:web:1e539443ef545f31e19f9d",
  measurementId: "G-K9YE7TQ6X9"
};

// Use a more robust check for global firebase object
const getFirebase = () => {
    if (typeof window !== 'undefined' && (window as any).firebase) {
        return (window as any).firebase;
    }
    if (typeof firebase !== 'undefined') {
        return firebase;
    }
    return null;
};

const fb = getFirebase();

if (!fb) {
    console.error("Firebase library not found. Please check script imports in index.html.");
} else if (!fb.apps.length) {
    fb.initializeApp(firebaseConfig);
}

export const app = fb ? fb.app() : null;
export const db = fb ? fb.database() : { ref: () => ({ on: () => {}, off: () => {}, get: () => Promise.resolve({ exists: () => false, val: () => null }), set: () => Promise.resolve() }) };
export const auth = fb ? fb.auth() : { onAuthStateChanged: (cb: any) => cb(null), signInAnonymously: () => Promise.reject("Firebase not loaded") };
export const storage = fb ? fb.storage() : null;

export { fb as firebase };

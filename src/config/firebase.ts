// Importerer funktion til at starte Firebase-appen
import { initializeApp } from 'firebase/app';
// Importerer funktion til at hente Firestore-databasen
import { getFirestore } from 'firebase/firestore';

// Samler dit Firebase-projekts indstillinger i et objekt
const firebaseConfig = {
    // API-nøgle hentet fra .env-filen (Vite kræver VITE_ som prefix)
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    // Domæne til authentication
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    // Dit projekt-id fra Firebase console
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    // Storage bucket (bruges kun hvis du bruger Firebase Storage)
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    // Sender-id til messaging
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    // App-id fra Firebase console
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Starter Firebase med din konfiguration
const app = initializeApp(firebaseConfig);

// Eksporterer databasen, så den kan bruges i dine stores
export const db = getFirestore(app);
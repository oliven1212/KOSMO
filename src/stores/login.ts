import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import type { RouteLocationRaw } from 'vue-router';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/config/firebase';
import type { User } from '@/types/databaseTypes';

// Login for both students and teachers. They log in the same way, only where they are sent afterwards differs
export const useLoginStore = defineStore('login', () => {

    const router = useRouter();

    const loggedIn = ref<boolean>(Boolean(localStorage.getItem('loggedIn')));
    const currentUser = ref<User | null>(null);
    const loginError = ref<string | null>(null);

    // Turns a Firebase error into a Danish message the user can understand
    function errorMessage(error: unknown): string {
        if (error instanceof FirebaseError && error.code === 'auth/invalid-credential') {
            return 'Forkert email eller adgangskode.';
        }
        if (error instanceof FirebaseError && error.code === 'auth/too-many-requests') {
            return 'For mange forsøg. Vent lidt og prøv igen.';
        }

        return 'Noget gik galt. Prøv igen.';
    }

    // Logs in with Firebase, loads the user's document into currentUser and sends them to redirectTo
    async function login(email: string, password: string, redirectTo: RouteLocationRaw): Promise<void> {
        loginError.value = null;

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            // personalData is keyed by the Auth uid, and holds the username that users is keyed by
            const person = await getDoc(doc(db, 'personalData', user.uid));
            const username = person.data()?.username as string | undefined;
            const snapshot = username ? await getDoc(doc(db, 'users', username)) : null;

            if (!snapshot?.exists()) {
                loginError.value = 'Brugeren findes ikke i databasen.';

                return;
            }

            currentUser.value = { id: snapshot.id, ...snapshot.data() as Omit<User, 'id'> };
        } catch (error) {
            loginError.value = errorMessage(error);

            return;
        }

        loggedIn.value = true;
        localStorage.setItem('loggedIn', String(loggedIn.value));
        await router.push(redirectTo);
    }

    // Logs out of Firebase and forgets the current user
    async function signOut(): Promise<void> {
        localStorage.removeItem('loggedIn');
        loggedIn.value = false;
        currentUser.value = null;
        await firebaseSignOut(auth);
    }

    return { loggedIn, currentUser, loginError, login, signOut };

});

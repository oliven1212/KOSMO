import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import type { User } from '@/types';

// Teacher login, kept apart from the student login store
export const useTeacherAuthStore = defineStore('teacherAuth', () => {

    const router = useRouter();

    const currentUser = ref<User | null>(null);
    const loginError = ref<string | null>(null);

    // Turns a Firebase error into a Danish message the teacher can understand
    function errorMessage(error: unknown): string {
        if (error instanceof FirebaseError && error.code === 'auth/invalid-credential') {
            return 'Forkert email eller adgangskode.';
        }
        if (error instanceof FirebaseError && error.code === 'auth/too-many-requests') {
            return 'For mange forsøg. Vent lidt og prøv igen.';
        }

        return 'Noget gik galt. Prøv igen.';
    }

    // Logs in with Firebase, loads the user's document into currentUser and goes to the teacher menu
    async function login(email: string, password: string): Promise<void> {
        loginError.value = null;

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            const snapshot = await getDoc(doc(db, 'users', user.uid));

            if (!snapshot.exists()) {
                loginError.value = 'Brugeren findes ikke i databasen.';

                return;
            }

            currentUser.value = { id: snapshot.id, ...snapshot.data() as Omit<User, 'id'> };
        } catch (error) {
            loginError.value = errorMessage(error);

            return;
        }

        await router.push({ name: 'teacher-menu' });
    }

    return { currentUser, loginError, login };

});

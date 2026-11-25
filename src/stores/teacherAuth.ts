import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

// Teacher login, kept apart from the student login store.
// No real authentication yet (Firebase comes later), so any email and password are accepted.
export const useTeacherAuthStore = defineStore('teacherAuth', () => {

    const router = useRouter();

    const email = ref<string | null>(null);

    // Remembers the teacher's email and goes to the teacher menu
    async function login(Email: string, password: string): Promise<void> {
        email.value = Email;
        await router.push({ name: 'teacher-menu' });
    }

    return { email, login };

});

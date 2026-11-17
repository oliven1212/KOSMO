import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';


export const useLoginStore = defineStore('login', () => {
    
    const router = useRouter();


    const loggedIn = ref<boolean>(false);

    loggedIn.value = Boolean(localStorage.getItem('loggedIn'));

    async function login(): Promise<void> {
        loggedIn.value = true;
        localStorage.setItem('loggedIn', String(loggedIn.value));
        await router.push({ name: 'homepage' });
    }

    function signOut(): void {
        localStorage.removeItem('loggedIn');
        loggedIn.value = false;
    }

    return { loggedIn, login, signOut };

});


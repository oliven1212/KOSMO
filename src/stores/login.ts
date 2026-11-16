import { ref } from 'vue';
import { defineStore } from 'pinia';


export const useLoginStore = defineStore('login', () => {
    
    const loggedIn = ref<boolean>(false);

    loggedIn.value = Boolean(localStorage.getItem('loggedIn'));

    function login(): void {
        loggedIn.value = true;
        localStorage.setItem('loggedIn', String(loggedIn.value));
    }

    return { loggedIn, login };

});


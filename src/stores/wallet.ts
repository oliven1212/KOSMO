import { ref } from 'vue';
import { defineStore } from 'pinia';


export const useWalletStore = defineStore('wallet', () => {

    const wallet = ref<number>(300);

    function add(value: number): number {
        wallet.value += value;
        
        return wallet.value;
    }

    function subtract(value: number): number {
        wallet.value -= value;

        return wallet.value;
    }

    return { wallet, add, subtract };
});


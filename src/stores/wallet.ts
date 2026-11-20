import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useAchievementStore } from './achievements';


export const useWalletStore = defineStore('wallet', () => {

    const achievementStore = useAchievementStore();
    const wallet = ref<number>(300);

    function add(value: number): number {
        wallet.value += value;

        if (wallet.value >= 500) {
            achievementStore.unlock('piggyBank');
        }

        return wallet.value;
    }

    function subtract(value: number): number {
        wallet.value -= value;

        return wallet.value;
    }

    return { wallet, add, subtract };
});


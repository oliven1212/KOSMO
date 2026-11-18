import { ref } from 'vue';
import { defineStore } from 'pinia';


export const useXpStore = defineStore('xp', () => {

    const xpRequirementsBase = 100;
    const totalXp = ref<number>(0);

    //The current level
    function currentLevel(): number {
        return Math.floor(Math.sqrt(totalXp.value / xpRequirementsBase)) + 1;
    }

    //How much xp does the next level require
    function xpToNextLevel(): number {
        return xpRequirementsBase * (2 * currentLevel() - 1);
    }
    
    //How much xp you have in the current level
    function xpInCurrentLevel(): number {
        return totalXp.value - xpRequirementsBase * (currentLevel() - 1) ** 2;
    }

    //Add xp to the total which determines the level
    function addXp(value: number): void {
        totalXp.value += value;
    }

    return { totalXp, currentLevel, xpToNextLevel, xpInCurrentLevel, addXp };
});


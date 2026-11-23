import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { achievements, type AchievementId } from '@/data/achievements';

export const useAchievementStore = defineStore('achievements', () => {

    const unlocked = ref<AchievementId[]>([]);

    // Hvor langt man er nået med dem, der skal ske flere gange, fx 1 af 2 køb
    const progress = ref<Partial<Record<AchievementId, number>>>({});

    const unlockedCount = computed<number>(() => unlocked.value.length);

    function isUnlocked(id: AchievementId): boolean {
        return unlocked.value.includes(id);
    }

    // Gør ingenting, hvis den allerede er låst op, så den må gerne kaldes flere gange
    function unlock(id: AchievementId): void {
        if (isUnlocked(id)) {
            return;
        }

        unlocked.value.push(id);
    }

    // Tæller op og låser op, når goal er nået
    function addProgress(id: AchievementId, amount = 1): void {
        const count = (progress.value[id] ?? 0) + amount;
        
        progress.value[id] = count;

        const goal = achievements.find(achievement => achievement.id === id)?.goal ?? 1;

        if (count >= goal) {
            unlock(id);
        }
    }

    // Til "i træk": et forkert svar starter forfra
    function resetProgress(id: AchievementId): void {
        progress.value[id] = 0;
    }

    return {
        unlocked,
        progress,
        unlockedCount,
        isUnlocked,
        unlock,
        addProgress,
        resetProgress,
    };
});

import { computed, type ComputedRef } from 'vue';
import { storeToRefs } from 'pinia';
import { useAchievementStore } from '@/stores/achievements';
import { achievements, type AchievementId } from '@/content/achievements';

// Et kort i listen: id til :key + de props AchievementCard skal have
export interface AchievementCardData {
    id: AchievementId;
    props: {
        title: string;
        description: string;
        unlocked: boolean;
    };
}

// Det useAchievements() giver tilbage
export interface UseAchievements {
    cards: ComputedRef<AchievementCardData[]>;
    unlockedCount: ComputedRef<number>;
    total: number;
}

export function useAchievements(): UseAchievements {
    const achievementStore = useAchievementStore();
    const { unlockedCount } = storeToRefs(achievementStore);

    const cards = computed<AchievementCardData[]>(() => {
        return achievements.map(achievement => ({
            id: achievement.id,
            props: {
                title: achievement.title,
                description: achievement.description,
                unlocked: achievementStore.isUnlocked(achievement.id),
            },
        }));
    });

    return {
        cards,
        unlockedCount,
        total: achievements.length,
    };
}

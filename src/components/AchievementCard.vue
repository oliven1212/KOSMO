<script setup lang="ts">
import { Achievements, LockIcon } from '@/components/icons';

defineProps<{
    title: string;
    description: string;
    unlocked?: boolean;   // opnået = grøn med pokal, ellers grå med lås
}>();

</script>

<template>
    <div class="achievementCard" :class="{ 'achievementCard--unlocked': unlocked }">
        <span class="achievementCard__icon">
            <Achievements v-if="unlocked" class="achievementCard__symbol" />
            <LockIcon v-else class="achievementCard__symbol" />
        </span>
        <div>
            <h3 class="achievementCard__title">{{ title }}</h3>
            <p class="achievementCard__description">{{ description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/colors' as c;

.achievementCard {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 12px;
    background-color: c.$modalDark;
    color: c.$secondary;

    &--unlocked {
        background-color: c.$achievementUnlocked;
    }

    &__icon {
        flex-shrink: 0;   // cirklen bliver ikke klemt, når teksten er lang
        display: grid;
        place-items: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: c.$achievementLocked;
    }

    &--unlocked &__icon {
        background-color: c.$achievementTrophy;
    }

    &__symbol {
        width: 55%;
        height: auto;
    }

    &__title {
        margin: 0;
        font-size: 14px;
        font-weight: 700;
    }

    &__description {
        margin: 0;
        font-size: 12px;
    }
}
</style>
